<!-- 
  KFL Learning Hub - HTML Script Integration Guide
  
  Add these script tags to your index.html file, preferably before the closing </body> tag.
  Order is important - state.js must load first, init.js must load last.
-->

<!-- ===== STATE MANAGEMENT ===== -->
<!-- Must load first - provides global state object -->
<script src="js/state.js"></script>

<!-- ===== CORE VIEWS ===== -->
<!-- Dashboard, Lesson, Progress, Topics, Leaderboard, Achievements, Profile -->
<script src="js/dashboard.js"></script>
<script src="js/lesson.js"></script>
<script src="js/progress.js"></script>
<script src="js/topics.js"></script>
<script src="js/leaderboard.js"></script>
<script src="js/achievements.js"></script>
<script src="js/profile.js"></script>

<!-- ===== SYSTEMS ===== -->
<!-- Tutor AI, Utilities, and Helpers -->
<script src="js/tutor.js"></script>
<script src="js/utils.js"></script>

<!-- ===== INITIALIZATION ===== -->
<!-- Must load last - initializes app and sets up event listeners -->
<script src="js/init.js"></script>

<!-- ===== EXTERNAL DEPENDENCIES ===== -->
<!-- Keep existing external scripts -->
<script src="auth.js"></script>
<script src="curriculum.js"></script>

<!-- ===== OPTIONAL: BACKWARD COMPATIBILITY ===== -->
<!-- Keep app.js for backward compatibility (can be removed after full migration) -->
<!-- <script src="app.js"></script> -->

<!-- 
  COMPLETE EXAMPLE - Add this to your index.html before </body>:
  
  <script src="js/state.js"></script>
  <script src="js/dashboard.js"></script>
  <script src="js/lesson.js"></script>
  <script src="js/progress.js"></script>
  <script src="js/topics.js"></script>
  <script src="js/leaderboard.js"></script>
  <script src="js/achievements.js"></script>
  <script src="js/profile.js"></script>
  <script src="js/tutor.js"></script>
  <script src="js/utils.js"></script>
  <script src="js/init.js"></script>
  <script src="auth.js"></script>
  <script src="curriculum.js"></script>
-->

<!-- 
  MIGRATION CHECKLIST:
  
  ✓ Create js/ directory
  ✓ Add all module files (state.js, dashboard.js, etc.)
  ✓ Update index.html with script tags above
  ✓ Test all functionality
  ✓ Remove old app.js reference (optional)
  ✓ Update any custom scripts that reference app.js functions
  
  TROUBLESHOOTING:
  
  If you get "function not defined" errors:
  - Check script load order (state.js first, init.js last)
  - Verify all module files are in js/ directory
  - Check browser console for any loading errors
  - Ensure curriculum.js and auth.js are still loaded
  
  If state doesn't persist:
  - Verify state.js loads before other modules
  - Check localStorage is enabled in browser
  - Check browser console for errors
  
  If views don't render:
  - Verify init.js loads last
  - Check that all module files are present
  - Verify curriculum.js defines TOPICS array
  - Check browser console for errors
-->
