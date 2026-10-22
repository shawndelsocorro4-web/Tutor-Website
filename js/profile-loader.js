/* ===================================================================
   profile-loader.js — Dynamic Profile HTML Loader
   =================================================================== */

async function loadProfileHTML() {
  try {
    const response = await fetch('profile.html');
    const html = await response.text();
    
    // Find the view-profile section in index.html and replace it
    const profileContainer = document.getElementById('profileContainer');
    if (profileContainer) {
      profileContainer.innerHTML = html;
      // Re-render profile after loading to populate user data
      setTimeout(() => {
        if (typeof renderProfile === 'function') {
          renderProfile();
        }
      }, 100);
    }
  } catch (error) {
    console.error('Error loading profile HTML:', error);
  }
}

// Load profile when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('profileContainer')) {
      loadProfileHTML();
    }
  });
} else {
  // DOM already loaded
  if (document.getElementById('profileContainer')) {
    loadProfileHTML();
  }
}
