function init() {

  // JS here

var container = document.getElementById('lottie');
var source = container.dataset.source;

 var animation =  lottie.loadAnimation({
      container: container, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: source, // the path to the animation json
      rendererSettings: {
        title: 'Brand hub title', // Adds SVG title element for accessible animation title
        description: 'The words brand hub bouncing left and right.', // Adds SVG desc element for accessible long description of animation
        id: 'brand-hub',
      }
    });

    animation.goToAndStop(14, true);

    container.addEventListener('click', () => {
      if(state === 'play') {
       animation.playSegments([14, 27], true);
        state = 'pause';
      } else {
        animation.playSegments([0, 14], true);
        state = 'play';
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