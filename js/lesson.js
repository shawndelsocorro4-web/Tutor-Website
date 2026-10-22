/* ===================================================================
   lesson.js — Current lesson rendering, quizzes, and progression
   =================================================================== */

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

  const savedAnswer = state.quizAnswers?.[lesson.id]?.[0];
  if (Number.isInteger(savedAnswer)) {
    selectedInlineOptions[lesson.id] = savedAnswer;
    document.getElementById(`inline-opt-${lesson.id}-${savedAnswer}`)?.classList.add('selected');
  }

  if (state.quizPassed?.[lesson.id] || (state.quizScores?.[lesson.id] || 0) >= 80) {
    showInlineQuizResult(lesson, quiz.correct, true);
  } else if (Number.isInteger(savedAnswer)) {
    showInlineQuizResult(lesson, quiz.correct, false);
  }
}

function selectInlineOption(lid, idx) {
  if (state.quizPassed?.[lid] || (state.quizScores?.[lid] || 0) >= 80) return;
  selectedInlineOptions[lid] = idx;
  document.querySelectorAll(`[id^="inline-opt-${lid}-"]`).forEach(el => el.classList.remove('selected'));
  document.getElementById(`inline-opt-${lid}-${idx}`)?.classList.add('selected');
}

function showInlineQuizResult(lesson, correct, passed) {
  const lid = lesson.id;
  const savedAnswer = state.quizAnswers?.[lid]?.[0];
  const resultEl = document.getElementById(`inline-quiz-result-${lid}`);
  if (!resultEl) return;

  document.querySelectorAll(`[id^="inline-opt-${lid}-"]`).forEach((opt, index) => {
    if (index === correct) opt.classList.add('correct');
    if (index === savedAnswer && index !== correct) opt.classList.add('wrong');
    opt.classList.remove('selected');
  });
  resultEl.className = `quiz-result-banner show ${passed ? 'correct' : 'incorrect'}`;
  resultEl.innerHTML = passed
    ? `✅ <strong>Already passed (100%)!</strong> ${lesson.quiz.explanation || 'Great job!'} Your answer and XP are saved.`
    : `❌ <strong>Answer saved. Try again when you're ready.</strong> ${lesson.quiz.explanation || ''}`;

  const submitButton = document.querySelector(`#quiz-${lid} .btn-check`);
  if (submitButton) {
    submitButton.disabled = passed;
    if (passed) submitButton.innerHTML = '<i class="fas fa-check-circle"></i> Answer Saved';
  }
}

async function syncQuizAnswer(topic, lesson, score, totalQuestions, passed, answers) {
  if (typeof cloudSaveQuizResult !== 'function' || typeof currentUser === 'undefined' || !currentUser) return;
  const saved = await cloudSaveQuizResult(topic.id, lesson.id, score, totalQuestions, passed, answers);
  if (!saved) {
    showFeedback(false, 'Quiz sync incomplete', 'Your answer is saved on this device, but the complete quiz update could not be confirmed in your account. Please check your connection and try again.', null);
  }
}

async function submitInlineQuiz(lid, correct) {
  if (state.quizPassed?.[lid] || (state.quizScores?.[lid] || 0) >= 80) return;
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
  if (!lesson || !topic || !resultEl) return;

  resultEl.className = `quiz-result-banner show ${isCorrect ? 'correct' : 'incorrect'}`;
  resultEl.innerHTML = isCorrect
    ? `✅ <strong>Passed (100%)!</strong> ${lesson?.quiz?.explanation || 'Great job!'}`
    : `❌ <strong>Need another attempt:</strong> ${lesson?.quiz?.explanation || ''} <br><br>💡 <em>Hint: Re-read the analogy box and try again!</em>`;

  state.quizAnswers = state.quizAnswers || {};
  state.quizPassed = state.quizPassed || {};
  state.quizAnswers[lid] = { 0: sel };
  state.quizScores[lid] = isCorrect ? 100 : 0;
  state.quizPassed[lid] = isCorrect;
  if (isCorrect) addXP(10);
  else saveState();
  await syncQuizAnswer(topic, lesson, isCorrect ? 100 : 0, 1, isCorrect, state.quizAnswers[lid]);

  if (isCorrect) {
    addTutorMessage(getTutorMsg('correct'));
    unlockAchievement('quiz_whiz');
    checkMasteryBadges();
    launchMiniConfetti();
  } else {
    addTutorMessage("Don't worry about missing it! Read the explanation above, re-read the analogy, and select the correct option! 💪");
  }
}

// ===== MULTI-QUESTION QUIZ (MILESTONE EXAMS) =====
const multiQuizState = {};
const mqSelected = {};

function buildMultiQuiz(lesson) {
  const cid = `multi-quiz-${lesson.id}`;
  const container = document.getElementById(cid);
  if (!container || !lesson.quizzes) return;

  const answers = { ...(state.quizAnswers?.[lesson.id] || {}) };
  const correctCount = Object.entries(answers).reduce((count, [index, selected]) => (
    selected === lesson.quizzes[Number(index)]?.correct ? count + 1 : count
  ), 0);
  multiQuizState[lesson.id] = {
    current: 0,
    score: correctCount,
    answers,
    priorPassed: Boolean(state.quizPassed?.[lesson.id])
  };

  if (state.quizPassed?.[lesson.id]) {
    renderMultiResult(lesson, state.quizScores[lesson.id], true);
    return;
  }

  const firstUnanswered = lesson.quizzes.findIndex((_, index) => answers[index] === undefined);
  if (firstUnanswered === -1) {
    renderMultiResult(lesson, state.quizScores?.[lesson.id] || 0, false);
    return;
  }
  renderMultiQuestion(lesson, firstUnanswered, container);
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
        <span class="quiz-score-badge">Score: ${multiQuizState[lesson.id].score}/${Object.keys(multiQuizState[lesson.id].answers).length}</span>
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
        ${qIdx > 0 ? `<button class="btn-secondary" onclick="restartMultiQuiz('${lesson.id}')">🔄 Restart Exam</button>` : ''}
      </div>
    </div>
  `;
}

function selectMQOption(lid, qIdx, optIdx) {
  if (multiQuizState[lid]?.answers[qIdx] !== undefined) return;
  mqSelected[`${lid}-${qIdx}`] = optIdx;
  document.querySelectorAll(`[id^="mq-opt-${lid}-${qIdx}-"]`).forEach(el => el.classList.remove('selected'));
  document.getElementById(`mq-opt-${lid}-${qIdx}-${optIdx}`)?.classList.add('selected');
}

async function submitMQAnswer(lid, qIdx, correct) {
  if (!multiQuizState[lid] || multiQuizState[lid].answers[qIdx] !== undefined) return;
  const sel = mqSelected[`${lid}-${qIdx}`];
  if (sel === undefined) {
    addTutorMessage('Please choose an answer before submitting! 😊');
    return;
  }

  const lesson = TOPICS.flatMap(t => t.lessons).find(l => l.id === lid);
  const topic = TOPICS.find(t => t.lessons.some(l => l.id === lid));
  if (!lesson || !topic) return;
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

  multiQuizState[lid].answers[qIdx] = sel;
  if (isCorrect) multiQuizState[lid].score++;
  state.quizAnswers = state.quizAnswers || {};
  state.quizAnswers[lid] = { ...multiQuizState[lid].answers };
  const answersComplete = Object.keys(multiQuizState[lid].answers).length === qs.length;
  const attemptScore = Math.round((multiQuizState[lid].score / qs.length) * 100);
  const passed = answersComplete && attemptScore >= 80;
  state.quizScores[lid] = attemptScore;
  state.quizPassed = state.quizPassed || {};
  state.quizPassed[lid] = passed;
  if (passed && !multiQuizState[lid].priorPassed) {
    addXP(Math.round(attemptScore / 10) * 3);
    launchConfetti();
    if (attemptScore === 100) unlockAchievement('quiz_whiz');
    checkMasteryBadges();
  } else {
    saveState();
  }
  await syncQuizAnswer(topic, lesson, attemptScore, qs.length, passed, state.quizAnswers[lid]);

  const res = document.getElementById(`mq-result-${lid}-${qIdx}`);
  res.className = `quiz-result-banner show ${isCorrect ? 'correct' : 'incorrect'}`;
  res.innerHTML = isCorrect
    ? `✅ <strong>Correct!</strong> ${q.explanation || ''}`
    : `❌ <strong>Not quite:</strong> ${q.explanation || ''} (Correct answer was ${['A','B','C','D'][correct]})`;

  // Advance only after the submitted answer has been saved locally and to the cloud.
  setTimeout(() => {
    const container = document.getElementById(`multi-quiz-${lid}`);
    if (!container) return;

    if (!answersComplete) {
      const nextQuestion = qs.findIndex((_, index) => multiQuizState[lid].answers[index] === undefined);
      if (nextQuestion >= 0) renderMultiQuestion(lesson, nextQuestion, container);
    } else {
      const finalScore = multiQuizState[lid].score;
      const total = qs.length;
      const pct = Math.round((finalScore / total) * 100);
      const passed = state.quizPassed[lid];

      renderMultiResult(lesson, pct, passed);

      addTutorMessage(passed
        ? `🏆 Fantastic result! ${pct}% demonstrates real competency!`
        : `📚 You scored ${pct}%. Review the core concepts and retry — you're close to passing!`);
    }
  }, isCorrect ? 700 : 1300);
}

function renderMultiResult(lesson, score, passed) {
  const container = document.getElementById(`multi-quiz-${lesson.id}`);
  if (!container) return;
  const total = lesson.quizzes.length;
  const savedAnswers = state.quizAnswers?.[lesson.id] || {};
  const recordedCorrectCount = Object.entries(savedAnswers).reduce((count, [index, selected]) => (
    selected === lesson.quizzes[Number(index)]?.correct ? count + 1 : count
  ), 0);
  const correctCount = Object.keys(savedAnswers).length
    ? recordedCorrectCount
    : Math.round((score / 100) * total);
  const alreadyPassed = passed && Boolean(state.quizPassed?.[lesson.id]);
  container.innerHTML = `
    <div class="quiz-final-result ${passed ? 'pass' : 'fail'}">
      <div class="quiz-final-icon">${score === 100 ? '🏆' : passed ? '🎉' : '📚'}</div>
      <h3>${alreadyPassed ? 'Quiz Already Passed' : score === 100 ? 'Perfect Score!' : passed ? 'Quiz Passed! (Mastery Demonstrated)' : `Score: ${score}% (Need 80% to Pass)`}</h3>
      <p>You scored <strong>${correctCount} out of ${total}</strong> (${score}%)</p>
      <p style="color:var(--text-muted);font-size:0.9rem;margin-top:8px;">
        ${passed
          ? 'Your answers and XP reward are saved. You will not earn XP for this quiz again.'
          : 'Your answers are saved. Review the lesson sections and retry the exam when ready.'}
      </p>
      <div style="display:flex;gap:12px;justify-content:center;margin-top:18px;">
        ${!passed ? `<button class="btn-primary" onclick="restartMultiQuiz('${lesson.id}')">🔄 Try Again</button>` : ''}
        ${passed ? `<button class="btn-secondary" onclick="nextLesson()">Next Lesson ➡️</button>` : ''}
      </div>
    </div>
  `;
}

async function restartMultiQuiz(lid) {
  const lesson = TOPICS.flatMap(topic => topic.lessons).find(item => item.id === lid);
  const topic = TOPICS.find(item => item.lessons.some(lessonItem => lessonItem.id === lid));
  if (!lesson || !topic) return;

  state.quizAnswers = state.quizAnswers || {};
  state.quizAnswers[lid] = {};
  state.quizScores[lid] = 0;
  state.quizPassed = state.quizPassed || {};
  state.quizPassed[lid] = false;
  multiQuizState[lid] = { current: 0, score: 0, answers: {}, priorPassed: false };
  saveState();
  await syncQuizAnswer(topic, lesson, 0, lesson.quizzes.length, false, {});
  const container = document.getElementById(`multi-quiz-${lid}`);
  if (container) renderMultiQuestion(lesson, 0, container);
}

// ===== LESSON ADVANCEMENT =====
function nextLesson() {
  const topic = TOPICS[state.currentTopicIdx];
  const lesson = topic.lessons[state.currentLessonIdx];
  const key = topic.id + '-' + lesson.id;

  // Enforce passing check if quiz exists
  const qScore = state.quizScores[lesson.id] || 0;
  if ((lesson.quiz || lesson.quizzes) && !state.quizPassed?.[lesson.id]) {
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
    showFeedback(true, '🎉 Curriculum Complete!', 'You finished all 9 topics in KFL Learning Hub! You are truly exceptional!', 500);
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
