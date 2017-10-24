$(document).ready(function(){

$('#btnClickMe').bind('click mouseOver',function(evt){

// if(evt.type=='click'){
// 	$('#divResult').html('X='+evt.pageX+ ', Y='+evt.pageY);
// }

// else if (evt.type=='mouseOver'){
// 	$(this).addClass('ButtonStyle');
// }

// if{

// 	$(this).removeClass('ButtonStyle');
// }

if (event.type == 'click') {
                    $('#divResult').html('Button Clicked at '
                        + 'X = ' + event.pageX + ' Y = ' + event.pageY);
                }
                else if (event.type == 'mouseover') {
                    $(this).addClass('ButtonStyle');
                }
                else {
                    $(this).removeClass('ButtonStyle');
                }


});

});