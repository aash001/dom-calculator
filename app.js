//DOM Objects
document.addEventListener("DOMContentLoaded", function () {
    const screenDisplay = document.querySelector("#screen");
    const spans = document.querySelectorAll('.buttons span');
    const spanArray = Array.from(spans);
    const division = document.querySelectorAll('.operator')[1]; //.innerText = '/';
    const multiplication = document.querySelectorAll('.operator')[2]; //.innerText = '*';

    spanArray.map(button => button.addEventListener('click', function () {
        if (button.innerText !== "=") {
            screenDisplay.innerText += button.innerText
        };
        if (button.innerText === "÷") {
            screenDisplay.innerText = eval(division.replace('÷', '/')) //write a function for replace
        };
        if (button.innerText === "=") {
            screenDisplay.innerText = eval(screenDisplay.innerText)
            console.log(screenDisplay)
        };
        if (button.innerText === "C") {
            screenDisplay.innerText = ""
        };
    }));
});