function init() {
    // JS here
  }
  
  const swup = new Swup();

  swup.use(new SwupA11yPlugin());
  swup.use(new SwupPreloadPlugin());

  // Run once when page loads
  if (document.readyState === 'complete') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', () => init());
  }
  
  // Run after every additional navigation by swup
  swup.on('pageView', () => init());