/* ===================================================================
   app.js — LearnPath v2.0 Enhanced Application Logic
   =================================================================== */

// ===== STATE =====
let state = {
  currentTopicIdx: 0,
  currentLessonIdx: 0,
  xp: 0,
  streak: 1,
  completedLessons: {},
  quizScores: {},
  darkMode: false,
  lastVisit: null,
  totalTimeSpent: 0,
  hintsUsed: 0,
};

// ===== TOPIC COLOR CLASSES =====
const TOPIC_COLORS = [
  { bg: '#7c3aed', light: '#ede9fe', text: '#4c1d95' },
  { bg: '#1d4ed8', light: '#dbeafe', text: '#1e3a8a' },
  { bg: '#b45309', light: '#fef3c7', text: '#78350f' },
  { bg: '#0369a1', light: '#e0f2fe', text: '#0c4a6e' },
  { bg: '#ca8a04', light: '#fefce8', text: '#713f12' },
  { bg: '#0f766e', light: '#ccfbf1', text: '#134e4a' },
  { bg: '#15803d', light: '#dcfce7', text: '#14532d' },
  { bg: '#065f46', light: '#d1fae5', text: '#022c22' },
  { bg: '#1d4ed8', light: '#dbeafe', text: '#1e3a8a' },
];

// ===== TUTOR RESPONSES =====
const TUTOR_RESPONSES = {
  greeting: [
    "Great to see you! Ready to learn something awesome today? 🚀",
    "Welcome back, Learner! I've been waiting for you! 🦉",
    "Hello! Let's make today's session count! Let's go! 🌟",
  ],
  encourage: [
    "You're doing absolutely amazing! Keep going! 💪",
    "Every expert was once a beginner — and you're learning fast! ⭐",
    "That's the spirit! I'm so proud of your progress! 🎉",
    "You've totally got this! One step at a time! 🌟",
    "Incredible effort! You should be proud of yourself! 🏆",
  ],
  correct: [
    "🎯 Perfect answer! You nailed it!",
    "✅ Exactly right! You're really getting this!",
    "🌟 Excellent! That's spot on!",
    "🏆 Brilliant! You understood it perfectly!",
  ],
  incorrect: [
    "🤔 Not quite — but that's okay! Let me explain it differently...",
    "💡 Almost there! Let's look at this from another angle...",
    "📚 Good try! Here's a hint to help you understand...",
    "🔄 Let's revisit this — sometimes it takes a few tries!",
  ],
  cms: ["Great explanation! A CMS = system for managing website content without coding. ✅", "Perfect! You've got the core idea of what a CMS does! 🎯"],
  'payload-features': ["Nice! Payload is headless + code-first — that's the key combo! 💡", "Exactly! Headless means content and display are separate, which gives developers freedom! 🔧"],
  npx: ["Right! npx = run a package temporarily without installing it globally. Smart! 🎯", "Perfect! npx borrows the tool, runs it, then returns it. No clutter! ✨"],
  'config-collections': ["Spot on! payload.config.ts = brain. src/collections/ = content type definitions. ✅", "Exactly right! The config wires everything together! 🧠"],
  products: ["Great product fields! name (text), price (number), description (richText), image (upload) is a solid combo! 🛍️", "Nice! You're designing collections like a real developer now! 💪"],
  'admin-panel': ["Perfect! The admin panel empowers non-technical users to manage content independently! 🎛️", "Exactly right! It's the bridge between developers and content creators! ✅"],
  api: ["Correct! GET /api/posts/abc123 fetches the ONE post with that specific ID! 📡", "Right! IDs are unique identifiers — like a document's fingerprint! 🎯"],
  roles: ["Great role design! Teachers create, students read, admins manage everything! 🎓", "Perfect! Role-based access control is key in any real application! 🔐"],
  'git-github': ["You've got it! Git = local version control tool. GitHub = cloud hosting. 🌥️", "Perfect! They work together but are different things. Git without GitHub still works! ✅"],
  repo: ["Great repo naming choice! lowercase-with-hyphens is the standard! 📁", "Smart thinking! Public repos build your portfolio — private ones protect sensitive work! 👍"],
  typescript: ["Spot on! TypeScript catches type errors at write-time, not run-time! 🔷", "Great example! That's exactly when TypeScript saves you hours of debugging! ✅"],
  excel: ["Nice observation! Excel auto-aligns numbers right and text left — very useful! 📊", "You're already thinking like a spreadsheet pro! 🌟"],
  sheets: ["Correct! Enter moves down, Tab moves right — great for fast data entry! 📈", "Great catch! These shortcuts make Google Sheets much faster to use! ⚡"],
  vscode: ["Awesome start! Getting comfortable with the interface is the first step! 💻", "Great choice of theme! You'll be spending a lot of time in VS Code — make it yours! 🎨"],
  default: [
    "Great question! Let me think about that... The key is to break it down step by step! 🤔",
    "You're really engaging with the material — that curiosity will take you far! 🌟",
    "Interesting! Remember you can always go back and review previous lessons anytime! 📚",
    "You're asking exactly the right questions! That means you're truly learning! 💡",
    "Keep that energy going! Every question brings you closer to mastery! 🚀",
  ],
};

const PRACTICE_HINTS = {
  cms: { keywords: ['content','manage','system','website','edit','publish','digital'], hint: "Think: CMS helps you manage content without touching code!", success: "Great answer! A CMS lets you manage digital content easily! 🎉", tip: "Hint: think about words like 'content', 'manage', 'website'..." },
  'payload-features': { keywords: ['headless','code','typescript','flexible','api','control','open','developer'], hint: "Focus on what makes Payload different from WordPress!", success: "Excellent! Payload = headless + code-first + developer control! 🔧", tip: "Hint: 'headless', 'code-first', 'flexibility', 'API'..." },
  npx: { keywords: ['run','package','internet','install','temporary','execute','download','tool'], hint: "npx is about running tools temporarily from the internet.", success: "Exactly right! npx runs packages temporarily — no permanent install! 📦", tip: "Hint: think 'borrow a tool to run it once'..." },
  'config-collections': { keywords: ['payload.config','collections','src','folder','register'], hint: "Think about the project structure we explored!", success: "Perfect! payload.config.ts registers collections, src/collections/ stores them! ✅", tip: "Hint: look back at the file structure diagram..." },
  products: { keywords: ['name','price','description','image','text','number','upload','richtext','stock'], hint: "Think about what you see on a product page on Amazon!", success: "Excellent field choices! You think like a real CMS developer! 🛍️", tip: "Hint: a product page has a name, price, description, image..." },
  'admin-panel': { keywords: ['content','editor','manage','user','blog','website','easy','non-technical','marketing'], hint: "Who would benefit from a no-code dashboard?", success: "Perfect! The admin panel empowers non-coders to manage content! 🎛️", tip: "Hint: bloggers, marketing teams, business owners..." },
  api: { keywords: ['get','fetch','specific','single','one','id','identifier','unique','retrieve'], hint: "GET = fetch/read. abc123 = unique document ID.", success: "Correct! It retrieves the single post with ID abc123! 📡", tip: "Hint: GET fetches, abc123 is the unique document address..." },
  roles: { keywords: ['admin','teacher','student','editor','viewer','access','permission','create','read'], hint: "Think about different people in a school and what they need to do!", success: "Excellent role design! Great system architect thinking! 🎓", tip: "Hint: teachers create lessons, students view them, admin manages all..." },
  'git-github': { keywords: ['git','github','local','online','cloud','track','store','host','version','tool'], hint: "One lives on your computer, one lives in the cloud!", success: "You've got it! Git tracks locally, GitHub stores in the cloud! ☁️", tip: "Hint: one is installed on your computer, the other is a website..." },
  repo: { keywords: ['name','public','private','recipe','project','share','portfolio'], hint: "Good naming = short, lowercase, hyphens-not-spaces!", success: "Great choices! Your reasoning shows real understanding! 📁", tip: "Hint: recipe-website or my-recipes are good names..." },
  typescript: { keywords: ['type','error','catch','bug','safe','before','compile','intellisense','autocomplete','check'], hint: "TypeScript's superpower is about WHEN errors are caught!", success: "Spot on! TypeScript catches errors at write-time, saving debugging time! 🔷", tip: "Hint: the benefit is about catching errors EARLY, before running..." },
  excel: { keywords: ['cell','data','type','number','text','right','left','align','format','display'], hint: "Notice the positioning of numbers vs text in cells!", success: "Nice observation! Numbers right-align, text left-aligns by default! 📊", tip: "Hint: look at WHERE in the cell the data appears..." },
  sheets: { keywords: ['next','down','move','enter','cell','navigate','below','cursor'], hint: "Watch where your cursor goes after pressing Enter!", success: "Exactly! Enter moves down — perfect for fast list entry! 📈", tip: "Hint: where does your selection move after pressing Enter?" },
  vscode: { keywords: ['theme','dark','color','explorer','files','sidebar','editor','terminal','interface'], hint: "Describe what you see in the VS Code window!", success: "Great start! Getting familiar with the interface is step one! 💻", tip: "Hint: mention the sidebar, editor area, bottom terminal..." },
};

// ===== INIT =====
window.onload = function () {
  loadState();
  checkStreak();
  createSplashParticles();
  if (state.darkMode) {
    document.body.classList.add('dark-mode');
    const icon = document.getElementById('themeIcon');
    if (icon) icon.className = 'fas fa-sun';
  }
  setTimeout(() => {
    const splash = document.getElementById('splashScreen');
    splash.style.opacity = '0';
    splash.style.transform = 'scale(1.05)';
    setTimeout(() => {
      splash.classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      initApp();
    }, 500);
  }, 2800);
};

function createSplashParticles() {
  const container = document.getElementById('splashParticles');
  if (!container) return;
  const colors = ['#7c3aed','#ec4899','#06b6d4','#10b981','#f59e0b','#8b5cf6'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 18 + 4;
    p.style.cssText = `width:${size}px;height:${size}px;background:${colors[Math.floor(Math.random()*colors.length)]};left:${Math.random()*100}%;animation-duration:${Math.random()*12+6}s;animation-delay:${Math.random()*6}s;border-radius:${Math.random()>0.5?'50%':'4px'};`;
    container.appendChild(p);
  }
}

function checkStreak() {
  const today = new Date().toDateString();
  const last  = state.lastVisit;
  if (last) {
    const diff = Math.floor((new Date(today) - new Date(last)) / 86400000);
    if (diff === 1) state.streak = (state.streak || 1) + 1;
    else if (diff > 1) state.streak = 1;
  }
  state.lastVisit = today;
  saveState();
}

function initApp() {
  buildTopicTree();
  renderDashboard();
  renderProgress();
  renderTopicsView();
  loadLesson();
  updateSidebarProgress();
  updateXPDisplay();
  applyTopicTheme(state.currentTopicIdx);
  // Mobile overlay
  if (!document.getElementById('sidebarOverlay')) {
    const ov = document.createElement('div');
    ov.className = 'sidebar-overlay'; ov.id = 'sidebarOverlay';
    ov.onclick = closeMobileSidebar;
    document.body.appendChild(ov);
  }
}

// ===== STATE =====
function saveState() { localStorage.setItem('learnpathState_v2', JSON.stringify(state)); }
function loadState() {
  try {
    const s = localStorage.getItem('learnpathState_v2');
    if (s) state = { ...state, ...JSON.parse(s) };
  } catch(e) {}
}

// ===== VIEWS =====
function showView(v) {
  document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const viewEl = document.getElementById('view-' + v);
  if (viewEl) viewEl.classList.add('active');
  const navEl  = document.querySelector(`[data-view="${v}"]`);
  if (navEl)  navEl.classList.add('active');
  const crumbs = { dashboard:'🏠 Dashboard', lesson:'📖 Current Lesson', progress:'📊 My Progress', topics:'📚 All Topics' };
  const bc = document.getElementById('topbarBreadcrumb');
  if (bc) bc.textContent = crumbs[v] || v;
  if (v === 'lesson') { closeMobileSidebar(); renderProgress(); }
  if (v === 'dashboard') renderDashboard();
}

// ===== SIDEBAR =====
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

// ===== DARK MODE =====
function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  document.body.classList.toggle('dark-mode', state.darkMode);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.className = state.darkMode ? 'fas fa-sun' : 'fas fa-moon';
  saveState();
}

// ===== TOPIC THEME =====
function applyTopicTheme(idx) {
  const topic = TOPICS[idx];
  if (!topic) return;
  document.documentElement.style.setProperty('--topic-primary', topic.color);
  document.documentElement.style.setProperty('--topic-gradient', topic.gradient);
}

// ===== TOPIC TREE =====
function buildTopicTree() {
  const tree = document.getElementById('topicTree');
  if (!tree) return;
  tree.innerHTML = '';
  TOPICS.forEach((topic, idx) => {
    const done = totalInTopic(idx);
    const isCur = idx === state.currentTopicIdx;
    const item = document.createElement('div');
    item.className = `topic-tree-item ${isCur ? 'active' : ''}`;
    item.style.setProperty('--item-color', topic.color);
    item.onclick = () => jumpToTopic(idx);
    item.innerHTML = `
      <span class="topic-icon">${topic.emoji}</span>
      <span class="topic-tree-label">${topic.name}</span>
      ${done > 0 ? `<span class="topic-badge" style="background:${topic.color}">${done}/${topic.lessons.length}</span>` : ''}
    `;
    tree.appendChild(item);
  });
}

function jumpToTopic(idx) {
  state.currentTopicIdx = idx;
  state.currentLessonIdx = 0;
  saveState();
  applyTopicTheme(idx);
  buildTopicTree();
  loadLesson();
  renderDashboard();
  showView('lesson');
}

// ===== DASHBOARD =====
function renderDashboard() {
  const h = new Date().getHours();
  const greet = h < 12 ? '🌅 Good morning' : h < 17 ? '☀️ Good afternoon' : '🌙 Good evening';
  const hg = document.getElementById('heroGreeting');
  if (hg) hg.textContent = `${greet}, Learner!`;

  const totalDone = Object.keys(state.completedLessons).length;
  setText('statCompleted', totalDone);
  setText('statStreak', state.streak + (state.streak > 1 ? ' 🔥' : ''));
  setText('statXP', state.xp.toLocaleString());
  const best = Object.values(state.quizScores).length > 0 ? Math.max(...Object.values(state.quizScores)) + '%' : '—';
  setText('statQuizScore', best);

  const topic  = TOPICS[state.currentTopicIdx];
  const lesson = topic?.lessons[state.currentLessonIdx];
  if (topic && lesson) {
    setText('continueIcon', topic.emoji);
    setText('continueTopic', `Topic ${state.currentTopicIdx+1}: ${topic.name}`);
    setText('continueLessonTitle', `Lesson ${state.currentLessonIdx+1}: ${lesson.title}`);
    const pct = Math.round((totalInTopic(state.currentTopicIdx)/topic.lessons.length)*100);
    const cf = document.getElementById('continueProgressFill');
    if (cf) cf.style.width = pct + '%';
    setText('continueProgressPct', pct + '% complete');
  }

  const grid = document.getElementById('dashboardTopicsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  TOPICS.forEach((t, idx) => {
    const done = totalInTopic(idx);
    const pct  = Math.round((done/t.lessons.length)*100);
    const isCur = idx === state.currentTopicIdx;
    const card = document.createElement('div');
    card.className = `topic-card ${isCur ? 'topic-card-active' : ''}`;
    card.style.borderTop = `4px solid ${t.color}`;
    card.innerHTML = `
      <div class="topic-emoji">${t.emoji}</div>
      <div class="topic-name">${t.name}</div>
      <div class="topic-progress-text">${done}/${t.lessons.length} lessons</div>
      <div class="topic-mini-progress">
        <div class="topic-mini-fill" style="width:${pct}%;background:${t.gradient}"></div>
      </div>
      ${isCur ? '<div class="badge-current">Current</div>' : ''}
    `;
    card.onclick = () => jumpToTopic(idx);
    grid.appendChild(card);
  });
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
function totalInTopic(idx) {
  const t = TOPICS[idx];
  if (!t) return 0;
  return t.lessons.filter(l => state.completedLessons[t.id+'-'+l.id]).length;
}

// ===== LESSON LOADER =====
function loadLesson() {
  const topic  = TOPICS[state.currentTopicIdx];
  const lesson = topic?.lessons[state.currentLessonIdx];
  if (!topic || !lesson) return;

  applyTopicTheme(state.currentTopicIdx);

  setText('lessonTopicTag', topic.name);
  const tag = document.getElementById('lessonTopicTag');
  if (tag) tag.style.background = topic.gradient;
  setText('lessonNum', `Lesson ${state.currentLessonIdx+1} of ${topic.lessons.length}`);
  setText('lessonTitle', lesson.title);
  setText('lessonXPReward', lesson.xp);

  const body = document.getElementById('lessonBody');
  if (body) {
    body.innerHTML = lesson.content;
    body.style.opacity = '0';
    body.style.transform = 'translateY(16px)';
    requestAnimationFrame(() => {
      body.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      body.style.opacity = '1';
      body.style.transform = 'translateY(0)';
    });
  }

  // Build inline quiz
  if (lesson.quiz) buildInlineQuiz(lesson);
  // Multi-question quiz support
  if (lesson.quizzes) buildMultiQuiz(lesson);

  buildChecklist(lesson);
  addTutorMessage(getTutorMsg('encourage'));

  const prev = document.getElementById('btnPrevLesson');
  if (prev) prev.disabled = (state.currentLessonIdx === 0 && state.currentTopicIdx === 0);

  buildTopicTree();
  updateLessonSidebarProgress();

  // Auto-run code editors
  setTimeout(() => {
    document.querySelectorAll('[id^="editor-"]').forEach(ed => {
      const pid = ed.id.replace('editor-', 'preview-');
      if (document.getElementById(pid)) runEditorCode(ed.id, pid);
    });
  }, 300);
}

function updateLessonSidebarProgress() {
  const topic = TOPICS[state.currentTopicIdx];
  if (!topic) return;
  const done = totalInTopic(state.currentTopicIdx);
  const pct  = Math.round((done/topic.lessons.length)*100);
  updateSidebarProgress();
}

// ===== INLINE QUIZ (single question) =====
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
          <div class="quiz-inline-title">Knowledge Check</div>
          <div class="quiz-inline-sub">Test your understanding</div>
        </div>
        <div class="quiz-xp-pill">+5 XP</div>
      </div>
      <p class="quiz-question">${quiz.question}</p>
      <div class="quiz-options" id="inline-quiz-options-${lesson.id}">
        ${quiz.options.map((opt, i) => `
          <div class="quiz-option" onclick="selectInlineOption('${lesson.id}',${i})" id="inline-opt-${lesson.id}-${i}">
            <span class="option-letter">${letters[i]}</span>
            <span class="option-text">${opt}</span>
          </div>
        `).join('')}
      </div>
      <div id="inline-quiz-result-${lesson.id}" class="quiz-result-banner"></div>
      <button class="btn-check" onclick="submitInlineQuiz('${lesson.id}',${quiz.correct})">
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
  if (sel === undefined) { addTutorMessage('Pick an answer first! 😊'); return; }
  const opts = document.querySelectorAll(`[id^="inline-opt-${lid}-"]`);
  let isCorrect = sel === correct;
  opts.forEach((opt, i) => {
    if (i === correct) { opt.classList.add('correct'); opt.classList.remove('selected'); }
    else if (i === sel && !isCorrect) {
      opt.classList.add('wrong');
      opt.classList.add('shake');
      setTimeout(() => opt.classList.remove('shake'), 600);
    }
  });
  const resultEl = document.getElementById(`inline-quiz-result-${lid}`);
  const lesson   = TOPICS.flatMap(t => t.lessons).find(l => l.id === lid);
  resultEl.className = `quiz-result-banner show ${isCorrect ? 'correct' : 'incorrect'}`;
  resultEl.innerHTML = isCorrect
    ? `✅ <strong>Correct!</strong> ${lesson?.quiz?.explanation || 'Great job!'}`
    : `❌ <strong>Not quite.</strong> ${lesson?.quiz?.explanation || ''} <br><strong>Correct answer:</strong> ${['A','B','C','D'][correct]}`;
  if (isCorrect) {
    state.quizScores[lid] = 100;
    addXP(5);
    addTutorMessage(getTutorMsg('correct'));
    saveState();
    setTimeout(() => launchMiniConfetti(), 200);
  } else {
    addTutorMessage(getTutorMsg('incorrect') + " Don't worry — read the explanation and try moving on. You'll get it next time! 💪");
  }
}

// ===== MULTI-QUESTION QUIZ =====
const multiQuizState = {};

function buildMultiQuiz(lesson) {
  const cid = `multi-quiz-${lesson.id}`;
  const container = document.getElementById(cid);
  if (!container || !lesson.quizzes) return;
  multiQuizState[lesson.id] = { current: 0, score: 0, answers: {} };
  renderMultiQuestion(lesson, 0, container);
}

function renderMultiQuestion(lesson, qIdx, container) {
  const qs = lesson.quizzes;
  const q  = qs[qIdx];
  const letters = ['A','B','C','D'];
  const progress = Math.round(((qIdx) / qs.length) * 100);
  container.innerHTML = `
    <div class="multi-quiz-box">
      <div class="multi-quiz-header">
        <span>Question ${qIdx+1} of ${qs.length}</span>
        <div class="quiz-progress-bar-wrap">
          <div class="quiz-progress-bar-fill" style="width:${progress}%"></div>
        </div>
        <span class="quiz-score-badge">Score: ${multiQuizState[lesson.id].score}/${qIdx}</span>
      </div>
      <p class="quiz-question" style="margin:16px 0;">${q.question}</p>
      <div class="quiz-options" id="mq-opts-${lesson.id}-${qIdx}">
        ${q.options.map((opt, i) => `
          <div class="quiz-option" onclick="selectMQOption('${lesson.id}',${qIdx},${i})" id="mq-opt-${lesson.id}-${qIdx}-${i}">
            <span class="option-letter">${letters[i]}</span>
            <span class="option-text">${opt}</span>
          </div>
        `).join('')}
      </div>
      <div id="mq-result-${lesson.id}-${qIdx}" class="quiz-result-banner"></div>
      <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;">
        <button class="btn-check" onclick="submitMQAnswer('${lesson.id}',${qIdx},${q.correct})">
          <i class="fas fa-check-circle"></i> Submit
        </button>
        ${qIdx > 0 ? `<button class="btn-secondary" onclick="buildMultiQuiz(TOPICS.flatMap(t=>t.lessons).find(l=>l.id==='${lesson.id}'))">↩ Restart</button>` : ''}
      </div>
    </div>
  `;
}

const mqSelected = {};
function selectMQOption(lid, qIdx, optIdx) {
  mqSelected[`${lid}-${qIdx}`] = optIdx;
  document.querySelectorAll(`[id^="mq-opt-${lid}-${qIdx}-"]`).forEach(el => el.classList.remove('selected'));
  document.getElementById(`mq-opt-${lid}-${qIdx}-${optIdx}`)?.classList.add('selected');
}

function submitMQAnswer(lid, qIdx, correct) {
  const sel = mqSelected[`${lid}-${qIdx}`];
  if (sel === undefined) { addTutorMessage('Please pick an answer first! 😊'); return; }
  const lesson = TOPICS.flatMap(t => t.lessons).find(l => l.id === lid);
  const qs     = lesson.quizzes;
  const q      = qs[qIdx];
  const isCorrect = sel === correct;
  document.querySelectorAll(`[id^="mq-opt-${lid}-${qIdx}-"]`).forEach((opt, i) => {
    if (i === correct) opt.classList.add('correct');
    else if (i === sel && !isCorrect) { opt.classList.add('wrong'); opt.classList.add('shake'); setTimeout(()=>opt.classList.remove('shake'),600); }
  });
  if (isCorrect) multiQuizState[lid].score++;
  const res = document.getElementById(`mq-result-${lid}-${qIdx}`);
  res.className = `quiz-result-banner show ${isCorrect ? 'correct' : 'incorrect'}`;
  res.innerHTML = isCorrect ? `✅ <strong>Correct!</strong> ${q.explanation||''}` : `❌ <strong>Not quite.</strong> ${q.explanation||''} Correct: ${['A','B','C','D'][correct]}`;
  // Next question after delay
  setTimeout(() => {
    const container = document.getElementById(`multi-quiz-${lid}`);
    if (!container) return;
    if (qIdx + 1 < qs.length) {
      renderMultiQuestion(lesson, qIdx + 1, container);
    } else {
      const finalScore = multiQuizState[lid].score;
      const total      = qs.length;
      const pct        = Math.round((finalScore/total)*100);
      state.quizScores[lid] = pct;
      addXP(Math.round(pct / 10) * 2);
      saveState();
      container.innerHTML = `
        <div class="quiz-final-result ${pct>=70?'pass':'fail'}">
          <div class="quiz-final-icon">${pct===100?'🏆':pct>=70?'🎉':'💪'}</div>
          <h3>${pct===100?'Perfect Score!':pct>=70?'Well Done!':'Keep Practicing!'}</h3>
          <p>You scored <strong>${finalScore}/${total}</strong> (${pct}%)</p>
          <p style="color:var(--text-muted);font-size:0.88rem;margin-top:6px;">${pct>=70?'Great understanding! Move on to the next lesson!':'Review the lesson content and try again when ready!'}</p>
          <button class="btn-primary" style="margin-top:16px;" onclick="renderMultiQuestion(TOPICS.flatMap(t=>t.lessons).find(l=>l.id==='${lid}'),0,this.closest('[id^=multi-quiz]'))">
            🔄 Try Again
          </button>
        </div>
      `;
      if (pct >= 70) { addTutorMessage(`🏆 Quiz complete! ${pct}% — fantastic work!`); launchMiniConfetti(); }
      else { addTutorMessage(`📚 ${pct}% — not bad! Review the lesson and try again when ready! You've got this! 💪`); }
    }
  }, isCorrect ? 800 : 1400);
}

// ===== CHECKLIST =====
function buildChecklist(lesson) {
  const container = document.getElementById('checklistItems');
  if (!container) return;
  container.innerHTML = '';
  const key   = TOPICS[state.currentTopicIdx].id + '-' + lesson.id;
  const isDone = state.completedLessons[key];
  lesson.checklist.forEach((item) => {
    const el = document.createElement('div');
    el.className = `checklist-item ${isDone ? 'done' : ''}`;
    el.innerHTML = `<div class="chk"><i class="fas fa-check"></i></div><span>${item}</span>`;
    el.onclick = () => el.classList.toggle('done');
    container.appendChild(el);
  });
}

// ===== CODE EDITOR =====
function runEditorCode(editorId, previewId) {
  const code   = document.getElementById(editorId)?.value || '';
  const iframe = document.getElementById(previewId);
  if (!iframe) return;
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open(); doc.write(code); doc.close();
}

// ===== PRACTICE CHECKING =====
function checkPractice(lessonId, category) {
  const inputEl    = document.getElementById(`practice-${lessonId}`);
  const feedbackEl = document.getElementById(`feedback-${lessonId}`);
  if (!inputEl || !feedbackEl) return;
  const answer = inputEl.value.trim().toLowerCase();
  if (answer.length < 8) {
    feedbackEl.className = 'answer-feedback show incorrect';
    feedbackEl.innerHTML = '⚠️ Write a bit more — even 1–2 sentences is perfect! I\'m here waiting! 😊';
    return;
  }
  const config = PRACTICE_HINTS[category];
  if (!config) {
    feedbackEl.className = 'answer-feedback show correct';
    feedbackEl.innerHTML = '✅ Good effort! Keep thinking and moving forward!';
    addXP(8); return;
  }
  const hit = config.keywords.some(kw => answer.includes(kw)) || answer.length > 60;
  if (hit) {
    feedbackEl.className = 'answer-feedback show correct';
    feedbackEl.innerHTML = `✅ ${config.success}`;
    addXP(10);
    addTutorMessage(getTutorMsg('encourage'));
    markChecklistItem(2);
    state.hintsUsed = Math.max(0, (state.hintsUsed||0) - 1);
    saveState();
  } else {
    feedbackEl.className = 'answer-feedback show incorrect';
    feedbackEl.innerHTML = `🤔 Almost! ${config.tip} Give it another go — I believe in you!`;
    addTutorMessage(`${config.hint} Try again! 💪`);
    state.hintsUsed = (state.hintsUsed||0) + 1;
  }
}

function markChecklistItem(idx) {
  const items = document.querySelectorAll('.checklist-item');
  if (items[idx]) items[idx].classList.add('done');
}

// ===== NAVIGATION =====
function nextLesson() {
  const topic  = TOPICS[state.currentTopicIdx];
  const lesson = topic.lessons[state.currentLessonIdx];
  const key    = topic.id + '-' + lesson.id;
  if (!state.completedLessons[key]) {
    state.completedLessons[key] = true;
    const xpGain = lesson.xp;
    addXP(xpGain);
    showFeedback(true, 'Lesson Complete! 🎉', `You finished "${lesson.title}"! Keep going — you're on fire!`, xpGain);
  }
  if (state.currentLessonIdx < topic.lessons.length - 1) {
    state.currentLessonIdx++;
  } else if (state.currentTopicIdx < TOPICS.length - 1) {
    showFeedback(true, `Topic Complete! 🏆`, `Incredible! You finished all of "${topic.name}"! Next topic unlocked!`, 50);
    state.currentTopicIdx++;
    state.currentLessonIdx = 0;
  } else {
    showFeedback(true, '🎓 Course Complete!', 'You finished the entire course! You are amazing — go build something great!', 500);
    return;
  }
  saveState();
  loadLesson();
  renderDashboard();
  updateSidebarProgress();
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

// ===== XP =====
function addXP(amount) {
  state.xp += amount;
  updateXPDisplay();
  saveState();
  showXPPopup(amount);
}

function updateXPDisplay() {
  setText('xpDisplay', state.xp.toLocaleString() + ' XP');
  setText('statXP', state.xp.toLocaleString());
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
    popup.style.top  = (r.top - 30) + 'px';
  } else {
    popup.style.right = '24px';
    popup.style.top   = '80px';
  }
  setTimeout(() => popup.remove(), 1500);
}

function updateSidebarProgress() {
  const total   = TOPICS.reduce((s, t) => s + t.lessons.length, 0);
  const done    = Object.keys(state.completedLessons).length;
  const pct     = Math.round((done / total) * 100);
  const fill    = document.getElementById('sidebarProgressFill');
  const pctEl   = document.getElementById('sidebarProgressPct');
  if (fill)  fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
}

// ===== TUTOR =====
function addTutorMessage(text) {
  const container = document.getElementById('tutorMessages');
  if (!container) return;
  // Typing indicator
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
    requestAnimationFrame(() => { msg.style.opacity = '1'; msg.style.transform = 'translateY(0)'; });
  }, 700);
}

function showTutorHint(text) { addTutorMessage(text); }

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
  setTimeout(() => addTutorMessage(getTutorResponseForMessage(text.toLowerCase())), 800);
}

function getTutorResponseForMessage(msg) {
  if (/help|confused|don.t understand|dont understand/.test(msg)) return "No worries at all! Confusion is part of learning! 😊 Try re-reading the analogy box — it explains things simply. Which part is tricky?";
  if (/hint|clue|stuck/.test(msg)) return "Here's a hint: look for the 🧠 Analogy box in the lesson. It always explains things in plain language! 💡";
  if (/hard|difficult|too much/.test(msg)) return "I totally understand — some concepts take time! Remember: every developer felt overwhelmed at the start. Take it one sentence at a time! 💪";
  if (/done|finished|complete/.test(msg)) return "Wonderful! Click 'Next Lesson' when you're ready to move forward! 🎉";
  if (/thank|thanks|appreciate/.test(msg)) return "You're so welcome! That's what I'm here for! Keep up the amazing work! 😊🦉";
  if (/skip|boring/.test(msg)) return "I recommend not skipping — every lesson builds on the last! But you can always navigate using 'All Topics'. 📚";
  if (/quiz|test/.test(msg)) return "Scroll down to find the 🧠 Knowledge Check quiz at the bottom of the lesson! 🎯";
  if (/next|forward/.test(msg)) return "Click the 'Next Lesson' button at the bottom of the lesson panel when you're ready! ➡️";
  if (/back|previous/.test(msg)) return "Click the 'Previous' button at the bottom left to go back to the last lesson! ⬅️";
  if (/progress/.test(msg)) return "Check the 'My Progress' tab in the sidebar to see detailed stats on every lesson! 📊";
  const d = TUTOR_RESPONSES.default;
  return d[Math.floor(Math.random()*d.length)];
}

function getTutorMsg(type) {
  const arr = TUTOR_RESPONSES[type] || TUTOR_RESPONSES.default;
  return arr[Math.floor(Math.random()*arr.length)];
}

// ===== MODALS =====
function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

function showFeedback(success, title, message, xpGained) {
  setText('feedbackIcon',   success ? '🎉' : '💪');
  setText('feedbackTitle',  title);
  setText('feedbackMessage', message);
  const xpEl = document.getElementById('feedbackXP');
  if (xpEl) {
    xpEl.textContent = xpGained ? `+${xpGained} XP` : '';
    xpEl.style.display = xpGained ? 'inline-flex' : 'none';
  }
  openModal('feedbackModal');
  if (success) launchConfetti();
}

// ===== CONFETTI =====
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#7c3aed','#ec4899','#06b6d4','#10b981','#f59e0b','#8b5cf6','#f43f5e'];
  const pieces = Array.from({length:150}, () => ({
    x: Math.random()*canvas.width, y: Math.random()*canvas.height - canvas.height,
    w: Math.random()*12+4, h: Math.random()*7+3,
    color: colors[Math.floor(Math.random()*colors.length)],
    r: Math.random()*Math.PI*2, rs: (Math.random()-0.5)*0.25,
    vx: (Math.random()-0.5)*4, vy: Math.random()*4+2,
    shape: Math.random()>0.5 ? 'rect' : 'circle',
  }));
  let frame = 0;
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.r += p.rs;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.r); ctx.fillStyle = p.color;
      if (p.shape === 'circle') { ctx.beginPath(); ctx.arc(0,0,p.w/2,0,Math.PI*2); ctx.fill(); }
      else ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 180) requestAnimationFrame(animate);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  animate();
}

function launchMiniConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const colors = ['#7c3aed','#ec4899','#10b981','#f59e0b'];
  const pieces = Array.from({length:40}, () => ({
    x: Math.random()*canvas.width*0.5 + canvas.width*0.25,
    y: canvas.height*0.4,
    w: Math.random()*8+3, h: Math.random()*5+2,
    color: colors[Math.floor(Math.random()*colors.length)],
    r: Math.random()*Math.PI*2, rs: (Math.random()-0.5)*0.2,
    vx: (Math.random()-0.5)*6, vy: Math.random()*(-6)-2,
    gravity: 0.15,
  }));
  let frame = 0;
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      p.vy += p.gravity; p.x += p.vx; p.y += p.vy; p.r += p.rs;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.r);
      ctx.fillStyle = p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 80) requestAnimationFrame(animate);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  animate();
}

// ===== PROGRESS VIEW =====
function renderProgress() {
  const container = document.getElementById('progressContent');
  if (!container) return;
  container.innerHTML = '';
  TOPICS.forEach((topic, topicIdx) => {
    const done = totalInTopic(topicIdx);
    const pct  = Math.round((done/topic.lessons.length)*100);
    const group = document.createElement('div');
    group.className = 'progress-topic-group';
    group.style.setProperty('--topic-color', topic.color);
    group.innerHTML = `
      <div class="progress-topic-header" onclick="this.parentElement.classList.toggle('expanded')">
        <span class="progress-topic-icon">${topic.emoji}</span>
        <div class="progress-topic-info">
          <div class="progress-topic-name">${topic.name}</div>
          <div class="progress-topic-bar shimmer-bar">
            <div class="progress-topic-fill" style="width:${pct}%;background:${topic.gradient}"></div>
          </div>
        </div>
        <span class="progress-topic-pct" style="color:${topic.color}">${pct}%</span>
        <i class="fas fa-chevron-down progress-chevron"></i>
      </div>
      <div class="progress-lessons-list">
        ${topic.lessons.map((lesson, li) => {
          const isDone  = state.completedLessons[topic.id+'-'+lesson.id];
          const isCur   = topicIdx===state.currentTopicIdx && li===state.currentLessonIdx;
          const status  = isDone ? 'done' : isCur ? 'current' : 'locked';
          const icon    = isDone ? '✓' : isCur ? '▶' : '○';
          return `<div class="progress-lesson-item" onclick="jumpToTopic(${topicIdx});state.currentLessonIdx=${li};saveState();loadLesson();showView('lesson');" style="cursor:pointer;">
            <div class="lesson-status-icon ${status}">${icon}</div>
            <span>Lesson ${li+1}: ${lesson.title}</span>
            ${isDone ? `<span class="lesson-xp-tag">+${lesson.xp} XP ✓</span>` : isCur ? '<span class="lesson-current-tag">In Progress</span>' : ''}
          </div>`;
        }).join('')}
      </div>
    `;
    container.appendChild(group);
  });
}

// ===== TOPICS VIEW =====
function renderTopicsView() {
  const grid = document.getElementById('allTopicsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  TOPICS.forEach((topic, idx) => {
    const done = totalInTopic(idx);
    const pct  = Math.round((done/topic.lessons.length)*100);
    const card = document.createElement('div');
    card.className = 'all-topic-card glow-card';
    card.style.borderTop = `5px solid ${topic.color}`;
    card.style.setProperty('--card-color', topic.color);
    card.innerHTML = `
      <div class="all-topic-emoji">${topic.emoji}</div>
      <h3>${topic.name}</h3>
      <p>${topic.description}</p>
      <div class="topic-lessons-count"><i class="fas fa-book"></i> ${topic.lessons.length} lessons &nbsp;·&nbsp; <i class="fas fa-check-circle" style="color:${topic.color}"></i> ${done} done</div>
      <div class="topic-mini-progress" style="height:8px;margin:10px 0 14px;">
        <div style="height:100%;width:${pct}%;background:${topic.gradient};border-radius:100px;transition:width 0.8s ease;"></div>
      </div>
      <button class="btn-primary" style="width:100%;background:${topic.gradient};" onclick="jumpToTopic(${idx})">
        ${done===0?'Start Learning':done===topic.lessons.length?'Review All':'Continue'} <i class="fas fa-arrow-right"></i>
      </button>
    `;
    grid.appendChild(card);
  });
}

// ===== CODE COPY =====
function copyCode(btn) {
  const pre  = btn.closest('.code-block')?.querySelector('pre');
  if (!pre) return;
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    btn.style.background = 'var(--success)';
    btn.style.color = 'white';
    setTimeout(() => { btn.innerHTML = '<i class="far fa-copy"></i> Copy'; btn.style.background=''; btn.style.color=''; }, 2000);
  });
}

// Keyboard shortcut for tutor input
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement?.id === 'tutorInput') sendTutorMessage();
});
