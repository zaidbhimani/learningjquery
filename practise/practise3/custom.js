$(document).ready(function(){

var employee = [
{
"firstName":"zaid",
"lastName":"bhimani",
"gender":"male"
},

{
"firstName":"shoaib",
"lastName":"bhimani",
"gender":"male"
}
]
  var result="";
   $.each(employee,function(index,item){
    
    result+="firstName:"+ item.firstName+ "</br>";
    result+="lastName:"+ item.lastName+ "</br>";
    result+="gender:"+ item.gender+ "</br>";
    console.log(result)	 
});
$("#divResult").html(result);

});