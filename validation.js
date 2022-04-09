let userName1=document.getElementById("FirstName_passenger1");
let Ageuser1=document.getElementById("Age_passenger1");
var Emailpassenger1 = document.getElementById('email_passenger1');
let PhonePassenger1=document.getElementById("Mobile_passenger1");


//This function is called when we click on submit button in form
document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
   // alert("Inside querySelector");
    validateInput();
});

function validateInput()
{
    
/*Validation For User Name*/
    if(userName1.value.trim()===""){       
        onError(userName1,"User Name cannot be empty");
     }else{
        onSuccess(userName1);
      }
/*validation For Age*/
 
 if(Ageuser1.value > 0 && Ageuser1.value.trim() !="") {
      onSuccess(Ageuser1);
 }
else {
     onError(Ageuser1,"Please Enter valid Age");
 }
/*validation Rule For email*/

    var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!filter.test(Emailpassenger1.value))     {
    onError(Emailpassenger1,"Please Enter valid email");    
    }
    else
    onSuccess(Emailpassenger1);

 /*validation Rule For PhoneNumber*/
 var phoneno = /^\d{10}$/;
  if(PhonePassenger1.value.match(phoneno))
  {
    onSuccess(PhonePassenger1);
  }
  else
  {
    onError(PhonePassenger1,"Please Enter valid PhoneNumber");  
  }

}
function onSuccess(input){
  
    let parent=input.parentElement;
    let messageEle=parent.querySelector("Error");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){

    //alert("OnError");
    let parent=input.parentElement;
    let messageEle=parent.querySelector("Error");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

