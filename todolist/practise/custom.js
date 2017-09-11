$(document).ready(function() {
	$(".ad").on("click", function() {
		var text = $("#inp").val();

		if ($("#inp").val().length > 0) {
			$(".content-list").append(
				'<li><span class="first-span"><span class="done">' +
					text +
					'</span> <button class="edt">edit</button> <button class="del">delete</button> </span></li>'
			);
		} else {
			var stat = "plz enter your task";
			$(".caution").text(stat);
		}
		$("#inp").val("");
	});

	$("#inp").on("click", function() {
		$(".caution").text("");
	});

	$(".content-list").on("click", ".del", function(evt) {
		evt.target.closest("li").remove();
	});

	$(".content-list").on("click", ".done", function(evt) {
		if ($(evt.target).hasClass("active")) {
			$(evt.target).removeClass("active");
		} else {
			$(evt.target).addClass("active");
		}
	});

	$(".content-list").on("click", ".edt", function(evt) {
		var $li = $(evt.target).closest("li");

		var $oldtext = $li.find(".done").text();
		console.log($oldtext)

		$li.find(".first-span").hide();

		$li.append(
			'<input id="new-inp" type="text" value='+
				$oldtext +
				'><button class="sav">save</button>'
		);
        
		$(".sav").on("click", function(evt) {
			$li.find(".first-span").show();
            var newtext = $("#new-inp").val();
			$("#new-inp").remove();
			$(".sav").remove();

			 // var newtext = $("#new-inp").val();
            console.log(newtext)
			$li.find(".done").html(newtext);
		});
	});
}); //main ending
