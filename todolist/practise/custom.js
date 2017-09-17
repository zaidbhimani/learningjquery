$(document).ready(function(){
$(".ad").on("click" , function(){

var text=$("#inp").val();

if($("#inp").val().length > 0){
	
	$(".content-list").append('<li>'+text+'<button class="edt">edit</button><button class="del">delete</button></li>');
}

else{
	var stat="plz enter your task";
    $(".caution").text(stat);
}

$("#inp").val("");
});

$("#inp").on("click" , function(){
$(".caution").text("");
});

$(".content-list").on("click", ".del" ,function(evt){
(evt.target).closest("li").remove()
});

$(".content-list").on("click", ".edt" ,function(evt){
})

});//main ending