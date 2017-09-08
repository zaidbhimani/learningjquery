$(document).ready(function(){
/*{
                "book1":"plants",
                "book2": "animals",
                "book3": "earth",   
            },
            {
                "book4":"mugal",
                "book5": "shivaji",
                "book6": "afzalkhan",   
            },
             {
                "book7":"alien",
                "book8": "medical",
                "book9": "disease",   
            }*/ 
var listgroup = {
 geo:["plants","animals","earth"],
 history:["mugal","shivaji","afzalkhan"],
 science:["alien","medical","disease"]
};

/* $("<li />", {
              class:"foo",
              id:"bar",
              html:item
           }).appendTo($("#divResult"))*/ 
  $(".btn").on("click" ,function(evt){ 
       var clickedname = $(evt.target).attr("data-name");

       $(evt.target).addClass("active");
       $(evt.target).siblings().removeClass("active")

       var listgroupitem = listgroup[clickedname];
       var result="";
       $.each(listgroupitem, function(index,item){
           result=result+item+"<br/>";
      })
     $("#divResult").html(result)
  });

/*
$(".btn-1").on("click" ,function(){ 
   var geo = ["plants","animals","earth"];
    //$.each(geog,function(){
      var result="";
      result=result+geog[1].book4+"<br/>";
       result=result+geog[1].book5+"<br/>";
       result=result+geog[1].book6+"<br/>";
    //});
  
   $("#divResult").html(result)
  });

$(".btn-2").on("click" ,function(){ 
   var history = ["mugal","shivaji","afzalkhan"];
    //$.each(geog,function(){
      var result="";
      result=result+geog[1].book4+"<br/>";
       result=result+geog[1].book5+"<br/>";
       result=result+geog[1].book6+"<br/>";
    //});
  
   $("#divResult").html(result)
  });

$(".btn-3").on("click" ,function(){ 
   var science = ["alien","medical","disease"];
   var result = "";
    $.each(science,function(index, item){
     result += item + "<br />";
    });
   
  $("#divResult").html(result)
  });

*/

});