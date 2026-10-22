/* ===================================================================
   tutor.js — Tutor Conversation & Recommendations
   =================================================================== */

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

function getRecommendation() {
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
