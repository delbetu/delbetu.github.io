$(document).ready(function() {
  $(".hire-me").click(function() {
    $(".overlay").show(1000);
  });

  $(".overlay").click(function() {
    $(this).hide(1000);
  });

  $("#contact-form").click(function(event){
    event.stopPropagation();
  });
});
