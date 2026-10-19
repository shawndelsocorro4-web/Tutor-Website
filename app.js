/* ===================================================================
   app.js — KFL Learning Hub Core Application Logic & State Engine
   =================================================================== */

// ===== MULTI-ACCOUNT & STATE MANAGEMENT =====
const DEFAULT_ACCOUNT = {
  id: 'acc_guest',
  name: 'Learner',
  username: 'learner',
  avatar: '👨‍💻',
  role: 'student',
  currentTopicIdx: 0,
  currentLessonIdx: 0,
  xp: 0,
  streak: 1,
  level: 1,
  completedLessons: {},
  quizScores: {},
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
  { bg: '#62C554', light: '#dcfce7', text: '#166534' }, // Grand Capstone
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
  { id: 'kfl_master', name: 'KFL Grand Champion', icon: '👑', desc: 'Completed the entire 10-topic curriculum', xpBonus: 150 },
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
  buildTopicTree();
  renderDashboard();
  renderProgress();
  renderTopicsView();
  loadLesson();
  updateSidebarProgress();
  updateXPDisplay();
  applyTopicTheme(state.currentTopicIdx);
  updateRecommendation();
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
}

function saveState() {
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
  if (typeof currentUser !== 'undefined' && currentUser && typeof cloudUpdateProfile === 'function') {
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
  state.xp = Math.max(state.xp, cloudData.xp || 0);
  state.streak = Math.max(state.streak, cloudData.streak || 1);
  state.level = Math.max(state.level, cloudData.level || 1);
  
  // Merge completed lessons & quizzes
  state.completedLessons = { ...state.completedLessons, ...(cloudData.completedLessons || {}) };
  state.quizScores = { ...state.quizScores, ...(cloudData.quizScores || {}) };
  state.achievements = { ...state.achievements, ...(cloudData.achievements || {}) };
  state.confidenceScores = { ...state.confidenceScores, ...(cloudData.confidenceScores || {}) };

  saveState();
  updateProfileUI();
  renderDashboard();
  renderProgress();
  updateSidebarProgress();
  updateRecommendation();
  buildTopicTree();
}

function resetAppStateToGuest() {
  state = { ...DEFAULT_ACCOUNT };
  saveState();
  updateProfileUI();
  renderDashboard();
  renderProgress();
  updateSidebarProgress();
  updateRecommendation();
  buildTopicTree();
}

// ===== UI & PROFILE UPDATERS =====
function updateProfileUI() {
  const name = state.name || 'Learner';
  const avatar = state.avatar || '👨‍💻';
  const username = state.username ? `@${state.username}` : '@learner';

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

  let levelTitle = `Level ${state.level || 1} Explorer`;
  if (state.xp >= 1000) levelTitle = `Level ${state.level} Grand Master 🎓`;
  else if (state.xp >= 600) levelTitle = `Level ${state.level} Tech Scholar 🌟`;
  else if (state.xp >= 300) levelTitle = `Level ${state.level} Code Specialist ⚡`;
  else if (state.xp >= 100) levelTitle = `Level ${state.level} Apprentice 🚀`;

  setText('sidebarProfileLevel', levelTitle);
  setText('profileRoleBadge', (state.role || 'student').toUpperCase());
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ===== NAVIGATION & VIEW CONTROLLER =====
function showView(v) {
  document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

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
    profile: '👤 Student Profile',
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
    type: 'capstone',
    badge: 'Curriculum Mastered',
    reason: 'Congratulations! You have finished every lesson in KFL Learning Hub!',
    title: 'Review Capstone Project',
    desc: 'You are ready to build real-world web applications and headless CMS solutions.',
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

// ===== CONFIDENCE RATING =====
function rateConfidence(level) {
  const topic = TOPICS[state.currentTopicIdx];
  const lesson = topic?.lessons[state.currentLessonIdx];
  if (!lesson) return;

  // Save confidence
  state.confidenceScores[lesson.id] = level;
  saveState();

  // Highlight selected button
  document.querySelectorAll('#lessonConfidenceWidget .conf-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.getAttribute('onclick')?.includes(level));
  });

  const fb = document.getElementById('confidenceFeedback');
  const responses = {
    dont_understand: "Thank you for being honest! 🦉 I've noted this. Ask me <em>\"I don't understand\"</em> in the chat right now for a super simple breakdown and analogy!",
    little: "Great start! Reviewing the example and trying the code editor will make it fully click! 💡",
    understand: "Awesome! You've got the core concept down solid! ⭐",
    can_explain: "Incredible! Being able to explain it is the gold standard of real understanding! 😎",
    can_build: "You're a rockstar! 🚀 You are ready to build real projects with this skill!"
  };

  if (fb) {
    fb.innerHTML = responses[level] || "Confidence saved!";
    fb.className = 'confidence-feedback-msg show';
  }

  // Award 5 XP for self-reflection
  addXP(5);
  addTutorMessage(responses[level] || "I've noted your confidence rating! Let's keep moving forward!");
  updateRecommendation();

  // Record history
  recordActivity('rated_confidence', topic.id, lesson.id, `Confidence: ${level}`);
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

// ===== LESSON LOADER =====
function loadLesson() {
  const topic = TOPICS[state.currentTopicIdx];
  const lesson = topic?.lessons[state.currentLessonIdx];
  if (!topic || !lesson) return;

  applyTopicTheme(state.currentTopicIdx);

  setText('lessonTopicTag', topic.name);
  const tag = document.getElementById('lessonTopicTag');
  if (tag) tag.style.background = topic.gradient;

  setText('lessonNum', `Lesson ${state.currentLessonIdx + 1} of ${topic.lessons.length}`);
  setText('lessonTitle', lesson.title);
  setText('lessonXPReward', lesson.xp);

  const body = document.getElementById('lessonBody');
  if (body) {
    body.innerHTML = lesson.content;
    body.style.opacity = '0';
    body.style.transform = 'translateY(12px)';
    requestAnimationFrame(() => {
      body.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      body.style.opacity = '1';
      body.style.transform = 'translateY(0)';
    });
  }

  // Build Quiz
  if (lesson.quiz) buildInlineQuiz(lesson);
  if (lesson.quizzes) buildMultiQuiz(lesson);

  // Restore Confidence Button highlight if already rated
  const savedConf = state.confidenceScores[lesson.id];
  document.querySelectorAll('#lessonConfidenceWidget .conf-btn').forEach(btn => {
    btn.classList.toggle('selected', savedConf && btn.getAttribute('onclick')?.includes(savedConf));
  });
  const fb = document.getElementById('confidenceFeedback');
  if (fb) fb.className = 'confidence-feedback-msg';

  buildChecklist(lesson);
  buildTopicTree();
  updateLessonSidebarProgress();

  const prev = document.getElementById('btnPrevLesson');
  if (prev) prev.disabled = (state.currentLessonIdx === 0 && state.currentTopicIdx === 0);

  // Auto-run Code Editors
  setTimeout(() => {
    document.querySelectorAll('[id^="editor-"]').forEach(ed => {
      const pid = ed.id.replace('editor-', 'preview-');
      if (document.getElementById(pid)) runEditorCode(ed.id, pid);
    });
  }, 250);
}

function updateLessonSidebarProgress() {
  updateSidebarProgress();
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
        <span class="tt-name">${t.name}</span>
        <span class="tt-count">${doneCount}/${t.lessons.length}</span>
        <i class="fas fa-chevron-down tt-chevron"></i>
      </div>
      <div class="topic-tree-lessons">
        ${t.lessons.map((l, lIdx) => {
          const isDone = state.completedLessons[`${t.id}-${l.id}`];
          const isCur = isCurTopic && lIdx === state.currentLessonIdx;
          return `
            <div class="tt-lesson ${isCur ? 'active' : ''} ${isDone ? 'done' : ''}" onclick="jumpToLesson(${tIdx}, ${lIdx})">
              <span class="tt-dot">${isDone ? '✓' : (lIdx + 1)}</span>
              <span class="tt-lesson-title">${l.title}</span>
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

// ===== INLINE KNOWLEDGE CHECK (Single Question) =====
const selectedInlineOptions = {};

function buildInlineQuiz(lesson) {
  const cid = `quiz-${lesson.id}`;
  const container = document.getElementById(cid);
  if (!container) return;
  const { quiz } = lesson;
  const letters = ['A','B','C','D','E'];

  container.innerHTML = `
    <div class="quiz-inline-box">
      <div class="quiz-inline-header">
        <span class="quiz-brain">🧠</span>
        <div>
          <div class="quiz-inline-title">Knowledge Check (Target: 80%+)</div>
          <div class="quiz-inline-sub">Verify your understanding before completing this lesson</div>
        </div>
        <div class="quiz-xp-pill">+10 XP</div>
      </div>
      <p class="quiz-question">${quiz.question}</p>
      <div class="quiz-options" id="inline-quiz-options-${lesson.id}">
        ${quiz.options.map((opt, i) => `
          <div class="quiz-option" onclick="selectInlineOption('${lesson.id}', ${i})" id="inline-opt-${lesson.id}-${i}">
            <span class="option-letter">${letters[i]}</span>
            <span class="option-text">${opt}</span>
          </div>
        `).join('')}
      </div>
      <div id="inline-quiz-result-${lesson.id}" class="quiz-result-banner"></div>
      <button class="btn-check" onclick="submitInlineQuiz('${lesson.id}', ${quiz.correct})">
        <i class="fas fa-check-circle"></i> Submit Answer
      </button>
    </div>
  `;
}

function selectInlineOption(lid, idx) {
  selectedInlineOptions[lid] = idx;
  document.querySelectorAll(`[id^="inline-opt-${lid}-"]`).forEach(el => el.classList.remove('selected'));
  document.getElementById(`inline-opt-${lid}-${idx}`)?.classList.add('selected');
}

function submitInlineQuiz(lid, correct) {
  const sel = selectedInlineOptions[lid];
  if (sel === undefined) {
    addTutorMessage('Pick an option first! I\'m ready to evaluate your answer! 😊');
    return;
  }

  const isCorrect = sel === correct;
  const opts = document.querySelectorAll(`[id^="inline-opt-${lid}-"]`);
  opts.forEach((opt, i) => {
    if (i === correct) {
      opt.classList.add('correct');
      opt.classList.remove('selected');
    } else if (i === sel && !isCorrect) {
      opt.classList.add('wrong');
      opt.classList.add('shake');
      setTimeout(() => opt.classList.remove('shake'), 600);
    }
  });

  const resultEl = document.getElementById(`inline-quiz-result-${lid}`);
  const lesson = TOPICS.flatMap(t => t.lessons).find(l => l.id === lid);
  const topic = TOPICS.find(t => t.lessons.some(l => l.id === lid));

  resultEl.className = `quiz-result-banner show ${isCorrect ? 'correct' : 'incorrect'}`;
  resultEl.innerHTML = isCorrect
    ? `✅ <strong>Passed (100%)!</strong> ${lesson?.quiz?.explanation || 'Great job!'}`
    : `❌ <strong>Need another attempt:</strong> ${lesson?.quiz?.explanation || ''} <br><br>💡 <em>Hint: Re-read the analogy box and try again!</em>`;

  if (isCorrect) {
    state.quizScores[lid] = 100;
    addXP(10);
    addTutorMessage(getTutorMsg('correct'));
    unlockAchievement('quiz_whiz');
    checkMasteryBadges();
    saveState();
    launchMiniConfetti();

    // Sync to Supabase
    if (typeof cloudSaveQuizResult === 'function' && topic) {
      cloudSaveQuizResult(topic.id, lid, 100, 1, true);
    }
  } else {
    state.quizScores[lid] = 0;
    saveState();
    addTutorMessage("Don't worry about missing it! Read the explanation above, re-read the analogy, and select the correct option! 💪");
    if (typeof cloudSaveQuizResult === 'function' && topic) {
      cloudSaveQuizResult(topic.id, lid, 0, 1, false);
    }
  }
}

// ===== MULTI-QUESTION QUIZ (MILESTONE EXAMS) =====
const multiQuizState = {};
const mqSelected = {};

function buildMultiQuiz(lesson) {
  const cid = `multi-quiz-${lesson.id}`;
  const container = document.getElementById(cid);
  if (!container || !lesson.quizzes) return;

  multiQuizState[lesson.id] = { current: 0, score: 0, answers: {} };
  renderMultiQuestion(lesson, 0, container);
}

function renderMultiQuestion(lesson, qIdx, container) {
  const qs = lesson.quizzes;
  const q = qs[qIdx];
  const letters = ['A','B','C','D'];
  const progress = Math.round(((qIdx) / qs.length) * 100);

  container.innerHTML = `
    <div class="multi-quiz-box">
      <div class="multi-quiz-header">
        <span>Question ${qIdx + 1} of ${qs.length}</span>
        <div class="quiz-progress-bar-wrap">
          <div class="quiz-progress-bar-fill" style="width:${progress}%"></div>
        </div>
        <span class="quiz-score-badge">Score: ${multiQuizState[lesson.id].score}/${qIdx}</span>
      </div>
      <p class="quiz-question" style="margin:16px 0;">${q.question}</p>
      <div class="quiz-options" id="mq-opts-${lesson.id}-${qIdx}">
        ${q.options.map((opt, i) => `
          <div class="quiz-option" onclick="selectMQOption('${lesson.id}', ${qIdx}, ${i})" id="mq-opt-${lesson.id}-${qIdx}-${i}">
            <span class="option-letter">${letters[i]}</span>
            <span class="option-text">${opt}</span>
          </div>
        `).join('')}
      </div>
      <div id="mq-result-${lesson.id}-${qIdx}" class="quiz-result-banner"></div>
      <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;">
        <button class="btn-check" onclick="submitMQAnswer('${lesson.id}', ${qIdx}, ${q.correct})">
          <i class="fas fa-check-circle"></i> Submit Answer
        </button>
        ${qIdx > 0 ? `<button class="btn-secondary" onclick="buildMultiQuiz(TOPICS.flatMap(t=>t.lessons).find(l=>l.id==='${lesson.id}'))">🔄 Restart Exam</button>` : ''}
      </div>
    </div>
  `;
}

function selectMQOption(lid, qIdx, optIdx) {
  mqSelected[`${lid}-${qIdx}`] = optIdx;
  document.querySelectorAll(`[id^="mq-opt-${lid}-${qIdx}-"]`).forEach(el => el.classList.remove('selected'));
  document.getElementById(`mq-opt-${lid}-${qIdx}-${optIdx}`)?.classList.add('selected');
}

function submitMQAnswer(lid, qIdx, correct) {
  const sel = mqSelected[`${lid}-${qIdx}`];
  if (sel === undefined) {
    addTutorMessage('Please choose an answer before submitting! 😊');
    return;
  }

  const lesson = TOPICS.flatMap(t => t.lessons).find(l => l.id === lid);
  const topic = TOPICS.find(t => t.lessons.some(l => l.id === lid));
  const qs = lesson.quizzes;
  const q = qs[qIdx];
  const isCorrect = sel === correct;

  document.querySelectorAll(`[id^="mq-opt-${lid}-${qIdx}-"]`).forEach((opt, i) => {
    if (i === correct) opt.classList.add('correct');
    else if (i === sel && !isCorrect) {
      opt.classList.add('wrong');
      opt.classList.add('shake');
      setTimeout(() => opt.classList.remove('shake'), 600);
    }
  });

  if (isCorrect) multiQuizState[lid].score++;

  const res = document.getElementById(`mq-result-${lid}-${qIdx}`);
  res.className = `quiz-result-banner show ${isCorrect ? 'correct' : 'incorrect'}`;
  res.innerHTML = isCorrect
    ? `✅ <strong>Correct!</strong> ${q.explanation || ''}`
    : `❌ <strong>Not quite:</strong> ${q.explanation || ''} (Correct answer was ${['A','B','C','D'][correct]})`;

  // Advance to next question or final score after short delay
  setTimeout(() => {
    const container = document.getElementById(`multi-quiz-${lid}`);
    if (!container) return;

    if (qIdx + 1 < qs.length) {
      renderMultiQuestion(lesson, qIdx + 1, container);
    } else {
      const finalScore = multiQuizState[lid].score;
      const total = qs.length;
      const pct = Math.round((finalScore / total) * 100);
      const passed = pct >= 80; // 80% passing standard

      state.quizScores[lid] = pct;
      saveState();

      if (passed) {
        addXP(Math.round(pct / 10) * 3);
        launchConfetti();
        if (pct === 100) unlockAchievement('quiz_whiz');
        checkMasteryBadges();
      }

      if (typeof cloudSaveQuizResult === 'function' && topic) {
        cloudSaveQuizResult(topic.id, lid, pct, total, passed);
      }

      container.innerHTML = `
        <div class="quiz-final-result ${passed ? 'pass' : 'fail'}">
          <div class="quiz-final-icon">${pct === 100 ? '🏆' : passed ? '🎉' : '📚'}</div>
          <h3>${pct === 100 ? 'Perfect Score!' : passed ? 'Quiz Passed! (Mastery Demonstrated)' : 'Score: ' + pct + '% (Need 80% to Pass)'}</h3>
          <p>You scored <strong>${finalScore} out of ${total}</strong> (${pct}%)</p>
          <p style="color:var(--text-muted);font-size:0.9rem;margin-top:8px;">
            ${passed
              ? 'Excellent work! You satisfied the 80% mastery requirement for this module.'
              : 'Don\'t worry! Review the lesson sections above and re-take the exam. Practice makes permanent!'}
          </p>
          <div style="display:flex;gap:12px;justify-content:center;margin-top:18px;">
            <button class="btn-primary" onclick="buildMultiQuiz(TOPICS.flatMap(t=>t.lessons).find(l=>l.id==='${lid}'))">
              🔄 Try Again
            </button>
            ${passed ? `<button class="btn-secondary" onclick="nextLesson()">Next Lesson ➡️</button>` : ''}
          </div>
        </div>
      `;

      addTutorMessage(passed
        ? `🏆 Fantastic result! ${pct}% demonstrates real competency!`
        : `📚 You scored ${pct}%. Review the core concepts and retry — you're close to passing!`);
    }
  }, isCorrect ? 700 : 1300);
}

// ===== LESSON ADVANCEMENT =====
function nextLesson() {
  const topic = TOPICS[state.currentTopicIdx];
  const lesson = topic.lessons[state.currentLessonIdx];
  const key = topic.id + '-' + lesson.id;

  // Enforce passing check if quiz exists
  const qScore = state.quizScores[lesson.id];
  if ((lesson.quiz || lesson.quizzes) && qScore !== undefined && qScore < 80) {
    addTutorMessage("⚠️ Hold on! To ensure you truly master this topic, please review and achieve at least 80% on the quiz first! You've got this! 🦉");
    showFeedback(false, 'Passing Score Required', `You scored ${qScore}%. Please review the lesson and retry the quiz to achieve 80%+ before advancing.`, null);
    return;
  }

  // Mark completed
  if (!state.completedLessons[key]) {
    state.completedLessons[key] = true;
    const xpGain = lesson.xp || 10;
    addXP(xpGain);
    recordActivity('completed_lesson', topic.id, lesson.id, `Completed: ${lesson.title}`);
    showFeedback(true, 'Lesson Complete! 🎉', `You finished "${lesson.title}"! Keep building your momentum!`, xpGain);
    
    // Check first step badge
    unlockAchievement('first_step');
    if (Object.keys(state.completedLessons).length >= 5) unlockAchievement('speed_learner');
    checkMasteryBadges();

    // Sync to Supabase
    if (typeof cloudSaveLessonProgress === 'function') {
      cloudSaveLessonProgress(topic.id, lesson.id, true, 90, state.confidenceScores[lesson.id]);
    }
  }

  // Advance index
  if (state.currentLessonIdx < topic.lessons.length - 1) {
    state.currentLessonIdx++;
  } else if (state.currentTopicIdx < TOPICS.length - 1) {
    showFeedback(true, `Topic Mastered! 🏆`, `Incredible! You completed all lessons in "${topic.name}"!`, 50);
    state.currentTopicIdx++;
    state.currentLessonIdx = 0;
  } else {
    showFeedback(true, '🎓 Grand Curriculum Complete!', 'You finished every single topic in KFL Learning Hub! You are truly exceptional!', 500);
    unlockAchievement('kfl_master');
    return;
  }

  saveState();
  loadLesson();
  renderDashboard();
  updateSidebarProgress();
  updateRecommendation();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevLesson() {
  if (state.currentLessonIdx > 0) {
    state.currentLessonIdx--;
  } else if (state.currentTopicIdx > 0) {
    state.currentTopicIdx--;
    state.currentLessonIdx = TOPICS[state.currentTopicIdx].lessons.length - 1;
  }
  saveState();
  loadLesson();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== CHECKLIST & PRACTICE =====
function buildChecklist(lesson) {
  const container = document.getElementById('checklistItems');
  if (!container) return;
  container.innerHTML = '';
  const key = TOPICS[state.currentTopicIdx].id + '-' + lesson.id;
  const isDone = state.completedLessons[key];

  lesson.checklist.forEach((item) => {
    const el = document.createElement('div');
    el.className = `checklist-item ${isDone ? 'done' : ''}`;
    el.innerHTML = `<div class="chk"><i class="fas fa-check"></i></div><span>${item}</span>`;
    el.onclick = () => el.classList.toggle('done');
    container.appendChild(el);
  });
}

function runEditorCode(editorId, previewId) {
  const code = document.getElementById(editorId)?.value || '';
  const iframe = document.getElementById(previewId);
  if (!iframe) return;
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(code);
  doc.close();
}

function checkPractice(lessonId, category) {
  const inputEl = document.getElementById(`practice-${lessonId}`);
  const feedbackEl = document.getElementById(`feedback-${lessonId}`);
  if (!inputEl || !feedbackEl) return;

  const answer = inputEl.value.trim().toLowerCase();
  if (answer.length < 8) {
    feedbackEl.className = 'answer-feedback show incorrect';
    feedbackEl.innerHTML = '⚠️ Write a bit more — even 1–2 complete sentences is perfect! I\'m here waiting! 😊';
    return;
  }

  const config = PRACTICE_HINTS[category];
  if (!config) {
    feedbackEl.className = 'answer-feedback show correct';
    feedbackEl.innerHTML = '✅ Good effort! Keep practicing and moving forward!';
    addXP(8);
    return;
  }

  const hit = config.keywords.some(kw => answer.includes(kw)) || answer.length > 60;
  if (hit) {
    feedbackEl.className = 'answer-feedback show correct';
    feedbackEl.innerHTML = `✅ ${config.success}`;
    addXP(10);
    addTutorMessage(getTutorMsg('encourage'));
    markChecklistItem(2);
    saveState();
  } else {
    feedbackEl.className = 'answer-feedback show incorrect';
    feedbackEl.innerHTML = `🤔 Almost! ${config.tip} Give it another shot — you're right on track!`;
    addTutorMessage(`${config.hint} Try again! 💪`);
  }
}

function markChecklistItem(idx) {
  const items = document.querySelectorAll('.checklist-item');
  if (items[idx]) items[idx].classList.add('done');
}

// ===== XP & LEVEL SYSTEM =====
function addXP(amount) {
  state.xp = (state.xp || 0) + amount;
  updateXPDisplay();
  saveState();
  showXPPopup(amount);
}

function updateXPDisplay() {
  setText('xpDisplay', `${(state.xp || 0).toLocaleString()} XP`);
  setText('statXP', (state.xp || 0).toLocaleString());
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

// ===== LEADERBOARD VIEW =====
async function renderLeaderboard(filter = 'all') {
  const listEl = document.getElementById('leaderboardList');
  if (!listEl) return;

  listEl.innerHTML = '<div class="loading-spinner" style="padding:24px;text-align:center;">Fetching live community scores from Supabase...</div>';

  let learners = [];
  if (typeof cloudFetchLeaderboard === 'function') {
    learners = await cloudFetchLeaderboard(25);
  }

  // Fallback if offline or empty
  if (!learners || !learners.length) {
    learners = [
      { id: state.id, name: state.name || 'Learner', username: state.username || 'learner', avatar: state.avatar || '👨‍💻', xp: state.xp || 0, streak: state.streak || 1, level: state.level || 1 },
      { id: 'u2', name: 'Alex Rivera', username: 'alex_code', avatar: '👩‍💻', xp: 480, streak: 5, level: 5 },
      { id: 'u3', name: 'Carlos Mendoza', username: 'carlos_m', avatar: '🦉', xp: 350, streak: 3, level: 4 },
      { id: 'u4', name: 'Jasmine Lee', username: 'jas_dev', avatar: '🌟', xp: 220, streak: 2, level: 3 }
    ];
  }

  // Sort
  if (filter === 'streak') {
    learners.sort((a, b) => (b.streak || 0) - (a.streak || 0));
  } else {
    learners.sort((a, b) => (b.xp || 0) - (a.xp || 0));
  }

  listEl.innerHTML = '';
  learners.forEach((l, index) => {
    const rank = index + 1;
    const isCur = (currentUser && l.id === currentUser.id) || l.id === state.id || l.name === state.name;

    const row = document.createElement('div');
    row.className = `leaderboard-row ${isCur ? 'is-current-user' : ''}`;
    row.innerHTML = `
      <div class="col-rank">
        <span class="rank-badge ${rank <= 3 ? 'rank-' + rank : ''}">${rank === 1 ? '🥇 1' : rank === 2 ? '🥈 2' : rank === 3 ? '🥉 3' : '#' + rank}</span>
      </div>
      <div class="col-student student-cell">
        <span class="s-avatar">${l.avatar || '👨‍💻'}</span>
        <div>
          <div class="s-name">${l.name || 'Anonymous Learner'} ${isCur ? '<small>(You)</small>' : ''}</div>
          <div class="s-user">@${l.username || 'learner'}</div>
        </div>
      </div>
      <div class="col-level">Level ${l.level || 1}</div>
      <div class="col-streak">🔥 ${l.streak || 1} d</div>
      <div class="col-xp"><strong>${(l.xp || 0).toLocaleString()}</strong> XP</div>
    `;
    listEl.appendChild(row);
  });
}

function filterLeaderboard(f) {
  document.querySelectorAll('.leaderboard-tabs button').forEach(b => {
    b.classList.toggle('active', b.getAttribute('onclick')?.includes(f));
  });
  renderLeaderboard(f);
}

// ===== STUDENT PROFILE VIEW =====
function renderProfile() {
  updateProfileUI();

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
  const input = document.getElementById('adminPasscodeInput');
  const code = (input?.value || '').trim();

  // Accept admin code or admin role
  if (code === 'kfladmin2026' || state.role === 'admin') {
    isAdminAuthenticated = true;
    document.getElementById('adminAuthLock')?.classList.add('hidden');
    document.getElementById('adminContent')?.classList.remove('hidden');
    refreshAdminData();
  } else {
    alert('Incorrect passcode. Please enter the valid KFL Admin passcode.');
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
  if (state.role === 'admin') {
    isAdminAuthenticated = true;
  }
  if (isAdminAuthenticated) {
    document.getElementById('adminAuthLock')?.classList.add('hidden');
    document.getElementById('adminContent')?.classList.remove('hidden');
    refreshAdminData();
  } else {
    document.getElementById('adminAuthLock')?.classList.remove('hidden');
    document.getElementById('adminContent')?.classList.add('hidden');
  }
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
  openModal('authModal');
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('signInForm')?.classList.add('hidden');
  document.getElementById('signUpForm')?.classList.add('hidden');
  document.getElementById('forgotForm')?.classList.add('hidden');

  if (tab === 'signin') {
    document.getElementById('tabBtnSignIn')?.classList.add('active');
    document.getElementById('signInForm')?.classList.remove('hidden');
    setText('authModalTitle', 'Sign In to KFL');
  } else if (tab === 'signup') {
    document.getElementById('tabBtnSignUp')?.classList.add('active');
    document.getElementById('signUpForm')?.classList.remove('hidden');
    setText('authModalTitle', 'Create KFL Cloud Account');
  } else if (tab === 'forgot') {
    document.getElementById('tabBtnForgot')?.classList.add('active');
    document.getElementById('forgotForm')?.classList.remove('hidden');
    setText('authModalTitle', 'Reset Password');
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
      showFeedback(true, 'Signed In!', 'Welcome back! Your cloud progress has synced.', 10);
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
      showFeedback(true, 'Account Created! 🌟', 'Your cloud account is ready. Check your email for verification if needed!', 25);
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

async function handleLogoutClick() {
  if (confirm('Are you sure you want to sign out? Your cloud data remains safely saved.')) {
    if (typeof authSignOut === 'function') {
      await authSignOut();
    }
    showFeedback(true, 'Signed Out', 'You are now browsing in local guest mode.', null);
    showView('dashboard');
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
