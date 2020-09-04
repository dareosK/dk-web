// //example code GSAP
// gsap.to("#gallerie", {duration:2, x:300})

$(document).ready(function() {
// import simpleParallax from 'simple-parallax-js';
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    $(".profile-media video").css({
      width: ( 100 + scroll / 5 ) + "%",
      opacity: ( 100 - scroll / 15 ) + "%"
    }),
    $(".intro-text").css({
      opacity: ( 100 - scroll / 2 ) + "%"
    }),
    $(".about-me").css({
      opacity: ( 0 + scroll / 9 ) + "%"
    })
  });

// // Makes letters warp on scroll
// const content = document.querySelectorAll(".about-me p");
// let currentPos = window.pageYOffset;
// console.log(currentPos);

// const callDistort = function () {
//     const newPos = window.pageYOffset;
//     const diff = newPos - currentPos;
//     const speed = diff * 0.08;

//     content[1].style.transform = "skewY(" + speed + "deg)";
//     currentPos = newPos;
//     requestAnimationFrame(callDistort);
// };

// callDistort();


$('body').ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.04,
});


});
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
