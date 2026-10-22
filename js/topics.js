/* ===================================================================
   topics.js — All Topics View & Navigation
   =================================================================== */

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

function applyTopicTheme(idx) {
  const colors = TOPIC_COLORS[idx % TOPIC_COLORS.length];
  document.documentElement.style.setProperty('--topic-primary', colors.bg);
  const topic = TOPICS[idx];
  if (topic) {
    document.documentElement.style.setProperty('--topic-gradient', topic.gradient);
  }
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
