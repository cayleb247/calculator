const add = function(a, b) {
    return a + b;
}

const sub = function(a, b) {
    return a - b;
}

const mult = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

// For determining whether the next number will be evaluated as the first or second number
let secnumOn = 0;

let firstNum;

let operator;

let secondNum;

// For determining whether the operator used will be evaluated as the first operator in an expression
let firstOperator = 1;
    

const display = document.querySelector(".display");

const oneBtn = document.querySelectorAll(".button.num")[0]
oneBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "1";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "1";
        secnumOn = 0;
    }
})

const twoBtn = document.querySelectorAll(".button.num")[1]
twoBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "2";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "2";
        secnumOn = 0;
    }
})

const threeBtn = document.querySelectorAll(".button.num")[2]
threeBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "3";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "3";
        secnumOn = 0;
    }
})

const fourBtn = document.querySelectorAll(".button.num")[3]
fourBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "4";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "4";
        secnumOn = 0;
    }
})

const fiveBtn = document.querySelectorAll(".button.num")[4]
fiveBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "5";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "5";
        secnumOn = 0;
    }
})

const sixBtn = document.querySelectorAll(".button.num")[5]
sixBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "6";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "6";
        secnumOn = 0;
    }
})

const sevenBtn = document.querySelectorAll(".button.num")[6]
sevenBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "7";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "7";
        secnumOn = 0;
    }
})

const eightBtn = document.querySelectorAll(".button.num")[7]
eightBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "8";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "8";
        secnumOn = 0;
    }
})

const nineBtn = document.querySelectorAll(".button.num")[8]
nineBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "9";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "9";
        secnumOn = 0;
    }
})

const zeroBtn = document.querySelectorAll(".button.num")[9]
zeroBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "0";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "0";
        secnumOn = 0;
    }
})

const clearBtn = document.querySelector(".button.misc")
clearBtn.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    firstOperator = 1;

    display.textContent = "";
    secnumOn = 0;
})

const addBtn = document.querySelectorAll(".button.operator")[0]
addBtn.addEventListener("click", () => {
    
    // If add is not the first operator
    if (firstOperator == 0) {
        secondNum = +display.textContent;
        display.textContent = operate(firstNum, secondNum, operator);
        if (operate(firstNum, secondNum, operator) == NaN) {
            display.textContent = "ERROR";
        } else if (display.textContent == "Infinity") {
            display.textContent = "Nah man."
        } else if (!Number.isInteger(display.textContent)) {
            display.textContent = Math.floor(+display.textContent * 1000000) / 1000000
        }
        firstNum = +display.textContent;
        display.textContent = display.textContent + "+";
        secnumOn = 1;
        operator = "+";
    } else {
        operator = "+";
        firstNum = +display.textContent;
        display.textContent = display.textContent + "+";
        secnumOn = 1;
        firstOperator = 0;
    }
})

const subBtn = document.querySelectorAll(".button.operator")[1]
subBtn.addEventListener("click", () => {

    // If sub is not the first operator
    if (firstOperator == 0) {
        secondNum = +display.textContent;
        display.textContent = operate(firstNum, secondNum, operator);
        if (operate(firstNum, secondNum, operator) == NaN) {
            display.textContent = "ERROR";
        } else if (display.textContent == "Infinity") {
            display.textContent = "Nah man."
        } else if (!Number.isInteger(display.textContent)) {
            display.textContent = Math.floor(+display.textContent * 1000000) / 1000000
        }
        firstNum = +display.textContent;
        display.textContent = display.textContent + "-";
        secnumOn = 1;
        operator = "-";
    } else {
        operator = "-";
        firstNum = +display.textContent;
        display.textContent = display.textContent + "-";
        secnumOn = 1;
        firstOperator = 0;
    }
})

const multBtn = document.querySelectorAll(".button.operator")[2]
multBtn.addEventListener("click", () => {

    // If mult is not the first operator
    if (firstOperator == 0) {
        secondNum = +display.textContent;
        display.textContent = operate(firstNum, secondNum, operator);
        if (operate(firstNum, secondNum, operator) == NaN) {
            display.textContent = "ERROR";
        } else if (display.textContent == "Infinity") {
            display.textContent = "Nah man."
        } else if (!Number.isInteger(display.textContent)) {
            display.textContent = Math.floor(+display.textContent * 1000000) / 1000000
        }
        firstNum = +display.textContent;
        display.textContent = display.textContent + "x";
        secnumOn = 1;
        operator = "x";
    } else {
        operator = "x";
        firstNum = +display.textContent;
        display.textContent = display.textContent + "x";
        secnumOn = 1;
        firstOperator = 0;
    }
})

const divideBtn = document.querySelectorAll(".button.operator")[4]
divideBtn.addEventListener("click", () => {

    // If divide is not the first operator
    if (firstOperator == 0) {
        secondNum = +display.textContent;
        display.textContent = operate(firstNum, secondNum, operator);
        if (operate(firstNum, secondNum, operator) == NaN) {
            display.textContent = "ERROR";
        } else if (display.textContent == "Infinity") {
            display.textContent = "Nah man."
        } else if (!Number.isInteger(display.textContent)) {
            display.textContent = Math.floor(+display.textContent * 1000000) / 1000000
        }
        firstNum = +display.textContent;
        display.textContent = display.textContent + "/";
        secnumOn = 1;
        operator = "/";
    } else {
        operator = "/";
        firstNum = +display.textContent;
        display.textContent = display.textContent + "/";
        secnumOn = 1;
        firstOperator = 0;
    }
})

const equalBtn = document.querySelectorAll(".button.operator")[3]
equalBtn.addEventListener("click", () => {
    firstOperator = 0;
    secondNum = +display.textContent;
    secnumOn = 0
    display.textContent = operate(firstNum, secondNum, operator);
    
    if (display.textContent == "NaN") {
        display.textContent = "ERROR";
    } else if (display.textContent == "Infinity") {
        display.textContent = "Nah man."
    } else if (!Number.isInteger(display.textContent)) {
        display.textContent = Math.floor(+display.textContent * 1000000) / 1000000
    }
})

const operate = function(a, b, operator) {
    return operator == "+" ? add(a, b)
        : operator == "-" ? sub(a,b)
        : operator == "x" ? mult(a, b)
        : divide(a, b)
}
    