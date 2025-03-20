const inputValue = document.getElementById("inputValue");


function enterValue(val){
    inputValue.value += val;
}

function output(){
    const expression = inputValue.value;
    try {
        inputValue.value = eval(expression);
    } catch (error) {
        inputValue.value = "Error";
    }
}

function removeValue(){
    inputValue.value = inputValue.value.slice(0, -1);
}