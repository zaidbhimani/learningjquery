$(document).ready(function() {
  // $('[data-toggle="popover"]').popover();

  $("button").on("click", function() {
    $(".popover_info").toggle();
  });

  $(".popover_info").on("click", function(evt) {
    console.log(evt);

    if ($(evt.target).hasClass("popover_info")) {
      $(".popover_info").hide();
    }

    // alert("zaidshoaib");
  });

  // $(".btn").on("click", function(evt) {
  //   var zaid = $(this).attr("data-address");
  // });

  $(".content").on("click", function(evt) {});
});
