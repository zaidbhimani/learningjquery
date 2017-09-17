$(document).ready(function() {
	var kane ="";
	$(".sub").on("click", function() {
		var result = $('input[name="skills"]:checked');

		var resultString = result.length + "checkboxes checked";

		if (result.length > 0) {
			result.each(function(index, item) {
				resultString = resultString + "</br>" + $(item).val();
				console.log(resultString);
			});

			$("#divResult").html(resultString);
		} else {
			$("#divResult").html("no checkboxes checked");
		}
	});
}); //main ending



