function init() {

  // JS here

const element = document.getElementById('lottie');
const source = element.dataset.source;

    lottie.loadAnimation({
      container: element, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: source, // the path to the animation json
      rendererSettings: {
        title: 'Brand hub title', // Adds SVG title element for accessible animation title
        description: 'The words brand hub bouncing left and right.', // Adds SVG desc element for accessible long description of animation
        id: 'brand-hub',
      }
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