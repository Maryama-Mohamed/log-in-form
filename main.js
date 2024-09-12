//// ALL ELEMENTS

const Username = document.querySelector("#Username");

const Email = document.querySelector("#Email");

const Password = document.querySelector("#Password");

const ConfirmPassword= document.querySelector("#ConfirmPassword");

const form = document.querySelector("#form");

const showError = (input,message) => {
    let parentElement = input.parentElement;

    parentElement.classList = 'form-contol error';

    const small = parentElement.querySelector("small");

    const sucessIcon = parentElement.querySelectorAll("i")[0];

    const errorIcon = parentElement.querySelectorAll("i")[1];

    errorIcon.style.visibility = 'visible';
    sucessIcon.style.visibility = 'hidden';

    small.innerText = message;


}

const showSuccess = (input) => {
    let parentElement = input.parentElement;

    parentElement.classList = 'form-contol success ';

    const sucessIcon = parentElement.querySelectorAll("i")[0];

    const errorIcon = parentElement.querySelectorAll("i")[1];

    errorIcon.style.visibility = 'hidden';
    sucessIcon.style.visibility = 'visible';

   


}

const checkEmpty = (elements) => {

    elements.forEach(element => {
 
        if(element.value === ''){

         showError(element, 'Input Required') 

        }else{
            showSuccess(element);
        }

    });
}

const checkEmail = (email) => {

const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(reg.test(email.value)){

    showSuccess(email);

}else{
    showError(email, 'Invalid email');
}

}

const chackPasswordLength = (input,min,max) =>{

    if(input.value.length < min){
        showError(input,`Paassword at lease ${min} Charecter`);
    
    }else if( input.value.length > max){
        showError(input,`Password Maximum charecter is ${max}`)
    
    }else{
        showSuccess(input);
    }
};

  let checkConfirmPassword = (Password,ConfirmPassword) => { 

    if(Password.value !== ConfirmPassword.value){

        showError(ConfirmPassword,"password is not match");
        
    }
};

form.addEventListener("submit" , (event) => {

event.preventDefault();

// if(Username.value === ""){
//     // Username.style.border = '2px solid red'
//     Username.parentElement.classList = ("form-contol error")
//    }

// if(Password.value === ""){
//     // Password.style.border = '2px solid red'
//     Password.parentElement.classList = ("form-contol error")
//    }

// if(email.value === ""){
//     // Email.style.border = '2px solid red'
//     Email.parentElement.classList = ("form-contol error")
//    }

// if(ConfirmPassword.value === ""){
//     // Confirm Password.style.border = '2px solid red'
//     ConfirmPassword.parentElement.classList = ("form-contol error")
//    }

checkEmpty ([Username,Password,Email,ConfirmPassword]);

checkEmail(Email);

chackPasswordLength(Password,6,10);

checkConfirmPassword(Password,ConfirmPassword);


});

