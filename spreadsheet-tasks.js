/* ============================================================
   Spreadsheet Tasks — KFL IT Team
   spreadsheet-tasks.js
   ============================================================ */

const TASKS = [
  // ── EXCEL RIBBON TOOLS ──────────────────────────────────────
  {
    id: 1, app: 'excel', tags: ['excel', 'ribbon'],
    icon: '📊', difficulty: 'easy', points: 10,
    title: 'AutoSum on the Home Ribbon',
    desc: 'Use the AutoSum button to quickly total a column of numbers.',
    scenario: 'You have sales figures in cells <strong>B2:B10</strong>. You click cell <strong>B11</strong> and want the fastest way to sum the column using the ribbon.',
    question: 'Which ribbon tab and button do you use for the fastest sum?',
    options: [
      { text: 'Insert tab → Chart', code: null },
      { text: 'Home tab → AutoSum (Σ)', code: '=SUM(B2:B10)' },
      { text: 'Data tab → Sort', code: null },
      { text: 'View tab → Freeze Panes', code: null },
    ],
    correct: 1,
    hint: 'Look for the Greek letter Σ (Sigma) on the far right of the Home tab.',
    explanation: 'The <strong>AutoSum (Σ)</strong> button on the Home tab instantly inserts =SUM() for the detected range above or to the left of the selected cell.'
  },
  {
    id: 2, app: 'excel', tags: ['excel', 'ribbon'],
    icon: '📊', difficulty: 'easy', points: 10,
    title: 'Format as Table (Ctrl+T)',
    desc: 'Convert a data range into a structured Excel Table for easy filtering and formulas.',
    scenario: 'Your IT asset list is in <strong>A1:E50</strong>. You want to enable auto-filters, banded rows, and structured references automatically.',
    question: 'Which ribbon action converts the range into a structured Table?',
    options: [
      { text: 'Home → Conditional Formatting', code: null },
      { text: 'Insert → PivotTable', code: null },
      { text: 'Insert → Table (or Ctrl+T)', code: 'Ctrl+T' },
      { text: 'Data → Text to Columns', code: null },
    ],
    correct: 2,
    hint: 'The keyboard shortcut is Ctrl+T. It lives on the Insert tab.',
    explanation: '<strong>Insert → Table (Ctrl+T)</strong> converts a range into a structured Excel Table with auto-filters, banded rows, and the ability to use structured references like =Table1[Amount].'
  },
  {
    id: 3, app: 'excel', tags: ['excel', 'ribbon'],
    icon: '📊', difficulty: 'medium', points: 15,
    title: 'Conditional Formatting — Highlight Rules',
    desc: 'Use the ribbon to visually flag cells that meet a condition.',
    scenario: 'You have a column of server response times in <strong>C2:C100</strong>. You want cells above <strong>500ms</strong> to turn red automatically.',
    question: 'Which ribbon path applies a "Greater Than" highlight rule?',
    options: [
      { text: 'Home → Conditional Formatting → Highlight Cells Rules → Greater Than', code: null },
      { text: 'Formulas → Name Manager', code: null },
      { text: 'Data → Filter → Number Filters', code: null },
      { text: 'Insert → Sparklines', code: null },
    ],
    correct: 0,
    hint: 'Conditional Formatting is on the Home tab, in the Styles group.',
    explanation: '<strong>Home → Conditional Formatting → Highlight Cells Rules → Greater Than</strong> lets you set a threshold value and choose a fill color — no formula needed.'
  },
  {
    id: 4, app: 'excel', tags: ['excel', 'ribbon'],
    icon: '📊', difficulty: 'medium', points: 15,
    title: 'Data Validation Dropdown',
    desc: 'Restrict cell input to a predefined list using the Data ribbon.',
    scenario: 'Column D should only accept: <em>Pending, In Progress, Resolved</em>. You want a dropdown so users cannot type free text.',
    question: 'Which ribbon path creates a dropdown list validation?',
    options: [
      { text: 'Home → Find & Select → Go To Special', code: null },
      { text: 'Data → Data Validation → Allow: List', code: null },
      { text: 'Review → Protect Sheet', code: null },
      { text: 'Insert → Symbol', code: null },
    ],
    correct: 1,
    hint: 'Data Validation is on the Data tab, in the Data Tools group.',
    explanation: '<strong>Data → Data Validation → Settings → Allow: List</strong> then enter your comma-separated values. This creates a dropdown and blocks invalid entries.'
  },
  // ── EXCEL FORMULAS ──────────────────────────────────────────
  {
    id: 5, app: 'excel', tags: ['excel', 'formulas'],
    icon: '📊', difficulty: 'easy', points: 10,
    title: 'SUM Formula',
    desc: 'Add up a range of numbers.',
    scenario: 'Your IT budget tracker has monthly costs in <strong>B2:B13</strong>. You need the annual total in cell B14.',
    question: 'Which formula gives the correct annual total?',
    options: [
      { text: 'Total all months', code: '=SUM(B2:B13)' },
      { text: 'Count the months', code: '=COUNT(B2:B13)' },
      { text: 'Average monthly cost', code: '=AVERAGE(B2:B13)' },
      { text: 'Find the highest month', code: '=MAX(B2:B13)' },
    ],
    correct: 0,
    hint: 'SUM adds all values in a range. The syntax is =SUM(range).',
    explanation: '<strong>=SUM(B2:B13)</strong> adds every value from B2 through B13, giving you the annual total. It ignores blank cells and text.'
  },
  {
    id: 6, app: 'excel', tags: ['excel', 'formulas'],
    icon: '📊', difficulty: 'easy', points: 10,
    title: 'AVERAGE Formula',
    desc: 'Calculate the mean of a set of values.',
    scenario: 'You have weekly ticket resolution times (in hours) in <strong>D2:D53</strong> (52 weeks). You need the average resolution time.',
    question: 'Which formula calculates the average resolution time?',
    options: [
      { text: 'Sum all times', code: '=SUM(D2:D53)' },
      { text: 'Average of all weeks', code: '=AVERAGE(D2:D53)' },
      { text: 'Count weeks with data', code: '=COUNTA(D2:D53)' },
      { text: 'Minimum resolution time', code: '=MIN(D2:D53)' },
    ],
    correct: 1,
    hint: 'AVERAGE divides the sum by the count of numeric values.',
    explanation: '<strong>=AVERAGE(D2:D53)</strong> sums all 52 values and divides by 52, giving the mean weekly resolution time.'
  },
  {
    id: 7, app: 'excel', tags: ['excel', 'formulas'],
    icon: '📊', difficulty: 'medium', points: 15,
    title: 'IF Formula',
    desc: 'Return different values based on a logical condition.',
    scenario: 'Column E has employee scores (0–100). You want column F to show <em>"Pass"</em> if the score is 75 or above, otherwise <em>"Fail"</em>.',
    question: 'Which IF formula is correct for cell F2?',
    options: [
      { text: 'Check score threshold', code: '=IF(E2>=75,"Pass","Fail")' },
      { text: 'Wrong comparison', code: '=IF(E2>75,"Pass","Fail")' },
      { text: 'Reversed logic', code: '=IF(E2<75,"Pass","Fail")' },
      { text: 'Missing quotes', code: '=IF(E2>=75,Pass,Fail)' },
    ],
    correct: 0,
    hint: 'The IF syntax is =IF(condition, value_if_true, value_if_false). Text results need double quotes.',
    explanation: '<strong>=IF(E2>=75,"Pass","Fail")</strong> — the >= operator means "greater than or equal to 75". Text values like "Pass" must be wrapped in double quotes.'
  },
  {
    id: 8, app: 'excel', tags: ['excel', 'formulas'],
    icon: '📊', difficulty: 'medium', points: 15,
    title: 'VLOOKUP Formula',
    desc: 'Look up a value in the first column of a table and return a value from another column.',
    scenario: 'You have an employee table in <strong>A2:D100</strong> (ID, Name, Department, Salary). In cell G2 you have an Employee ID. You want to return the Department (column 3) in H2.',
    question: 'Which VLOOKUP formula retrieves the Department?',
    options: [
      { text: 'Exact match lookup', code: '=VLOOKUP(G2,A2:D100,3,0)' },
      { text: 'Wrong column index', code: '=VLOOKUP(G2,A2:D100,2,0)' },
      { text: 'Approximate match', code: '=VLOOKUP(G2,A2:D100,3,1)' },
      { text: 'Reversed arguments', code: '=VLOOKUP(A2:D100,G2,3,0)' },
    ],
    correct: 0,
    hint: 'VLOOKUP syntax: =VLOOKUP(lookup_value, table_array, col_index, [range_lookup]). Use 0 for exact match.',
    explanation: '<strong>=VLOOKUP(G2,A2:D100,3,0)</strong> — looks up the ID in G2 within column A, then returns the value from column 3 (Department). The 0 ensures an exact match.'
  },
  {
    id: 9, app: 'excel', tags: ['excel', 'formulas'],
    icon: '📊', difficulty: 'hard', points: 20,
    title: 'SUMIF Formula',
    desc: 'Sum values that meet a specific condition.',
    scenario: 'Column A has department names, column B has their monthly expenses. You need the total expenses for the <strong>"IT"</strong> department only.',
    question: 'Which SUMIF formula sums only IT department expenses?',
    options: [
      { text: 'Conditional sum', code: '=SUMIF(A:A,"IT",B:B)' },
      { text: 'Wrong range order', code: '=SUMIF(B:B,"IT",A:A)' },
      { text: 'COUNTIF instead', code: '=COUNTIF(A:A,"IT")' },
      { text: 'Missing sum range', code: '=SUMIF(A:A,"IT")' },
    ],
    correct: 0,
    hint: 'SUMIF syntax: =SUMIF(range, criteria, sum_range). The range is where you check the condition.',
    explanation: '<strong>=SUMIF(A:A,"IT",B:B)</strong> — checks column A for "IT", then sums the corresponding values in column B. The criteria "IT" is case-insensitive.'
  },
  {
    id: 10, app: 'excel', tags: ['excel', 'formulas'],
    icon: '📊', difficulty: 'hard', points: 20,
    title: 'COUNTIF Formula',
    desc: 'Count cells that match a specific condition.',
    scenario: 'Column C has ticket statuses: Open, Closed, Pending. You need to count how many tickets are still <strong>"Open"</strong>.',
    question: 'Which formula counts only "Open" tickets?',
    options: [
      { text: 'Count all cells', code: '=COUNT(C:C)' },
      { text: 'Count matching status', code: '=COUNTIF(C:C,"Open")' },
      { text: 'Sum open tickets', code: '=SUMIF(C:C,"Open")' },
      { text: 'Count non-empty cells', code: '=COUNTA(C:C)' },
    ],
    correct: 1,
    hint: 'COUNTIF syntax: =COUNTIF(range, criteria). It counts cells that match the criteria.',
    explanation: '<strong>=COUNTIF(C:C,"Open")</strong> scans all of column C and counts every cell that contains exactly "Open". Wildcards like "Op*" also work.'
  },
  // ── GOOGLE SHEETS ────────────────────────────────────────────
  {
    id: 11, app: 'sheets', tags: ['sheets', 'formulas'],
    icon: '📈', difficulty: 'easy', points: 10,
    title: 'SUMIF in Google Sheets',
    desc: 'Google Sheets SUMIF works identically to Excel.',
    scenario: 'Your shared IT expense sheet has categories in column A and amounts in column B. You need the total for <strong>"Software"</strong> purchases.',
    question: 'Which formula sums only Software expenses?',
    options: [
      { text: 'Conditional sum', code: '=SUMIF(A:A,"Software",B:B)' },
      { text: 'Filter and sum', code: '=FILTER(B:B,A:A="Software")' },
      { text: 'Count software rows', code: '=COUNTIF(A:A,"Software")' },
      { text: 'Sum everything', code: '=SUM(B:B)' },
    ],
    correct: 0,
    hint: 'SUMIF works the same in Google Sheets as in Excel.',
    explanation: '<strong>=SUMIF(A:A,"Software",B:B)</strong> checks column A for "Software" and sums the matching values in column B — identical syntax to Excel.'
  },
  {
    id: 12, app: 'sheets', tags: ['sheets', 'formulas'],
    icon: '📈', difficulty: 'medium', points: 15,
    title: 'COUNTIF in Google Sheets',
    desc: 'Count cells matching a condition in a shared Google Sheet.',
    scenario: 'Your team tracks onboarding status in column D: Complete, In Progress, Not Started. Count how many employees are <strong>"Complete"</strong>.',
    question: 'Which formula counts completed onboardings?',
    options: [
      { text: 'Count all entries', code: '=COUNTA(D:D)' },
      { text: 'Count matching status', code: '=COUNTIF(D:D,"Complete")' },
      { text: 'Sum complete column', code: '=SUM(D:D)' },
      { text: 'Find first complete', code: '=MATCH("Complete",D:D,0)' },
    ],
    correct: 1,
    hint: 'COUNTIF counts cells that match a specific value or pattern.',
    explanation: '<strong>=COUNTIF(D:D,"Complete")</strong> counts every cell in column D that contains "Complete". Works identically in both Excel and Google Sheets.'
  },
  {
    id: 13, app: 'sheets', tags: ['sheets', 'formulas'],
    icon: '📈', difficulty: 'medium', points: 15,
    title: 'UNIQUE Function',
    desc: 'Extract a list of unique values — a Google Sheets exclusive.',
    scenario: 'Column A has 200 rows of department names with many duplicates. You want a clean list of each unique department name in column C.',
    question: 'Which Google Sheets formula extracts unique department names?',
    options: [
      { text: 'Remove duplicates manually', code: null },
      { text: 'Extract unique values', code: '=UNIQUE(A2:A200)' },
      { text: 'Sort the column', code: '=SORT(A2:A200)' },
      { text: 'Count unique values', code: '=COUNTUNIQUE(A2:A200)' },
    ],
    correct: 1,
    hint: 'UNIQUE is a Google Sheets function that spills a list of distinct values.',
    explanation: '<strong>=UNIQUE(A2:A200)</strong> returns a dynamic spilled array of all distinct values. In Excel you would use Remove Duplicates or the newer UNIQUE function (Office 365+).'
  },
  {
    id: 14, app: 'sheets', tags: ['sheets', 'ribbon'],
    icon: '📈', difficulty: 'medium', points: 15,
    title: 'Data Validation in Google Sheets',
    desc: 'Create a dropdown list using Google Sheets menus.',
    scenario: 'You want column B in your shared sheet to only accept: <em>Hardware, Software, Network, Other</em> as ticket categories.',
    question: 'Which menu path creates a dropdown validation in Google Sheets?',
    options: [
      { text: 'Format → Conditional Formatting', code: null },
      { text: 'Data → Data Validation → Dropdown', code: null },
      { text: 'Insert → Checkbox', code: null },
      { text: 'View → Freeze', code: null },
    ],
    correct: 1,
    hint: 'In Google Sheets, Data Validation is under the Data menu.',
    explanation: '<strong>Data → Data Validation → Add Rule → Dropdown</strong> lets you enter a list of allowed values. Users see a dropdown and invalid entries are rejected.'
  },
  {
    id: 15, app: 'sheets', tags: ['sheets', 'ribbon'],
    icon: '📈', difficulty: 'easy', points: 10,
    title: 'Filter Views in Google Sheets',
    desc: 'Create a personal filter view without affecting other collaborators.',
    scenario: 'You share a sheet with 5 colleagues. You want to filter to see only your own assigned tickets without changing what others see.',
    question: 'Which Google Sheets feature lets you filter without affecting others?',
    options: [
      { text: 'Data → Create a Filter', code: null },
      { text: 'Data → Filter Views → Create New Filter View', code: null },
      { text: 'View → Hide Sheet', code: null },
      { text: 'Format → Hide Rows', code: null },
    ],
    correct: 1,
    hint: 'Filter Views are personal — they do not change the shared view for other users.',
    explanation: '<strong>Data → Filter Views → Create New Filter View</strong> creates a named, personal filter. Other collaborators continue to see the unfiltered data while you work in your view.'
  },
  {
    id: 16, app: 'sheets', tags: ['sheets', 'formulas'],
    icon: '📈', difficulty: 'hard', points: 20,
    title: 'IMPORTRANGE Function',
    desc: 'Pull data from another Google Sheet into your current sheet.',
    scenario: 'The Finance team has a Google Sheet with the URL ending in <strong>/d/SHEET_ID/edit</strong>. You need to import their data range <strong>Sheet1!A1:C50</strong> into your IT dashboard.',
    question: 'Which formula imports data from another Google Sheet?',
    options: [
      { text: 'Import from external sheet', code: '=IMPORTRANGE("SHEET_URL","Sheet1!A1:C50")' },
      { text: 'Link to another file', code: '=[Finance.xlsx]Sheet1!A1' },
      { text: 'Fetch web data', code: '=IMPORTDATA("url")' },
      { text: 'Query the sheet', code: '=QUERY(A1:C50,"SELECT *")' },
    ],
    correct: 0,
    hint: 'IMPORTRANGE takes two arguments: the full spreadsheet URL and the range string.',
    explanation: '<strong>=IMPORTRANGE("SHEET_URL","Sheet1!A1:C50")</strong> pulls a live range from another Google Sheet. You must grant access the first time. The data updates automatically.'
  },
  {
    id: 17, app: 'sheets', tags: ['sheets', 'formulas'],
    icon: '📈', difficulty: 'hard', points: 20,
    title: 'Apps Script Automation',
    desc: 'Understand when to use Google Apps Script for automation.',
    scenario: 'Every Monday morning you need to automatically email the IT team a summary of open tickets from your Google Sheet. No manual steps should be required.',
    question: 'Which Google Sheets feature enables this automated weekly email?',
    options: [
      { text: 'Conditional Formatting rule', code: null },
      { text: 'Apps Script with a time-driven trigger', code: null },
      { text: 'IMPORTRANGE formula', code: null },
      { text: 'Data Validation dropdown', code: null },
    ],
    correct: 1,
    hint: 'Apps Script is JavaScript-based and supports time-driven triggers (e.g., every Monday at 8am).',
    explanation: '<strong>Extensions → Apps Script</strong> lets you write JavaScript to automate tasks. A <strong>time-driven trigger</strong> runs your script on a schedule — perfect for weekly email summaries.'
  },
  // ── SHARED EXCEL & SHEETS ────────────────────────────────────
  {
    id: 18, app: 'excel', tags: ['excel', 'formulas'],
    icon: '📊', difficulty: 'hard', points: 20,
    title: 'XLOOKUP Formula (Excel 365)',
    desc: 'The modern replacement for VLOOKUP — searches any direction.',
    scenario: 'You have an asset table with Asset IDs in column A and Warranty Dates in column E. You want to find the warranty date for Asset ID in cell H2.',
    question: 'Which XLOOKUP formula retrieves the Warranty Date?',
    options: [
      { text: 'Modern flexible lookup', code: '=XLOOKUP(H2,A:A,E:E)' },
      { text: 'Old-style lookup', code: '=VLOOKUP(H2,A:E,5,0)' },
      { text: 'Index-Match combo', code: '=INDEX(E:E,MATCH(H2,A:A,0))' },
      { text: 'Horizontal lookup', code: '=HLOOKUP(H2,A:E,5,0)' },
    ],
    correct: 0,
    hint: 'XLOOKUP syntax: =XLOOKUP(lookup_value, lookup_array, return_array). No column index number needed.',
    explanation: '<strong>=XLOOKUP(H2,A:A,E:E)</strong> — searches column A for the value in H2 and returns the matching value from column E. Simpler than VLOOKUP and works left-to-right or right-to-left.'
  },
  {
    id: 19, app: 'excel', tags: ['excel', 'ribbon'],
    icon: '📊', difficulty: 'medium', points: 15,
    title: 'Freeze Panes',
    desc: 'Keep header rows visible while scrolling through large datasets.',
    scenario: 'Your IT inventory sheet has 500 rows. Row 1 has column headers. When you scroll down, the headers disappear and you lose track of which column is which.',
    question: 'Which ribbon action keeps Row 1 visible while scrolling?',
    options: [
      { text: 'View → Freeze Panes → Freeze Top Row', code: null },
      { text: 'Home → Format → Row Height', code: null },
      { text: 'Insert → Header & Footer', code: null },
      { text: 'Page Layout → Print Titles', code: null },
    ],
    correct: 0,
    hint: 'Freeze Panes is on the View tab. "Freeze Top Row" locks only row 1.',
    explanation: '<strong>View → Freeze Panes → Freeze Top Row</strong> locks row 1 so it stays visible as you scroll down. In Google Sheets: View → Freeze → 1 row.'
  },
  {
    id: 20, app: 'sheets', tags: ['sheets', 'formulas'],
    icon: '📈', difficulty: 'medium', points: 15,
    title: 'SUMIFS — Multiple Conditions',
    desc: 'Sum values that meet two or more conditions simultaneously.',
    scenario: 'Column A = Department, Column B = Month, Column C = Cost. You need the total IT department costs for <strong>March</strong> only.',
    question: 'Which formula sums costs where Department="IT" AND Month="March"?',
    options: [
      { text: 'Single condition sum', code: '=SUMIF(A:A,"IT",C:C)' },
      { text: 'Multi-condition sum', code: '=SUMIFS(C:C,A:A,"IT",B:B,"March")' },
      { text: 'Wrong argument order', code: '=SUMIFS(A:A,"IT",B:B,"March",C:C)' },
      { text: 'Count instead of sum', code: '=COUNTIFS(A:A,"IT",B:B,"March")' },
    ],
    correct: 1,
    hint: 'SUMIFS syntax: =SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2, ...)',
    explanation: '<strong>=SUMIFS(C:C,A:A,"IT",B:B,"March")</strong> — the sum_range (C:C) comes first, then each criteria range/value pair. Both conditions must be true for a row to be included.'
  },
];

/* ============================================================
   AUTH GATE
   ============================================================ */
function showAuthGate() {
  document.getElementById('authGate').classList.remove('hidden');
}

function hideAuthGate() {
  document.getElementById('authGate').classList.add('hidden');
}

function switchGateTab(tab) {
  const isSignIn = tab === 'signin';
  document.getElementById('gateSignInForm').classList.toggle('hidden', !isSignIn);
  document.getElementById('gateSignUpForm').classList.toggle('hidden', isSignIn);
  document.getElementById('gateTabSignIn').classList.toggle('active', isSignIn);
  document.getElementById('gateTabSignUp').classList.toggle('active', !isSignIn);
}

function setGateError(formType, msg) {
  const el = document.getElementById(formType === 'signin' ? 'gateSignInError' : 'gateSignUpError');
  el.textContent = msg;
  el.classList.toggle('show', !!msg);
}

async function gateSignIn() {
  const email    = document.getElementById('gateEmail').value.trim();
  const password = document.getElementById('gatePassword').value;
  const btn      = document.getElementById('gateSignInBtn');
  setGateError('signin', '');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
  try {
    await authSignIn(email, password);
    onAuthSuccess();
  } catch (err) {
    setGateError('signin', err.message || 'Sign in failed. Please check your credentials.');
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In & Start Tasks';
  }
}

async function gateSignUp() {
  const name     = document.getElementById('gateSignUpName').value.trim();
  const username = document.getElementById('gateSignUpUsername').value.trim();
  const email    = document.getElementById('gateSignUpEmail').value.trim();
  const password = document.getElementById('gateSignUpPassword').value;
  const btn      = document.getElementById('gateSignUpBtn');
  setGateError('signup', '');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
  try {
    await authSignUp(email, password, name, username);
    onAuthSuccess();
  } catch (err) {
    setGateError('signup', err.message || 'Sign up failed. Please try again.');
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-user-plus"></i> Create Account & Start';
  }
}

function onAuthSuccess() {
  hideAuthGate();
  injectUserBadge();
  cloudLoadTaskProgress();
  renderLogs();
}

function injectUserBadge() {
  const right = document.querySelector('.st-topbar-right');
  if (!right || document.getElementById('stUserBadge')) return;
  const name = currentProfile?.name || currentUser?.user_metadata?.name || currentUser?.email?.split('@')[0] || 'Learner';
  const avatar = currentProfile?.avatar || '👨\u200d💻';
  const badge = document.createElement('div');
  badge.id = 'stUserBadge';
  badge.className = 'st-user-badge';
  badge.innerHTML = `<span>${avatar}</span>${name}
    <button class="st-signout-btn" onclick="gateSignOut()" title="Sign out"><i class="fas fa-sign-out-alt"></i></button>`;
  right.prepend(badge);
}

async function gateSignOut() {
  await authSignOut();
  document.getElementById('stUserBadge')?.remove();
  showAuthGate();
}

/* ============================================================
   STATE
   ============================================================ */
const state = {
  completed:     JSON.parse(localStorage.getItem('st_completed') || '{}'),
  scores:        JSON.parse(localStorage.getItem('st_scores')    || '{}'),
  logs:          JSON.parse(localStorage.getItem('st_logs')      || '[]'),
  hintUsed:      false,
  activeTask:    null,
  selectedOption: null,
  answered:      false,
  currentFilter: 'all',
};

function saveState() {
  localStorage.setItem('st_completed', JSON.stringify(state.completed));
  localStorage.setItem('st_scores',    JSON.stringify(state.scores));
  localStorage.setItem('st_logs',      JSON.stringify(state.logs));
}

/* ============================================================
   CLOUD — save one task attempt log + upsert progress
   ============================================================ */
async function cloudSaveTaskAttempt(task, selectedIdx, passed, hintUsed) {
  if (!sbClient || !currentUser) return 'pending';
  const now = new Date().toISOString();
  const userId = currentUser.id;

  // Count previous attempts for this task
  const prevAttempts = state.logs.filter(l => l.task_id === task.id).length;

  try {
    // 1. Insert a log row (every attempt)
    const { error: logErr } = await sbClient
      .from('spreadsheet_task_logs')
      .insert({
        user_id:      userId,
        task_id:      task.id,
        task_title:   task.title,
        app:          task.app,
        difficulty:   task.difficulty,
        points:       task.points,
        selected_idx: selectedIdx,
        correct_idx:  task.correct,
        passed,
        hint_used:    hintUsed,
        attempt:      prevAttempts + 1,
        created_at:   now,
      });
    if (logErr) throw logErr;

    // 2. Upsert progress row (best result per task)
    const { error: progErr } = await sbClient
      .from('spreadsheet_task_progress')
      .upsert({
        user_id:         userId,
        task_id:         task.id,
        task_title:      task.title,
        app:             task.app,
        difficulty:      task.difficulty,
        points_earned:   passed ? task.points : 0,
        passed,
        attempts:        prevAttempts + 1,
        hint_used:       hintUsed,
        first_passed_at: passed ? now : null,
        last_attempt_at: now,
      }, { onConflict: 'user_id,task_id' });
    if (progErr) throw progErr;

    // 3. Record in study_history (reuses existing auth.js helper)
    await cloudRecordActivity(
      passed ? 'st_task_passed' : 'st_task_failed',
      'spreadsheet-tasks',
      String(task.id),
      `${task.title} — ${passed ? 'Passed' : 'Failed'} (${task.difficulty}, ${task.points}pts)`
    );

    return 'synced';
  } catch (e) {
    console.warn('cloudSaveTaskAttempt error:', e.message);
    return 'failed';
  }
}

/* Load this user's saved progress from cloud on login */
async function cloudLoadTaskProgress() {
  if (!sbClient || !currentUser) return;
  try {
    const { data, error } = await sbClient
      .from('spreadsheet_task_progress')
      .select('task_id, passed, points_earned')
      .eq('user_id', currentUser.id);
    if (error || !data) return;
    data.forEach(row => {
      if (row.passed) {
        state.completed[row.task_id] = true;
        // Restore score as correct index so modal shows correctly
        const task = TASKS.find(t => t.id === row.task_id);
        if (task) state.scores[row.task_id] = task.correct;
      }
    });
    saveState();
    renderTasks(state.currentFilter);
    updateHeroStats();
    updateScorePill();
  } catch (e) {
    console.warn('cloudLoadTaskProgress error:', e.message);
  }
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  renderTasks('all');
  updateHeroStats();
  updateScorePill();
  renderLogs();
  setTimeout(checkAuthGate, 800);
});

function checkAuthGate() {
  if (currentUser) {
    hideAuthGate();
    injectUserBadge();
    cloudLoadTaskProgress();
    renderLogs();
  } else {
    showAuthGate();
  }
}

/* ============================================================
   RENDER TASKS
   ============================================================ */
function renderTasks(filter) {
  state.currentFilter = filter;
  const grid = document.getElementById('taskGrid');
  const filtered = filter === 'all'
    ? TASKS
    : TASKS.filter(t => t.tags.includes(filter));

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="st-empty-state"><i class="fas fa-search"></i><p>No tasks found for this filter.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map((t, i) => {
    const done = !!state.completed[t.id];
    return `
    <div class="st-task-card ${done ? 'completed' : ''}"
         style="animation-delay:${i * 0.04}s"
         onclick="openTask(${t.id})">
      <div class="st-task-card-top">
        <div class="st-task-icon ${t.app}">${t.icon}</div>
        <div class="st-task-meta">
          <div class="st-task-tags">
            ${t.tags.map(tag => `<span class="st-tag ${tag}">${tag}</span>`).join('')}
          </div>
          <div class="st-task-title">${t.title}</div>
        </div>
      </div>
      <div class="st-task-desc">${t.desc}</div>
      <div class="st-task-footer">
        <span class="st-task-pts"><i class="fas fa-star"></i> ${t.points} pts</span>
        <span class="st-task-difficulty ${t.difficulty}">${t.difficulty}</span>
      </div>
      <div class="st-task-status-bar">
        <div class="st-task-status-fill" style="width:${done ? '100' : '0'}%"></div>
      </div>
    </div>`;
  }).join('');
}

/* ============================================================
   FILTER TABS
   ============================================================ */
function filterTasks(filter, btn) {
  document.querySelectorAll('.st-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTasks(filter);
}

/* ============================================================
   OPEN / CLOSE MODAL
   ============================================================ */
function openTask(id) {
  const task = TASKS.find(t => t.id === id);
  if (!task) return;
  state.activeTask = task;
  state.selectedOption = null;
  state.answered = !!state.completed[task.id];

  document.getElementById('modalTag').textContent = task.tags.map(t => t.toUpperCase()).join(' · ');
  document.getElementById('modalTitle').textContent = task.title;
  document.getElementById('modalScenario').innerHTML = `<strong>📋 Scenario:</strong> ${task.scenario}`;
  document.getElementById('modalQuestion').textContent = task.question;

  const optionsEl = document.getElementById('modalOptions');
  optionsEl.innerHTML = task.options.map((opt, i) => {
    let cls = '';
    if (state.answered) {
      cls = i === task.correct ? 'correct' : (state.scores[task.id] === i ? 'wrong' : '');
    }
    return `
    <div class="st-option ${cls}" onclick="selectOption(${i})" id="opt-${i}">
      <span class="st-option-letter">${String.fromCharCode(65 + i)}</span>
      <span>${opt.text}${opt.code ? ` <span class="st-option-code">${opt.code}</span>` : ''}</span>
    </div>`;
  }).join('');

  state.hintUsed = false;
  const hintEl = document.getElementById('modalHint');
  hintEl.classList.add('hidden');
  hintEl.innerHTML = `💡 <strong>Hint:</strong> ${task.hint}`;

  const resultEl = document.getElementById('modalResult');
  if (state.answered) {
    const passed = state.scores[task.id] === task.correct;
    resultEl.className = `st-modal-result ${passed ? 'correct' : 'wrong'}`;
    resultEl.innerHTML = passed
      ? `✅ <strong>Correct!</strong> ${task.explanation}`
      : `❌ <strong>Not quite.</strong> ${task.explanation}`;
    resultEl.classList.remove('hidden');
    document.getElementById('modalSubmitBtn').textContent = 'Close';
    document.getElementById('modalSubmitBtn').onclick = closeTaskModal;
  } else {
    resultEl.classList.add('hidden');
    document.getElementById('modalSubmitBtn').textContent = 'Submit Answer';
    document.getElementById('modalSubmitBtn').onclick = submitAnswer;
  }

  document.getElementById('taskModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeTaskModal() {
  document.getElementById('taskModal').classList.add('hidden');
  document.body.style.overflow = '';
  state.activeTask = null;
}

/* ============================================================
   SELECT OPTION
   ============================================================ */
function selectOption(index) {
  if (state.answered) return;
  state.selectedOption = index;
  document.querySelectorAll('.st-option').forEach((el, i) => {
    el.classList.toggle('selected', i === index);
  });
}

/* ============================================================
   HINT
   ============================================================ */
function showHint() {
  document.getElementById('modalHint').classList.remove('hidden');
  state.hintUsed = true;
}

/* ============================================================
   SUBMIT ANSWER
   ============================================================ */
async function submitAnswer() {
  if (state.selectedOption === null) {
    alert('Please select an answer first.');
    return;
  }
  const task   = state.activeTask;
  const passed = state.selectedOption === task.correct;
  const hintUsed = state.hintUsed;

  state.answered = true;
  state.scores[task.id] = state.selectedOption;
  if (passed) state.completed[task.id] = true;

  // Build local log entry
  const logEntry = {
    task_id:    task.id,
    task_title: task.title,
    app:        task.app,
    difficulty: task.difficulty,
    points:     passed ? task.points : 0,
    passed,
    hint_used:  hintUsed,
    ts:         new Date().toISOString(),
    sync:       'pending',
  };
  state.logs.unshift(logEntry);
  saveState();
  renderLogs();

  // Style options
  document.querySelectorAll('.st-option').forEach((el, i) => {
    el.classList.remove('selected');
    if (i === task.correct) el.classList.add('correct');
    else if (i === state.selectedOption) el.classList.add('wrong');
  });

  // Show result
  const resultEl = document.getElementById('modalResult');
  resultEl.className = `st-modal-result ${passed ? 'correct' : 'wrong'}`;
  resultEl.innerHTML = passed
    ? `✅ <strong>Correct! +${task.points} pts</strong> ${task.explanation}`
    : `❌ <strong>Not quite.</strong> ${task.explanation}`;
  resultEl.classList.remove('hidden');

  // Cloud save (non-blocking)
  cloudSaveTaskAttempt(task, state.selectedOption, passed, hintUsed).then(syncStatus => {
    logEntry.sync = syncStatus;
    saveState();
    renderLogs();
  });

  document.getElementById('modalSubmitBtn').textContent = 'Close';
  document.getElementById('modalSubmitBtn').onclick = () => {
    closeTaskModal();
    renderTasks(state.currentFilter);
    updateHeroStats();
    updateScorePill();
    if (passed) spawnXPPopup(`+${task.points} pts`);
    checkAllComplete();
  };
}

/* ============================================================
   STATS & SCORE
   ============================================================ */
function updateHeroStats() {
  const total = TASKS.length;
  const done  = Object.keys(state.completed).length;
  const pct   = Math.round((done / total) * 100);

  document.getElementById('heroCompleted').textContent = done;
  document.getElementById('heroTotal').textContent     = total;
  document.getElementById('heroPct').textContent       = pct + '%';
  document.getElementById('mainProgressFill').style.width = pct + '%';
  document.getElementById('mainProgressLabel').textContent = pct + '% Complete';
}

function updateScorePill() {
  const earned   = TASKS.filter(t => state.completed[t.id]).reduce((s, t) => s + t.points, 0);
  const possible = TASKS.reduce((s, t) => s + t.points, 0);
  document.getElementById('totalScore').textContent    = earned;
  document.getElementById('totalPossible').textContent = possible;
}

function checkAllComplete() {
  const done = Object.keys(state.completed).length;
  if (done >= TASKS.length) {
    const earned = TASKS.reduce((s, t) => s + t.points, 0);
    document.getElementById('finalScore').textContent = earned;
    document.getElementById('completionBanner').classList.remove('hidden');
    launchConfetti();
  }
}

/* ============================================================
   LOGS PANEL
   ============================================================ */
function renderLogs() {
  const tbody = document.getElementById('logsTableBody');
  if (!tbody) return;
  if (state.logs.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" class="st-logs-empty">No attempts yet. Start a task above!</td></tr>';
    return;
  }
  tbody.innerHTML = state.logs.map((log, i) => {
    const time = new Date(log.ts).toLocaleString();
    const resultHtml = log.passed
      ? `<span class="st-log-result-pass">✅ Passed</span>`
      : `<span class="st-log-result-fail">❌ Failed</span>`;
    const syncDot = `<span class="st-log-sync-dot ${log.sync}" title="Cloud: ${log.sync}"></span>`;
    const hintBadge = log.hint_used
      ? `<span style="color:#d97706;font-size:0.78rem;font-weight:700">💡 Yes</span>`
      : `<span style="color:var(--text-muted);font-size:0.78rem">No</span>`;
    return `
    <tr>
      <td style="color:var(--text-muted);font-size:0.8rem">${state.logs.length - i}</td>
      <td style="font-weight:600;max-width:200px">${log.task_title}</td>
      <td><span class="st-log-app-badge ${log.app}">${log.app}</span></td>
      <td><span class="st-task-difficulty ${log.difficulty}" style="font-size:0.75rem;padding:2px 9px">${log.difficulty}</span></td>
      <td>${resultHtml} ${syncDot}</td>
      <td style="font-weight:700;color:${log.passed ? '#059669' : 'var(--text-muted)'}">${log.passed ? '+' + log.points : '0'} pts</td>
      <td>${hintBadge}</td>
      <td style="color:var(--text-muted);font-size:0.78rem;white-space:nowrap">${time}</td>
    </tr>`;
  }).join('');
}

function clearLocalLogs() {
  if (!confirm('Clear your local activity log? Cloud records are not affected.')) return;
  state.logs = [];
  saveState();
  renderLogs();
}

/* ============================================================
   XP POPUP
   ============================================================ */
function spawnXPPopup(text) {
  const el = document.createElement('div');
  el.className = 'xp-popup';
  el.textContent = text;
  el.style.left = '50%';
  el.style.top  = '80px';
  el.style.transform = 'translateX(-50%)';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1500);
}

/* ============================================================
   CONFETTI
   ============================================================ */
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const pieces  = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: Math.random() * 8 + 4,
    d: Math.random() * 3 + 1,
    color: ['#063B91','#10b981','#f59e0b','#ec4899','#7c3aed'][Math.floor(Math.random()*5)],
    tilt: Math.random() * 10 - 5,
  }));
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.d;
      p.x += Math.sin(frame * 0.02 + p.tilt) * 1.5;
    });
    frame++;
    if (frame < 200) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

/* ============================================================
   THEME TOGGLE
   ============================================================ */
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const icon = document.getElementById('themeIcon');
  icon.className = document.body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('st_theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

function applyTheme() {
  if (localStorage.getItem('st_theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('themeIcon').className = 'fas fa-sun';
  }
}

/* Close modal on overlay click */
document.getElementById('taskModal').addEventListener('click', function(e) {
  if (e.target === this) closeTaskModal();
});
