// Declare variables
const errorText = document.getElementById('people-error');
const tipButton = document.querySelectorAll('.click-tip');
const customButton = document.getElementById('custom-btn');
const billInput = document.getElementById('bill-input');
const numOfPeople = document.getElementById('people-input');
const tipPerPersonElem = document.getElementById('tip-person');
const totalPerPersonElem = document.getElementById('total-person');
const resetButton = document.getElementById('reset-btn');

let billAmount = null;
let numPeople = null;
let tipPercentage = null;
let prevButton = null;
let tipPerPerson = null;
let totalPerPerson = null;
let customValue = null;

//Hide the error message for the moment
errorText.style.visibility = 'hidden';

//Prevent that the user could use minus value on the inputs
function minusPrevent(event){
    const keyPressed = event.key;

    if(keyPressed === '-') {
        event.preventDefault();
    }
}

billInput.addEventListener('keydown', minusPrevent);
numOfPeople.addEventListener('keydown', minusPrevent);

//Calculate the tip/person and total/person

function calculate(){
    

   
   if (numPeople === null || isNaN(numPeople)){
        tipPerPersonElem.textContent = "0.00";
        totalPerPersonElem.textContent = "0.00";
     } else if(billAmount !== null && numPeople !== null ){
        let tipAmount = 0;
        let totalAmount = 0;
     }
         

        if(tipPercentage !== null && numPeople !==null){
            console.log("tipPercentage",tipPercentage);
            tipAmount = billAmount * tipPercentage;
        } else if(customValue !==null && numPeople !== null){
            console.log("customValue",customValue);
            
            tipAmount = billAmount * customValue;
        }

        totalAmount = billAmount + tipAmount;

         tipPerPerson = tipAmount / numPeople;
         totalPerPerson = totalAmount / numPeople;

         tipPerPersonElem.textContent = tipPerPerson.toFixed(2);
         totalPerPersonElem.textContent = totalPerPerson.toFixed(2);
  }


//Bill value input 
billInput.addEventListener('input',function(){
    billAmount = parseFloat(billInput.value);
    
    calculate();
})


//Select the button and his value
tipButton.forEach(button => {
    button.addEventListener('click',function(){
        tipPercentage = parseFloat(button.value);//tipPercentage takes value of the selected button
        
        if (prevButton !== null) {
            prevButton.style.backgroundColor = 'hsl(183, 100%, 15%)';
            prevButton.style.color = 'white';
        }//if there's a button selected before new one it makes at his initial "state"

        button.style.backgroundColor = 'hsl(172, 67%, 45%)';
        button.style.color = 'hsl(183, 100%, 15%)';// changes style on the current selected button

        prevButton = button;//Updates the previous button's reference with the current button
        
        calculate();
    })
})

//Select the custom button and his value
customButton.addEventListener('input', function(){
    tipPercentage = null;
     customValue = customButton.value/ 100;
     
     
    if (prevButton !== null) {
        prevButton.style.backgroundColor = 'hsl(183, 100%, 15%)';
        prevButton.style.color = 'white';
    
    }

    calculate();
});

//Number of people input validation
numOfPeople.addEventListener('input',function(){
    numPeople = parseInt(numOfPeople.value);

    if(numPeople === 0){
        errorText.style.visibility = 'visible';
        errorText.style.color = 'red';
        numOfPeople.style.border = 'solid 1px red';
    } else {
        errorText.style.visibility = 'hidden';
        numOfPeople.style.border = 'none';
    }
    calculate();
})

function reset(){
    window.location.reload();
    billInput.value = null;
    numOfPeople.value = null;
    billAmount = null;
    numPeople = null;
    tipPercentage = null;
    prevButton = null;
    tipPerPerson = null;
    totalPerPerson = null;
    customValue = null;
    

    tipButton.forEach(button => {
        button.style.backgroundColor = 'hsl(183, 100%, 15%)';
        button.style.color = 'white';
    });

    tipPerPersonElem.textContent = "0.00";
    totalPerPersonElem.textContent = "0.00";

    calculate();
}

resetButton.onclick = reset;

/* Probleme

2. Cand fac reset raman valori, totul e aiurea. */