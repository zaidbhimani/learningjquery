$(document).ready(function() {
	
	// var details = $(this).attr("id");
	// var actualdetails = details.replace("img", "div");

	$('img[src="help.png"]')
		.on("mouseover", function(evt) {
			// var details = $(this).attr("id");
	  //       var actualdetails = details.replace("img", "div");
			$('#' + details(evt)).fadeIn(500);
			// $(details)
			// console.log(actualdetails)
		})
		.on("mouseout", function(evt) {
	// 		var details = $(this).attr("id");
	// var actualdetails = details.replace("img", "div");
			$('#'+details(evt)).fadeOut(500);
		});

		function details(evt){
          var getdivid = $(evt.target).attr("id");
	      return getdivid.replace("img", "div");
		};
});
