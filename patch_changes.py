import re

# ── index.html ──────────────────────────────────────────────────────────────
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Replace entire auth modal (remove sign-in, keep only sign-up + forgot)
OLD_AUTH = re.compile(
    r'<!-- 1\. AUTH MODAL.*?<!-- 2\. QUIZ MODAL',
    re.DOTALL
)
NEW_AUTH = '''<!-- 1. AUTH MODAL (Sign Up + Forgot Password) -->
<div class="modal-overlay" id="authModal">
  <div class="modal auth-modal" style="max-width:460px;">
    <div class="modal-header">
      <div class="quiz-icon">&#128272;</div>
      <h2 id="authModalTitle">Create Your KFL Account</h2>
      <p id="authModalSub">Sign up to save your XP and progress to the cloud</p>
    </div>
    <div class="modal-body" style="padding: 16px 28px 20px;">
      <!-- Sign Up Form (default) -->
      <form id="signUpForm" onsubmit="event.preventDefault(); handleSignUpSubmit();">
        <label class="modal-label">Full Name:</label>
        <input type="text" id="signUpName" class="modal-text-input" placeholder="e.g. Maria Santos" required />
        <label class="modal-label" style="margin-top:12px;">Username:</label>
        <input type="text" id="signUpUsername" class="modal-text-input" placeholder="mariasantos" required />
        <label class="modal-label" style="margin-top:12px;">Email Address:</label>
        <input type="email" id="signUpEmail" class="modal-text-input" placeholder="maria@example.com" required />
        <label class="modal-label" style="margin-top:12px;">Password (min 6 characters):</label>
        <input type="password" id="signUpPassword" class="modal-text-input" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" minlength="6" required />
        <label class="modal-label" style="margin-top:14px;">Choose Your Avatar:</label>
        <div class="avatar-picker" id="signUpAvatarPicker">
          <span class="avatar-opt selected" onclick="selectAvatar(this, \'signup\')">&#128104;&#8205;&#128187;</span>
          <span class="avatar-opt" onclick="selectAvatar(this, \'signup\')">&#128105;&#8205;&#128187;</span>
          <span class="avatar-opt" onclick="selectAvatar(this, \'signup\')">&#129417;</span>
          <span class="avatar-opt" onclick="selectAvatar(this, \'signup\')">&#128640;</span>
          <span class="avatar-opt" onclick="selectAvatar(this, \'signup\')">&#127775;</span>
          <span class="avatar-opt" onclick="selectAvatar(this, \'signup\')">&#127891;</span>
          <span class="avatar-opt" onclick="selectAvatar(this, \'signup\')">&#9889;</span>
          <span class="avatar-opt" onclick="selectAvatar(this, \'signup\')">&#127912;</span>
        </div>
        <div id="authSignUpError" class="auth-error-msg"></div>
        <button type="submit" class="btn-primary" style="width:100%;margin-top:18px;" id="btnSignUpSubmit">
          <i class="fas fa-user-plus"></i> Create Cloud Account
        </button>
        <p style="text-align:center;margin-top:12px;font-size:0.82rem;color:var(--text-muted);">
          Forgot your password?
          <button type="button" style="background:none;border:none;color:var(--primary);font-weight:700;cursor:pointer;font-size:0.82rem;" onclick="switchAuthTab(\'forgot\')">Reset it here</button>
        </p>
      </form>
      <!-- Forgot Password Form (hidden by default) -->
      <form id="forgotForm" class="hidden" onsubmit="event.preventDefault(); handleForgotSubmit();">
        <p style="font-size:0.88rem;color:var(--text-muted);margin-bottom:14px;">Enter your email and we\'ll send you a secure link to reset your password.</p>
        <label class="modal-label">Email Address:</label>
        <input type="email" id="forgotEmail" class="modal-text-input" placeholder="student@example.com" required />
        <div id="authForgotError" class="auth-error-msg"></div>
        <button type="submit" class="btn-primary" style="width:100%;margin-top:18px;" id="btnForgotSubmit">
          <i class="fas fa-paper-plane"></i> Send Reset Link
        </button>
        <p style="text-align:center;margin-top:12px;font-size:0.82rem;color:var(--text-muted);">
          <button type="button" style="background:none;border:none;color:var(--primary);font-weight:700;cursor:pointer;font-size:0.82rem;" onclick="switchAuthTab(\'signup\')">&#8592; Back to Sign Up</button>
        </p>
      </form>
      <!-- Guest / Offline Option -->
      <div class="auth-divider"><span>OR</span></div>
      <button class="btn-secondary" style="width:100%;" onclick="continueAsGuest()">
        <i class="fas fa-laptop-code"></i> Continue in Local Guest Mode
      </button>
    </div>
    <div class="modal-footer" style="padding:12px 28px 20px;display:flex;justify-content:flex-end;">
      <button class="btn-secondary" onclick="closeModal(\'authModal\')">Close</button>
    </div>
  </div>
</div>

<!-- 2. QUIZ MODAL'''

html, n1 = OLD_AUTH.subn(NEW_AUTH, html, count=1)
print(f'Auth modal replaced: {n1} substitution(s)')

# 2. Add XP banner before profile-grid in the Employee Profile view
OLD_PROFILE_GRID = '<div class="profile-grid">'
NEW_PROFILE_GRID = '''<!-- XP Progress Banner -->
      <div id="profileXPBanner" style="background:linear-gradient(135deg,#4c1d95,#7c3aed,#be185d);border-radius:var(--radius);padding:24px 28px;margin-bottom:24px;color:white;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:2rem;">&#11088;</span>
            <div>
              <div style="font-size:1.6rem;font-weight:900;line-height:1;" id="profileXPAmount">0 XP</div>
              <div style="font-size:0.82rem;opacity:0.8;margin-top:2px;" id="profileXPLevel">Level 1 Explorer</div>
            </div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.78rem;opacity:0.7;">Next level in</div>
            <div style="font-size:1.1rem;font-weight:800;" id="profileXPToNext">100 XP</div>
          </div>
        </div>
        <div style="height:10px;background:rgba(255,255,255,0.2);border-radius:100px;overflow:hidden;">
          <div id="profileXPBar" style="height:100%;background:linear-gradient(90deg,#f59e0b,#f97316);border-radius:100px;transition:width 0.9s ease;width:0%;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.74rem;opacity:0.65;margin-top:6px;">
          <span id="profileXPBarLabel">0 XP this level</span>
          <span id="profileXPBarMax">100 XP to next</span>
        </div>
      </div>

      <div class="profile-grid">'''

# Only replace the first occurrence (inside the profile view, not elsewhere)
html = html.replace(OLD_PROFILE_GRID, NEW_PROFILE_GRID, 1)
print('XP banner added to profile view')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('index.html saved.')


# ── app.js ───────────────────────────────────────────────────────────────────
with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 3. Fix openAuthModal to default to signup tab
OLD_OPEN_AUTH = 'function openAuthModal() {\n  openModal(\'authModal\');\n}'
NEW_OPEN_AUTH = '''function openAuthModal() {
  switchAuthTab('signup');
  openModal('authModal');
}'''
js = js.replace(OLD_OPEN_AUTH, NEW_OPEN_AUTH, 1)

# 4. Fix switchAuthTab — remove signin references, handle signup/forgot only
OLD_SWITCH = re.compile(
    r'function switchAuthTab\(tab\) \{.*?\n\}',
    re.DOTALL
)
NEW_SWITCH = '''function switchAuthTab(tab) {
  document.getElementById('signUpForm')?.classList.add('hidden');
  document.getElementById('forgotForm')?.classList.add('hidden');

  if (tab === 'signup') {
    document.getElementById('signUpForm')?.classList.remove('hidden');
    setText('authModalTitle', 'Create Your KFL Account');
    setText('authModalSub', 'Sign up to save your XP and progress to the cloud');
  } else if (tab === 'forgot') {
    document.getElementById('forgotForm')?.classList.remove('hidden');
    setText('authModalTitle', 'Reset Password');
    setText('authModalSub', 'We\'ll send a secure reset link to your email');
  }
}'''
js, n2 = OLD_SWITCH.subn(NEW_SWITCH, js, count=1)
print(f'switchAuthTab replaced: {n2} substitution(s)')

# 5. Fix handleUserPillClick — open auth modal defaulting to signup
OLD_PILL = 'function handleUserPillClick() {\n  openAuthModal();\n}'
NEW_PILL = '''function handleUserPillClick() {
  openAuthModal();
}'''
# Already calls openAuthModal which now defaults to signup — no change needed

# 6. Enhance renderProfile to populate the XP banner
OLD_RENDER_PROFILE = 'function renderProfile() {\n  updateProfileUI();'
NEW_RENDER_PROFILE = '''function renderProfile() {
  updateProfileUI();

  // XP Banner
  const xp = state.xp || 0;
  const xpPerLevel = 100;
  const level = Math.max(1, Math.floor(xp / xpPerLevel) + 1);
  const xpIntoLevel = xp % xpPerLevel;
  const xpToNext = xpPerLevel - xpIntoLevel;
  const pct = Math.round((xpIntoLevel / xpPerLevel) * 100);

  const levelTitles = ['Explorer','Apprentice 🚀','Code Specialist ⚡','Tech Scholar 🌟','Grand Master 🎓'];
  const titleIdx = Math.min(Math.floor(xp / 300), levelTitles.length - 1);
  const levelLabel = `Level ${level} ${levelTitles[titleIdx]}`;

  setText('profileXPAmount', `${xp.toLocaleString()} XP`);
  setText('profileXPLevel', levelLabel);
  setText('profileXPToNext', `${xpToNext} XP`);
  setText('profileXPBarLabel', `${xpIntoLevel} XP this level`);
  setText('profileXPBarMax', `${xpPerLevel} XP to next`);
  const bar = document.getElementById('profileXPBar');
  if (bar) bar.style.width = pct + '%';'''

js = js.replace(OLD_RENDER_PROFILE, NEW_RENDER_PROFILE, 1)
print('renderProfile XP banner logic added')

# 7. Ensure addXP always syncs to Supabase immediately
OLD_ADD_XP = '''function addXP(amount) {
  state.xp = (state.xp || 0) + amount;
  updateXPDisplay();
  saveState();
  showXPPopup(amount);
}'''
NEW_ADD_XP = '''function addXP(amount) {
  state.xp = (state.xp || 0) + amount;
  updateXPDisplay();
  saveState();
  showXPPopup(amount);
  // Immediately push XP to Supabase profiles table
  if (typeof currentUser !== 'undefined' && currentUser && typeof cloudUpdateProfile === 'function') {
    cloudUpdateProfile({ xp: state.xp, level: Math.max(1, Math.floor(state.xp / 100) + 1) });
  }
}'''
js = js.replace(OLD_ADD_XP, NEW_ADD_XP, 1)
print('addXP cloud sync added')

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(js)
print('app.js saved.')
print('All done!')
