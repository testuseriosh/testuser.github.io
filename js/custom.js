function init() {

  // JS here

const element = getElementById('lottie');

    lottie.loadAnimation({
      container: element, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'data.json' // the path to the animation json
    });

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