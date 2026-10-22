/* ===================================================================
   utils.js — Utility Functions & UI Helpers
   =================================================================== */

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function updateProfileUI() {
  const isGuest = !(typeof currentUser !== 'undefined' && currentUser);
  const name = isGuest ? 'Guest' : (state.name || 'Employee');
  const avatar = state.avatar || '👨💼';
  const username = isGuest ? '@guest' : (state.username ? `@${state.username}` : '@employee');

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
  setText('profileRoleBadge', (state.role || 'employee').toUpperCase());
}

function updateNavVisibility() {
  const isLoggedIn = typeof currentUser !== 'undefined' && currentUser;
  const isAdmin = isLoggedIn && state.role === 'admin';

  const navProgress = document.getElementById('navProgress');
  if (navProgress) navProgress.style.display = isLoggedIn ? '' : 'none';

  const navAdmin = document.getElementById('navAdmin');
  if (navAdmin) navAdmin.style.display = isAdmin ? '' : 'none';
}

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
    profile: '👤 Employee Profile',
    admin: '🛡️ Admin Hub'
  };

  const isLoggedIn = typeof currentUser !== 'undefined' && currentUser;
  if (v === 'progress' && !isLoggedIn) {
    openAuthModal();
    return;
  }
  if (v === 'admin' && state.role !== 'admin') {
    document.getElementById('adminAuthLock')?.classList.remove('hidden');
    document.getElementById('adminContent')?.classList.add('hidden');
  }

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

function addXP(amount) {
  state.xp = (state.xp || 0) + amount;
  updateXPDisplay();
  saveState();
  showXPPopup(amount);
  if (typeof currentUser !== 'undefined' && currentUser && typeof cloudUpdateProfile === 'function') {
    cloudUpdateProfile({ xp: state.xp, level: Math.max(1, Math.floor(state.xp / 100) + 1) });
  }
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
