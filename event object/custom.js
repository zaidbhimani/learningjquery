$(document).ready(function(){

$('#btn').on('click', function(evt){

display(evt);

function display(evt){
var detail ='event='+(evt.type)+
         '</br> target type='+$(evt.target).attr('type')+
         '</br> target tag name='+$(evt.target).prop('tagName');
            // console.log(detail)  
             $("#divResult").html(detail);  

}


});

});