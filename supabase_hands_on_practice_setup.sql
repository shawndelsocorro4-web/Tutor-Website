-- Run in the Supabase SQL Editor to enable saved lesson practice attempts.
-- Safe to run on an existing project; the app can then record new attempts.

CREATE TABLE IF NOT EXISTS public.hands_on_practice_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  app TEXT NOT NULL CHECK (app IN ('excel', 'sheets')),
  exercise_title TEXT NOT NULL,
  submitted_answer TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.hands_on_practice_attempts
  ADD COLUMN IF NOT EXISTS step_index INTEGER;

ALTER TABLE public.hands_on_practice_attempts ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.hands_on_practice_attempts FROM PUBLIC, anon;
GRANT SELECT, INSERT ON TABLE public.hands_on_practice_attempts TO authenticated;

DROP POLICY IF EXISTS "hands_on_attempts_user_select" ON public.hands_on_practice_attempts;
CREATE POLICY "hands_on_attempts_user_select"
  ON public.hands_on_practice_attempts FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "hands_on_attempts_user_insert" ON public.hands_on_practice_attempts;
CREATE POLICY "hands_on_attempts_user_insert"
  ON public.hands_on_practice_attempts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "hands_on_attempts_admin_select" ON public.hands_on_practice_attempts;
CREATE POLICY "hands_on_attempts_admin_select"
  ON public.hands_on_practice_attempts FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE INDEX IF NOT EXISTS idx_hands_on_attempts_created
  ON public.hands_on_practice_attempts (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_hands_on_attempts_user_created
  ON public.hands_on_practice_attempts (user_id, created_at DESC);

CREATE OR REPLACE FUNCTION public.admin_fetch_hands_on_attempts()
RETURNS TABLE (
  id UUID,
  learner_name TEXT,
  learner_username TEXT,
  lesson_id TEXT,
  app TEXT,
  exercise_title TEXT,
  submitted_answer TEXT,
  is_correct BOOLEAN,
  created_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM public.profiles AS admin_profile
    WHERE admin_profile.id = auth.uid()
      AND admin_profile.role = 'admin'
  ) THEN
    RAISE EXCEPTION 'Admin access required' USING ERRCODE = '42501';
  END IF;

  RETURN QUERY
  SELECT
    attempt.id,
    COALESCE(profile.name, 'Learner'),
    profile.username,
    attempt.lesson_id,
    attempt.app,
    attempt.exercise_title,
    attempt.submitted_answer,
    attempt.is_correct,
    attempt.created_at
  FROM public.hands_on_practice_attempts AS attempt
  LEFT JOIN public.profiles AS profile ON profile.id = attempt.user_id
  ORDER BY attempt.created_at DESC
  LIMIT 200;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_fetch_hands_on_attempts() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.admin_fetch_hands_on_attempts() TO authenticated;

NOTIFY pgrst, 'reload schema';
