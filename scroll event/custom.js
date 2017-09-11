$(document).ready(function(){

$(window).scroll(function() {
 
if ($(window).scrollTop() >= 10)
{
	$(".header").addClass("fixed");
}

else
{
	$(".header").removeClass("fixed");
}

});//end of scroll function

});//main ending