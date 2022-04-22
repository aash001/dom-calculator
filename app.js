const $ = {
    screen: document.querySelector("#screen"),
    buttons: document.querySelectorAll("span"),
}

$.buttons.forEach(attachEventListenerToNumber)

function handleButtonClick(event) {
    switch (event.target.textContent) {
        case "=":
            const result = eval($.screen.textContent)
            $.screen.textContent = result == Infinity ?
                "Error" :
                result
            break;
        case "÷":
            $.screen.textContent += "/"
            break;
        case "x":
            $.screen.textContent += "*"
            break;
        case "C":
            $.screen.textContent = " ";
            break;
        default:
            $.screen.textContent += event.target.textContent;
    }
}

function attachEventListenerToNumber($button) {
    $button.addEventListener("click", handleButtonClick);
}