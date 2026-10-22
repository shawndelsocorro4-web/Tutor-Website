-- ===================================================================
-- KFL LEARNING HUB — COMPLETE SUPABASE DATABASE SCHEMA
-- ===================================================================

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL,
  username TEXT UNIQUE NOT NULL,
  avatar TEXT DEFAULT '👨‍💻',
  role TEXT DEFAULT 'student',
  xp INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 1,
  level INTEGER DEFAULT 1,
  last_visit DATE DEFAULT CURRENT_DATE,
  confidence_scores JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. LESSON PROGRESS TABLE
CREATE TABLE IF NOT EXISTS public.lesson_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  topic_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  time_spent INTEGER DEFAULT 0,
  practice_completed BOOLEAN DEFAULT FALSE,
  confidence TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, topic_id, lesson_id)
);

-- 3. QUIZ RESULTS TABLE
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  topic_id TEXT NOT NULL,
  lesson_id TEXT NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER DEFAULT 1,
  attempts INTEGER DEFAULT 1,
  passed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. CURRENT QUIZ ANSWERS (one resumable record per user and lesson)
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

-- 5. ACHIEVEMENTS TABLE
CREATE TABLE IF NOT EXISTS public.achievements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  badge_id TEXT NOT NULL,
  badge_name TEXT NOT NULL,
  badge_icon TEXT NOT NULL,
  unlocked_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, badge_id)
);

-- 6. STUDY HISTORY TABLE
CREATE TABLE IF NOT EXISTS public.study_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  topic_id TEXT,
  lesson_id TEXT,
  action TEXT NOT NULL,
  details TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. ENABLE ROW LEVEL SECURITY
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_history ENABLE ROW LEVEL SECURITY;

-- 8. ROW LEVEL SECURITY POLICIES

-- Policies for public.profiles
DROP POLICY IF EXISTS "profiles_select_policy" ON public.profiles;
CREATE POLICY "profiles_select_policy"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (true);

-- Keep profile records private to authenticated users; expose only leaderboard fields publicly.
GRANT USAGE ON SCHEMA public TO anon, authenticated;
REVOKE ALL ON TABLE public.profiles FROM PUBLIC, anon;
REVOKE SELECT (id, name, username, avatar, xp, streak, level)
  ON TABLE public.profiles FROM anon;
GRANT SELECT ON TABLE public.profiles TO authenticated;
GRANT INSERT, UPDATE ON TABLE public.profiles TO authenticated;

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
NOTIFY pgrst, 'reload schema';

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

-- Policies for public.lesson_progress
DROP POLICY IF EXISTS "lesson_progress_select_policy" ON public.lesson_progress;
CREATE POLICY "lesson_progress_select_policy"
  ON public.lesson_progress
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "lesson_progress_insert_policy" ON public.lesson_progress;
CREATE POLICY "lesson_progress_insert_policy"
  ON public.lesson_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "lesson_progress_update_policy" ON public.lesson_progress;
CREATE POLICY "lesson_progress_update_policy"
  ON public.lesson_progress
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "lesson_progress_delete_policy" ON public.lesson_progress;
CREATE POLICY "lesson_progress_delete_policy"
  ON public.lesson_progress
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for public.quiz_results
DROP POLICY IF EXISTS "quiz_results_select_policy" ON public.quiz_results;
CREATE POLICY "quiz_results_select_policy"
  ON public.quiz_results
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "quiz_results_insert_policy" ON public.quiz_results;
CREATE POLICY "quiz_results_insert_policy"
  ON public.quiz_results
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "quiz_results_update_policy" ON public.quiz_results;
CREATE POLICY "quiz_results_update_policy"
  ON public.quiz_results
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "quiz_results_delete_policy" ON public.quiz_results;
CREATE POLICY "quiz_results_delete_policy"
  ON public.quiz_results
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for public.quiz_progress
GRANT SELECT, INSERT, UPDATE ON TABLE public.quiz_progress TO authenticated;
DROP POLICY IF EXISTS "quiz_progress_select_policy" ON public.quiz_progress;
CREATE POLICY "quiz_progress_select_policy"
  ON public.quiz_progress
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "quiz_progress_insert_policy" ON public.quiz_progress;
CREATE POLICY "quiz_progress_insert_policy"
  ON public.quiz_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "quiz_progress_update_policy" ON public.quiz_progress;
CREATE POLICY "quiz_progress_update_policy"
  ON public.quiz_progress
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policies for public.achievements
DROP POLICY IF EXISTS "achievements_select_policy" ON public.achievements;
CREATE POLICY "achievements_select_policy"
  ON public.achievements
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "achievements_insert_policy" ON public.achievements;
CREATE POLICY "achievements_insert_policy"
  ON public.achievements
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "achievements_update_policy" ON public.achievements;
CREATE POLICY "achievements_update_policy"
  ON public.achievements
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policies for public.study_history
DROP POLICY IF EXISTS "study_history_select_policy" ON public.study_history;
CREATE POLICY "study_history_select_policy"
  ON public.study_history
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "study_history_insert_policy" ON public.study_history;
CREATE POLICY "study_history_insert_policy"
  ON public.study_history
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- REST API table privileges required by the app; row access remains constrained by RLS.
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.lesson_progress TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.quiz_results TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.achievements TO authenticated;
GRANT SELECT, INSERT ON TABLE public.study_history TO authenticated;

-- 8. AUTOMATIC PROFILE TRIGGER ON SIGNUP
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, name, username, avatar)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1) || '_' || substr(NEW.id::text, 1, 4)),
    COALESCE(NEW.raw_user_meta_data->>'avatar', '👨‍💻')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- 9. PERFORMANCE INDEXES
CREATE INDEX IF NOT EXISTS idx_profiles_xp ON public.profiles (xp DESC);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_user ON public.lesson_progress (user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_user ON public.quiz_results (user_id);
CREATE INDEX IF NOT EXISTS idx_achievements_user ON public.achievements (user_id);
CREATE INDEX IF NOT EXISTS idx_study_history_user ON public.study_history (user_id);

-- ===================================================================
-- 10. SPREADSHEET TASK LOGS TABLE
-- Tracks every answer attempt for the IT Team Spreadsheet Tasks exam.
-- ===================================================================
CREATE TABLE IF NOT EXISTS public.spreadsheet_task_logs (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id       UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  task_id       INTEGER NOT NULL,
  task_title    TEXT NOT NULL,
  app           TEXT NOT NULL,          -- 'excel' | 'sheets'
  difficulty    TEXT NOT NULL,          -- 'easy' | 'medium' | 'hard'
  points        INTEGER NOT NULL,
  selected_idx  INTEGER NOT NULL,       -- index of the option the user chose
  correct_idx   INTEGER NOT NULL,       -- index of the correct option
  passed        BOOLEAN NOT NULL,
  hint_used     BOOLEAN DEFAULT FALSE,
  attempt       INTEGER DEFAULT 1,      -- increments on retry
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- 11. SPREADSHEET TASK PROGRESS TABLE
-- One row per user per task — stores best result and total attempts.
CREATE TABLE IF NOT EXISTS public.spreadsheet_task_progress (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id       UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  task_id       INTEGER NOT NULL,
  task_title    TEXT NOT NULL,
  app           TEXT NOT NULL,
  difficulty    TEXT NOT NULL,
  points_earned INTEGER DEFAULT 0,
  passed        BOOLEAN DEFAULT FALSE,
  attempts      INTEGER DEFAULT 0,
  hint_used     BOOLEAN DEFAULT FALSE,
  first_passed_at TIMESTAMPTZ,
  last_attempt_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, task_id)
);

-- RLS for spreadsheet_task_logs
ALTER TABLE public.spreadsheet_task_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "st_logs_select" ON public.spreadsheet_task_logs;
CREATE POLICY "st_logs_select"
  ON public.spreadsheet_task_logs FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "st_logs_insert" ON public.spreadsheet_task_logs;
CREATE POLICY "st_logs_insert"
  ON public.spreadsheet_task_logs FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

-- Admin can read all logs (for the Admin Hub)
DROP POLICY IF EXISTS "st_logs_admin_select" ON public.spreadsheet_task_logs;
CREATE POLICY "st_logs_admin_select"
  ON public.spreadsheet_task_logs FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- RLS for spreadsheet_task_progress
ALTER TABLE public.spreadsheet_task_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "st_progress_select" ON public.spreadsheet_task_progress;
CREATE POLICY "st_progress_select"
  ON public.spreadsheet_task_progress FOR SELECT
  TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "st_progress_insert" ON public.spreadsheet_task_progress;
CREATE POLICY "st_progress_insert"
  ON public.spreadsheet_task_progress FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "st_progress_update" ON public.spreadsheet_task_progress;
CREATE POLICY "st_progress_update"
  ON public.spreadsheet_task_progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Admin can read all progress
DROP POLICY IF EXISTS "st_progress_admin_select" ON public.spreadsheet_task_progress;
CREATE POLICY "st_progress_admin_select"
  ON public.spreadsheet_task_progress FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Indexes
CREATE INDEX IF NOT EXISTS idx_st_logs_user      ON public.spreadsheet_task_logs (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_st_progress_user  ON public.spreadsheet_task_progress (user_id);

NOTIFY pgrst, 'reload schema';
