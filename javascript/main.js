// //example code GSAP
// gsap.to("#gallerie", {duration:2, x:300})

$(document).ready(function() {
// import simpleParallax from 'simple-parallax-js';
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    $(".hero").css({
      width: ( 100 + scroll / 18 ) + "%",
      opacity: ( 100 - scroll / 15 ) + "%"
    }),
    $(".intro-text").css({
      opacity: ( 100 - scroll / 2 ) + "%"
    }),
    $(".about-me").css({
      opacity: ( 0 + scroll / 9 ) + "%"
    })
  });

// Makes letters warp on scroll
const content = document.querySelectorAll(".test-text");
let currentPos = window.pageYOffset;

const callDistort = function () {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.02;

    for (let i=0; i<content.length; i++)
    content[i].style.transform = "skewY(" + speed + "deg)";
    currentPos = newPos;
    requestAnimationFrame(callDistort);
};

callDistort();


$('body').ripples({
  resolution: 800,
  dropRadius: 50,
  perturbance: 0.84,
});

});

// $('.profile-media img').ripples("drop", 1000, 1000, 20, 100)
setInterval(function() {
    const $el = $('body');
    console.log($el);
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 15;
    var strength = 0.04 + Math.random() * 0.02;

    $el.ripples('drop', x, y, dropRadius, strength);
  }, 400);
// });

// $(function () { // wait for document ready
//     // init
//     const controller = new ScrollMagic.Controller({
//       globalSceneOptions: {
//         triggerHook: 'onLeave',
//         // offset: 600,
//         duration: "100%" // this works just fine with duration 0 as well
//         // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
//         // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
//       }
//     });

//     // get all sections
//     const sections = document.querySelectorAll("section.panel");

//     // create scene for every slide
//     for (let i=0; i<sections.length; i++) {
//       new ScrollMagic.Scene({
//           triggerElement: sections[i]
//         })
//         .setPin(sections[i++], {pushFollowers: false})
//         .addIndicators() // add indicators (requires plugin)
//         .addTo(controller); // this semicolon is important
//     }
//   });
