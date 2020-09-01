$(document).ready(function() {

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


  // hides the footer when scroll under one window height

  // const hideFooter = () => {
  // const footer = document.querySelector('#footer');
  //   if (footer) {
  //     document.addEventListener('scroll', () => {
  //       if (window.scrollY >= 4 * window.innerHeight) {
  //         footer.classList.add('hidden');
  //       } else {
  //         footer.classList.remove('hidden');
  //       }
  //     });
  //   }
  // }

  // hideFooter();

  // export { hideFooter };

});

function scrollMagic {
  // init Controller
  const controller = new ScrollMagic.Controller();

  const workScene = ScrollMagic.Scene({
    triggerElement: '#gallerie'
  })
  .setClassToggle('#gallerie', 'scroll-in-up')
  .addToController();
};
scrollMagic();
