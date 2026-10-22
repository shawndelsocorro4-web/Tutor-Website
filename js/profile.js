/* ===================================================================
   profile.js — Employee Profile & Activity Timeline
   =================================================================== */

function renderProfile() {
  updateProfileUI();

  const xp = state.xp || 0;
  const xpPerLevel = 100;
  const level = Math.max(1, Math.floor(xp / xpPerLevel) + 1);
  const xpIntoLevel = xp % xpPerLevel;
  const xpToNext = xpPerLevel - xpIntoLevel;
  const pct = Math.round((xpIntoLevel / xpPerLevel) * 100);

  // Update profile header
  setText('profileFullName', state.name || 'Employee');
  setText('profileSubtitle', 'IT Professional');
  setText('profileRoleBadge', state.rank || 'Novice');
  setText('profileLevelBadge', `Level ${state.level || 1}`);
  
  const profileAvatar = document.getElementById('profileLargeAvatar');
  if (profileAvatar) profileAvatar.textContent = state.avatar || '👨💼';

  // Update XP banner
  setText('profileXPAmount', `${xp.toLocaleString()} XP`);
  setText('profileXPToNext', `${xpToNext} XP`);
  setText('profileXPBarLabel', `${xpIntoLevel} XP this level`);
  setText('profileXPBarMax', `${xpPerLevel} XP to next`);
  const bar = document.getElementById('profileXPBar');
  if (bar) bar.style.width = pct + '%';

  // Update stats
  setText('pStatXP', `${(state.xp || 0).toLocaleString()} XP`);
  setText('pStatLevel', `Level ${state.level || 1} - ${state.rank || 'Novice'}`);
  setText('pStatStreak', `${state.streak || 1} Day${(state.streak || 1) !== 1 ? 's' : ''}`);
  
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

  // Update activity timeline
  const timeline = document.getElementById('profileActivityTimeline');
  if (!timeline) return;

  const history = state.studyHistory || [];
  if (!history.length) {
    timeline.innerHTML = '<div class="empty-state"><i class="fas fa-inbox"></i><p>No recent activity recorded yet. Start a lesson to build your history!</p></div>';
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
