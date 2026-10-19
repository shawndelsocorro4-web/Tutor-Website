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

-- 4. ACHIEVEMENTS TABLE
CREATE TABLE IF NOT EXISTS public.achievements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  badge_id TEXT NOT NULL,
  badge_name TEXT NOT NULL,
  badge_icon TEXT NOT NULL,
  unlocked_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, badge_id)
);

-- 5. STUDY HISTORY TABLE
CREATE TABLE IF NOT EXISTS public.study_history (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  topic_id TEXT,
  lesson_id TEXT,
  action TEXT NOT NULL,
  details TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. ENABLE ROW LEVEL SECURITY
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_history ENABLE ROW LEVEL SECURITY;

-- 7. ROW LEVEL SECURITY POLICIES

-- Policies for public.profiles
DROP POLICY IF EXISTS "profiles_select_policy" ON public.profiles;
CREATE POLICY "profiles_select_policy"
  ON public.profiles
  FOR SELECT
  TO authenticated, anon
  USING (true);

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
