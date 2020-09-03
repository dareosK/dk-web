// work.js
$(function() { // onReady
    const controller = new ScrollMagic.Controller();

    const containerScene = new ScrollMagic.Scene({
        triggerElement: '#container',
        duration: 500
    })
    .setPin('#block')
    .addIndicators()
    .addTo(controller);

  //   const blockTween = new TweenMax.to('#block', 1.5, {
  //     backgroundColor: 'red'
  // });

  //   const containerScene = new ScrollMagic.Scene({
  //     triggerElement: '#container'
  // })
  // .setTween(blockTween)
  // .addIndicators()
  // .addTo(controller);

});
