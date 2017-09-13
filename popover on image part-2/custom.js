$(document).ready(function() {
	// $(".but1").on("click" , function(){
	// $(".big-image").toggle();
	// });

	// $(".big-image").on("click" , function(){
	// $(this).hide();
	// });

	// $(".but2").on("click" , function(){
	// $(".big-image2").toggle();
	// });

	// $(".big-image2").on("click" , function(){
	// $(this).hide();
	// });

	// $(".but3").on("click" , function(){
	// $(".big-image3").toggle();
	// });

	// $(".big-image3").on("click" , function(){
	// $(this).hide();
	// });

	$(".image").on("click", function() {
		var button = $(this).attr("data-name");
		$("#" + button).toggle();
	});

	$(".bigimage").on("click", function() {
		var rock = $(this).attr("data-poster");
		$(this).hide();
	});
}); //main ending
