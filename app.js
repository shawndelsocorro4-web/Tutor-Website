/* ===================================================================
   app.js — KFL Learning Hub Core Application Logic & State Engine
   =================================================================== */

// ===== MULTI-ACCOUNT & STATE MANAGEMENT =====
const DEFAULT_ACCOUNT = {
  id: 'acc_guest',
  name: 'Employee',
  username: 'employee',
  avatar: '👨‍💻',
  role: 'employee',
  currentTopicIdx: 0,
  currentLessonIdx: 0,
  xp: 0,
  streak: 1,
  level: 1,
  completedLessons: {},
  quizScores: {},
  quizAnswers: {},
  quizPassed: {},
  achievements: {},
  confidenceScores: {},
  studyHistory: [],
  lastVisit: null,
};

let accountsData = {
  activeId: 'acc_guest',
  accounts: [{ ...DEFAULT_ACCOUNT }],
};

let selectedCreateAvatar = '👨‍💻';
let selectedEditAvatar = '👨‍💻';
let selectedSignUpAvatar = '👨‍💻';
let editingAccountId = null;
let isAdminAuthenticated = false;

// Current active state
let state = {
  ...DEFAULT_ACCOUNT,
  darkMode: false,
  totalTimeSpent: 0,
  hintsUsed: 0,
};

const TOPIC_COLORS = [
  { bg: '#063B91', light: '#e0edff', text: '#032B6B' }, // Payload CMS
  { bg: '#1e293b', light: '#f1f5f9', text: '#0f172a' }, // GitHub
  { bg: '#ea580c', light: '#ffedd5', text: '#9a3412' }, // HTML
  { bg: '#0284c7', light: '#e0f2fe', text: '#075985' }, // CSS
  { bg: '#d97706', light: '#fef3c7', text: '#92400e' }, // JavaScript
  { bg: '#2563eb', light: '#dbeafe', text: '#1d4ed8' }, // TypeScript
  { bg: '#15803d', light: '#dcfce7', text: '#14532d' }, // Excel
  { bg: '#059669', light: '#d1fae5', text: '#065f46' }, // Google Sheets
  { bg: '#0284c7', light: '#e0f2fe', text: '#0369a1' }, // VS Code
];

// ===== 12 COMPREHENSIVE BADGES / ACHIEVEMENTS =====
const ACHIEVEMENTS_LIST = [
  { id: 'first_step', name: 'First Step', icon: '🚀', desc: 'Completed your very first lesson', xpBonus: 20 },
  { id: 'quiz_whiz', name: 'Quiz Whiz', icon: '🧠', desc: 'Scored 100% on any knowledge check quiz', xpBonus: 25 },
  { id: 'mastery_starter', name: 'Mastery Starter', icon: '⭐', desc: 'Achieved ≥80% passing score on 3 quizzes', xpBonus: 30 },
  { id: 'streak_3', name: 'On Fire', icon: '🔥', desc: 'Maintained a 3-day learning streak', xpBonus: 35 },
  { id: 'streak_7', name: 'Unstoppable', icon: '⚡', desc: 'Maintained a 7-day learning streak', xpBonus: 60 },
  { id: 'speed_learner', name: 'Knowledge Seeker', icon: '📚', desc: 'Completed 5 lessons in the curriculum', xpBonus: 40 },
  { id: 'payload_master', name: 'Payload Pioneer', icon: '📦', desc: 'Mastered Topic 1: Payload CMS', xpBonus: 50 },
  { id: 'git_ninja', name: 'Git & GitHub Pro', icon: '🐙', desc: 'Mastered Topic 2: GitHub & Version Control', xpBonus: 50 },
  { id: 'web_architect', name: 'Web Architect', icon: '🌐', desc: 'Completed both HTML and CSS foundations', xpBonus: 60 },
  { id: 'js_guru', name: 'JavaScript Ninja', icon: '💻', desc: 'Mastered Topic 5: JavaScript programming', xpBonus: 70 },
  { id: 'data_wizard', name: 'Data Wizard', icon: '📊', desc: 'Mastered Excel & Google Sheets workflows', xpBonus: 60 },
  { id: 'kfl_master', name: 'KFL Grand Champion', icon: '👑', desc: 'Completed the entire 9-topic curriculum', xpBonus: 150 },
];

// ===== TUTOR RESPONSES & ANALOGIES =====
const TUTOR_RESPONSES = {
  greeting: [
    "Welcome to KFL Learning Hub! Ready to master tech skills step by step? 🚀",
    "Great to see you! I'm Ollie, your personal tutor. Ask me anything anytime! 🦉",
    "Hello! Every expert was once a beginner. Let's make today count! 🌟",
  ],
  encourage: [
    "You're doing fantastic! Take it one step at a time! 💪",
    "Great effort! Practicing hands-on is the best way to master coding! ⭐",
    "I'm right here with you! If anything is unclear, ask me to explain! 🦉",
    "Super proud of your dedication! Keep going! 🏆",
  ],
  correct: [
    "🎯 Perfect answer! That demonstrates real understanding!",
    "✅ Exactly right! You've grasped this concept solidly!",
    "🌟 Excellent! You're building genuine technical skills!",
    "🏆 Brilliant work! Ready for the next challenge!",
  ],
  incorrect: [
    "🤔 Not quite, but mistakes are where the real learning happens!",
    "💡 Close attempt! Let's examine this from a clearer angle...",
    "📚 Don't worry! Review the explanation and try again — you'll master it!",
    "🔄 Take a breath! Learning to code takes repetition. You've got this! 💪",
  ]
};

const PRACTICE_HINTS = {
  cms: { keywords: ['content','manage','system','website','edit','publish','digital'], hint: "A CMS helps non-programmers edit and publish website content easily.", success: "Great explanation! A CMS decouples content creation from code! 🎉", tip: "Think about words like 'manage', 'publish', 'content'..." },
  'payload-features': { keywords: ['headless','code','typescript','flexible','api','control','open','developer'], hint: "Focus on headless architecture and code-first control.", success: "Spot on! Payload gives developers 100% control with TypeScript! 🔧", tip: "Keywords: 'headless', 'code-first', 'API'..." },
  npx: { keywords: ['run','package','internet','install','temporary','execute','download','tool'], hint: "npx downloads and runs a CLI tool temporarily without installing it permanently.", success: "Exactly right! npx borrows tools without cluttering your machine! 📦", tip: "Think: borrow and run once..." },
  'config-collections': { keywords: ['config','collections','schema','fields','brain','structure','models'], hint: "payload.config.ts configures everything, collections define content types.", success: "Perfect! Collections structure your data, config powers the CMS! 🧠", tip: "Think about schemas and collections..." },
  products: { keywords: ['name','price','number','text','field','upload','image'], hint: "Product collections need title/name, price, image, and description.", success: "Solid collection design! You're thinking like a real database architect! 🛍️", tip: "Include name, price, and description fields..." },
  'admin-panel': { keywords: ['ui','dashboard','visual','editors','non-technical','manage','interface'], hint: "The admin panel is the visual dashboard where content creators edit data.", success: "Exactly! The admin panel is the friendly bridge for editors! 🎛️", tip: "Think visual user interface for content managers..." },
  api: { keywords: ['id','unique','single','one','identifier','specific'], hint: "GET /api/posts/123 queries only the single post with that exact ID.", success: "Correct! The ID is like a fingerprint for a specific document! 🎯", tip: "IDs locate exactly one specific item..." },
  roles: { keywords: ['role','permission','access','admin','user','protect','restrict'], hint: "Roles define what actions (read, write, delete) each user is allowed to do.", success: "Great security mindset! Role-based access protects sensitive data! 🔐", tip: "Think read, create, update, delete permissions..." },
  'git-github': { keywords: ['local','cloud','remote','hosting','tool','version'], hint: "Git is the local tracking software; GitHub is the cloud platform hosting repos.", success: "You got it! Git runs on your laptop; GitHub is in the cloud! 🌥️", tip: "Git = local tool, GitHub = online cloud service..." },
  repo: { keywords: ['folder','project','tracking','files','history','repository'], hint: "A repo is a tracked folder containing all project files and revision history.", success: "Spot on! A repository is your project's digital history vault! 📁", tip: "Think tracked project folder..." }
};

// ===== INITIALIZATION =====
window.addEventListener('DOMContentLoaded', () => {
  loadState();
  initApp();
  checkStreak();
  updateRecommendation();

  // Hide splash after brief load
  setTimeout(() => {
    const splash = document.getElementById('splashScreen');
    if (splash) {
      splash.style.opacity = '0';
      splash.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        splash.classList.add('hidden');
        document.getElementById('app')?.classList.remove('hidden');
      }, 500);
    }
  }, 900);
});

function initApp() {
  updateProfileUI();
  updateNavVisibility();

  buildTopicTree();
  
  const isGuest = !(typeof currentUser !== 'undefined' && currentUser);
  
  if (isGuest) {
    // Guests see leaderboard only
    renderLeaderboard();
    showView('leaderboard');
  } else {
    // Logged-in users see full dashboard
    renderDashboard();
    renderProgress();
    renderTopicsView();
    loadLesson();
    updateSidebarProgress();
    updateXPDisplay();
    applyTopicTheme(state.currentTopicIdx);
    updateRecommendation();
  }
}

function checkStreak() {
  const today = new Date().toDateString();
  const last  = state.lastVisit;
  if (last && last !== today) {
    const diff = Math.floor((new Date(today) - new Date(last)) / 86400000);
    if (diff === 1) {
      state.streak = (state.streak || 1) + 1;
      recordActivity('streak_continued', null, null, `Reached a ${state.streak}-day streak!`);
      if (state.streak >= 3) unlockAchievement('streak_3');
      if (state.streak >= 7) unlockAchievement('streak_7');
    } else if (diff > 1) {
      state.streak = 1;
    }
  }
  state.lastVisit = today;
  saveState();
}

// ===== STATE PERSISTENCE (LOCAL + SUPABASE CLOUD) =====
function loadState() {
  try {
    const raw = localStorage.getItem('kfl_learning_state_v3');
    if (raw) {
      const parsed = JSON.parse(raw);
      state = { ...DEFAULT_ACCOUNT, ...parsed };
    } else {
      const legacy = localStorage.getItem('kfl_accounts_v1') || localStorage.getItem('learnpathState_v2');
      if (legacy) {
        const parsed = JSON.parse(legacy);
        const acc = parsed.accounts ? parsed.accounts[0] : parsed;
        state = { ...DEFAULT_ACCOUNT, ...acc };
      }
    }
  } catch (e) {
    console.warn('Error reading local state:', e);
  }

  state.quizScores = state.quizScores || {};
  state.quizAnswers = state.quizAnswers || {};
  state.quizPassed = state.quizPassed || {};
  Object.entries(state.quizScores).forEach(([lessonId, score]) => {
    if (state.quizPassed[lessonId] === undefined && score >= 80) {
      state.quizPassed[lessonId] = true;
    }
  });

  const topicIndex = Number(state.currentTopicIdx);
  if (!Number.isInteger(topicIndex) || topicIndex >= TOPICS.length || topicIndex < 0) {
    state.currentTopicIdx = TOPICS.length - 1;
    state.currentLessonIdx = 0;
  } else {
    state.currentTopicIdx = topicIndex;
  }
  const lessonIndex = Number(state.currentLessonIdx);
  if (!Number.isInteger(lessonIndex) || lessonIndex >= TOPICS[state.currentTopicIdx].lessons.length || lessonIndex < 0) {
    state.currentLessonIdx = 0;
  } else {
    state.currentLessonIdx = lessonIndex;
  }
}

function saveState({ syncProfile = true } = {}) {
  // 1. Calculate Level
  const calculatedLevel = Math.max(1, Math.floor(state.xp / 100) + 1);
  state.level = calculatedLevel;

  // 2. Persist to LocalStorage for instant cache & offline capability
  try {
    localStorage.setItem('kfl_learning_state_v3', JSON.stringify(state));
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }

  // 3. Sync to Supabase Cloud if user is authenticated
  if (syncProfile && typeof currentUser !== 'undefined' && currentUser && typeof cloudUpdateProfile === 'function') {
    cloudUpdateProfile({
      name: state.name,
      avatar: state.avatar,
      xp: state.xp,
      streak: state.streak,
      level: state.level,
      confidence_scores: state.confidenceScores || {}
    });
  }
}

// Hook called by auth.js when user logs into Supabase
function applyCloudDataToState(cloudData) {
  if (!cloudData) return;
  console.log('🔄 Merging cloud data into state:', cloudData.name);

  state.id = cloudData.userId || state.id;
  state.name = cloudData.name || state.name;
  state.username = cloudData.username || state.username;
  state.avatar = cloudData.avatar || state.avatar;
  state.role = cloudData.role || 'student';
  state.xp = cloudData.xp !== undefined ? cloudData.xp : (state.xp || 0);

  state.streak = cloudData.streak || state.streak || 1;

  state.level = cloudData.level || state.level || 1;

  
  // Merge completed lessons & quizzes
  state.completedLessons = { ...state.completedLessons, ...(cloudData.completedLessons || {}) };
  state.quizScores = { ...state.quizScores, ...(cloudData.quizScores || {}) };
  state.quizAnswers = { ...state.quizAnswers, ...(cloudData.quizAnswers || {}) };
  state.quizPassed = { ...state.quizPassed, ...(cloudData.quizPassed || {}) };
  state.achievements = { ...state.achievements, ...(cloudData.achievements || {}) };
  state.confidenceScores = { ...state.confidenceScores, ...(cloudData.confidenceScores || {}) };

  saveState();
  updateProfileUI();
  updateNavVisibility();
  renderDashboard();
  renderProgress();
  updateSidebarProgress();
  updateRecommendation();
  buildTopicTree();
  loadLesson();
}

function resetAppStateToGuest() {
  state = { ...DEFAULT_ACCOUNT };
  saveState();
  updateProfileUI();
  updateNavVisibility();
  renderDashboard();
  renderProgress();
  updateSidebarProgress();
  updateRecommendation();
  buildTopicTree();
  renderLeaderboard();
}

// Show/hide nav items based on auth state and role
function updateNavVisibility() {
  const isLoggedIn = typeof currentUser !== 'undefined' && currentUser;
  const isAdmin = isLoggedIn && state.role === 'admin';
  const isGuest = !isLoggedIn; // Guest mode = not logged in

  // Dashboard: hidden for guests
  const navDashboard = document.querySelector('[data-view="dashboard"]');
  if (navDashboard) navDashboard.style.display = isGuest ? 'none' : '';

  // Current Lesson: hidden for guests
  const navLesson = document.querySelector('[data-view="lesson"]');
  if (navLesson) navLesson.style.display = isGuest ? 'none' : '';

  // Progress: hidden for guests
  const navProgress = document.getElementById('navProgress');
  if (navProgress) navProgress.style.display = isGuest ? 'none' : '';

  // Topics: hidden for guests
  const navTopics = document.querySelector('[data-view="topics"]');
  if (navTopics) navTopics.style.display = isGuest ? 'none' : '';

  // Achievements: hidden for guests
  const navAchievements = document.querySelector('[data-view="achievements"]');
  if (navAchievements) navAchievements.style.display = isGuest ? 'none' : '';

  // Profile: hidden for guests
  const navProfile = document.querySelector('[data-view="profile"]');
  if (navProfile) navProfile.style.display = isGuest ? 'none' : '';

  // Leaderboard: visible for everyone
  const navLeaderboard = document.querySelector('[data-view="leaderboard"]');
  if (navLeaderboard) navLeaderboard.style.display = '';

  // Guests can view the leaderboard but not the curriculum sidebar.
  const sidebarProgress = document.querySelector('.sidebar-progress');
  if (sidebarProgress) sidebarProgress.style.display = isGuest ? 'none' : '';
  const topicTree = document.getElementById('topicTree');
  if (topicTree) topicTree.style.display = isGuest ? 'none' : '';

  // Admin Hub: only visible to admins
  const navAdmin = document.getElementById('navAdmin');
  if (navAdmin) navAdmin.style.display = isAdmin ? '' : 'none';
}

// ===== UI & PROFILE UPDATERS =====
function updateProfileUI() {
  const isLoggedIn = typeof currentUser !== 'undefined' && Boolean(currentUser);
  const name = isLoggedIn ? (state.name || currentUser.user_metadata?.name || 'Learner') : 'Guest';
  const avatar = isLoggedIn ? (state.avatar || '👨‍💻') : '👤';
  const username = isLoggedIn && state.username ? `@${state.username}` : '@guest';

  setText('sidebarProfileName', name);
  setText('topbarUserName', name);
  setText('profileFullName', name);
  setText('profileUsername', username);

  const sbAvatar = document.getElementById('sidebarAvatar');
  if (sbAvatar) sbAvatar.textContent = avatar;
  const tbAvatar = document.getElementById('topbarAvatar');
  if (tbAvatar) tbAvatar.textContent = avatar;
  const pLarge = document.getElementById('profileLargeAvatar');
  if (pLarge) pLarge.textContent = avatar;

  const level = Math.max(1, Number(state.level) || 1);
  const ranks = [
    'Junior Technician',
    'Technician',
    'Senior Technician',
    'IT Specialist',
    'Senior Specialist',
    'IT Engineer',
    'Senior Engineer',
    'Lead Engineer',
    'Principal Engineer',
    'IT Architect',
    'Senior Architect',
    'IT Director'
  ];
  const rank = ranks[Math.min(Math.floor((level - 1) / 3), ranks.length - 1)];
  setText('profileRoleBadge', rank);
  setText('profileLevelBadge', `Level ${level}`);
  setText('sidebarProfileLevel', `Level ${level} · ${rank}`);
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ===== NAVIGATION & VIEW CONTROLLER =====
function showView(v) {
  document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  const isGuest = !(typeof currentUser !== 'undefined' && currentUser);
  const restrictedViews = ['dashboard', 'lesson', 'progress', 'topics', 'achievements', 'profile'];

  // Prevent guests from accessing restricted views
  if (isGuest && restrictedViews.includes(v)) {
    showFeedback(false, 'Sign In Required', 'Guests can only view the Leaderboard. Please sign in or create an account to access all features.', null);
    v = 'leaderboard'; // Force redirect to leaderboard
  }

  const viewEl = document.getElementById('view-' + v);
  if (viewEl) viewEl.classList.add('active');

  const navEl = document.querySelector(`[data-view="${v}"]`);
  if (navEl) navEl.classList.add('active');

  const crumbs = {
    dashboard: '🏠 Dashboard',
    lesson: '📖 Current Lesson',
    progress: '📊 My Progress & Mastery',
    topics: '📚 All Curriculum Topics',
    leaderboard: '🏆 Community Leaderboard',
    achievements: '🎖️ Badges & Milestones',
    profile: '👤 Employee Profile',
    admin: '🛡️ Admin Hub'
  };

  const bc = document.getElementById('topbarBreadcrumb');
  if (bc) bc.textContent = crumbs[v] || v;

  if (v === 'lesson') {
    closeMobileSidebar();
    loadLesson();
  } else if (v === 'dashboard') {
    renderDashboard();
    updateRecommendation();
  } else if (v === 'progress') {
    renderProgress();
  } else if (v === 'topics') {
    renderTopicsView();
  } else if (v === 'leaderboard') {
    renderLeaderboard();
  } else if (v === 'achievements') {
    renderAchievements();
  } else if (v === 'profile') {
    renderProfile();
  } else if (v === 'admin') {
    renderAdminDashboard();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  if (window.innerWidth <= 768) {
    sb.classList.toggle('mobile-open');
    document.getElementById('sidebarOverlay')?.classList.toggle('active');
  } else {
    sb.classList.toggle('collapsed');
    document.getElementById('mainContent').style.marginLeft = sb.classList.contains('collapsed') ? '72px' : 'var(--sidebar-w)';
  }
}

function closeMobileSidebar() {
  document.getElementById('sidebar')?.classList.remove('mobile-open');
  document.getElementById('sidebarOverlay')?.classList.remove('active');
}

function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  document.body.classList.toggle('dark-mode', state.darkMode);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = state.darkMode ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('kfl_theme', state.darkMode ? 'dark' : 'light');
}

// ===== MASTERY SYSTEM =====
/*
  Mastery Formula (0 to 100%):
  - Lesson Completed: 40%
  - Quiz Passed (Score ≥ 80%): 35%
  - Practice Completed: 15%
  - Confidence Rating: 10%
*/
function getTopicMastery(topicIdx) {
  const topic = TOPICS[topicIdx];
  if (!topic || !topic.lessons.length) return { pct: 0, tier: 'not_started', label: 'Not Started' };

  let totalPoints = 0;
  const maxPoints = topic.lessons.length * 100;

  topic.lessons.forEach(l => {
    const key = topic.id + '-' + l.id;
    let lessonScore = 0;

    // 1. Completion (40 pts)
    if (state.completedLessons[key]) lessonScore += 40;

    // 2. Quiz Passed (≥80%) (35 pts)
    const qScore = state.quizScores[l.id] || 0;
    if (qScore >= 80) lessonScore += 35;
    else if (qScore >= 50) lessonScore += 15;

    // 3. Practice Check (15 pts)
    if (state.completedLessons[key]) lessonScore += 15;

    // 4. Confidence (10 pts)
    const conf = state.confidenceScores[l.id];
    if (conf === 'can_build' || conf === 'can_explain') lessonScore += 10;
    else if (conf === 'understand') lessonScore += 7;
    else if (conf === 'little') lessonScore += 4;

    totalPoints += lessonScore;
  });

  const pct = Math.min(100, Math.round((totalPoints / maxPoints) * 100));
  let tier = 'beginner';
  let label = 'Beginner';

  if (pct === 0) { tier = 'not_started'; label = 'Not Started'; }
  else if (pct >= 100) { tier = 'mastered'; label = 'Mastered 🏆'; }
  else if (pct >= 90) { tier = 'advanced'; label = 'Advanced'; }
  else if (pct >= 70) { tier = 'developing'; label = 'Developing'; }
  else if (pct >= 40) { tier = 'learning'; label = 'Learning'; }

  return { pct, tier, label };
}

function getOverallMastery() {
  if (!TOPICS.length) return 0;
  let sum = 0;
  TOPICS.forEach((_, idx) => sum += getTopicMastery(idx).pct);
  return Math.round(sum / TOPICS.length);
}

// ===== PERSONALIZED LEARNING & RECOMMENDATIONS =====
function getRecommendation() {
  // Check 1: Any quizzes scored below 80% that need review & retry
  for (let tIdx = 0; tIdx < TOPICS.length; tIdx++) {
    const t = TOPICS[tIdx];
    for (let lIdx = 0; lIdx < t.lessons.length; lIdx++) {
      const l = t.lessons[lIdx];
      const qScore = state.quizScores[l.id];
      if (qScore !== undefined && qScore < 80) {
        return {
          topicIdx: tIdx,
          lessonIdx: lIdx,
          type: 'retry_quiz',
          badge: 'Review & Retry',
          reason: `You scored ${qScore}% on this quiz (passing is 80%). Let's review and master it!`,
          title: `Quiz Review: ${l.title}`,
          desc: `Strengthen your understanding of ${t.name}. Ollie will give you personalized hints!`,
          icon: '🔄'
        };
      }
    }
  }

  // Check 2: Any lessons where student rated confidence as "I don't understand"
  for (let tIdx = 0; tIdx < TOPICS.length; tIdx++) {
    const t = TOPICS[tIdx];
    for (let lIdx = 0; lIdx < t.lessons.length; lIdx++) {
      const l = t.lessons[lIdx];
      const conf = state.confidenceScores[l.id];
      if (conf === 'dont_understand') {
        return {
          topicIdx: tIdx,
          lessonIdx: lIdx,
          type: 'reinforce',
          badge: 'Reinforce Concept',
          reason: "You flagged this lesson as tricky. Let's break it down with simple analogies!",
          title: `Reinforce: ${l.title}`,
          desc: `Master ${l.title} with step-by-step guidance from your personal tutor.`,
          icon: '💡'
        };
      }
    }
  }

  // Check 3: Current unfinished lesson
  const currentTopic = TOPICS[state.currentTopicIdx] || TOPICS[0];
  const currentLesson = currentTopic.lessons[state.currentLessonIdx] || currentTopic.lessons[0];
  const isDone = state.completedLessons[`${currentTopic.id}-${currentLesson.id}`];

  if (!isDone) {
    return {
      topicIdx: state.currentTopicIdx,
      lessonIdx: state.currentLessonIdx,
      type: 'continue',
      badge: 'Current Lesson',
      reason: 'Next step in your personalized curriculum',
      title: `${currentLesson.title}`,
      desc: `Topic ${state.currentTopicIdx + 1}: ${currentTopic.name}. Complete practice and pass the quiz to advance!`,
      icon: currentTopic.emoji || '🎯'
    };
  }

  // Check 4: Find next incomplete lesson
  for (let tIdx = 0; tIdx < TOPICS.length; tIdx++) {
    const t = TOPICS[tIdx];
    for (let lIdx = 0; lIdx < t.lessons.length; lIdx++) {
      const l = t.lessons[lIdx];
      if (!state.completedLessons[`${t.id}-${l.id}`]) {
        return {
          topicIdx: tIdx,
          lessonIdx: lIdx,
          type: 'next',
          badge: 'Recommended Next',
          reason: 'Next unlocked lesson in your learning journey',
          title: `${l.title}`,
          desc: `Topic ${tIdx + 1}: ${t.name}`,
          icon: t.emoji || '🚀'
        };
      }
    }
  }

  // All complete!
  return {
    topicIdx: 0,
    lessonIdx: 0,
    type: 'complete',
    badge: 'Curriculum Mastered',
    reason: 'Congratulations! You have finished every lesson in KFL Learning Hub!',
    title: 'Curriculum Complete!',
    desc: 'You completed all 9 topics. Review any lesson to keep your skills sharp.',
    icon: '👑'
  };
}

function updateRecommendation() {
  const rec = getRecommendation();
  if (!rec) return;

  setText('recommendedReason', rec.reason);
  setText('recommendedTitle', rec.title);
  setText('recommendedDesc', rec.desc);
  setText('recommendedIcon', rec.icon);
  const action = document.getElementById('btnRecommendedAction');
  if (action) {
    action.innerHTML = rec.type === 'complete'
      ? 'Review Lessons <i class="fas fa-arrow-right"></i>'
      : 'Continue <i class="fas fa-arrow-right"></i>';
  }
}

function takeRecommendedAction() {
  const rec = getRecommendation();
  if (!rec) return;

  state.currentTopicIdx = rec.topicIdx;
  state.currentLessonIdx = rec.lessonIdx;
  saveState();
  loadLesson();
  showView('lesson');
}

// ===== DASHBOARD RENDERING =====
function renderDashboard() {
  const name = state.name || 'Learner';
  setText('heroGreeting', `Welcome back, ${name}! 👋`);
  
  const completedCount = Object.keys(state.completedLessons).length;
  setText('statCompleted', completedCount);
  setText('statStreak', state.streak || 1);
  setText('statXP', (state.xp || 0).toLocaleString());

  // Compute average quiz score
  const scores = Object.values(state.quizScores);
  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : '-';
  setText('statQuizScore', typeof avg === 'number' ? `${avg}%` : '-');

  // Continue Card
  const topic = TOPICS[state.currentTopicIdx] || TOPICS[0];
  const lesson = topic.lessons[state.currentLessonIdx] || topic.lessons[0];
  setText('continueTopic', `Topic ${state.currentTopicIdx + 1}: ${topic.name}`);
  setText('continueLessonTitle', `Lesson ${state.currentLessonIdx + 1}: ${lesson.title}`);
  setText('continueIcon', topic.emoji);

  const doneInTopic = totalInTopic(state.currentTopicIdx);
  const pct = Math.round((doneInTopic / topic.lessons.length) * 100);
  const cf = document.getElementById('continueProgressFill');
  if (cf) cf.style.width = pct + '%';
  setText('continueProgressPct', `${pct}% complete`);

  // Topics Grid on Dashboard
  const grid = document.getElementById('dashboardTopicsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  TOPICS.forEach((t, idx) => {
    const done = totalInTopic(idx);
    const mastery = getTopicMastery(idx);
    const isCur = idx === state.currentTopicIdx;

    const card = document.createElement('div');
    card.className = `topic-card ${isCur ? 'topic-card-active' : ''}`;
    card.style.borderTop = `4px solid ${t.color}`;
    card.innerHTML = `
      <div class="topic-emoji">${t.emoji}</div>
      <div class="topic-name">${t.name}</div>
      <div class="topic-progress-text">${done}/${t.lessons.length} lessons &nbsp;·&nbsp; <strong>${mastery.label}</strong></div>
      <div class="topic-mini-progress">
        <div class="topic-mini-fill" style="width:${mastery.pct}%;background:${t.gradient}"></div>
      </div>
      ${isCur ? '<div class="badge-current">Current</div>' : ''}
    `;
    card.onclick = () => jumpToTopic(idx);
    grid.appendChild(card);
  });
}

function totalInTopic(idx) {
  const t = TOPICS[idx];
  if (!t) return 0;
  return t.lessons.filter(l => state.completedLessons[t.id + '-' + l.id]).length;
}

function updateSidebarProgress() {
  const total = TOPICS.reduce((s, t) => s + t.lessons.length, 0);
  const done = Object.keys(state.completedLessons).length;
  const pct = Math.round((done / total) * 100);

  const fill = document.getElementById('sidebarProgressFill');
  const pctEl = document.getElementById('sidebarProgressPct');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
}

function applyTopicTheme(idx) {
  const colors = TOPIC_COLORS[idx % TOPIC_COLORS.length];
  document.documentElement.style.setProperty('--topic-primary', colors.bg);
  const topic = TOPICS[idx];
  if (topic) {
    document.documentElement.style.setProperty('--topic-gradient', topic.gradient);
  }
}

function buildTopicTree() {
  const tree = document.getElementById('topicTree');
  if (!tree) return;
  tree.innerHTML = '';

  TOPICS.forEach((t, tIdx) => {
    const isCurTopic = tIdx === state.currentTopicIdx;
    const doneCount = totalInTopic(tIdx);
    const mastery = getTopicMastery(tIdx);

    const node = document.createElement('div');
    node.className = `topic-tree-node ${isCurTopic ? 'open' : ''}`;
    node.innerHTML = `
      <div class="topic-tree-title" onclick="toggleTreeNode(this, ${tIdx})">
        <span class="tt-icon">${t.emoji}</span>
        <span class="tt-name" style="color:rgba(255,255,255,0.9)">${t.name}</span>

        <span class="tt-count" style="color:rgba(255,255,255,0.45)">${doneCount}/${t.lessons.length}</span>

        <i class="fas fa-chevron-down tt-chevron"></i>
      </div>
      <div class="topic-tree-lessons">
        ${t.lessons.map((l, lIdx) => {
          const isDone = state.completedLessons[`${t.id}-${l.id}`];
          const isCur = isCurTopic && lIdx === state.currentLessonIdx;
          return `
            <div class="tt-lesson ${isCur ? 'active' : ''} ${isDone ? 'done' : ''}" onclick="jumpToLesson(${tIdx}, ${lIdx})">
              <span class="tt-dot">${isDone ? '✓' : (lIdx + 1)}</span>
              <span class="tt-lesson-title" style="color:rgba(255,255,255,0.75)">${l.title}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
    tree.appendChild(node);
  });
}

function toggleTreeNode(el, tIdx) {
  const node = el.parentElement;
  node.classList.toggle('open');
}

function jumpToTopic(tIdx) {
  state.currentTopicIdx = tIdx;
  state.currentLessonIdx = 0;
  saveState();
  loadLesson();
  showView('lesson');
}

function jumpToLesson(tIdx, lIdx) {
  state.currentTopicIdx = tIdx;
  state.currentLessonIdx = lIdx;
  saveState();
  loadLesson();
  showView('lesson');
}

// ===== XP & LEVEL SYSTEM =====
function addXP(amount) {
  state.xp = (state.xp || 0) + amount;
  updateXPDisplay();
  saveState({ syncProfile: false });
  showXPPopup(amount);
  if (typeof currentUser !== 'undefined' && currentUser && typeof cloudUpdateProfile === 'function') {
    return cloudUpdateProfile({ xp: state.xp, level: state.level }).then(synced => {
      if (!synced) {
        showFeedback(false, 'XP sync failed', 'Your XP is saved on this device, but could not be synced to your account. Please try again later.', null);
      }
      return synced;
    });
  }
  return Promise.resolve(false);
}

function updateXPDisplay() {
  const xp = state.xp || 0;
  const xpPerLevel = 100;
  const xpIntoLevel = xp % xpPerLevel;
  const xpToNext = xpPerLevel - xpIntoLevel;
  const levelTitles = ['Explorer', 'Apprentice 🚀', 'Code Specialist ⚡', 'Tech Scholar 🌟', 'Grand Master 🎓'];
  const titleIdx = Math.min(Math.floor(xp / 300), levelTitles.length - 1);

  setText('xpDisplay', `${xp.toLocaleString()} XP`);
  setText('statXP', xp.toLocaleString());
  setText('profileXPAmount', `${xp.toLocaleString()} XP`);
  setText('profileXPLevel', `Level ${state.level || 1} ${levelTitles[titleIdx]}`);
  setText('profileXPToNext', `${xpToNext} XP`);
  setText('profileXPBarLabel', `${xpIntoLevel} XP this level`);
  setText('profileXPBarMax', `${xpPerLevel} XP to next`);
  setText('pStatXP', `${xp.toLocaleString()} XP`);

  const xpBar = document.getElementById('profileXPBar');
  if (xpBar) xpBar.style.width = `${Math.round((xpIntoLevel / xpPerLevel) * 100)}%`;
  updateProfileUI();
}

function showXPPopup(amount) {
  const popup = document.createElement('div');
  popup.className = 'xp-popup';
  popup.textContent = `+${amount} XP`;
  document.body.appendChild(popup);

  const badge = document.querySelector('.xp-badge');
  if (badge) {
    const r = badge.getBoundingClientRect();
    popup.style.left = r.left + 'px';
    popup.style.top = (r.top - 30) + 'px';
  } else {
    popup.style.right = '24px';
    popup.style.top = '80px';
  }
  setTimeout(() => popup.remove(), 1400);
}

// ===== TUTOR CONVERSATION ENGINE (OLLIE THE OWL) =====
function addTutorMessage(text) {
  const container = document.getElementById('tutorMessages');
  if (!container) return;

  const typing = document.createElement('div');
  typing.className = 'typing-indicator';
  typing.innerHTML = '<span></span><span></span><span></span>';
  container.appendChild(typing);
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    typing.remove();
    const msg = document.createElement('div');
    msg.className = 'tutor-msg';
    msg.innerHTML = `<p>${text}</p>`;
    msg.style.cssText = 'opacity:0;transform:translateY(8px);transition:all 0.3s ease;';
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
    requestAnimationFrame(() => {
      msg.style.opacity = '1';
      msg.style.transform = 'translateY(0)';
    });
  }, 600);
}

function sendTutorMessage() {
  const input = document.getElementById('tutorInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const container = document.getElementById('tutorMessages');
  const uMsg = document.createElement('div');
  uMsg.className = 'user-msg';
  uMsg.innerHTML = `<p>${text}</p>`;
  container?.appendChild(uMsg);
  input.value = '';
  container && (container.scrollTop = container.scrollHeight);

  setTimeout(() => {
    addTutorMessage(generateTutorResponse(text.toLowerCase()));
  }, 700);
}

function askTutorQuick(prompt) {
  const input = document.getElementById('tutorInput');
  if (input) input.value = prompt;
  sendTutorMessage();
}

function generateTutorResponse(msg) {
  const topic = TOPICS[state.currentTopicIdx] || TOPICS[0];
  const lesson = topic.lessons[state.currentLessonIdx] || topic.lessons[0];

  // Specific requirement: "I don't understand" breakdown
  if (/don.t understand|dont understand|confused|explain simpler|eli5|hard/.test(msg)) {
    return `
      <strong>Let's simplify "${lesson.title}":</strong><br><br>
      1️⃣ <strong>The Big Picture:</strong> Imagine you are building a house. Instead of hammering every single nail yourself, you use pre-built sturdy blocks. That's what this tool does!<br><br>
      2️⃣ <strong>Real-world Analogy:</strong> Think of a restaurant menu. The customer only sees the dishes (Frontend), while the kitchen staff manages the ingredients and recipes (Backend / CMS).<br><br>
      3️⃣ <strong>Quick Check:</strong> Does thinking of it as two separate teams (visuals vs data) make sense?
    `;
  }

  if (/analogy|metaphor/.test(msg)) {
    return `Here is a great way to visualize <strong>${lesson.title}</strong>: Imagine a library where every book has a call number and shelf location. That ensures nothing gets lost and anyone can find exact information in seconds! 📚`;
  }

  if (/hint|clue|stuck/.test(msg)) {
    return `💡 <strong>Hint for ${lesson.title}:</strong> Look at the code examples in the lesson body! Pay close attention to the highlighted syntax lines — they demonstrate the exact answer.`;
  }

  if (/progress|how am i doing/.test(msg)) {
    const done = Object.keys(state.completedLessons).length;
    return `You've completed <strong>${done} lessons</strong> and earned <strong>${state.xp} XP</strong> with a <strong>${state.streak}-day streak</strong>! Check the "My Progress" tab for your full mastery breakdown! 📊`;
  }

  if (/thank|thanks|great/.test(msg)) {
    return "You're very welcome! I'm here to ensure you succeed. Keep that fantastic curiosity going! 🦉✨";
  }

  return `That's a thoughtful question about ${lesson.title}! Focus on understanding the primary purpose first before worrying about syntax details. Try running the practice code below! 🚀`;
}

function getTutorMsg(type) {
  const arr = TUTOR_RESPONSES[type] || TUTOR_RESPONSES.greeting;
  return arr[Math.floor(Math.random() * arr.length)];
}

// ===== ACHIEVEMENTS & BADGES ENGINE =====
function unlockAchievement(badgeId) {
  if (state.achievements && state.achievements[badgeId]) return; // already unlocked

  const badge = ACHIEVEMENTS_LIST.find(b => b.id === badgeId);
  if (!badge) return;

  if (!state.achievements) state.achievements = {};
  state.achievements[badgeId] = true;
  addXP(badge.xpBonus);

  // Trigger Modal
  setText('unlockedBadgeIcon', badge.icon);
  setText('unlockedBadgeTitle', badge.name);
  setText('unlockedBadgeDesc', badge.desc);
  openModal('badgeModal');
  launchConfetti();

  // Save to Supabase Cloud
  if (typeof cloudAwardAchievement === 'function') {
    cloudAwardAchievement(badge.id, badge.name, badge.icon);
  }

  recordActivity('earned_badge', null, null, `Unlocked: ${badge.name}`);
  saveState();
}

function checkMasteryBadges() {
  if (getTopicMastery(0).pct >= 90) unlockAchievement('payload_master');
  if (getTopicMastery(1).pct >= 90) unlockAchievement('git_ninja');
  if (getTopicMastery(2).pct >= 80 && getTopicMastery(3).pct >= 80) unlockAchievement('web_architect');
  if (getTopicMastery(4).pct >= 90) unlockAchievement('js_guru');
}

function renderAchievements() {
  const grid = document.getElementById('badgesGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const unlockedCount = Object.keys(state.achievements || {}).length;
  const statsRow = document.getElementById('badgesStatsRow');
  if (statsRow) {
    statsRow.innerHTML = `
      <div class="stat-card">
        <div class="stat-icon"><i class="fas fa-trophy"></i></div>
        <div class="stat-info">
          <span class="stat-num">${unlockedCount} / ${ACHIEVEMENTS_LIST.length}</span>
          <span class="stat-label">Badges Unlocked</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon"><i class="fas fa-star"></i></div>
        <div class="stat-info">
          <span class="stat-num">${unlockedCount * 35}</span>
          <span class="stat-label">Bonus XP Earned</span>
        </div>
      </div>
    `;
  }

  ACHIEVEMENTS_LIST.forEach(b => {
    const isUnlocked = !!(state.achievements && state.achievements[b.id]);
    const card = document.createElement('div');
    card.className = `badge-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    card.innerHTML = `
      <div class="badge-icon-box">${b.icon}</div>
      <h3>${b.name}</h3>
      <p>${b.desc}</p>
      <span class="badge-status-pill">${isUnlocked ? '✓ UNLOCKED' : '🔒 LOCKED'}</span>
    `;
    grid.appendChild(card);
  });
}

// ===== STUDENT PROFILE VIEW =====
function renderProfile() {
  updateProfileUI();

  // XP Banner
  const xp = state.xp || 0;
  const xpPerLevel = 100;
  const level = Math.max(1, Math.floor(xp / xpPerLevel) + 1);
  const xpIntoLevel = xp % xpPerLevel;
  const xpToNext = xpPerLevel - xpIntoLevel;
  const pct = Math.round((xpIntoLevel / xpPerLevel) * 100);

  const levelTitles = ['Explorer','Apprentice 🚀','Code Specialist ⚡','Tech Scholar 🌟','Grand Master 🎓'];
  const titleIdx = Math.min(Math.floor(xp / 300), levelTitles.length - 1);
  const levelLabel = `Level ${level} ${levelTitles[titleIdx]}`;

  setText('profileXPAmount', `${xp.toLocaleString()} XP`);
  setText('profileXPLevel', levelLabel);
  setText('profileXPToNext', `${xpToNext} XP`);
  setText('profileXPBarLabel', `${xpIntoLevel} XP this level`);
  setText('profileXPBarMax', `${xpPerLevel} XP to next`);
  const bar = document.getElementById('profileXPBar');
  if (bar) bar.style.width = pct + '%';

  setText('pStatXP', `${(state.xp || 0).toLocaleString()} XP`);
  setText('pStatLevel', `Level ${state.level || 1}`);
  setText('pStatStreak', `${state.streak || 1} Days`);
  
  const completedCount = Object.keys(state.completedLessons || {}).length;
  const totalLessons = TOPICS.reduce((s, t) => s + t.lessons.length, 0);
  setText('pStatLessons', `${completedCount} / ${totalLessons}`);

  const scores = Object.values(state.quizScores || {});
  const passed = scores.filter(s => s >= 80).length;
  setText('pStatQuizzes', `${passed} Passed (≥80%)`);

  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  setText('pStatAvgScore', `${avg}%`);

  const badgesCount = Object.keys(state.achievements || {}).length;
  setText('pStatBadges', `${badgesCount} / ${ACHIEVEMENTS_LIST.length}`);
  renderProfileBadges();

  // Activity Timeline
  const timeline = document.getElementById('profileActivityTimeline');
  if (!timeline) return;

  const history = state.studyHistory || [];
  if (!history.length) {
    timeline.innerHTML = '<div class="empty-state">No recent activity logged yet. Finish a lesson to build your history!</div>';
    return;
  }

  timeline.innerHTML = '';
  history.slice(-10).reverse().forEach(item => {
    const el = document.createElement('div');
    el.className = 'activity-item';
    el.innerHTML = `
      <div class="activity-icon">${item.action === 'earned_badge' ? '🎖️' : item.action === 'passed_quiz' ? '✅' : '📖'}</div>
      <div>
        <div class="activity-text">${item.details || item.action}</div>
        <div class="activity-time">${new Date(item.timestamp || Date.now()).toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' })}</div>
      </div>
    `;
    timeline.appendChild(el);
  });
}

function renderProfileBadges() {
  const grid = document.getElementById('profileBadgesGrid');
  if (!grid) return;

  const unlocked = ACHIEVEMENTS_LIST.filter(badge => state.achievements?.[badge.id]);
  grid.replaceChildren();
  if (!unlocked.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-state profile-badges-empty';
    empty.textContent = 'No badges unlocked yet. Complete lessons and quizzes to earn your first badge.';
    grid.appendChild(empty);
    return;
  }

  unlocked.forEach(badge => {
    const card = document.createElement('div');
    card.className = 'badge-card unlocked';
    const icon = document.createElement('div');
    icon.className = 'badge-icon-box';
    icon.textContent = badge.icon;
    const title = document.createElement('h3');
    title.textContent = badge.name;
    const description = document.createElement('p');
    description.textContent = badge.desc;
    const status = document.createElement('span');
    status.className = 'badge-status-pill';
    status.textContent = '✓ UNLOCKED';
    card.append(icon, title, description, status);
    grid.appendChild(card);
  });
}

function recordActivity(action, topicId = null, lessonId = null, details = null) {
  if (!state.studyHistory) state.studyHistory = [];
  state.studyHistory.push({
    action,
    topicId,
    lessonId,
    details,
    timestamp: new Date().toISOString()
  });
  if (state.studyHistory.length > 50) state.studyHistory.shift(); // keep last 50
  saveState();
}

// ===== ADMIN DASHBOARD VIEW =====
function verifyAdminPasscode() {
  // Kept for backward compatibility — now role-based only
  if (state.role === 'admin') {
    isAdminAuthenticated = true;
    document.getElementById('adminAuthLock')?.classList.add('hidden');
    document.getElementById('adminContent')?.classList.remove('hidden');
    refreshAdminData();
  }
}

async function refreshAdminData() {
  if (typeof cloudFetchAdminStats !== 'function') return;

  const stats = await cloudFetchAdminStats();
  if (stats) {
    setText('adminTotalStudents', stats.totalStudents || 1);
    setText('adminTotalLessons', stats.totalLessonsDone || Object.keys(state.completedLessons).length);
    setText('adminPassRate', `${stats.passRate || 85}%`);
    setText('adminTotalXP', (stats.totalXP || state.xp).toLocaleString());

    const rosterTbody = document.getElementById('adminStudentRoster');
    if (rosterTbody && stats.students) {
      rosterTbody.innerHTML = '';
      stats.students.forEach(st => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${st.name || 'Student'}</td>
          <td>@${st.username || 'user'}</td>
          <td><strong>${(st.xp || 0).toLocaleString()}</strong></td>
          <td>Level ${st.level || 1}</td>
          <td>🔥 ${st.streak || 1}d</td>
          <td><span class="role-badge">${st.role || 'student'}</span></td>
          <td><span style="color:var(--success);">Active</span></td>
        `;
        rosterTbody.appendChild(tr);
      });
    }
  }
}

function renderAdminDashboard() {
  const isAdmin = state.role === 'admin';
  if (isAdmin) isAdminAuthenticated = true;
  document.getElementById('adminAuthLock')?.classList.toggle('hidden', isAdmin);
  document.getElementById('adminContent')?.classList.toggle('hidden', !isAdmin);
  if (isAdmin) refreshAdminData();
}

// ===== PROGRESS & TOPICS VIEW =====
function renderProgress() {
  const container = document.getElementById('progressContent');
  if (!container) return;
  container.innerHTML = '';

  // Mastery summary cards
  const summaryBox = document.getElementById('masterySummaryCards');
  if (summaryBox) {
    summaryBox.innerHTML = '';
    TOPICS.slice(0, 4).forEach((t, i) => {
      const m = getTopicMastery(i);
      const card = document.createElement('div');
      card.className = 'mastery-card';
      card.innerHTML = `
        <div class="mastery-card-info">
          <h4>${t.emoji} ${t.name}</h4>
          <span>${m.pct}% Computed Mastery</span>
        </div>
        <span class="mastery-pill ${m.tier}">${m.label}</span>
      `;
      summaryBox.appendChild(card);
    });
  }

  TOPICS.forEach((topic, topicIdx) => {
    const done = totalInTopic(topicIdx);
    const mastery = getTopicMastery(topicIdx);

    const group = document.createElement('div');
    group.className = 'progress-topic-group';
    group.style.setProperty('--topic-color', topic.color);
    group.innerHTML = `
      <div class="progress-topic-header" onclick="this.parentElement.classList.toggle('expanded')">
        <span class="progress-topic-icon">${topic.emoji}</span>
        <div class="progress-topic-info">
          <div class="progress-topic-name">${topic.name} <small style="color:var(--text-muted);font-weight:normal;">(${mastery.label})</small></div>
          <div class="progress-topic-bar shimmer-bar">
            <div class="progress-topic-fill" style="width:${mastery.pct}%;background:${topic.gradient}"></div>
          </div>
        </div>
        <span class="progress-topic-pct" style="color:${topic.color}">${mastery.pct}%</span>
        <i class="fas fa-chevron-down progress-chevron"></i>
      </div>
      <div class="progress-lessons-list">
        ${topic.lessons.map((lesson, li) => {
          const isDone = state.completedLessons[topic.id + '-' + lesson.id];
          const isCur = topicIdx === state.currentTopicIdx && li === state.currentLessonIdx;
          const status = isDone ? 'done' : isCur ? 'current' : 'locked';
          const icon = isDone ? '✓' : isCur ? '▶' : '○';
          const qScore = state.quizScores[lesson.id];
          const conf = state.confidenceScores[lesson.id];

          return `
            <div class="progress-lesson-item" onclick="jumpToLesson(${topicIdx}, ${li})">
              <div class="lesson-status-icon ${status}">${icon}</div>
              <div style="flex:1;">
                <div>Lesson ${li + 1}: ${lesson.title}</div>
                <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">
                  ${qScore !== undefined ? `Quiz: ${qScore}% ${qScore >= 80 ? '✅' : '⚠️'}` : ''}
                  ${conf ? `· Confidence: ${conf}` : ''}
                </div>
              </div>
              ${isDone ? `<span class="lesson-xp-tag">+${lesson.xp} XP ✓</span>` : isCur ? '<span class="lesson-current-tag">In Progress</span>' : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
    container.appendChild(group);
  });
}

function renderTopicsView() {
  const grid = document.getElementById('allTopicsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  TOPICS.forEach((topic, idx) => {
    const done = totalInTopic(idx);
    const mastery = getTopicMastery(idx);

    const card = document.createElement('div');
    card.className = 'all-topic-card glow-card';
    card.style.borderTop = `5px solid ${topic.color}`;
    card.style.setProperty('--card-color', topic.color);
    card.innerHTML = `
      <div class="all-topic-emoji">${topic.emoji}</div>
      <h3>${topic.name}</h3>
      <p>${topic.description}</p>
      <div class="topic-lessons-count">
        <i class="fas fa-book"></i> ${topic.lessons.length} lessons &nbsp;·&nbsp;
        <span class="mastery-pill ${mastery.tier}">${mastery.label} (${mastery.pct}%)</span>
      </div>
      <div class="topic-mini-progress" style="height:8px;margin:12px 0 16px;">
        <div style="height:100%;width:${mastery.pct}%;background:${topic.gradient};border-radius:100px;"></div>
      </div>
      <button class="btn-primary" style="width:100%;background:${topic.gradient};" onclick="jumpToTopic(${idx})">
        ${done === 0 ? 'Start Topic' : done === topic.lessons.length ? 'Review All' : 'Continue Learning'} <i class="fas fa-arrow-right"></i>
      </button>
    `;
    grid.appendChild(card);
  });
}

// ===== AUTH UI MODAL HANDLERS =====
function openAuthModal() {
  if (typeof currentUser !== 'undefined' && currentUser) {
    const accountName = currentProfile?.name || currentUser.user_metadata?.name || state.name || 'Account';
    setText('signedInAccountName', accountName);
    setText('signedInAccountEmail', currentUser.email || '');
    document.getElementById('authTabs')?.classList.add('hidden');
    document.getElementById('signedInAccount')?.classList.remove('hidden');
    document.getElementById('signedInAccount')?.removeAttribute('hidden');
    ['signInForm', 'signUpForm', 'forgotForm'].forEach(id => {
      const form = document.getElementById(id);
      if (form) {
        form.hidden = true;
        form.classList.add('hidden');
      }
    });
    setText('authModalTitle', 'Your Account');
    setText('authModalSub', 'Manage your signed-in account');
    openModal('authModal');
    return;
  }

  document.getElementById('authTabs')?.classList.remove('hidden');
  document.getElementById('signedInAccount')?.classList.add('hidden');
  document.getElementById('signedInAccount')?.setAttribute('hidden', '');
  switchAuthTab('signin');
  openModal('authModal');
}

function switchAuthTab(tab) {
  if (typeof currentUser !== 'undefined' && currentUser) {
    openAuthModal();
    return;
  }

  document.getElementById('authTabs')?.classList.remove('hidden');
  document.getElementById('signedInAccount')?.classList.add('hidden');
  document.getElementById('signedInAccount')?.setAttribute('hidden', '');

  const formTabs = {
    signin: 'signInForm',
    signup: 'signUpForm',
    forgot: 'forgotForm'
  };

  Object.entries(formTabs).forEach(([formTab, formId]) => {
    const form = document.getElementById(formId);
    const isActive = formTab === tab;
    if (form) {
      form.hidden = !isActive;
      form.classList.toggle('hidden', !isActive);
      form.setAttribute('aria-hidden', String(!isActive));
    }
  });

  const signInTab = document.getElementById('tabSignIn');
  const signUpTab = document.getElementById('tabSignUp');
  [[signInTab, 'signin'], [signUpTab, 'signup']].forEach(([button, buttonTab]) => {
    if (!button) return;
    const isActive = buttonTab === tab;
    button.style.setProperty('color', isActive ? 'var(--primary)' : 'var(--text-muted)');
    button.style.setProperty('border-bottom-color', isActive ? 'var(--primary)' : 'transparent');
    button.setAttribute('aria-selected', String(isActive));
  });

  if (tab === 'signin') {
    setText('authModalTitle', 'Welcome back 👋');
    setText('authModalSub', 'Sign in to sync your progress and XP');
  } else if (tab === 'signup') {
    setText('authModalTitle', 'Create Your KFL Account');
    setText('authModalSub', 'Sign up to save your XP and progress to the cloud');
  } else if (tab === 'forgot') {
    setText('authModalTitle', 'Reset Password');
    setText('authModalSub', "We'll send a secure reset link to your email");
  }
}

async function handleSignInSubmit() {
  const email = document.getElementById('signInEmail')?.value.trim();
  const password = document.getElementById('signInPassword')?.value;
  const errEl = document.getElementById('authSignInError');
  if (errEl) errEl.className = 'auth-error-msg';

  if (!email || !password) return;

  try {
    if (typeof authSignIn === 'function') {
      await authSignIn(email, password);
      closeModal('authModal');
      if (typeof currentProfile !== 'undefined' && currentProfile) {

        state.name   = currentProfile.name   || state.name;

        state.avatar = currentProfile.avatar || state.avatar;

        state.role   = currentProfile.role   || state.role;

        state.xp     = currentProfile.xp !== undefined ? currentProfile.xp : state.xp;

        updateProfileUI();

        updateNavVisibility();

        renderDashboard();

        updateXPDisplay();

      }

      const _wn = (typeof currentProfile !== 'undefined' && currentProfile && currentProfile.name) ? currentProfile.name : 'Learner';

      const xpSynced = await addXP(10);
      if (xpSynced) {
        showFeedback(true, 'Welcome back, ' + _wn + '! 👋', 'You earned 10 XP for signing in. Your cloud progress has synced.', null);
      }

    }
  } catch (err) {
    if (errEl) {
      errEl.textContent = err.message || 'Failed to sign in. Please check your credentials.';
      errEl.className = 'auth-error-msg show';
    }
  }
}

async function handleSignUpSubmit() {
  const name = document.getElementById('signUpName')?.value.trim();
  const username = document.getElementById('signUpUsername')?.value.trim();
  const email = document.getElementById('signUpEmail')?.value.trim();
  const password = document.getElementById('signUpPassword')?.value;
  const errEl = document.getElementById('authSignUpError');
  if (errEl) errEl.className = 'auth-error-msg';

  if (!name || !email || !password) return;

  try {
    if (typeof authSignUp === 'function') {
      await authSignUp(email, password, name, username, selectedSignUpAvatar);
      closeModal('authModal');
      state.name   = name;

      state.avatar = selectedSignUpAvatar;

      state.role   = 'student';

      state.xp     = 0;

      updateProfileUI();

      updateNavVisibility();

      renderDashboard();

      updateXPDisplay();

      showFeedback(true, 'Welcome, ' + name + '! 🌟', 'Your account is ready. Start your first lesson!', 25);

    }
  } catch (err) {
    if (errEl) {
      errEl.textContent = err.message || 'Failed to register account.';
      errEl.className = 'auth-error-msg show';
    }
  }
}

async function handleForgotSubmit() {
  const email = document.getElementById('forgotEmail')?.value.trim();
  const errEl = document.getElementById('authForgotError');
  if (errEl) errEl.className = 'auth-error-msg';

  if (!email) return;

  try {
    if (typeof authResetPassword === 'function') {
      await authResetPassword(email);
      alert('Password reset link sent! Check your inbox.');
      switchAuthTab('signin');
    }
  } catch (err) {
    if (errEl) {
      errEl.textContent = err.message || 'Error sending reset email.';
      errEl.className = 'auth-error-msg show';
    }
  }
}

function handleLogoutClick() {
  setText('logoutConfirmName', currentProfile?.name || state.name || 'Your account');
  setText('logoutConfirmEmail', currentUser?.email || '');
  setText('logoutConfirmAvatar', state.avatar || currentProfile?.avatar || '👨‍💻');
  const errorEl = document.getElementById('logoutConfirmError');
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
  }
  closeModal('authModal');
  openModal('logoutConfirmModal');
  document.getElementById('cancelLogoutButton')?.focus();
}

async function confirmLogout() {
  const button = document.getElementById('confirmLogoutButton');
  if (button?.disabled) return;

  if (button) {
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging out...';
  }

  try {
    if (typeof authSignOut !== 'function') {
      throw new Error('Sign out is unavailable. Please refresh and try again.');
    }
    await authSignOut();
    closeModal('logoutConfirmModal');
    showFeedback(true, 'Signed Out', 'You are now browsing in local guest mode.', null);
    showView('dashboard');
  } catch (err) {
    console.error('Sign out failed:', err);
    const errorEl = document.getElementById('logoutConfirmError');
    if (errorEl) {
      errorEl.textContent = err.message || 'Could not sign out. Please try again.';
      errorEl.classList.remove('hidden');
    }
  } finally {
    if (button) {
      button.disabled = false;
      button.innerHTML = '<i class="fas fa-sign-out-alt"></i> Log out';
    }
  }
}

function continueAsGuest() {
  closeModal('authModal');
  showFeedback(true, 'Local Guest Mode', 'Learning progress is saved directly to your current browser.', null);
}

function handleProfileClick() {
  showView('profile');
}

function handleUserPillClick() {
  openAuthModal();
}

// ===== AVATAR & EDIT MODALS =====
function selectAvatar(el, context) {
  const pickerId = context === 'create' ? 'createAvatarPicker' : context === 'signup' ? 'signUpAvatarPicker' : 'editAvatarPicker';
  document.querySelectorAll(`#${pickerId} .avatar-opt`).forEach(opt => opt.classList.remove('selected'));
  el.classList.add('selected');

  if (context === 'create') selectedCreateAvatar = el.textContent.trim();
  else if (context === 'signup') selectedSignUpAvatar = el.textContent.trim();
  else selectedEditAvatar = el.textContent.trim();
}

function openEditNameModal() {
  const input = document.getElementById('editAccountName');
  if (input) input.value = state.name || 'Learner';
  selectedEditAvatar = state.avatar || '👨‍💻';

  document.querySelectorAll('#editAvatarPicker .avatar-opt').forEach(el => {
    el.classList.toggle('selected', el.textContent.trim() === selectedEditAvatar);
  });

  openModal('editNameModal');
  setTimeout(() => input?.focus(), 150);
}

function submitEditName() {
  const input = document.getElementById('editAccountName');
  const newName = (input?.value || '').trim();
  if (!newName) {
    addTutorMessage('Please write a name! 😊');
    return;
  }

  state.name = newName;
  state.avatar = selectedEditAvatar;
  saveState();

  closeModal('editNameModal');
  updateProfileUI();
  renderDashboard();
  showFeedback(true, 'Profile Saved! ✨', `Your profile is now updated as "${newName}".`, null);
}

// ===== MODAL UTILITIES =====
function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

function showFeedback(success, title, message, xpGained) {
  setText('feedbackIcon', success ? '🎉' : '💡');
  setText('feedbackTitle', title);
  setText('feedbackMessage', message);
  const xpEl = document.getElementById('feedbackXP');
  if (xpEl) {
    xpEl.textContent = xpGained ? `+${xpGained} XP` : '';
    xpEl.style.display = xpGained ? 'inline-flex' : 'none';
  }
  openModal('feedbackModal');
  if (success) launchMiniConfetti();
}

// ===== CONFETTI ANIMATIONS =====
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#063B91', '#62C554', '#2563eb', '#0284c7', '#f59e0b', '#10b981'];
  const pieces = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: Math.random() * 12 + 4,
    h: Math.random() * 7 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    r: Math.random() * Math.PI * 2,
    rs: (Math.random() - 0.5) * 0.25,
    vx: (Math.random() - 0.5) * 4,
    vy: Math.random() * 4 + 2,
    shape: Math.random() > 0.5 ? 'rect' : 'circle',
  }));

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.r += p.rs;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.color;
      if (p.shape === 'circle') { ctx.beginPath(); ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2); ctx.fill(); }
      else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 160) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

function launchMiniConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#063B91', '#62C554', '#2563eb', '#f59e0b'];
  const pieces = Array.from({ length: 45 }, () => ({
    x: canvas.width * 0.5 + (Math.random() - 0.5) * 300,
    y: canvas.height * 0.45,
    w: Math.random() * 8 + 3,
    h: Math.random() * 5 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    r: Math.random() * Math.PI * 2,
    rs: (Math.random() - 0.5) * 0.2,
    vx: (Math.random() - 0.5) * 6,
    vy: Math.random() * (-6) - 2,
    gravity: 0.16,
  }));

  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.vy += p.gravity; p.x += p.vx; p.y += p.vy; p.r += p.rs;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 75) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

// ===== CODE SNIPPET COPY =====
function copyCode(btn) {
  const pre = btn.closest('.code-block')?.querySelector('pre');
  if (!pre) return;
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    btn.style.background = 'var(--success)';
    btn.style.color = 'white';
    setTimeout(() => {
      btn.innerHTML = '<i class="far fa-copy"></i> Copy';
      btn.style.background = '';
      btn.style.color = '';
    }, 2000);
  });
}
