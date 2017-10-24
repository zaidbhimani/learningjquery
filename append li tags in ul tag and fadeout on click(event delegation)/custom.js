$(document).ready(function(){

$("#btnAdd").on('click',function(){
$("ul").append('<li>New item list</li>');
});

$('ul').on('click','li',function(){
 
$(this).fadeOut(500);

	});


});