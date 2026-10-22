# KFL Learning Hub - Module Quick Reference

## File Structure
```
js/
├── state.js           (State management & persistence)
├── dashboard.js       (Dashboard view)
├── lesson.js          (Current lesson & quizzes)
├── progress.js        (Progress tracking & mastery)
├── topics.js          (Topics view & navigation)
├── leaderboard.js     (Community leaderboard)
├── achievements.js    (Badges & achievements)
├── profile.js         (Employee profile)
├── tutor.js           (AI tutor & recommendations)
├── utils.js           (Utilities & helpers)
├── init.js            (Initialization & auth)
└── README.md          (Documentation)
```

## Module Dependencies

```
init.js
  ├── state.js
  ├── dashboard.js
  ├── lesson.js
  ├── progress.js
  ├── topics.js
  ├── leaderboard.js
  ├── achievements.js
  ├── profile.js
  ├── tutor.js
  └── utils.js
```

## Key Functions by Module

### Dashboard
- `renderDashboard()` - Main dashboard view
- `updateRecommendation()` - Update recommendation card

### Lesson
- `loadLesson()` - Load lesson content
- `nextLesson()` - Advance to next lesson
- `rateConfidence()` - Rate understanding level

### Progress
- `getTopicMastery()` - Calculate mastery (0-100%)
- `renderProgress()` - Show detailed progress

### Topics
- `renderTopicsView()` - Show all topics
- `jumpToLesson()` - Navigate to lesson

### Leaderboard
- `renderLeaderboard()` - Show rankings
- `filterLeaderboard()` - Filter by XP/streak

### Achievements
- `unlockAchievement()` - Award badge
- `renderAchievements()` - Show badges

### Profile
- `renderProfile()` - Show user profile

### Tutor
- `getRecommendation()` - Get next step
- `addTutorMessage()` - Chat with tutor
- `checkPractice()` - Validate answers

### Utils
- `addXP()` - Award experience points
- `showView()` - Switch views
- `toggleDarkMode()` - Theme toggle

### State
- `saveState()` - Persist data
- `loadState()` - Load saved data
- `checkStreak()` - Update streak

## How to Use

1. **Add to HTML**: Include script tags in order (see README.md)
2. **Call Functions**: Use functions from any module
3. **Access State**: All modules can read/write to global `state` object
4. **Add Features**: Create new module or add to existing one

## Example: Adding a New Feature

1. Create `js/newfeature.js`
2. Add functions for your feature
3. Import in `index.html` before `init.js`
4. Call functions from other modules as needed

## Backward Compatibility

- Original `app.js` still works
- All functions remain globally accessible
- No breaking changes to existing code
- Gradual migration possible

## Performance Tips

- Modules load in parallel (except init.js which loads last)
- Each module is ~5-10KB
- Total size: ~80KB (vs 1.9MB monolithic app.js)
- Faster initial load and parsing

## Testing

Each module can be tested independently:
```javascript
// Test state.js
loadState();
saveState();

// Test dashboard.js
renderDashboard();

// Test lesson.js
loadLesson();
nextLesson();
```

## Support

For questions about specific modules, refer to:
- Module comments at top of file
- Function documentation in code
- README.md for detailed overview
