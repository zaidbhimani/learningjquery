$(document).ready(function(){

$('#btnAdd').on('click',function(){
$('ul').append('<li>new item list</li>')
});

$('ul').on('click','li',function(){
$(this).fadeOut(500);
});

$('#btnUndelegate').on('click',function(){
$('ul').off('click','li');
});

});