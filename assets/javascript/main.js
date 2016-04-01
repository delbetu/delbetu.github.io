function scrollTo(number) {
  $("html, body").animate(
    { scrollTop: number }, 1000
  );
}

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();

  $(".hire-me").click(function(event) {
    event.preventDefault();

    var screenSize = $(".full-screen").outerHeight();
    scrollTo(screenSize);
  });
});
