const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.textContent);
    });
});

function handleInput(value){

    if (value === "C"){
        display.value = "";
    }

    else if (value === "←"){
        display.value = display.value.slice(0,-1);
    }

    else if (value === "="){
        calculate();
    }

    else{
        display.value += value;
    }
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === "="){
        calculate();
    }

    else if (event.key === "Backspace"){
        display.value = display.value.slice(0,-1);
    }

    else if (event.key === "Escape"){
        display.value = "";
    }

    else if (!isNaN(event.key) || "+-*/.".includes(event.key)){
        display.value += event.key;
    }
});