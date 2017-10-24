$(document).ready(function(){

$('#btnClickMe').bind('click mouseover mouseout',function(evt){

if(evt.type=='click'){
	$('#divResult').html('X='+evt.pageX+ ', Y='+evt.pageY);
}

else if (evt.type=='mouseover'){
	$(this).addClass('ButtonStyle');
}

else{

	$(this).removeClass('ButtonStyle');
}

});

$('#btnEnableMouseOverEffect').on('click', function(){
	$('#btnClickMe').bind('mouseover' , function(){
     $(this).addClass('ButtonStyle');
	});
});

$('#btnDisableMouseOverEffect').on('click', function(){
	$('#btnClickMe').unbind('mouseover')
});






});//main ending