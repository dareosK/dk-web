// work.js
$(function() { // onReady
  // init one controller
    const controller = new ScrollMagic.Controller();


  //SCENE ONE
    const containerScene = new ScrollMagic.Scene({
        triggerElement: '#container',
        duration: 500
    })
    .setPin('#block')
    .addIndicators()
    .addTo(controller);

    const blockTween = new TweenMax.to('#block', 1.5, {
      backgroundColor: 'red'
  });

  // SCENE TWO
    const tweenScene = new ScrollMagic.Scene({
      triggerElement: '#container'
  })
  .setTween(blockTween)
  .addIndicators()
  .addTo(controller);

});
