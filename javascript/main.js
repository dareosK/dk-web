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
