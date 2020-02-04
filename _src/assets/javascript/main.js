function scrollTo(number) {
  $("html, body").animate(
    { scrollTop: number }, 1000
  );
}

function goToSection(number) {
  var scrollSize = 0;
  for (var i = 0; i < number; i++) {
    var section = $(".full-screen")[i];
    var sectionLength = $(section).outerHeight();
    console.log(sectionLength);
    scrollSize += $(section).outerHeight();
  }
  scrollTo(scrollSize);
}

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();

  $("#hire-me-button").click(function(event) {
    event.preventDefault();
    goToSection(2);
  });

  $("#sample-code-link").click(function(event) {
    event.preventDefault();
    goToSection(1);
  });
});
