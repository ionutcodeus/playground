const submit = document.getElementById('submit-img');
const errorImg = document.getElementById('error-img');
const errorMsg = document.getElementById('error-msg');

errorImg.style.visibility = 'hidden';
errorMsg.style.visibility = 'hidden';

function validateEmail(event) {
    event.preventDefault();
    const input = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;
    
    if(input.test(email)){
        alert("You've submited!");
    } else {
      errorImg.style.visibility = 'visible';
      errorMsg.style.visibility = 'visible';
    }
};

submit.addEventListener("click", validateEmail);