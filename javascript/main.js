// //example code GSAP
// gsap.to("#gallerie", {duration:2, x:300})

$(document).ready(function() {
// import simpleParallax from 'simple-parallax-js';
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    $(".profile-media video").css({
      width: ( 100 + scroll / 5 ) + "%",
      opacity: ( 100 - scroll / 8 ) + "%"
    }),
    $(".intro-text").css({
      opacity: ( 100 - scroll / 2 ) + "%"
    }),
    $(".about-me").css({
      opacity: ( 0 + scroll / 9 ) + "%"
    })
  });
});

// function scrollMagic {
//   // init Controller
//   const controller = new ScrollMagic.Controller();

//   const workScene = ScrollMagic.Scene({
//     triggerElement: '#gallerie'
//   })
//   .setClassToggle('#gallerie', 'scroll-in-up')
//   .addToController();
// };
// scrollMagic();

// $(function () { // wait for document ready
//   // init
//   var controller = new ScrollMagic.Controller();

//   // define movement of panels
//   var wipeAnimation = new TimelineMax()
//     .fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
//     .fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
//     .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

//   // create scene to pin and link animation
//   new ScrollMagic.Scene({
//       triggerElement: "#pinContainer",
//       triggerHook: "onLeave",
//       duration: "300%"
//     })
//     .setPin("#pinContainer")
//     .setTween(wipeAnimation)
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);
// });
