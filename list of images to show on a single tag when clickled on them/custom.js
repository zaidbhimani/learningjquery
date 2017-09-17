$(document).ready(function(){

// 1)on clicking pic1 hide the current picture. 
// 2) replace the picture of large pic from the clicked picture.


$(".pic1").on("click" , function(){

//           METHOD-1
var picture1 = $(".pic1 >img").attr("src");
 console.log(picture1)
   $(".large-pic > img").attr("src",picture1);
            
            // METHOD-2
// $(".large-pic > img").remove();
// $(".large-pic").append("<img src='pendrive.jpg'/>");


});

$(".pic2").on("click" , function(){

//           METHOD-1
var picture2 = $(".pic2 >img").attr("src");
 console.log(picture2)
  $(".large-pic > img").attr("src",picture2);

//             // METHOD-2
// $(".large-pic > img").remove();
// $(".large-pic").append("<img src='pendrive1.jpg'/>");

 });

$(".pic3").on("click" , function(){

//             METHOD-1
var picture3 = $(".pic3 >img").attr("src");
 console.log(picture3)
  $(".large-pic > img").attr("src",picture3);
 
//             // METHOD-2
// $(".large-pic > img").remove();
// $(".large-pic").append("<img src='pendrive2.jpg'/>");

});


});//main ending