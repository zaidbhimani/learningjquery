$(document).ready(function(){

// $(".image1").on("mouseenter" , function(){
// $(".image1").css("width", "250");
// $(".image1").css("height", "220");
// });


// $(".image1").on("mouseleave" , function(){
// $(".image1").css("width", "200");
// $(".image1").css("height", "200");
// });

$(".image").on("mouseenter" , function(){

var first = $(this).attr("data-name");
$(this).css("width", "250");
$(this).css("height", "210");
});

 $(".image").on("mouseleave" , function(){

var second = $(this).attr("data-name");
$(this).css("width", "200");
$(this).css("height", "200");

 });


});//main ending