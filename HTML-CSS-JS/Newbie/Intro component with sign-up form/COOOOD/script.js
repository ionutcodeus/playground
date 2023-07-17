const errors = document.querySelectorAll('.error-msg');
//const buton = document.getElementById('submit-btn');
const form = document.getElementById('forma');

console.log(errors);

errors.forEach(error=>{
    error.style.visibility = 'hidden';
} );


  function validateName(name) {
    const minLength = 2;
    const maxLength = 30;
    const allowedCharacters = /^[a-zA-Z\s'-]+$/;

    if (name.length < minLength || name.length > maxLength || !allowedCharacters.test(name)) {
        return false;
    }  else {
        return true;
    }
  }

  function validateEmail(email) {
    const allowedCharacters = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!allowedCharacters.test(email)){
        return false;
    } else {
        return true;
    }
  }

  function validatePassword(password) {
    const minLength = 8;

    if(password.length < minLength) {
        return false;
    } else {
        return true;
    }
  }

  function validateForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email-adress').value;
    const password = document.getElementById('password').value;

    const isValidFirstName = validateName(firstName);
    const isValidLastName = validateName(lastName);
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (isValidFirstName && isValidLastName && isValidEmail && isValidPassword) {
        return true;
    } else {
        if (!isValidFirstName) {
            errors[0].style.visibility = 'visible';
            errors[1].style.visibility = 'visible';
        }

        if (!isValidLastName){
            errors[2].style.visibility = 'visible';
            errors[3].style.visibility = 'visible';
        }

        if(!isValidEmail) {
            errors[4].style.visibility = 'visible';
            errors[5].style.visibility = 'visible';
        }

        if(!isValidPassword) {
            errors[6].style.visibility = 'visible';
            errors[7].style.visibility = 'visible';
        }
    }
  }

console.log(validateForm);

  document.getElementById('forma').addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (validateForm()) {
      this.submit(); 
    }
  });


