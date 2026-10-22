/* ===================================================================
   auth.js — KFL Learning Hub Supabase Client & Authentication Layer
   =================================================================== */

const SUPABASE_CONFIG = {
  url: 'https://mbqgxfhvtbkeutinpfbr.supabase.co',
  // Publishable browser key: it is expected to be visible. Never put a service_role key here.
  publishableKey: 'sb_publishable_L1oofLmbuY_WBUXG-4Df2Q_-i_q7aLX'
};

// Initialize Supabase Client
let sbClient = null;
let currentUser = null;
let currentProfile = null;
let cloudSyncStatus = 'offline'; // 'online', 'syncing', 'offline', 'error'
let passwordSignInInProgress = false;

function initSupabase() {
  try {
    if (window.supabase && typeof window.supabase.createClient === 'function') {
      sbClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.publishableKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      });
      console.log('✅ Supabase Client initialized successfully');
      updateCloudSyncStatus('online', 'Cloud Ready');
      return true;
    } else {
      console.warn('⚠️ Supabase library not loaded yet or unavailable. Operating in local mode.');
      updateCloudSyncStatus('offline', 'Local / Offline');
      return false;
    }
  } catch (err) {
    console.error('❌ Supabase init error:', err);
    updateCloudSyncStatus('error', 'Sync Error');
    return false;
  }
}

// UI Status Badge updater
function updateCloudSyncStatus(status, label) {
  cloudSyncStatus = status;
  const statusEl = document.getElementById('cloudSyncBadge');
  if (!statusEl) return;
  
  statusEl.className = 'cloud-sync-badge ' + status;
  statusEl.innerHTML = `
    <span class="sync-dot"></span>
    <span class="sync-label">${label || (status === 'online' ? 'Cloud Connected' : status === 'syncing' ? 'Syncing...' : 'Local Mode')}</span>
  `;
}

// ===== AUTH METHODS =====

// 1. Sign Up
async function authSignUp(email, password, name, username, avatar = '👨‍💻') {
  if (!sbClient) throw new Error('Supabase client is not ready.');
  updateCloudSyncStatus('syncing', 'Creating account...');
  
  const { data, error } = await sbClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: name || 'Learner',
        username: username || ('user_' + Math.floor(Math.random() * 10000)),
        avatar: avatar || '👨‍💻'
      }
    }
  });

  if (error) {
    updateCloudSyncStatus('online', 'Cloud Ready');
    throw error;
  }

  // If user signed up and session exists immediately
  if (data?.user) {
    currentUser = data.user;
    await syncProfileFromCloud(data.user.id, { name, username, avatar });
  }

  updateCloudSyncStatus('online', 'Cloud Connected');
  return data;
}

// 2. Sign In
async function authSignIn(email, password) {
  if (!sbClient) throw new Error('Supabase client is not ready.');
  updateCloudSyncStatus('syncing', 'Signing in...');
  passwordSignInInProgress = true;

  try {
    const { data, error } = await sbClient.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      updateCloudSyncStatus('online', 'Cloud Ready');
      throw error;
    }

    if (data?.user) {
      currentUser = data.user;
      await loadFullUserData(data.user.id);
    }

    updateCloudSyncStatus('online', 'Cloud Connected');
    return data;
  } finally {
    passwordSignInInProgress = false;
  }
}

// 3. Sign Out
async function authSignOut() {
  if (!sbClient) throw new Error('Supabase client is not ready. Please refresh and try again.');
  updateCloudSyncStatus('syncing', 'Signing out...');
  try {
    const { error } = await sbClient.auth.signOut();
    if (error) throw error;
  } catch (e) {
    updateCloudSyncStatus('error', 'Sign out failed');
    throw e;
  }
  currentUser = null;
  currentProfile = null;
  updateCloudSyncStatus('offline', 'Signed Out');
  
  // Reset app state to guest
  if (typeof resetAppStateToGuest === 'function') {
    resetAppStateToGuest();
  }
}

// 4. Send Password Reset Email
async function authResetPassword(email) {
  if (!sbClient) throw new Error('Supabase client is not ready.');
  const { data, error } = await sbClient.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + window.location.pathname
  });
  if (error) throw error;
  return data;
}

// 5. Update Password
async function authUpdatePassword(newPassword) {
  if (!sbClient) throw new Error('Supabase client is not ready.');
  const { data, error } = await sbClient.auth.updateUser({ password: newPassword });
  if (error) throw error;
  return data;
}

// ===== CLOUD DATA SYNC =====

// Ensure profile row exists and load it
async function syncProfileFromCloud(userId, defaultMeta = {}) {
  if (!sbClient || !userId) return null;

  try {
    const { data, error } = await sbClient
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    if (error) {
      console.warn('Profile fetch note:', error.message);
    }

    if (data) {
      if (currentUser?.id === userId) currentProfile = data;
      return data;
    }

    // If profile doesn't exist yet (e.g. Trigger didn't run), create one
    const newProfile = {
      id: userId,
      name: defaultMeta.name || 'Learner',
      username: defaultMeta.username || ('user_' + Math.floor(Math.random() * 10000)),
      avatar: defaultMeta.avatar || '👨‍💻',
      xp: 0,
      streak: 1,
      level: 1
    };

    const { data: inserted, error: insertError } = await sbClient
      .from('profiles')
      .upsert(newProfile)
      .select()
      .maybeSingle();

    if (insertError) {
      console.warn('Profile upsert note:', insertError.message);
      return newProfile;
    }

    const profile = inserted || newProfile;
    if (currentUser?.id === userId) currentProfile = profile;
    return profile;
  } catch (err) {
    console.warn('syncProfileFromCloud fallback:', err);
    return null;
  }
}

// Save profile updates to Supabase
async function cloudUpdateProfile(updates) {
  if (!sbClient || !currentUser) return false;
  try {
    const { data, error } = await sbClient
      .from('profiles')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', currentUser.id);

    if (error) throw error;
    if (currentProfile) {
      Object.assign(currentProfile, updates);
    }
    if (cloudSyncStatus === 'error') {
      updateCloudSyncStatus('online', 'Cloud Connected');
    }
    return true;
  } catch (e) {
    console.error('cloudUpdateProfile error:', e.message);
    updateCloudSyncStatus('error', 'Profile sync failed');
    return false;
  }
}

// Save Lesson Completion
async function cloudSaveLessonProgress(topicId, lessonId, isCompleted = true, timeSpent = 0, confidence = null) {
  if (!sbClient || !currentUser) return false;
  try {
    const payload = {
      user_id: currentUser.id,
      topic_id: topicId,
      lesson_id: lessonId,
      completed: isCompleted,
      completed_at: isCompleted ? new Date().toISOString() : null,
      time_spent: timeSpent || 60,
      updated_at: new Date().toISOString()
    };
    if (confidence) payload.confidence = confidence;

    const { error } = await sbClient
      .from('lesson_progress')
      .upsert(payload, { onConflict: 'user_id,topic_id,lesson_id' });

    if (error) throw error;

    // Record activity log
    await cloudRecordActivity('completed_lesson', topicId, lessonId, `Completed lesson: ${lessonId}`);
    return true;
  } catch (e) {
    console.warn('cloudSaveLessonProgress error:', e.message);
    return false;
  }
}

// Save Quiz Score
async function cloudSaveQuizResult(topicId, lessonId, score, totalQuestions = 1, passed = false, answers = {}) {
  if (!sbClient || !currentUser) return false;
  try {
    const progressPayload = {
      user_id: currentUser.id,
      topic_id: topicId,
      lesson_id: lessonId,
      score: Math.round(score),
      total_questions: totalQuestions,
      passed: passed,
      answers,
      updated_at: new Date().toISOString()
    };

    const { error: progressError } = await sbClient
      .from('quiz_progress')
      .upsert(progressPayload, { onConflict: 'user_id,topic_id,lesson_id' });
    if (progressError) throw progressError;

    const completed = Object.keys(answers).length >= totalQuestions;
    if (completed) {
      const { error: resultError } = await sbClient
        .from('quiz_results')
        .insert({
          user_id: currentUser.id,
          topic_id: topicId,
          lesson_id: lessonId,
          score: Math.round(score),
          total_questions: totalQuestions,
          passed,
          updated_at: progressPayload.updated_at
        });
      if (resultError) throw resultError;

      await cloudRecordActivity(passed ? 'passed_quiz' : 'attempted_quiz', topicId, lessonId, `Quiz score: ${score}%`);
    }
    return true;
  } catch (e) {
    console.warn('cloudSaveQuizResult error:', e.message);
    return false;
  }
}

// Record Activity (History / Heatmap)
async function cloudRecordActivity(action, topicId = null, lessonId = null, details = null) {
  if (!sbClient || !currentUser) return;
  try {
    await sbClient.from('study_history').insert({
      user_id: currentUser.id,
      topic_id: topicId,
      lesson_id: lessonId,
      action: action,
      details: details,
      created_at: new Date().toISOString()
    });
  } catch (e) {
    // Non-critical, ignore
  }
}

// Save Achievement Unlock
async function cloudAwardAchievement(badgeId, badgeName, badgeIcon) {
  if (!sbClient || !currentUser) return false;
  try {
    const { error } = await sbClient.from('achievements').upsert({
      user_id: currentUser.id,
      badge_id: badgeId,
      badge_name: badgeName,
      badge_icon: badgeIcon,
      unlocked_at: new Date().toISOString()
    }, { onConflict: 'user_id,badge_id' });

    if (!error) {
      await cloudRecordActivity('earned_badge', null, null, `Earned badge: ${badgeName}`);
      return true;
    }
  } catch (e) {
    console.warn('cloudAwardAchievement error:', e.message);
  }
  return false;
}

// Fetch Leaderboard (Public Profile Info)
async function cloudFetchLeaderboard(limit = 20) {
  if (!sbClient) throw new Error('Leaderboard connection is not ready. Please refresh and try again.');

  const { data, error } = await sbClient
    .from('leaderboard_profiles')
    .select('id, name, username, avatar, xp, streak, level')
    .order('xp', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data || [];
}

async function cloudFetchLeaderboardBadges(userId) {
  if (!sbClient) throw new Error('Leaderboard connection is not ready.');
  if (!userId) throw new Error('A valid employee profile is required.');

  const { data, error } = await sbClient
    .from('leaderboard_badges')
    .select('badge_id, badge_name, badge_icon')
    .eq('user_id', userId)
    .order('unlocked_at', { ascending: true });

  if (error) throw error;
  return data || [];
}

function getProfileDisplayName(profile, user = currentUser) {
  const profileName = profile?.name?.trim();
  if (profileName && profileName.toLowerCase() !== 'learner') return profileName;

  const metadataName = user?.user_metadata?.name?.trim();
  if (metadataName) return metadataName;

  const emailName = user?.email?.split('@')[0]?.trim();
  return emailName || profileName || 'Learner';
}

// Fetch Admin Stats through a database function that checks the caller's role.
async function cloudFetchAdminStats() {
  if (!sbClient || !currentUser) return null;
  try {
    const { data, error } = await sbClient.rpc('admin_fetch_stats');
    if (error) throw error;
    return data;
  } catch (e) {
    console.warn('cloudFetchAdminStats error:', e.message);
    return null;
  }
}

async function cloudFetchAdminPracticeAttempts() {
  if (!sbClient || !currentUser) throw new Error('Sign in with an administrator account to view practice attempts.');
  const { data, error } = await sbClient.rpc('admin_fetch_hands_on_attempts');
  if (error) throw error;
  return data || [];
}

// Load all user data and sync with local state
async function loadFullUserData(userId) {
  if (!sbClient || !userId) return;
  updateCloudSyncStatus('syncing', 'Loading your progress...');

  try {
    // 1. Fetch Profile
    const profile = await syncProfileFromCloud(userId);
    if (currentUser?.id !== userId) return;
    const displayName = getProfileDisplayName(profile);
    if (profile && profile.name !== displayName) {
      profile.name = displayName;
      const profileUpdated = await cloudUpdateProfile({ name: displayName });
      if (!profileUpdated) {
        console.warn('Could not sync the account name to the cloud profile.');
      }
    }

    // 2. Fetch Progress
    const { data: progressData, error: progressError } = await sbClient
      .from('lesson_progress')
      .select('*')
      .eq('user_id', userId);
    if (progressError) throw progressError;

    // 3. Fetch Quizzes
    const { data: quizData, error: quizError } = await sbClient
      .from('quiz_results')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: true });
    if (quizError) throw quizError;

    const { data: quizProgressData, error: quizProgressError } = await sbClient
      .from('quiz_progress')
      .select('*')
      .eq('user_id', userId);
    if (quizProgressError) throw quizProgressError;

    // 4. Fetch Achievements
    const { data: badgesData, error: badgesError } = await sbClient
      .from('achievements')
      .select('*')
      .eq('user_id', userId);
    if (badgesError) throw badgesError;

    if (currentUser?.id !== userId) return;

    // Convert into App State format
    const completedMap = {};
    if (progressData) {
      progressData.forEach(item => {
        if (item.completed) completedMap[`${item.topic_id}-${item.lesson_id}`] = true;
      });
    }

    const quizMap = {};
    const quizAnswersMap = {};
    const quizPassedMap = {};
    if (quizData) {
      quizData.forEach(item => {
        quizMap[item.lesson_id] = item.score;
        quizPassedMap[item.lesson_id] = item.passed;
      });
    }
    if (quizProgressData) {
      quizProgressData.forEach(item => {
        quizMap[item.lesson_id] = item.score;
        quizAnswersMap[item.lesson_id] = item.answers || {};
        quizPassedMap[item.lesson_id] = item.passed;
      });
    }

    const badgesMap = {};
    if (badgesData) {
      badgesData.forEach(item => {
        badgesMap[item.badge_id] = true;
      });
    }

    // Merge into app state
    if (typeof applyCloudDataToState === 'function') {
      applyCloudDataToState({
        userId,
        name: displayName,
        username: profile?.username || 'learner',
        avatar: profile?.avatar || '👨‍💻',
        role: profile?.role || 'student',
        xp: profile?.xp || 0,
        streak: profile?.streak || 1,
        level: profile?.level || 1,
        completedLessons: completedMap,
        quizScores: quizMap,
        quizAnswers: quizAnswersMap,
        quizPassed: quizPassedMap,
        achievements: badgesMap,
        confidenceScores: profile?.confidence_scores || {}
      });
    }

    updateCloudSyncStatus('online', 'Cloud Connected');
    if (typeof restoreCurrentSpreadsheetPracticeProgress === 'function') {
      await restoreCurrentSpreadsheetPracticeProgress();
    }
  } catch (err) {
    console.error('loadFullUserData error:', err);
    updateCloudSyncStatus('online', 'Cloud Ready');
  }
}

// Auto-check session on load
window.addEventListener('DOMContentLoaded', async () => {
  const ready = initSupabase();
  if (!ready) return;

  try {
    const { data } = await sbClient.auth.getSession();
    if (data?.session?.user) {
      currentUser = data.session.user;
      console.log('Session restored for:', currentUser.email);
      await loadFullUserData(currentUser.id);
    } else {
      console.log('No active session, continuing as guest/local');
      updateCloudSyncStatus('online', 'Guest (Not Logged In)');
    }

    // Listen for auth state changes
    sbClient.auth.onAuthStateChange(async (event, session) => {
      console.log('Supabase Auth Event:', event);
      if (event === 'SIGNED_IN' && session?.user) {
        currentUser = session.user;
        if (passwordSignInInProgress) return;
        await loadFullUserData(session.user.id);
      } else if (event === 'SIGNED_OUT') {
        currentUser = null;
        currentProfile = null;
        updateCloudSyncStatus('online', 'Guest (Logged Out)');
        if (typeof resetAppStateToGuest === 'function') {
          resetAppStateToGuest();
        }
      }
    });
  } catch (err) {
    console.warn('Session check error:', err);
  }
});
