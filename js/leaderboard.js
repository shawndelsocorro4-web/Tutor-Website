/* ===================================================================
   leaderboard.js — Community Leaderboard Rendering & Filters
   =================================================================== */

let leaderboardProfileRequestId = 0;

async function renderLeaderboard(filter = 'all') {
  const listEl = document.getElementById('leaderboardList');
  if (!listEl) return;

  listEl.innerHTML = '<div class="loading-spinner" style="padding:24px;text-align:center;">Fetching live community scores from Supabase...</div>';

  try {
    const learners = typeof cloudFetchLeaderboard === 'function'
      ? await cloudFetchLeaderboard(25)
      : [];

    if (!learners?.length) {
      listEl.innerHTML = '<div class="empty-state" style="padding:40px;text-align:center;color:var(--text-muted);"><i class="fas fa-inbox" style="font-size:2.5rem;opacity:0.3;display:block;margin-bottom:12px;"></i><p>No learners on the leaderboard yet. Sign in and start learning to join the community!</p></div>';
      return;
    }

    learners.sort((a, b) => filter === 'streak'
      ? (b.streak || 0) - (a.streak || 0)
      : (b.xp || 0) - (a.xp || 0));

    listEl.innerHTML = '';
    learners.forEach((learner, index) => {
      const rank = index + 1;
      const isCurrentUser = Boolean(currentUser && learner.id === currentUser.id);
      const row = document.createElement('div');
      row.className = `leaderboard-row ${isCurrentUser ? 'is-current-user' : ''}`;
      const rankCell = document.createElement('div');
      rankCell.className = 'col-rank';
      const rankBadge = document.createElement('span');
      rankBadge.className = `rank-badge ${rank <= 3 ? `rank-${rank}` : ''}`;
      rankBadge.textContent = rank === 1 ? '🥇 1' : rank === 2 ? '🥈 2' : rank === 3 ? '🥉 3' : `#${rank}`;
      rankCell.appendChild(rankBadge);

      const studentCell = document.createElement('div');
      studentCell.className = 'col-student student-cell';
      const avatar = document.createElement('span');
      avatar.className = 's-avatar';
      avatar.textContent = learner.avatar || '👨‍💻';
      const details = document.createElement('div');
      const canOpenProfile = Boolean(currentUser);
      const name = document.createElement(canOpenProfile ? 'button' : 'span');
      name.className = `s-name${canOpenProfile ? ' leaderboard-profile-trigger' : ''}`;
      name.textContent = `${learner.name || 'Anonymous Learner'}${isCurrentUser ? ' (You)' : ''}`;
      if (canOpenProfile) {
        name.type = 'button';
        name.addEventListener('click', () => openLeaderboardProfile(learner));
      }
      const username = document.createElement('div');
      username.className = 's-user';
      username.textContent = `@${learner.username || 'learner'}`;
      details.append(name, username);
      studentCell.append(avatar, details);

      const level = document.createElement('div');
      level.className = 'col-level';
      level.textContent = `Level ${learner.level || 1}`;
      const streak = document.createElement('div');
      streak.className = 'col-streak';
      streak.textContent = `🔥 ${learner.streak || 1} d`;
      const xp = document.createElement('div');
      xp.className = 'col-xp';
      const xpValue = document.createElement('strong');
      xpValue.textContent = (learner.xp || 0).toLocaleString();
      xp.append(xpValue, document.createTextNode(' XP'));
      row.append(rankCell, studentCell, level, streak, xp);
      listEl.appendChild(row);
    });
  } catch (err) {
    console.error('Leaderboard error:', err);
    listEl.innerHTML = '<div class="empty-state" role="alert" style="padding:40px;text-align:center;color:var(--text-muted);"><i class="fas fa-exclamation-circle" style="font-size:2.5rem;opacity:0.3;display:block;margin-bottom:12px;"></i><p class="leaderboard-error-message"></p></div>';
    const errorMessage = listEl.querySelector('.leaderboard-error-message');
    if (errorMessage) {
      const missingView = err.code === 'PGRST205'
        || (err.message || '').includes('leaderboard_profiles');
      errorMessage.textContent = missingView
        ? 'The leaderboard database view is not installed yet. Run the leaderboard setup section in supabase_schema.sql, then refresh this page.'
        : err.message || 'Error loading leaderboard. Please try again.';
    }
  }
}

async function openLeaderboardProfile(learner) {
  if (!currentUser || !learner?.id) return;
  const requestId = ++leaderboardProfileRequestId;
  const modal = document.getElementById('leaderboardProfileModal');
  const badgesEl = document.getElementById('leaderboardProfileBadges');
  if (!modal || !badgesEl) return;

  setLeaderboardProfileText('leaderboardProfileName', learner.name || 'Anonymous Learner');
  setLeaderboardProfileText('leaderboardProfileUsername', `@${learner.username || 'learner'}`);
  setLeaderboardProfileText('leaderboardProfileAvatar', learner.avatar || '👨‍💻');
  setLeaderboardProfileText('leaderboardProfileLevel', `Level ${learner.level || 1}`);
  setLeaderboardProfileText('leaderboardProfileRank', getLeaderboardRank(learner.level || 1));
  setLeaderboardProfileText('leaderboardProfileXP', `${(learner.xp || 0).toLocaleString()} XP`);
  setLeaderboardProfileText('leaderboardProfileStreak', `${learner.streak || 1} day streak`);
  badgesEl.textContent = 'Loading badges…';
  modal.classList.add('open');
  document.getElementById('leaderboardProfileClose')?.focus();

  try {
    const badges = await cloudFetchLeaderboardBadges(learner.id);
    if (requestId !== leaderboardProfileRequestId || !modal.classList.contains('open')) return;
    renderLeaderboardProfileBadges(badges);
  } catch (error) {
    console.error('Could not load leaderboard profile badges:', error);
    if (requestId !== leaderboardProfileRequestId || !modal.classList.contains('open')) return;
    const missingBadgesView = error.code === 'PGRST205'
      || (error.message || '').includes('leaderboard_badges');
    badgesEl.textContent = missingBadgesView
      ? 'The public badge view is not installed yet. Run the updated Supabase setup SQL, then refresh.'
      : error.message || 'Could not load this employee’s badges.';
  }
}

function closeLeaderboardProfile() {
  leaderboardProfileRequestId++;
  document.getElementById('leaderboardProfileModal')?.classList.remove('open');
}

function setLeaderboardProfileText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function getLeaderboardRank(level) {
  const ranks = [
    'Junior Technician', 'Technician', 'Senior Technician', 'IT Specialist',
    'Senior Specialist', 'IT Engineer', 'Senior Engineer', 'Lead Engineer',
    'Principal Engineer', 'IT Architect', 'Senior Architect', 'IT Director'
  ];
  return ranks[Math.min(Math.floor((Math.max(1, level) - 1) / 3), ranks.length - 1)];
}

function renderLeaderboardProfileBadges(badges) {
  const badgesEl = document.getElementById('leaderboardProfileBadges');
  if (!badgesEl) return;
  badgesEl.replaceChildren();

  if (!badges.length) {
    badgesEl.textContent = 'No badges unlocked yet.';
    return;
  }

  badges.forEach(badge => {
    const card = document.createElement('div');
    card.className = 'leaderboard-profile-badge';
    const icon = document.createElement('span');
    icon.className = 'leaderboard-profile-badge-icon';
    icon.textContent = badge.badge_icon || '🏅';
    const name = document.createElement('strong');
    name.textContent = badge.badge_name || 'Achievement';
    card.append(icon, name);
    badgesEl.appendChild(card);
  });
}

function filterLeaderboard(filter) {
  document.querySelectorAll('.leaderboard-tabs button').forEach(button => {
    button.classList.toggle('active', button.getAttribute('onclick')?.includes(filter));
  });
  renderLeaderboard(filter);
}
