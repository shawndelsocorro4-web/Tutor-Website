/* ===================================================================
   achievements.js — Badges & Achievements System
   =================================================================== */

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

function unlockAchievement(badgeId) {
  if (state.achievements && state.achievements[badgeId]) return;

  const badge = ACHIEVEMENTS_LIST.find(b => b.id === badgeId);
  if (!badge) return;

  if (!state.achievements) state.achievements = {};
  state.achievements[badgeId] = true;
  addXP(badge.xpBonus);

  setText('unlockedBadgeIcon', badge.icon);
  setText('unlockedBadgeTitle', badge.name);
  setText('unlockedBadgeDesc', badge.desc);
  openModal('badgeModal');
  launchConfetti();

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
