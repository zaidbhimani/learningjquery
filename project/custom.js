$(document).ready(function(){

$(".button").on("click" , function(evt){
	console.log($(evt.target))
var contain = $(evt.target).closest("div.button").attr("data-src");
$("#divResult").attr("src",contain);
});
    

});