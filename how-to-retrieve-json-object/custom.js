	$(document).ready(function(){
  
    var employeeJson = {
      "firstName": "zaid",
      "lastName": "bhimani",
      "age": "24",
      "gender": "male"
    };


    // console.log(employeeJson)


    // result=result+"FirstName: "+ employeeJson.firstName +"<br/>";
    // console.log(result)
    // result=result+"LastName:"+ employeeJson.lastName +"<br/>";
    // console.log(result)
    // result=result+"Age:"+ employeeJson.age +"<br/>";
    // console.log(result)
    // result=result+"Gender:"+ employeeJson.gender +"<br/>";
    // console.log(result)

    // employeeJson.each(function(index, value){
      
    // })

     var result = "";
    $.each(employeeJson, function(key, value){
     result = result + key + '   ' + value + "<br/>";
    });
   
   
  $("#divResult").html(result);

   });