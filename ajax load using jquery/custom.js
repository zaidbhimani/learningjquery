$(document).ready(function(){


 var textboxes=$('input[type="text"]');

 textboxes.focus(function(){
 var helpDiv = $(this).attr('id')+'HelpDiv';
 console.log(helpDiv)
$('#'+helpDiv).load('help.html #'+ helpDiv);
});



textboxes.blur(function(){
 var helpDiv = $(this).attr('id')+'HelpDiv';
 console.log(helpDiv)
$('#'+helpDiv).html('');
});


});