# KFL Learning Hub - Modular JavaScript Architecture

## Overview
The application has been refactored into separate, focused modules for better maintainability and organization.

## Module Structure

### 1. **state.js** - Global State Management
- Manages application state and persistence
- Handles localStorage and Supabase cloud sync
- Tracks user progress, XP, streaks, and achievements
- Functions:
  - `loadState()` - Load state from localStorage
  - `saveState()` - Persist state locally and to cloud
  - `applyCloudDataToState()` - Merge cloud data
  - `checkStreak()` - Update daily learning streak
  - `recordActivity()` - Log user activities

### 2. **dashboard.js** - Dashboard View
- Renders the main dashboard with statistics
- Displays recommended next steps
- Shows topic overview cards
- Functions:
  - `renderDashboard()` - Render dashboard UI
  - `totalInTopic()` - Count completed lessons in topic
  - `updateRecommendation()` - Update recommendation card
  - `takeRecommendedAction()` - Navigate to recommended lesson

### 3. **lesson.js** - Current Lesson & Quizzes
- Loads and displays lesson content
- Handles inline quizzes (single question)
- Handles multi-question milestone exams
- Manages practice exercises and confidence ratings
- Functions:
  - `loadLesson()` - Load current lesson
  - `buildInlineQuiz()` - Create single-question quiz
  - `buildMultiQuiz()` - Create multi-question exam
  - `submitInlineQuiz()` - Check inline quiz answer
  - `submitMQAnswer()` - Check multi-question answer
  - `nextLesson()` - Advance to next lesson
  - `prevLesson()` - Go to previous lesson
  - `rateConfidence()` - Record confidence level

### 4. **progress.js** - My Progress & Mastery
- Calculates mastery percentages for topics
- Renders detailed progress view
- Shows lesson-by-lesson breakdown
- Functions:
  - `getTopicMastery()` - Calculate mastery score (0-100%)
  - `getOverallMastery()` - Calculate overall curriculum mastery
  - `renderProgress()` - Render progress view with expandable topics

### 5. **topics.js** - All Topics View
- Displays all curriculum topics
- Manages topic navigation
- Builds topic tree in sidebar
- Functions:
  - `renderTopicsView()` - Render all topics grid
  - `jumpToTopic()` - Navigate to topic
  - `jumpToLesson()` - Navigate to specific lesson
  - `buildTopicTree()` - Build sidebar topic tree
  - `toggleTreeNode()` - Expand/collapse topic
  - `applyTopicTheme()` - Apply topic color theme
  - `updateSidebarProgress()` - Update progress bar

### 6. **leaderboard.js** - Community Leaderboard
- Fetches and displays community rankings
- Supports filtering by XP or streak
- Shows current user's rank
- Functions:
  - `renderLeaderboard()` - Render leaderboard with rankings
  - `filterLeaderboard()` - Filter by XP or streak

### 7. **achievements.js** - Badges & Achievements
- Manages 12 achievement badges
- Tracks unlocked achievements
- Awards XP bonuses
- Functions:
  - `unlockAchievement()` - Unlock a badge
  - `checkMasteryBadges()` - Check for mastery-based badges
  - `renderAchievements()` - Render badges grid

### 8. **profile.js** - Employee Profile
- Displays user profile and statistics
- Shows activity timeline
- Displays XP progression
- Functions:
  - `renderProfile()` - Render profile view with stats and timeline

### 9. **tutor.js** - AI Tutor & Recommendations
- Manages Ollie the Owl tutor conversations
- Generates personalized recommendations
- Handles practice hint system
- Functions:
  - `getRecommendation()` - Get next recommended lesson
  - `addTutorMessage()` - Add message to tutor chat
  - `sendTutorMessage()` - Send user message to tutor
  - `generateTutorResponse()` - Generate AI response
  - `checkPractice()` - Validate practice answers
  - `getTutorMsg()` - Get random tutor response

### 10. **utils.js** - Utility Functions
- Common UI helpers and utilities
- XP system and animations
- Modal management
- Confetti animations
- Functions:
  - `setText()` - Set element text content
  - `updateProfileUI()` - Update profile display
  - `showView()` - Switch between views
  - `toggleSidebar()` - Toggle sidebar
  - `toggleDarkMode()` - Toggle dark mode
  - `addXP()` - Award XP to user
  - `showFeedback()` - Show feedback modal
  - `launchConfetti()` - Launch confetti animation
  - `openModal()` / `closeModal()` - Modal management

### 11. **init.js** - Initialization & Auth
- App initialization on page load
- Authentication handlers
- Modal tab switching
- Admin dashboard
- Functions:
  - `initApp()` - Initialize app on load
  - `handleSignInSubmit()` - Handle sign in
  - `handleSignUpSubmit()` - Handle sign up
  - `handleLogoutClick()` - Handle logout
  - `openAuthModal()` - Open auth modal
  - `renderAdminDashboard()` - Render admin view

## Import Order in HTML

Add these script tags to `index.html` in this order:

```html
<!-- State Management -->
<script src="js/state.js"></script>

<!-- Core Views -->
<script src="js/dashboard.js"></script>
<script src="js/lesson.js"></script>
<script src="js/progress.js"></script>
<script src="js/topics.js"></script>
<script src="js/leaderboard.js"></script>
<script src="js/achievements.js"></script>
<script src="js/profile.js"></script>

<!-- Systems -->
<script src="js/tutor.js"></script>
<script src="js/utils.js"></script>

<!-- Initialization (must be last) -->
<script src="js/init.js"></script>

<!-- External Dependencies -->
<script src="auth.js"></script>
<script src="curriculum.js"></script>
<script src="app.js"></script> <!-- Keep for backward compatibility -->
```

## Benefits of Modular Structure

1. **Maintainability** - Each module has a single responsibility
2. **Scalability** - Easy to add new features without cluttering existing code
3. **Reusability** - Functions can be easily imported and used elsewhere
4. **Testing** - Individual modules can be tested in isolation
5. **Performance** - Smaller files load faster
6. **Collaboration** - Multiple developers can work on different modules

## Migration Notes

- The original `app.js` is still functional but now split into focused modules
- All global variables and functions remain accessible
- No breaking changes to existing functionality
- Gradually migrate code from `app.js` to specific modules as needed

## Future Improvements

- Convert modules to ES6 classes
- Implement module bundler (Webpack/Vite)
- Add unit tests for each module
- Implement lazy loading for modules
- Add TypeScript for type safety
