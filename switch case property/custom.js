
$(document).ready(function(){

/*$('#btn').mouseup(function (event) {
                switch (event.which) {
                    case 1: whichButton = "Left Button Clicked"; break;
                    case 2: whichButton = "Middle Button Clicked"; break;
                    case 3: whichButton = "Right Button Clicked"; break;
                    default: whichButton = "Invalid Button Clicked"; break;
                }
                $('#divResult').html(whichButton);
            });*/

$('#btn').mouseup(function(evt){

switch(evt.which){
case 1:whichButton="left button clicked";break;
case 2:whichButton="middle button clicked";break;
case 3:whichButton="right button clicked";break;

}

$('#divResult').html(whichButton);



	});





});