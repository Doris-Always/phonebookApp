// function phonebookFormValidation(){
    // let contactName = document.forms.phoneForm.name.Name.value;

//     let phoneNumber = document.forms.phoneForm.Telephone.value;

//     let email = document.forms.phoneForm.Email.value;

//     let address = document.forms.phoneForm.Address.value;

//     let regName =/\d+$/g;
//     let regPhone = /^\d{11}$/;
//     let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
//     let regAddress = /^\w+([\d{2,4}])\w+$/g;

//     if (contactName == " " || !regName.test(contactName)){
//         window.alert("please enter the name correctly");
//         contactName.focus();
//         console.log("wrong name");
//         return false;

//     }
//     if (phoneNumber == " " || !regPhone.test(phoneNumber)){
//         window.alert("please enter a valid phone number");
//         phoneNumber.focus();
//         return false;
//     }
//     if (email == " " || !regEmail.test(email)){
//         window.alert("please enter a valid email address");
//         email.focus();
//         return false;
//     }
//     if (address == " " || !regAddress.test(address)){
//         window.alert("please enter a valid email address");
//         address.focus();
//         return false;
//     }
//     return true;

// }
// phonebookFormValidation();
// var userNameGetter = document.getElementById("userName");
// var getBuuton = document.getElementById("buttn");
// getBuuton.addEventListener('click',function(e){
//     e.preventDefault();
//     if(userNameGetter === ' '){
//         console.log("empty string");
//     }

// });
function phonebookFormValidation(){
    var userNameGetter = document.getElementById("userName");
    // var form = document.getElementById("form");
    var message = document.getElementById("error");
    var input = document.getElementsByTagName(input);
    var regName = /\d+$/g;
   //  /[a-zA-Z]/ig
   userNameGetter.focus();
    var myButton = document.getElementById("buttn");
    myButton.addEventListener('click',function(e){
      
       if(userNameGetter.value ==='' || userNameGetter.value === null){
           userNameGetter.classList.add("errorColor");
           message.textContent = "input field is required!";
          
           
           // console.log("empty string")

       }else if(userNameGetter.value.match(regName)){
           userNameGetter.classList.add("errorColor");
           message.textContent = "wrong input in a text field !!";
         
       }else{
           userNameGetter.classList.add("verified");
           message.textContent = ''
          
       }
       e.preventDefault();
    });
}

phonebookFormValidation();

// (function(){
//      var userNameGetter = document.getElementById("userName");
//      var form = document.getElementById("form");
//      var message = document.getElementById("error");
//      var input = document.getElementsByTagName(input);
//      var regName = /\d+$/g;
//     //  /[a-zA-Z]/ig
//     userNameGetter.focus();
//      var myButton = document.getElementById("buttn");
//      myButton.addEventListener('click',function(e){
       
       
//         if(userNameGetter.value ==='' || userNameGetter.value === null){
//             userNameGetter.classList.add("myC");
//             message.textContent = "input field is required!";
            
//             // console.log("empty string")

//         }else if(userNameGetter.value.match(regName)){
//             userNameGetter.classList.add("myC");
//             message.textContent = "wrong input in a text field !!";
          
//         }else{
//             userNameGetter.classList.add("verified");
//             message.textContent = ''
           
//         }
//         e.preventDefault();
//      });


// })();




