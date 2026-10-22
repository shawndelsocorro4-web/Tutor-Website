/* ===================================================================
   state.js — Global State Management & Persistence
   =================================================================== */

const DEFAULT_ACCOUNT = {
  id: 'acc_guest',
  name: 'Employee',
  username: 'employee',
  avatar: '👨💼',
  role: 'employee',
  currentTopicIdx: 0,
  currentLessonIdx: 0,
  xp: 0,
  streak: 1,
  level: 1,
  rank: 'Novice',
  completedLessons: {},
  quizScores: {},
  achievements: {},
  confidenceScores: {},
  studyHistory: [],
  lastVisit: null,
};

let state = {
  ...DEFAULT_ACCOUNT,
  darkMode: false,
  totalTimeSpent: 0,
  hintsUsed: 0,
};

const TOPIC_COLORS = [
  { bg: '#063B91', light: '#e0edff', text: '#032B6B' },
  { bg: '#1e293b', light: '#f1f5f9', text: '#0f172a' },
  { bg: '#ea580c', light: '#ffedd5', text: '#9a3412' },
  { bg: '#0284c7', light: '#e0f2fe', text: '#075985' },
  { bg: '#d97706', light: '#fef3c7', text: '#92400e' },
  { bg: '#2563eb', light: '#dbeafe', text: '#1d4ed8' },
  { bg: '#15803d', light: '#dcfce7', text: '#14532d' },
  { bg: '#059669', light: '#d1fae5', text: '#065f46' },
  { bg: '#0284c7', light: '#e0f2fe', text: '#0369a1' },
  { bg: '#62C554', light: '#dcfce7', text: '#166534' },
];

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
  const calculatedLevel = Math.max(1, Math.floor(state.xp / 100) + 1);
  state.level = calculatedLevel;
  state.rank = calculateRank(calculatedLevel);

  try {
    localStorage.setItem('kfl_learning_state_v3', JSON.stringify(state));
  } catch (e) {
    console.warn('LocalStorage error:', e);
  }

  if (typeof currentUser !== 'undefined' && currentUser && typeof cloudUpdateProfile === 'function') {
    cloudUpdateProfile({
      name: state.name,
      avatar: state.avatar,
      xp: state.xp,
      streak: state.streak,
      level: state.level,
      rank: state.rank,
      confidence_scores: state.confidenceScores || {}
    });
  }
}

function calculateRank(level) {
  const ranks = [
    'Junior Technician',      // Levels 1-3
    'Technician',             // Levels 4-6
    'Senior Technician',      // Levels 7-9
    'IT Specialist',          // Levels 10-12
    'Senior Specialist',      // Levels 13-15
    'IT Engineer',            // Levels 16-18
    'Senior Engineer',        // Levels 19-21
    'Lead Engineer',          // Levels 22-24
    'Principal Engineer',     // Levels 25-27
    'IT Architect',           // Levels 28-30
    'Senior Architect',       // Levels 31-33
    'IT Director',            // Levels 34+
  ];
  const rankIndex = Math.min(Math.floor((level - 1) / 3), ranks.length - 1);
  return ranks[rankIndex];
}

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

  state.completedLessons = { ...state.completedLessons, ...(cloudData.completedLessons || {}) };
  state.quizScores = { ...state.quizScores, ...(cloudData.quizScores || {}) };
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
}

function checkStreak() {
  const today = new Date().toDateString();
  const last = state.lastVisit;
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

function recordActivity(action, topicId = null, lessonId = null, details = null) {
  if (!state.studyHistory) state.studyHistory = [];
  state.studyHistory.push({
    action,
    topicId,
    lessonId,
    details,
    timestamp: new Date().toISOString()
  });
  if (state.studyHistory.length > 50) state.studyHistory.shift();
  saveState();
}
