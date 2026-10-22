-- Run this in the Supabase SQL Editor to repair app API grants and enable
-- the public leaderboard. RLS still restricts authenticated rows to their owner.

GRANT USAGE ON SCHEMA public TO anon, authenticated;

CREATE TABLE IF NOT EXISTS public.quiz_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  topic_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  total_questions INTEGER DEFAULT 1,
  passed BOOLEAN DEFAULT FALSE,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, topic_id, lesson_id)
);
ALTER TABLE public.quiz_progress ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.profiles FROM PUBLIC, anon;
REVOKE SELECT (id, name, username, avatar, xp, streak, level)
  ON TABLE public.profiles FROM anon;
GRANT SELECT, INSERT, UPDATE ON TABLE public.profiles TO authenticated;

DROP POLICY IF EXISTS "profiles_select_policy" ON public.profiles;
CREATE POLICY "profiles_select_policy"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "profiles_insert_policy" ON public.profiles;
CREATE POLICY "profiles_insert_policy"
  ON public.profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "profiles_update_policy" ON public.profiles;
CREATE POLICY "profiles_update_policy"
  ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE OR REPLACE VIEW public.leaderboard_profiles
WITH (security_invoker = false)
AS
  SELECT id, name, username, avatar, xp, streak, level
  FROM public.profiles;

REVOKE ALL ON TABLE public.leaderboard_profiles FROM PUBLIC;
GRANT SELECT ON TABLE public.leaderboard_profiles TO anon, authenticated;

CREATE OR REPLACE VIEW public.leaderboard_badges
WITH (security_invoker = false)
AS
  SELECT user_id, badge_id, badge_name, badge_icon, unlocked_at
  FROM public.achievements;
REVOKE ALL ON TABLE public.leaderboard_badges FROM PUBLIC;
GRANT SELECT ON TABLE public.leaderboard_badges TO authenticated;

GRANT SELECT, INSERT, UPDATE ON TABLE public.lesson_progress TO authenticated;
DROP POLICY IF EXISTS "lesson_progress_select_policy" ON public.lesson_progress;
CREATE POLICY "lesson_progress_select_policy"
  ON public.lesson_progress FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "lesson_progress_insert_policy" ON public.lesson_progress;
CREATE POLICY "lesson_progress_insert_policy"
  ON public.lesson_progress FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "lesson_progress_update_policy" ON public.lesson_progress;
CREATE POLICY "lesson_progress_update_policy"
  ON public.lesson_progress FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

GRANT SELECT, INSERT, UPDATE ON TABLE public.quiz_results TO authenticated;
DROP POLICY IF EXISTS "quiz_results_select_policy" ON public.quiz_results;
CREATE POLICY "quiz_results_select_policy"
  ON public.quiz_results FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "quiz_results_insert_policy" ON public.quiz_results;
CREATE POLICY "quiz_results_insert_policy"
  ON public.quiz_results FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "quiz_results_update_policy" ON public.quiz_results;
CREATE POLICY "quiz_results_update_policy"
  ON public.quiz_results FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

GRANT SELECT, INSERT, UPDATE ON TABLE public.quiz_progress TO authenticated;
DROP POLICY IF EXISTS "quiz_progress_select_policy" ON public.quiz_progress;
CREATE POLICY "quiz_progress_select_policy"
  ON public.quiz_progress FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "quiz_progress_insert_policy" ON public.quiz_progress;
CREATE POLICY "quiz_progress_insert_policy"
  ON public.quiz_progress FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "quiz_progress_update_policy" ON public.quiz_progress;
CREATE POLICY "quiz_progress_update_policy"
  ON public.quiz_progress FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

GRANT SELECT, INSERT, UPDATE ON TABLE public.achievements TO authenticated;
DROP POLICY IF EXISTS "achievements_select_policy" ON public.achievements;
CREATE POLICY "achievements_select_policy"
  ON public.achievements FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "achievements_insert_policy" ON public.achievements;
CREATE POLICY "achievements_insert_policy"
  ON public.achievements FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "achievements_update_policy" ON public.achievements;
CREATE POLICY "achievements_update_policy"
  ON public.achievements FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

GRANT SELECT, INSERT ON TABLE public.study_history TO authenticated;
DROP POLICY IF EXISTS "study_history_select_policy" ON public.study_history;
CREATE POLICY "study_history_select_policy"
  ON public.study_history FOR SELECT TO authenticated
  USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "study_history_insert_policy" ON public.study_history;
CREATE POLICY "study_history_insert_policy"
  ON public.study_history FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

NOTIFY pgrst, 'reload schema';
