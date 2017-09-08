$(document).ready(function() {
  $(".ad").on("click", function() {
    var text = $("#int").val();

    $(".new-text").append(
      "<li>" + text + ' <button class="del">delete</button></li>'
    );
    $("#int").val("");
  });

  $(".new-text").on("click", ".del", function(evt) {
    $(evt.target)
      .parent()
      .remove();
  });

  $(".done").on("click", function(evt) {
    // $(evt.target).toggleClass("active");
   //1) on clicking if a particular tag has a class active 
    //2)then remove that class.
    // 3)after that add class active
    if ($(evt.target).hasClass("active")) {
     $(evt.target).removeClass("active")
    } else {
     $(evt.target).addClass("active")

    }

    

    //           wrong code
    //   if ($(evt.target).css("text-decoration") == "line-through") {
    //     $(evt.target).css({ "text-decoration": "none" });
    //   }
    //   else {
    //     $(evt.target).css({ "text-decoration": "line-through" });
    //   }
  });
});
