

// if (input.length < 1) {
//     document.getElementsByClassName('error-text').style.display = 'block';
// }

// const form = document.getElementById('form');
// const firstName = document.getElementById('fName');
// const lastName = document.getElementById('lName');
// const email = document.getElementById('email');
// const password = document.getElementById('password');



// function errorFunc(req, message){
//     const formControl = req.parentElement;
//     const span = formControl.querySelector('span');
//     req.className += 'errors';
//     span.className += 'errors-text';
// }

// function successFunc(req){
//     req.className += 'success';
// }

// function myFunction() {
//     document.querySelector(".error-text").innerHTML = "Hello World";
//   }



// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var firstname = document.contactForm.firstname.value;
    var lastname = document.contactForm.lastname.value;
    var email = document.contactForm.email.value;
    var password = document.contactForm.password.value;
   
   	// Defining error variables with a default value
       var firstnameErr = lastnameErr = emailErr = true;
    
       // Validate name
       if(firstname == "") {
           printError("firstnameErr", "Please enter your first name");
       }

       if(lastname == "") {
        printError("lastnameErr", "Please enter your last name");
    }
    if(password == "") {
        printError("passwordErr", "Please enter your password");
    }


    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
}