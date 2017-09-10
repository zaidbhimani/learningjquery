$(document).ready(function() {
  var statement = "plz mention your task";
  
  $(".ad").on("click", function() {
  
  var text = $("#int").val();
  
  if($("#int").val().length > 0){
    $(".new-text").append(
      '<li> <span> <span class="text">' + text + ' </span><button class="edit">Edit</button> <button class="del">delete</button></span></li>'
    );
    $(".stat").text("");
  }
  else{
    $(".stat").text(statement)
  }
   
   $("#int").val("");
  });

 $("#int").on("click", function() {
$(".stat").html("");


 }); 

  $(".new-text").on("click", ".del", function(evt) {
    $(evt.target)
      .closest("li")
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

$(".new-text").on("click", '.edit', function(evt) {
  
  //Get parent element
  var $li = $(evt.target).closest("li");

  //Old Text
  var $litext = $li.find(".text").html();
  
  //hide all content in li
  $li.find("> span").hide();


  //new Input Tag
  $li.append('<input class="editform" type="text" value="' + $litext +'" /><button class="editBtn">Save</button')


  $(".editBtn").on("click", function(){
    // Previous Content SHow
    $li.find("> span").show();
    var zaid = $(".editform").val(); 

    // edit for hide
    $(".editform").hide();
    $(".editBtn").hide();
     
    // value to set
    $li.find(".text").html(zaid);
  })

















  //new Button Tag and Append
  /*
  var $savebtn = $("<button />", {
    html:"save",
    class:"saveBtn",
    on:{
      click:function(){
        //get New text
        var newtext =  $li.find("input").val();;
        
        //Remove Edit Form we dont need it  
        $li.find("input.editform").remove();
        $li.find("button.saveBtn").remove();
        
        //unhide all content and set new text to li
        $li.find("> span").show();
        
        //set text to input
        $li.find(".text").html(newtext)
      }
    }
  })


   $li.append($savebtn)
  */
  


});


});
