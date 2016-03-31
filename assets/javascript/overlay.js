function wasTriggeredOutside(event, selector) {
  return !$(event.target).closest(selector).length
}

$(document).ready(function() {
  $(".hire-me").click(function() {
    $(".overlay").show(1000);
  });

  $(".overlay").on("click", function(event) {
    if (wasTriggeredOutside(event, "#contact-form")) {
      $(".overlay").hide(1000);
    }
  });
});
