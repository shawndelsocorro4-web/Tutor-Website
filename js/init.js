/* ===================================================================
   init.js — App Initialization & Event Listeners
   =================================================================== */

window.addEventListener('DOMContentLoaded', () => {
  loadState();
  checkStreak();
  
  // Check if user is logged in
  const isLoggedIn = typeof currentUser !== 'undefined' && currentUser;
  
  setTimeout(() => {
    const splash = document.getElementById('splashScreen');
    if (splash) {
      splash.style.opacity = '0';
      splash.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        splash.classList.add('hidden');
        document.getElementById('app')?.classList.remove('hidden');
        
        // If not logged in, show auth modal
        if (!isLoggedIn) {
          setTimeout(() => {
            openAuthModal();
          }, 300);
        } else {
          // User is logged in, initialize app normally
          initApp();
        }
      }, 500);
    }
  }, 900);
});

function initApp() {
  updateProfileUI();
  updateNavVisibility();

  buildTopicTree();
  renderDashboard();
  renderProgress();
  renderTopicsView();
  loadLesson();
  updateSidebarProgress();
  updateXPDisplay();
  applyTopicTheme(state.currentTopicIdx);
  updateRecommendation();
}

function handleProfileClick() {
  showView('profile');
}

function handleUserPillClick() {
  openAuthModal();
}

function selectAvatar(el, context) {
  const pickerId = context === 'create' ? 'createAvatarPicker' : context === 'signup' ? 'signUpAvatarPicker' : 'editAvatarPicker';
  document.querySelectorAll(`#${pickerId} .avatar-opt`).forEach(opt => opt.classList.remove('selected'));
  el.classList.add('selected');

  if (context === 'create') selectedCreateAvatar = el.textContent.trim();
  else if (context === 'signup') selectedSignUpAvatar = el.textContent.trim();
  else selectedEditAvatar = el.textContent.trim();
}

function openEditNameModal() {
  const input = document.getElementById('editAccountName');
  if (input) input.value = state.name || 'Learner';
  selectedEditAvatar = state.avatar || '👨💻';

  document.querySelectorAll('#editAvatarPicker .avatar-opt').forEach(el => {
    el.classList.toggle('selected', el.textContent.trim() === selectedEditAvatar);
  });

  openModal('editNameModal');
  setTimeout(() => input?.focus(), 150);
}

function submitEditName() {
  const input = document.getElementById('editAccountName');
  const newName = (input?.value || '').trim();
  if (!newName) {
    addTutorMessage('Please write a name! 😊');
    return;
  }

  state.name = newName;
  state.avatar = selectedEditAvatar;
  saveState();

  closeModal('editNameModal');
  updateProfileUI();
  renderDashboard();
  showFeedback(true, 'Profile Saved! ✨', `Your profile is now updated as "${newName}".`, null);
}

async function handleSignInSubmit() {
  const email = document.getElementById('signInEmail')?.value.trim();
  const password = document.getElementById('signInPassword')?.value;
  const errEl = document.getElementById('authSignInError');
  if (errEl) errEl.className = 'auth-error-msg';

  if (!email || !password) return;

  try {
    if (typeof authSignIn === 'function') {
      await authSignIn(email, password);
      closeModal('authModal');
      if (typeof currentProfile !== 'undefined' && currentProfile) {
        state.name = currentProfile.name || state.name;
        state.avatar = currentProfile.avatar || state.avatar;
        state.role = currentProfile.role || state.role;
        state.xp = currentProfile.xp !== undefined ? currentProfile.xp : state.xp;

        updateProfileUI();
        updateNavVisibility();
        renderDashboard();
        updateXPDisplay();
      }

      const _wn = (typeof currentProfile !== 'undefined' && currentProfile && currentProfile.name) ? currentProfile.name : 'Employee';
      showFeedback(true, 'Welcome back, ' + _wn + '! 👋', 'Your cloud progress has synced.', 10);
      
      // Initialize app after login
      initApp();
    }
  } catch (err) {
    if (errEl) {
      errEl.textContent = err.message || 'Failed to sign in. Please check your credentials.';
      errEl.className = 'auth-error-msg show';
    }
  }
}

async function handleSignUpSubmit() {
  const name = document.getElementById('signUpName')?.value.trim();
  const username = document.getElementById('signUpUsername')?.value.trim();
  const email = document.getElementById('signUpEmail')?.value.trim();
  const password = document.getElementById('signUpPassword')?.value;
  const errEl = document.getElementById('authSignUpError');
  if (errEl) errEl.className = 'auth-error-msg';

  if (!name || !email || !password) return;

  try {
    if (typeof authSignUp === 'function') {
      await authSignUp(email, password, name, username, selectedSignUpAvatar);
      closeModal('authModal');
      state.name = name;
      state.avatar = selectedSignUpAvatar;
      state.role = 'employee';
      state.xp = 0;

      updateProfileUI();
      updateNavVisibility();
      renderDashboard();
      updateXPDisplay();

      showFeedback(true, 'Welcome, ' + name + '! 🌟', 'Your account is ready. Start your first lesson!', 25);
      
      // Initialize app after signup
      initApp();
    }
  } catch (err) {
    if (errEl) {
      errEl.textContent = err.message || 'Failed to register account.';
      errEl.className = 'auth-error-msg show';
    }
  }
}

async function handleForgotSubmit() {
  const email = document.getElementById('forgotEmail')?.value.trim();
  const errEl = document.getElementById('authForgotError');
  if (errEl) errEl.className = 'auth-error-msg';

  if (!email) return;

  try {
    if (typeof authResetPassword === 'function') {
      await authResetPassword(email);
      alert('Password reset link sent! Check your inbox.');
      switchAuthTab('signin');
    }
  } catch (err) {
    if (errEl) {
      errEl.textContent = err.message || 'Error sending reset email.';
      errEl.className = 'auth-error-msg show';
    }
  }
}

async function handleLogoutClick() {
  if (confirm('Are you sure you want to sign out? Your cloud data remains safely saved.')) {
    if (typeof authSignOut === 'function') {
      await authSignOut();
    }
    showFeedback(true, 'Signed Out', 'You are now browsing in local guest mode.', null);
    showView('dashboard');
  }
}

function continueAsGuest() {
  closeModal('authModal');
  showFeedback(true, 'Local Guest Mode', 'Learning progress is saved directly to your current browser.', null);
  // Initialize app for guest mode
  initApp();
}

function openAuthModal() {
  switchAuthTab('signin');
  openModal('authModal');
}

function switchAuthTab(tab) {
  document.getElementById('signInForm')?.classList.add('hidden');
  document.getElementById('signUpForm')?.classList.add('hidden');
  document.getElementById('forgotForm')?.classList.add('hidden');

  const tabIn = document.getElementById('tabSignIn');
  const tabUp = document.getElementById('tabSignUp');
  const activeStyle = 'color:var(--primary);border-bottom:3px solid var(--primary);';
  const inactiveStyle = 'color:var(--text-muted);border-bottom:3px solid transparent;';

  if (tabIn) tabIn.style.cssText = tabIn.style.cssText.replace(/color:[^;]+;border-bottom:[^;]+;/, inactiveStyle);
  if (tabUp) tabUp.style.cssText = tabUp.style.cssText.replace(/color:[^;]+;border-bottom:[^;]+;/, inactiveStyle);

  if (tab === 'signin') {
    document.getElementById('signInForm')?.classList.remove('hidden');
    if (tabIn) { tabIn.style.color = 'var(--primary)'; tabIn.style.borderBottom = '3px solid var(--primary)'; }
    if (tabUp) { tabUp.style.color = 'var(--text-muted)'; tabUp.style.borderBottom = '3px solid transparent'; }
  } else if (tab === 'signup') {
    document.getElementById('signUpForm')?.classList.remove('hidden');
    if (tabUp) { tabUp.style.color = 'var(--primary)'; tabUp.style.borderBottom = '3px solid var(--primary)'; }
    if (tabIn) { tabIn.style.color = 'var(--text-muted)'; tabIn.style.borderBottom = '3px solid transparent'; }
  } else if (tab === 'forgot') {
    document.getElementById('forgotForm')?.classList.remove('hidden');
    if (tabIn) { tabIn.style.color = 'var(--text-muted)'; tabIn.style.borderBottom = '3px solid transparent'; }
    if (tabUp) { tabUp.style.color = 'var(--text-muted)'; tabUp.style.borderBottom = '3px solid transparent'; }
  }
}

function renderAdminDashboard() {
  const isAdmin = state.role === 'admin';
  if (isAdmin) isAdminAuthenticated = true;
  document.getElementById('adminAuthLock')?.classList.toggle('hidden', isAdmin);
  document.getElementById('adminContent')?.classList.toggle('hidden', !isAdmin);
  if (isAdmin) refreshAdminData();
}

async function refreshAdminData() {
  if (typeof cloudFetchAdminStats !== 'function') return;

  const stats = await cloudFetchAdminStats();
  if (stats) {
    setText('adminTotalStudents', stats.totalStudents || 1);
    setText('adminTotalLessons', stats.totalLessonsDone || Object.keys(state.completedLessons).length);
    setText('adminPassRate', `${stats.passRate || 85}%`);
    setText('adminTotalXP', (stats.totalXP || state.xp).toLocaleString());

    const rosterTbody = document.getElementById('adminStudentRoster');
    if (rosterTbody && stats.students) {
      rosterTbody.innerHTML = '';
      stats.students.forEach(st => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${st.name || 'Student'}</td>
          <td>@${st.username || 'user'}</td>
          <td><strong>${(st.xp || 0).toLocaleString()}</strong></td>
          <td>Level ${st.level || 1}</td>
          <td>🔥 ${st.streak || 1}d</td>
          <td><span class="role-badge">${st.role || 'student'}</span></td>
          <td><span style="color:var(--success);">Active</span></td>
        `;
        rosterTbody.appendChild(tr);
      });
    }
  }
}

function verifyAdminPasscode() {
  if (state.role === 'admin') {
    isAdminAuthenticated = true;
    document.getElementById('adminAuthLock')?.classList.add('hidden');
    document.getElementById('adminContent')?.classList.remove('hidden');
    refreshAdminData();
  }
}
