-- Run in the Supabase SQL Editor for an existing project.
-- Restrict profile access and prevent client accounts from changing their role.
-- Assign administrator roles only from the SQL Editor or a trusted server, for example:
-- UPDATE public.profiles SET role = 'admin' WHERE id = '<auth-user-uuid>'::uuid;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.profiles FROM PUBLIC, anon;
REVOKE INSERT, UPDATE ON TABLE public.profiles FROM authenticated;
GRANT SELECT ON TABLE public.profiles TO authenticated;
GRANT INSERT (id, name, username, avatar, xp, streak, level)
  ON TABLE public.profiles TO authenticated;
GRANT UPDATE (id, name, username, avatar, xp, streak, level, last_visit, confidence_scores, updated_at)
  ON TABLE public.profiles TO authenticated;

DROP POLICY IF EXISTS "profiles_select_policy" ON public.profiles;
CREATE POLICY "profiles_select_policy"
  ON public.profiles FOR SELECT TO authenticated
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "profiles_insert_policy" ON public.profiles;
CREATE POLICY "profiles_insert_policy"
  ON public.profiles FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "profiles_update_policy" ON public.profiles;
CREATE POLICY "profiles_update_policy"
  ON public.profiles FOR UPDATE TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE OR REPLACE FUNCTION public.admin_fetch_stats()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  result jsonb;
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  ) THEN
    RAISE EXCEPTION 'Admin access required' USING ERRCODE = '42501';
  END IF;

  SELECT jsonb_build_object(
    'totalStudents', (SELECT count(*)::integer FROM public.profiles),
    'totalLessonsDone', (
      SELECT count(*)::integer
      FROM public.lesson_progress
      WHERE completed IS TRUE
    ),
    'totalQuizzes', (SELECT count(*)::integer FROM public.quiz_results),
    'passRate', COALESCE((
      SELECT round(100.0 * count(*) FILTER (WHERE passed IS TRUE) / NULLIF(count(*), 0))::integer
      FROM public.quiz_results
    ), 0),
    'totalXP', (SELECT COALESCE(sum(xp), 0)::integer FROM public.profiles),
    'avgXP', (SELECT COALESCE(round(avg(xp)), 0)::integer FROM public.profiles),
    'students', COALESCE((
      SELECT jsonb_agg(
        jsonb_build_object(
          'id', id,
          'name', name,
          'username', username,
          'xp', xp,
          'level', level,
          'streak', streak,
          'role', role,
          'created_at', created_at
        ) ORDER BY created_at
      )
      FROM public.profiles
    ), '[]'::jsonb)
  )
  INTO result;

  RETURN result;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_fetch_stats() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.admin_fetch_stats() TO authenticated;

NOTIFY pgrst, 'reload schema';
