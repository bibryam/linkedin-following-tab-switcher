(function () {
  'use strict';

  function selectFollowingTab() {
    if (window.location.pathname !== "/feed/") {
      return;
    }

    let followingButton = document.querySelector('button[aria-label="Following"]');

    if (followingButton && followingButton.getAttribute('aria-checked') !== "true") {
      followingButton.click();
    }
  }

  // Run once on initial page load
  selectFollowingTab();

  // Detect LinkedIn's single-page navigation changes
  let lastUrl = window.location.href;
  setInterval(() => {
    if (window.location.href !== lastUrl) {
      lastUrl = window.location.href;
      selectFollowingTab();
    }
  }, 1000);
})();
