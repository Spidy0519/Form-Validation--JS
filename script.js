var nameError=document.getElementById("name-error");
var phoneError=document.getElementById("phone-error");
var emailError=document.getElementById("email-error");
var messageError=document.getElementById("message-error");
var summitError=document.getElementById("summit-error");

function validateName(){
    var name=document.getElementById("contact-name").value;

    if(name.length===0){
        nameError.innerHTML='Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+ [A-Za-z]+$/)){

        nameError.innerHTML="Wirte Full Name"
        return false;
    }
    nameError.innerHTML='<i>valid</i>';
    return true;
}

function validatePhone(){
    var phone=document.getElementById("contact-phone").value;

    if(phone.length==0){
        phoneError.innerHTML='Phone No is Required';
        return false;
    }
    if(phone.length !==10){
        phoneError.innerHTML='Phone No Should be 10 Digits';
        return false;
    }
    if(!phone.match(/[^A-Za-z]$/)){
        phoneError.innerHTML='Only Digits';
        return false;
    }
    phoneError.innerHTML='<i>valid</i>'
    return true;
}

function validateEmail(){
    var email=document.getElementById("contact-email").value;

    if(email.length==0){
        emailError.innerHTML='Email is Requried'
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML='Email Invalid'
        return false;
    }

    emailError.innerHTML='<i>valid</i>'
    return true;
}

function validateMessage(){
    var message=document.getElementById("contact-message").value;
    var required=30;
    var left=required-message.length;

    if(left>0){
        messageError.innerHTML=left+'More Character required';
        return false;
    }
    // if(message.length==0){
    //     emailError.innerHTML='Message is Required';
    //     return false;
    // }

    messageError.innerHTML='<i>valid</i>'
    return true;
}

function validateForm(){
    if(!validateName() || validatePhone() || validateEmail() || validateMessage()){
        summitError.style.display='block';
        summitError.innerHTML='Please Fix error to summit';
        setTimeout(function(){summitError.style.display='none';},'3000');
        return false;
    }
}