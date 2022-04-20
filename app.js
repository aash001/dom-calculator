//DOM Objects
document.addEventListener("DOMContentLoaded", function () {
    const screenDisplay = document.querySelector("#screen");
    const spans = document.querySelectorAll('.buttons span');
    const spanArray = Array.from(spans);

    function operatorSwitch(symbol) {
        let newOperator = symbol
        if (symbol.includes("÷")) {
            newOperator = symbol.replace('÷', '/')
        } else if (symbol.includes("x")) {
            newOperator = symbol.replace('x', '*')
        }
        return newOperator
    }

    spanArray.map(button => button.addEventListener('click', function () {
        if (button.innerText !== "=") {
            screenDisplay.innerText += button.innerText
        };
        if (button.innerText === "=") {
            screenDisplay.innerText = eval(operatorSwitch(screenDisplay.innerText))
        };
        if (button.innerText === "C") {
            screenDisplay.innerText = ""
        };
    }));
});