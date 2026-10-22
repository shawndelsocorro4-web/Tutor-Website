/* ===================================================================
   dashboard.js — Dashboard View & Statistics
   =================================================================== */

function renderDashboard() {
  const name = state.name || 'Learner';
  setText('heroGreeting', `Welcome back, ${name}! 👋`);
  
  const completedCount = Object.keys(state.completedLessons).length;
  setText('statCompleted', completedCount);
  setText('statStreak', state.streak || 1);
  setText('statXP', (state.xp || 0).toLocaleString());

  const scores = Object.values(state.quizScores);
  const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : '-';
  setText('statQuizScore', typeof avg === 'number' ? `${avg}%` : '-');

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
