/* ===================================================================
   progress.js — My Progress & Mastery Tracking
   =================================================================== */

function getTopicMastery(topicIdx) {
  const topic = TOPICS[topicIdx];
  if (!topic || !topic.lessons.length) return { pct: 0, tier: 'not_started', label: 'Not Started' };

  let totalPoints = 0;
  const maxPoints = topic.lessons.length * 100;

  topic.lessons.forEach(l => {
    const key = topic.id + '-' + l.id;
    let lessonScore = 0;

    if (state.completedLessons[key]) lessonScore += 40;

    const qScore = state.quizScores[l.id] || 0;
    if (qScore >= 80) lessonScore += 35;
    else if (qScore >= 50) lessonScore += 15;

    if (state.completedLessons[key]) lessonScore += 15;

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

function renderProgress() {
  const isGuest = !(typeof currentUser !== 'undefined' && currentUser);
  const container = document.getElementById('progressContent');
  if (!container) return;
  
  // Block guest access
  if (isGuest) {
    container.innerHTML = '<div class="empty-state" style="padding:60px 20px;text-align:center;"><i class="fas fa-lock" style="font-size:3rem;opacity:0.3;display:block;margin-bottom:16px;"></i><h3 style="color:var(--text-muted);margin:16px 0;">Sign In Required</h3><p style="color:var(--text-muted);margin-bottom:24px;">Guests can only view the Leaderboard. Please sign in or create an account to access your learning progress and curriculum mastery.</p><button class="btn-primary" onclick="openAuthModal()" style="margin-top:16px;"><i class="fas fa-sign-in-alt"></i> Sign In Now</button></div>';
    return;
  }
  
  container.innerHTML = '';

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
