/* Hands-on spreadsheet exercises for the Excel and Google Sheets lessons. */

const SPREADSHEET_PRACTICE = {
  'excel-1': {
    title: 'Find a cell in the grid',
    task: 'Click cell B3 in the sample worksheet.',
    mode: 'select',
    target: 'B3',
    data: [['Item', 'Quantity', 'Price'], ['Notebook', '4', '3.5'], ['Pen', '10', '1.25'], ['Folder', '2', '2']]
  },
  'excel-2': {
    title: 'Format a value as currency',
    task: 'Select B2 and change its number format to Currency.',
    mode: 'format',
    target: 'B2',
    data: [['Item', 'Monthly Cost'], ['Cloud storage', '1200'], ['Domain', '18'], ['Support plan', '85']]
  },
  'excel-3': {
    title: 'Write a cell-reference formula',
    task: 'In C2, calculate the line total by multiplying quantity in A2 by price in B2.',
    mode: 'formula',
    outputCell: 'C2',
    answer: '=A2*B2',
    result: 30,
    data: [['Quantity', 'Unit price', 'Line total'], ['6', '5', '']]
  },
  'excel-4': {
    title: 'Calculate a total with SUM',
    task: 'Enter a SUM formula that totals the weekly ticket counts in B2:B5.',
    mode: 'formula',
    outputCell: 'C2',
    answer: '=SUM(B2:B5)',
    result: 36,
    data: [['Week', 'Tickets'], ['Week 1', '8'], ['Week 2', '11'], ['Week 3', '7'], ['Week 4', '10']]
  },
  'excel-5': {
    title: 'Make a decision with IF',
    task: 'In B2, use IF to show "Pass" when the score in A2 is at least 75; otherwise show "Retry".',
    mode: 'formula',
    outputCell: 'B2',
    answer: '=IF(A2>=75,"Pass","Retry")',
    result: 'Pass',
    data: [['Score', 'Result'], ['82', '']]
  },
  'excel-6': {
    title: 'Look up an employee department',
    task: 'In B2, use VLOOKUP to find the department for the ID in A2 using the lookup table in D2:E4.',
    mode: 'formula',
    outputCell: 'B2',
    answer: '=VLOOKUP(A2,D2:E4,2,FALSE)',
    result: 'Support',
    data: [['Employee ID', 'Department', '', 'ID', 'Department'], ['104', '', '', '103', 'Sales'], ['', '', '', '104', 'Support'], ['', '', '', '105', 'IT']]
  },
  'excel-7': {
    title: 'Filter a task list',
    task: 'Filter the Status column to show only Open tasks. The original sample rows remain unchanged.',
    mode: 'filter',
    target: 'Open',
    data: [['Task', 'Owner', 'Status'], ['Replace laptop', 'Mina', 'Open'], ['Reset password', 'Jon', 'Done'], ['Install printer', 'Lee', 'Open']]
  },
  'excel-8': {
    title: 'Highlight values above a threshold',
    task: 'Apply the highlight rule to values greater than 80.',
    mode: 'highlight',
    target: 80,
    data: [['Agent', 'Score'], ['Ari', '92'], ['Bo', '68'], ['Cam', '85']]
  },
  'excel-9': {
    title: 'Build a quick chart',
    task: 'Create a column chart from the monthly sales sample.',
    mode: 'chart',
    data: [['Month', 'Sales'], ['Jan', '12'], ['Feb', '18'], ['Mar', '15'], ['Apr', '24']]
  },
  'sheets-1': {
    title: 'Edit a cloud-sheet cell',
    task: 'Change cell B2 to 42. The simulated autosave status should update immediately.',
    mode: 'edit',
    target: 'B2',
    answer: '42',
    data: [['Setting', 'Value'], ['Daily goal', '20'], ['Streak', '3']]
  },
  'sheets-2': {
    title: 'Sum values that match a condition',
    task: 'In D2, use SUMIF to total sales for the West region in A2:B5.',
    mode: 'formula',
    outputCell: 'D2',
    answer: '=SUMIF(A2:A5,"West",B2:B5)',
    result: 350,
    data: [['Region', 'Sales', '', 'West total'], ['West', '120', '', ''], ['East', '90'], ['West', '230'], ['North', '75']]
  },
  'sheets-3': {
    title: 'Use a validated status dropdown',
    task: 'Set the status in B2 to Done using the allowed status options.',
    mode: 'dropdown',
    target: 'B2',
    answer: 'Done',
    data: [['Task', 'Status'], ['Prepare report', 'Not started'], ['Check totals', 'In progress']]
  },
  'sheets-4': {
    title: 'Create a personal filter view',
    task: 'Create a private view showing only In progress tasks.',
    mode: 'filter',
    target: 'In progress',
    data: [['Task', 'Owner', 'Status'], ['Update guide', 'Mina', 'In progress'], ['Check access', 'Jon', 'Done'], ['Test backup', 'Lee', 'In progress']]
  },
  'sheets-5': {
    title: 'Choose a safe sharing permission',
    task: 'Set the sample collaborator to Viewer so they can read but not edit.',
    mode: 'permission',
    target: 'Viewer',
    data: [['Collaborator', 'Permission'], ['teammate@example.com', 'Editor']]
  },
  'sheets-6': {
    title: 'Import a sample range',
    task: 'Click Import sample range to simulate allowing access to a linked sheet.',
    mode: 'import',
    data: [['Product', 'Units'], ['Notebook', '12'], ['Pen', '30']]
  },
  'sheets-7': {
    title: 'Run a spreadsheet automation',
    task: 'Run the welcome automation to generate a personalized message from the sample name.',
    mode: 'script',
    data: [['Name', 'Welcome message'], ['Taylor', '']]
  },
  'sheets-8': {
    title: 'Total a monthly budget',
    task: 'In B6, use SUM to calculate the total of the monthly expenses in B2:B5.',
    mode: 'formula',
    outputCell: 'B6',
    answer: '=SUM(B2:B5)',
    result: 142,
    data: [['Expense', 'Amount'], ['Internet', '55'], ['Phone', '32'], ['Supplies', '25'], ['Transport', '30'], ['Monthly total', '']]
  },
  'excel-10': {
    title: 'Excel Sales Report Capstone',
    task: 'Complete both formula challenges using the sample sales report.',
    mode: 'capstone',
    steps: [
      { title: 'Mark sales against target', task: 'In D2, use IF to show "Met" when sales in B2 meet or exceed the target in C2.', outputCell: 'D2', answer: '=IF(B2>=C2,"Met","Below")', result: 'Met' },
      { title: 'Calculate total sales', task: 'In B6, use SUM to calculate total sales from B2:B5.', outputCell: 'B6', answer: '=SUM(B2:B5)', result: 5400 }
    ],
    data: [['Month', 'Sales', 'Target', 'Result'], ['Jan', '1200', '1000', ''], ['Feb', '850', '1000', ''], ['Mar', '1600', '1500', ''], ['Apr', '1750', '1500', ''], ['Total sales', '', '', '']]
  },
  'excel-11': {
    title: 'VLOOKUP Employee Department Challenge',
    task: 'In B2, use VLOOKUP to find the department for the employee ID in A2 using the table in D2:E4.',
    mode: 'capstone',
    steps: [
      { title: 'Find the department', task: 'In B2, use VLOOKUP to find the department for employee ID 104 using the table in D2:E4. Use an exact match.', outputCell: 'B2', answer: '=VLOOKUP(A2,D2:E4,2,FALSE)', result: 'Support' }
    ],
    data: [['Employee ID', 'Department', '', 'ID', 'Department'], ['104', '', '', '103', 'Sales'], ['', '', '', '104', 'Support'], ['', '', '', '105', 'IT']]
  },
  'sheets-9': {
    title: 'Google Sheets Budget Analysis Capstone',
    task: 'Complete both formula challenges to summarize the sample expense data.',
    mode: 'capstone',
    steps: [
      { title: 'Total supplies spending', task: 'In E2, use SUMIF to total expenses in B2:B5 where the category in A2:A5 is "Supplies".', outputCell: 'E2', answer: '=SUMIF(A2:A5,"Supplies",B2:B5)', result: 75 },
      { title: 'Count paid expenses', task: 'In E3, use COUNTIF to count how many expenses in C2:C5 are "Paid".', outputCell: 'E3', answer: '=COUNTIF(C2:C5,"Paid")', result: 2 }
    ],
    data: [['Category', 'Amount', 'Status', '', 'Analysis'], ['Supplies', '45', 'Paid', '', ''], ['Travel', '120', 'Pending'], ['Supplies', '30', 'Paid'], ['Software', '80', 'Pending']]
  }
};

function spreadsheetPracticeProgressKey(lessonId) {
  const userId = typeof currentUser !== 'undefined' && currentUser ? currentUser.id : 'guest';
  return `spreadsheetPracticeDbCompleted:${userId}:${lessonId}`;
}

function getSpreadsheetPracticeCompletedSteps(lessonId) {
  const saved = JSON.parse(localStorage.getItem(spreadsheetPracticeProgressKey(lessonId)) || '[]');
  return new Set(Array.isArray(saved) ? saved : []);
}

function markSpreadsheetPracticeStepAnswered(lessonId, stepIndex) {
  const completed = getSpreadsheetPracticeCompletedSteps(lessonId);
  completed.add(stepIndex);
  localStorage.setItem(spreadsheetPracticeProgressKey(lessonId), JSON.stringify([...completed]));

  if (isSpreadsheetPracticeComplete(lessonId)) {
    document.getElementById(`multi-quiz-${lessonId}`)?.classList.remove('hidden');
  }
}

async function restoreSpreadsheetPracticeProgress(lessonId, status) {
  const config = SPREADSHEET_PRACTICE[lessonId];
  const userId = typeof currentUser !== 'undefined' ? currentUser?.id : null;
  if (!config || config.mode !== 'capstone' || !userId || !sbClient) return;

  try {
    const { data, error } = await sbClient
      .from('hands_on_practice_attempts')
      .select('step_index, submitted_answer, is_correct')
      .eq('user_id', userId)
      .eq('lesson_id', lessonId)
      .eq('is_correct', true);
    if (error) throw error;
    if (currentUser?.id !== userId) return;

    const savedSteps = new Set();
    (data || []).forEach(attempt => {
      let stepIndex = attempt.step_index;
      if (!Number.isInteger(stepIndex)) {
        stepIndex = config.steps.findIndex(step =>
          attempt.submitted_answer?.startsWith(`${step.title}:`)
        );
      }
      if (stepIndex >= 0 && stepIndex < config.steps.length) {
        markSpreadsheetPracticeStepAnswered(lessonId, stepIndex);
        savedSteps.add(stepIndex);
      }
    });

    const legacyKey = `spreadsheetPracticeCompleted:${userId}:${lessonId}`;
    const legacySteps = JSON.parse(localStorage.getItem(legacyKey) || '[]');
    let migratedLegacyCompletion = false;
    if (Array.isArray(legacySteps)) {
      for (const stepIndex of legacySteps) {
        if (!Number.isInteger(stepIndex) || stepIndex < 0 || stepIndex >= config.steps.length || savedSteps.has(stepIndex)) continue;
        const { error: migrationError } = await sbClient.from('hands_on_practice_attempts').insert({
          user_id: userId,
          lesson_id: lessonId,
          app: lessonId.startsWith('excel-') ? 'excel' : 'sheets',
          exercise_title: config.title,
          submitted_answer: 'Previously completed in this browser; the original submitted answer was not retained.',
          is_correct: true,
          step_index: stepIndex
        });
        if (migrationError) throw migrationError;
        markSpreadsheetPracticeStepAnswered(lessonId, stepIndex);
        savedSteps.add(stepIndex);
        migratedLegacyCompletion = true;
      }
    }

    if (isSpreadsheetPracticeComplete(lessonId)) {
      status.textContent = migratedLegacyCompletion
        ? 'Previously completed tasks from this browser have been added to your account. Their original answer text was not retained.'
        : 'Previously saved correct answers restored from your account.';
      status.className = 'spreadsheet-practice-status success';
      if (migratedLegacyCompletion) localStorage.removeItem(legacyKey);
    }
  } catch (error) {
    console.error('Unable to restore saved spreadsheet practice progress:', error);
    status.textContent = `Could not load saved practice progress: ${error.message}. Please check the Supabase setup and try again.`;
    status.className = 'spreadsheet-practice-status error';
  }
}

async function restoreCurrentSpreadsheetPracticeProgress() {
  const topic = typeof TOPICS !== 'undefined' ? TOPICS[state.currentTopicIdx] : null;
  const lesson = topic?.lessons[state.currentLessonIdx];
  if (!lesson || SPREADSHEET_PRACTICE[lesson.id]?.mode !== 'capstone') return;
  const status = document.querySelector(`#spreadsheet-practice-${lesson.id} .spreadsheet-practice-status`);
  if (status) await restoreSpreadsheetPracticeProgress(lesson.id, status);
}

function isSpreadsheetPracticeComplete(lessonId) {
  const config = SPREADSHEET_PRACTICE[lessonId];
  const completed = getSpreadsheetPracticeCompletedSteps(lessonId);
  return config?.mode === 'capstone' &&
    config.steps.every((_, index) => completed.has(index));
}

function spreadsheetColumnName(number) {
  let name = '';
  while (number > 0) {
    const remainder = (number - 1) % 26;
    name = String.fromCharCode(65 + remainder) + name;
    number = Math.floor((number - 1) / 26);
  }
  return name;
}

function spreadsheetCellValue(address, inputs) {
  const match = /^([A-Z]+)([1-9]\d*)$/.exec(address);
  if (!match) throw new Error(`Invalid cell address: ${address}`);
  let column = 0;
  for (const char of match[1]) column = column * 26 + char.charCodeAt(0) - 64;
  const row = Number(match[2]) - 1;
  return inputs[row]?.[column - 1] ?? '';
}

function evaluateSpreadsheetFormula(formula, inputs) {
  if (!formula.startsWith('=')) throw new Error('Start every spreadsheet formula with =.');
  const expression = formula.startsWith('=') ? formula.slice(1) : formula;
  const tokens = expression.match(/"(?:[^"]|"")*"|(?:\d+(?:\.\d*)?|\.\d+)|[A-Z]+\d+|>=|<=|<>|[A-Z]+|[()+\-*/,:=<>]/gi);
  if (!tokens || tokens.join('').replace(/\s/g, '') !== expression.replace(/\s/g, '')) {
    throw new Error('Use a supported formula with cell references or spreadsheet functions.');
  }
  let index = 0;
  const peek = () => tokens[index];
  const take = () => tokens[index++];
  const isCell = (token) => /^[A-Z]+\d+$/i.test(token || '');
  const parseRangeOrValue = () => {
    const first = parseComparison();
    if (peek() !== ':') return first;
    take();
    const last = parseComparison();
    if (typeof first !== 'object' || typeof last !== 'object' || !first.address || !last.address) {
      throw new Error('A range must use cell references, such as A2:B5.');
    }
    const start = /^([A-Z]+)(\d+)$/.exec(first.address);
    const end = /^([A-Z]+)(\d+)$/.exec(last.address);
    const startCol = [...start[1]].reduce((n, c) => n * 26 + c.charCodeAt(0) - 64, 0);
    const endCol = [...end[1]].reduce((n, c) => n * 26 + c.charCodeAt(0) - 64, 0);
    const values = [];
    for (let row = Number(start[2]); row <= Number(end[2]); row++) {
      const rangeRow = [];
      for (let col = startCol; col <= endCol; col++) {
        rangeRow.push(spreadsheetCellValue(`${spreadsheetColumnName(col)}${row}`, inputs));
      }
      values.push(rangeRow);
    }
    return values;
  };
  const unwrap = value => value && typeof value === 'object' && !Array.isArray(value) && 'value' in value ? value.value : value;
  const parseComparison = () => {
    let left = parseAdditive();
    const operator = peek();
    if (['=', '<>', '>', '<', '>=', '<='].includes(operator)) {
      take();
      const right = parseAdditive();
      left = unwrap(left);
      const rightValue = unwrap(right);
      const comparable = value => {
        if (typeof value === 'number') return value;
        const numericValue = Number(value);
        return String(value).trim() !== '' && Number.isFinite(numericValue)
          ? numericValue
          : String(value).toLowerCase();
      };
      const a = comparable(left);
      const b = comparable(rightValue);
      left = operator === '=' ? a === b : operator === '<>' ? a !== b :
        operator === '>' ? a > b : operator === '<' ? a < b :
          operator === '>=' ? a >= b : a <= b;
    }
    return left;
  };
  const parseAdditive = () => {
    let value = parseMultiplicative();
    while (peek() === '+' || peek() === '-') {
      const operator = take();
      const right = parseMultiplicative();
      value = operator === '+' ? Number(unwrap(value)) + Number(unwrap(right)) : Number(unwrap(value)) - Number(unwrap(right));
    }
    return value;
  };
  const parseMultiplicative = () => {
    let value = parsePrimary();
    while (peek() === '*' || peek() === '/') {
      const operator = take();
      const right = parsePrimary();
      value = operator === '*' ? Number(unwrap(value)) * Number(unwrap(right)) : Number(unwrap(value)) / Number(unwrap(right));
    }
    return value;
  };
  const parsePrimary = () => {
    const token = take();
    if (token === '(') {
      const value = parseComparison();
      if (take() !== ')') throw new Error('Missing closing parenthesis.');
      return value;
    }
    if (token?.startsWith('"')) return token.slice(1, -1).replace(/""/g, '"');
    if (token && /^(\d|\.)/.test(token)) return Number(token);
    if (/^TRUE$/i.test(token || '')) return true;
    if (/^FALSE$/i.test(token || '')) return false;
    if (isCell(token)) return { address: token.toUpperCase(), value: spreadsheetCellValue(token.toUpperCase(), inputs) };
    if (/^[A-Z]+$/i.test(token || '') && peek() === '(') {
      take();
      const args = [];
      if (peek() !== ')') {
        do {
          args.push(parseRangeOrValue());
          if (peek() !== ',') break;
          take();
        } while (true);
      }
      if (take() !== ')') throw new Error('Missing closing parenthesis.');
      return spreadsheetFunction(token.toUpperCase(), args);
    }
    throw new Error('Check the formula syntax and try again.');
  };
  const result = parseComparison();
  if (index !== tokens.length) throw new Error('Check the formula syntax and try again.');
  return unwrap(result);
}

function spreadsheetFunction(name, args) {
  const unwrap = value => value && typeof value === 'object' && !Array.isArray(value) && 'value' in value ? value.value : value;
  const flatten = values => values.flat(Infinity).map(unwrap);
  const numeric = flatten(args).map(Number).filter(Number.isFinite);
  if (name === 'SUM') return numeric.reduce((sum, value) => sum + value, 0);
  if (name === 'AVERAGE') return numeric.length ? numeric.reduce((sum, value) => sum + value, 0) / numeric.length : 0;
  if (name === 'COUNT') return numeric.length;
  if (name === 'COUNTA') return flatten(args).filter(value => value !== '').length;
  if (name === 'MAX') return numeric.length ? Math.max(...numeric) : 0;
  if (name === 'MIN') return numeric.length ? Math.min(...numeric) : 0;
  if (name === 'IF') return args[0] ? args[1] : args[2];
  if (name === 'SUMIF' || name === 'COUNTIF') {
    const criteria = String(unwrap(args[1]) ?? '').toLowerCase();
    const criteriaValues = flatten([args[0]]);
    const sumValues = flatten([args[2] ?? args[0]]);
    let total = 0;
    let count = 0;
    criteriaValues.forEach((value, i) => {
      if (String(value).toLowerCase() === criteria) {
        count++;
        total += Number(sumValues[i]) || 0;
      }
    });
    return name === 'SUMIF' ? total : count;
  }
  if (name === 'VLOOKUP') {
    const needle = String(unwrap(args[0])).toLowerCase();
    const rows = args[1];
    if (!Array.isArray(rows) || !Array.isArray(rows[0])) throw new Error('VLOOKUP needs a table range.');
    const index = Number(args[2]) - 1;
    const row = rows.find(item => String(item[0]).toLowerCase() === needle);
    if (!row || index < 0 || index >= row.length) throw new Error('No matching value found.');
    return row[index];
  }
  if (name === 'UNIQUE') return [...new Set(flatten([args[0]]))];
  if (name === 'IMPORTRANGE') return 'Sample range imported';
  throw new Error(`The ${name} function is not supported in this practice sheet yet.`);
}

async function saveSpreadsheetPracticeAttempt(lessonId, config, submittedAnswer, isCorrect, feedback, stepIndex = null) {
  if (typeof sbClient === 'undefined' || !sbClient || typeof currentUser === 'undefined' || !currentUser) {
    return {
      saved: false,
      message: `${feedback} Sign in to save this attempt to your account.`
    };
  }

  try {
    const { error } = await sbClient.from('hands_on_practice_attempts').insert({
      user_id: currentUser.id,
      lesson_id: lessonId,
      app: lessonId.startsWith('excel-') ? 'excel' : 'sheets',
      exercise_title: config.title,
      submitted_answer: String(submittedAnswer).slice(0, 2000),
      is_correct: isCorrect,
      step_index: stepIndex
    });
    if (error) throw error;
    return { saved: true, message: `${feedback} Attempt saved to your account.` };
  } catch (error) {
    console.error('Unable to save spreadsheet practice attempt:', error);
    return {
      saved: false,
      message: `${feedback} We couldn't save this attempt: ${error.message}`
    };
  }
}

function mountSpreadsheetPractice(lessonId, body) {
  const config = SPREADSHEET_PRACTICE[lessonId];
  if (!config || !body) return;
  const mountPoint = body.querySelector(`#spreadsheet-practice-${lessonId}`);
  if (!mountPoint) return;

  const exercise = document.createElement('section');
  exercise.className = 'spreadsheet-practice';
  exercise.setAttribute('aria-label', `${config.title} hands-on exercise`);
  const title = document.createElement('h3');
  title.textContent = `🧪 Hands-on: ${config.title}`;
  const instructions = document.createElement('p');
  instructions.textContent = config.task;
  const note = document.createElement('div');
  note.className = 'spreadsheet-practice-note';
  note.textContent = 'Practice simulator: when signed in, your exercise answers and results are saved for administrators. Changes are not sent to Excel or Google Sheets.';
  const gridWrap = document.createElement('div');
  gridWrap.className = 'spreadsheet-practice-grid-wrap';
  const grid = document.createElement('table');
  grid.className = 'spreadsheet-practice-grid';
  grid.setAttribute('aria-label', 'Editable sample spreadsheet');
  const status = document.createElement('div');
  status.className = 'spreadsheet-practice-status';
  status.setAttribute('role', 'status');
  const controls = document.createElement('div');
  controls.className = 'spreadsheet-practice-controls';
  const values = config.data.map(row => row.slice());
  let selectedCell = '';
  let currentFilter = '';
  let imported = false;
  let permission = '';
  let threshold = 80;

  function setStatus(message, success = false, error = false) {
    status.textContent = message;
    status.className = `spreadsheet-practice-status${success ? ' success' : error ? ' error' : ''}`;
  }

  async function submitAttempt(answer, correct, feedback, stepIndex = null) {
    setStatus('Saving your attempt…');
    const result = await saveSpreadsheetPracticeAttempt(lessonId, config, answer, correct, feedback, stepIndex);
    if (result.saved && correct && stepIndex !== null) {
      markSpreadsheetPracticeStepAnswered(lessonId, stepIndex);
    }
    setStatus(result.message, result.saved && correct, !result.saved || !correct);
  }

  function renderGrid() {
    grid.replaceChildren();
    const header = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const corner = document.createElement('th');
    corner.textContent = '';
    headerRow.appendChild(corner);
    const width = Math.max(...values.map(row => row.length));
    for (let col = 1; col <= width; col++) {
      const th = document.createElement('th');
      th.textContent = spreadsheetColumnName(col);
      headerRow.appendChild(th);
    }
    header.appendChild(headerRow);
    grid.appendChild(header);
    const rows = document.createElement('tbody');
    values.forEach((row, rowIndex) => {
      if (currentFilter && rowIndex > 0 && !row.some(cell => String(cell).toLowerCase() === currentFilter.toLowerCase())) return;
      const tr = document.createElement('tr');
      const rowHeader = document.createElement('th');
      rowHeader.className = 'row-heading';
      rowHeader.textContent = String(rowIndex + 1);
      tr.appendChild(rowHeader);
      for (let col = 0; col < width; col++) {
        const td = document.createElement('td');
        const address = `${spreadsheetColumnName(col + 1)}${rowIndex + 1}`;
        const input = document.createElement('input');
        input.className = 'spreadsheet-practice-cell';
        input.type = 'text';
        input.value = row[col] ?? '';
        input.setAttribute('aria-label', `Cell ${address}`);
        input.dataset.address = address;
        if (rowIndex === 0) input.classList.add('readonly');
        if (selectedCell === address) input.classList.add('selected');
        if (config.mode === 'highlight' && rowIndex > 0 && col === 1 && Number(row[col]) > threshold) input.classList.add('highlighted');
        input.addEventListener('focus', () => { selectedCell = address; });
        input.addEventListener('click', () => { selectedCell = address; });
        input.addEventListener('input', () => {
          if (!values[rowIndex]) values[rowIndex] = [];
          values[rowIndex][col] = input.value;
        });
        if (config.mode === 'edit' && address === config.target) {
          input.addEventListener('change', () => {
            const correct = input.value === config.answer;
            void submitAttempt(`${address} = ${input.value}`, correct, correct
              ? 'Correct — your sample cell is updated.'
              : `Not quite. Set ${address} to ${config.answer}.`);
          });
        }
        td.appendChild(input);
        tr.appendChild(td);
      }
      rows.appendChild(tr);
    });
    grid.appendChild(rows);
  }

  function addSelect(labelText, options, onChange) {
    const label = document.createElement('label');
    label.append(document.createTextNode(labelText));
    const select = document.createElement('select');
    options.forEach(option => {
      const item = document.createElement('option');
      item.value = option;
      item.textContent = option;
      select.appendChild(item);
    });
    select.addEventListener('change', () => onChange(select.value));
    label.appendChild(select);
    controls.appendChild(label);
    return select;
  }

  let formulaInput;
  if (config.mode === 'formula' || config.mode === 'capstone') {
    let activeStep = 0;
    let stepSelect;
    if (config.mode === 'capstone') {
      note.textContent = 'Submit an answer for every challenge to complete this lesson. Incorrect answers count as attempts, and signed-in learners’ submissions are saved for administrators.';
      stepSelect = addSelect('Challenge:', config.steps.map((step, index) => `${index + 1}. ${step.title}`), value => {
        activeStep = Number(value.split('.')[0]) - 1;
        instructions.textContent = config.steps[activeStep].task;
        formulaInput.value = '';
        setStatus('');
      });
      stepSelect.value = `1. ${config.steps[0].title}`;
    }
    const label = document.createElement('label');
    label.textContent = 'Formula for the target cell:';
    formulaInput = document.createElement('input');
    formulaInput.className = 'practice-formula';
    formulaInput.type = 'text';
    formulaInput.placeholder = '=SUM(B2:B5)';
    formulaInput.setAttribute('aria-label', 'Enter a spreadsheet formula');
    const calculate = document.createElement('button');
    calculate.className = 'practice-button';
    calculate.type = 'button';
    calculate.textContent = 'Calculate';
    calculate.addEventListener('click', async () => {
      const step = config.mode === 'capstone' ? config.steps[activeStep] : config;
      try {
        const result = evaluateSpreadsheetFormula(formulaInput.value.trim(), values);
        const matches = typeof step.result === 'number'
          ? typeof result === 'number' && Math.abs(result - step.result) < 0.000001
          : String(result).toLowerCase() === String(step.result).toLowerCase();
        if (step.outputCell) {
          const match = /^([A-Z]+)(\d+)$/.exec(step.outputCell);
          const column = [...match[1]].reduce((n, char) => n * 26 + char.charCodeAt(0) - 64, 0) - 1;
          const row = Number(match[2]) - 1;
          values[row][column] = Array.isArray(result) ? result.join(', ') : String(result);
          renderGrid();
        }
        const answer = config.mode === 'capstone'
          ? `${step.title}: ${formulaInput.value.trim()} → ${Array.isArray(result) ? result.join(', ') : result}`
          : formulaInput.value.trim();
        await submitAttempt(answer, matches,
          `Result: ${Array.isArray(result) ? result.join(', ') : result}. ${matches ? 'Correct — your formula solves the task!' : 'That result is not correct yet.'}`,
          config.mode === 'capstone' ? activeStep : null);
      } catch (error) {
        const answer = config.mode === 'capstone'
          ? `${step.title}: ${formulaInput.value.trim()}`
          : formulaInput.value.trim();
        await submitAttempt(answer, false, error.message, config.mode === 'capstone' ? activeStep : null);
      }
    });
    label.appendChild(formulaInput);
    controls.append(label, calculate);
  } else if (config.mode === 'select') {
    grid.addEventListener('click', event => {
      const cell = event.target.closest('.spreadsheet-practice-cell');
      if (!cell) return;
      const correct = cell.dataset.address === config.target;
      void submitAttempt(cell.dataset.address, correct, correct
        ? `${config.target} selected — nice work!`
        : `Select ${config.target} to complete the task.`);
    });
  } else if (config.mode === 'format') {
    const formatSelect = addSelect('Number format:', ['General', 'Currency', 'Percentage'], value => {
      const cell = grid.querySelector(`[data-address="${config.target}"]`);
      if (cell) cell.value = value === 'Currency' ? `$${Number(values[1][1]).toFixed(2)}` : values[1][1];
      const correct = selectedCell === config.target && value === 'Currency';
      void submitAttempt(`${selectedCell || 'No cell selected'}; format=${value}`, correct, correct
        ? `${config.target} is now displayed as currency.`
        : `Select ${config.target} and choose Currency.`);
    });
    grid.addEventListener('click', event => {
      const cell = event.target.closest('.spreadsheet-practice-cell');
      if (!cell) return;
      selectedCell = cell.dataset.address;
      const correct = selectedCell === config.target && formatSelect.value === 'Currency';
      void submitAttempt(`${selectedCell}; format=${formatSelect.value}`, correct, correct
        ? `${config.target} is now displayed as currency.`
        : `Select ${config.target} and choose Currency.`);
    });
  } else if (config.mode === 'filter') {
    const choices = [...new Set(values.slice(1).map(row => row[2]))].filter(Boolean);
    addSelect('Show status:', ['All', ...choices], value => {
      currentFilter = value === 'All' ? '' : value;
      renderGrid();
      const correct = value === config.target;
      void submitAttempt(value, correct, correct
        ? `Showing only "${value}" in this practice view.`
        : `Choose "${config.target}" for this task.`);
    });
  } else if (config.mode === 'highlight') {
    const label = document.createElement('label');
    label.textContent = 'Highlight values greater than:';
    const input = document.createElement('input');
    input.type = 'number';
    input.value = String(threshold);
    input.setAttribute('aria-label', 'Highlight threshold');
    input.addEventListener('change', () => {
      threshold = Number(input.value);
      renderGrid();
      const correct = threshold === config.target;
      void submitAttempt(String(threshold), correct, correct
        ? `Values greater than ${threshold} are highlighted.`
        : `Set the rule to greater than ${config.target}.`);
    });
    label.appendChild(input);
    controls.appendChild(label);
  } else if (config.mode === 'chart') {
    const chartType = addSelect('Chart type:', ['Choose a chart', 'Column', 'Line', 'Pie'], value => {
      const chartReady = value === 'Column';
      let chart = exercise.querySelector('.spreadsheet-practice-chart');
      if (chart) chart.remove();
      if (chartReady) {
        chart = document.createElement('div');
        chart.className = 'spreadsheet-practice-chart';
        values.slice(1).forEach(row => {
          const bar = document.createElement('div');
          bar.className = 'spreadsheet-practice-chart-bar';
          bar.style.height = `${Math.max(5, Number(row[1]) / 24 * 100)}%`;
          const caption = document.createElement('span');
          caption.textContent = row[0];
          bar.appendChild(caption);
          chart.appendChild(bar);
        });
        gridWrap.after(chart);
      }
      const correct = value === 'Column';
      void submitAttempt(value, correct, correct
        ? 'Column chart created from the sample sales data!'
        : 'Choose Column to compare monthly sales.');
    });
    chartType.value = 'Choose a chart';
  } else if (config.mode === 'dropdown') {
    const statusCell = grid.querySelector('[data-address="B2"]');
    const dropdown = addSelect('B2 status:', ['Not started', 'In progress', 'Done'], value => {
      values[1][1] = value;
      if (statusCell) statusCell.value = value;
      const correct = value === config.answer;
      void submitAttempt(value, correct, correct
        ? 'Valid status selected from the approved list!'
        : `Choose ${config.answer} to complete the task.`);
    });
    dropdown.value = 'Not started';
  } else if (config.mode === 'permission') {
    addSelect('Permission:', ['Editor', 'Commenter', 'Viewer'], value => {
      const correct = value === config.target;
      void submitAttempt(value, correct, correct
        ? 'Viewer access selected: the collaborator can read but cannot edit.'
        : `Choose ${config.target} access for this task.`);
    });
  } else if (config.mode === 'import') {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'practice-button';
    button.textContent = 'Import sample range';
    button.addEventListener('click', () => {
      if (!imported) {
        values.push(['Imported range', 'Connected']);
        imported = true;
        renderGrid();
      }
      void submitAttempt('Import sample range', true,
        'Sample range connected. In Google Sheets, a real IMPORTRANGE link also needs permission from the source sheet.');
    });
    controls.appendChild(button);
  } else if (config.mode === 'script') {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'practice-button';
    button.textContent = 'Run welcome automation';
    button.addEventListener('click', () => {
      values[1][1] = `Welcome to the team, ${values[1][0]}!`;
      renderGrid();
      void submitAttempt(values[1][1], true, 'Automation ran and created a welcome message from the name in A2.');
    });
    controls.appendChild(button);
  } else if (config.mode === 'edit') {
    setStatus('Edit B2 above and leave the cell to submit and save your answer.');
  }

  renderGrid();
  gridWrap.appendChild(grid);
  exercise.append(title, instructions, note, controls, gridWrap, status);
  mountPoint.replaceWith(exercise);
  void restoreSpreadsheetPracticeProgress(lessonId, status);
}
