$(document).ready(function(){
$(".sub1").on("click" , function(){

var result = $('input[name="skills"]:checked');

var resultString = result.length + "checkboxes checked";

if(result.length > 0){result.each(function(index,item){

resultString = resultString+"</br>" +$(item).val();
console.log(result)

});
	
$("#divResult").html(resultString);
}
else{
$("#divResult").html("no checkboxes checked");
}

});


$(".sub2").on("click" , function(){

var result = $('input[name="qualification"]:checked');

var resultString = result.length + "checkboxes checked";

if(result.length > 0){result.each(function(index,item){

resultString = resultString+"</br>" +$(item).val();
console.log(result)

});
	
$("#divResult").html(resultString);
}
else{
$("#divResult").html("no checkboxes checked");
}

});


});