# LearnPath — Your Personal AI-Powered Tutor 🦉

An interactive, gamified EdTech tutoring web platform designed to teach modern web development, programming, and productivity tools step-by-step from zero to mastery.

---

## 🌟 Key Features

1. **Personal Tutor Mascot (Ollie the Owl 🦉):**
   - Live interactive chat with typing indicators and encouraging pedagogical advice.
   - Intelligent keyword analysis on practice inputs with hints, feedback, and celebratory reactions.
2. **One Lesson at a Time Learning System:**
   - No overwhelming information dumps.
   - Real-world analogies for every single technical concept.
   - Step-by-step, line-by-line code breakdowns.
3. **Interactive Sandboxed Code Playgrounds:**
   - Real-time HTML, CSS, JavaScript, and TypeScript live editors.
   - Run code instantly in isolated preview iframes.
4. **Milestone Quizzes & Multi-Question Exams:**
   - 78+ single-question check quizzes throughout lessons.
   - 10 comprehensive Multi-Question Milestone Exams with live scorecards and progress bars.
5. **Gamified Progress Tracking:**
   - Experience Points (XP) with animated floating popups (`+XP`).
   - Daily learning streak counters with flame animations.
   - Visual progress bars, topic completion checkmarks, and confetti celebrations.
   - Full persistence across browser sessions via `localStorage`.
6. **Modern High-Performance UI:**
   - Glassmorphism surfaces with subtle backdrop blur.
   - Dark mode toggle with smooth theme transitions.
   - Responsive design tailored for mobile phones, tablets, and wide desktop monitors.
7. **Hands-On Spreadsheet Lessons:**
   - Excel and Google Sheets each include dedicated hands-on lessons with editable worksheets and instant feedback. Excel's final VLOOKUP quiz is unlocked only after all hands-on tasks are completed correctly.
   - Signed-in learners' correct and incorrect answers are recorded in Supabase and can be reviewed by administrators in the Admin Hub.
   - Practice runs in a browser simulator; it does not connect to or save changes in Microsoft Excel or Google Sheets.

### Enable saved spreadsheet practice attempts

Run [`supabase_hands_on_practice_setup.sql`](./supabase_hands_on_practice_setup.sql) in the Supabase SQL Editor. This creates or updates the attempts table, including the task index needed to restore completed work. New installations that run [`supabase_schema.sql`](./supabase_schema.sql) already include it. Learners must be signed in for answers to be saved; a task is only marked complete after Supabase confirms the correct answer was saved. Previously saved correct attempts are restored when opening a hands-on lesson. Older browser-only completion records are migrated on sign-in; their original answer text cannot be recovered and is labeled as such. Admin access to the attempts RPC is restricted to profiles with the `admin` role.

---

## 📚 Complete Curriculum Overview

| # | Topic | Lessons | Focus Areas |
|---|---|---|---|
| **1** | **Payload CMS** 📦 | 10 Lessons | Headless CMS, collections, TypeScript schemas, auth, REST APIs, hooks, uploads, globals & blog project. |
| **2** | **GitHub** 🐙 | 10 Lessons | Git vs GitHub, repositories, staging, commits, push/pull, branching, PRs, clone, merge conflicts, .gitignore. |
| **3** | **HTML** 🌐 | 9 Lessons | Document skeleton, headings, paragraphs, hyperlinks, images, lists, forms, tables, semantic HTML, HTML5 media. |
| **4** | **CSS** 🎨 | 10 Lessons | Selectors, gradients, typography, Box Model, Flexbox, CSS Grid, positioning, transitions, animations, media queries. |
| **5** | **JavaScript** ⚡ | 11 Lessons | Variables, data types, operators, conditionals, loops, functions, array methods (map/filter), objects, DOM, Fetch API. |
| **6** | **TypeScript** 🔷 | 8 Lessons | Static typing, primitive types, type annotations, arrays, tuples, enums, interfaces, union types, generics, DOM typing. |
| **7** | **Microsoft Excel** 📊 | 11 Lessons | Interface, cells/ranges, formatting, formulas, IF logic, VLOOKUP/XLOOKUP, tables, charts, sales capstone, and hands-on VLOOKUP. |
| **8** | **Google Sheets** 📈 | 9 Lessons | Cloud collaboration, SUMIF/COUNTIF, UNIQUE, data validation dropdowns, filter views, permissions, IMPORTRANGE, Apps Script, and budget capstone. |
| **9** | **VS Code** 💻 | 10 Lessons | Interface, folder workspaces, integrated terminal, Prettier/Live Server, shortcuts, Emmet, visual Git, debugger, settings. |
---

## 🚀 How to Run the Website

Simply open `index.html` in any modern web browser:
- Double-click `index.html` in File Explorer, OR
- Right-click `index.html` and choose **Open with → Google Chrome / Microsoft Edge / Firefox / Safari**.

No web server or dependencies are required — all styles, scripts, and fonts load smoothly offline or online!
