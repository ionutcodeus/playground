const button = document.getElementById('submit-btn');
const errorEmpty = document.getElementById('error-empty');
const errorFormat = document.getElementById('error-format');

errorEmpty.style.visibility = 'hidden';
errorFormat.style.visibility = 'hidden';

button.onclick = function () {
    const email = document.getElementById('email-input').value;
    const allowedCharacters = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(email === '' ){
        errorEmpty.style.visibility = 'visible';
        return;
    }
    
    if (!allowedCharacters.test(email)){
        errorFormat.style.visibility = 'visible';
        return;
    } 
    
}