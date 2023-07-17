const button = document.getElementById('submit-button');
const mainCard = document.getElementById('main-card');
const thankCard = document.getElementById('thank-card');
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const selectedValue = document.getElementById('p-selected');
const buttons = document.querySelectorAll('.rating');
let prevButton = null;

thankCard.style.display = "none";
button.onclick = function() {
    if(thankCard.style.display === "none") {
        thankCard.style.display = "block";
         mainCard.style.display = "none";
    }
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (prevButton !== null) {
            prevButton.style.backgroundColor = '';
        }

        button.style.backgroundColor = 'orange';
        prevButton = button;
        
        const value = button.value;
        selectedValue.innerHTML = `You selected ${value} out of 5!`;
    })
})

