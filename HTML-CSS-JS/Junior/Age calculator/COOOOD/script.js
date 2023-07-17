const errorText = document.querySelectorAll('.errors-text');
const errorDisplay = document.querySelectorAll('.red');


let day = document.getElementById('day-input');

const submitButton = document.getElementById('submit-btn');


errorText.forEach (error => {
    error.style.visibility = 'hidden';
});

function validateEmptyInput (input) {
        
    return input.trim() !== ''; //daca contine ceva returneaza true iar daca este gol returneaza false
}


function validateDay (day,month,year) {
    const maxDay = new Date(year, month , 0).getDate();
    return day >= 1 && day <= maxDay; //returneaza true daca e valid
}

function validateMonth (month) {
    const monthRegex = /^(0?[1-9]|1[0-2])$/;
    return monthRegex.test(month); //returneaza true daca e valid
}

function validateYear (year) {
    const yearRegex = /^\d{4}$/;
    return yearRegex.test(year) && year <= 2023; //returneaza true daca este valid
}

function validateInputValue() {
    const dayInput = document.getElementById('day-input').value;
    const monthInput = document.getElementById('month-input').value;
    const yearInput = document.getElementById('age-input').value;

    const dayNotEmpty = validateEmptyInput(dayInput); 
    const monthNotEmpty =validateEmptyInput(monthInput);
    const yearNotEmpty = validateEmptyInput(yearInput);

    const isValidDay = validateDay(dayInput, monthInput,yearInput);
    const isValidMonth = validateMonth(monthInput);
    const isValidYear = validateYear(yearInput);

    const perfectDay = dayNotEmpty && isValidDay;
    const perfectMonth = monthNotEmpty && isValidMonth;
    const perfectYear =  yearNotEmpty && isValidYear;

    if(perfectDay && perfectMonth && perfectYear) {
        return true;
    }else {
        if (!dayNotEmpty){
            errorText[0].style.visibility = 'visible';
        }

        if(!monthNotEmpty) {
            errorText[1].style.visibility = 'visible';
        }

        if (!yearNotEmpty) {
            errorText[2].style.visibility = 'visible';
        }

        if (dayNotEmpty && !isValidDay) {
            errorText[3].style.visibility = 'visible';
        }

        if(monthNotEmpty && !isValidMonth) {
            errorText[4].style.visibility = 'visible';
        }

        if(yearNotEmpty && !isValidYear) {
            errorText[5].style.visibility = 'visible';
        }
        

    }
}

function calculateAge() {
    const currentDate = new Date();

    const dayInput = document.getElementById('day-input').value;
    const monthInput = document.getElementById('month-input').value;
    const yearInput = document.getElementById('age-input').value;

    const inputDate = new Date(yearInput, monthInput - 1, dayInput);

    const timeDifference = Math.abs(currentDate - inputDate);

    const difInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    const years = Math.floor(difInDays / 365);
    const months = Math.floor((difInDays % 365) / 30);
    const days = difInDays % 30;

    document.getElementById('span-year').textContent = years;
    document.getElementById('span-month').textContent = months;
    document.getElementById('span-day').textContent = days;
}

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    if (validateInputValue()){
        calculateAge();
    }
    
});

