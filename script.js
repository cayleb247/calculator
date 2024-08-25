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

let secnumOn = 0;

let firstNum;

let operator;

let secondNum;

const isOperator = (element) => {
    return element == "+" || element == "-" || element == "x" || element == "/"
}
    

const display = document.querySelector(".display");

const oneBtn = document.querySelectorAll(".button.num")[0]
oneBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "1";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "1";
    }
})

const twoBtn = document.querySelectorAll(".button.num")[1]
twoBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "2";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "2";
    }
})

const threeBtn = document.querySelectorAll(".button.num")[2]
threeBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "3";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "3";
    }
})

const fourBtn = document.querySelectorAll(".button.num")[3]
fourBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "4";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "4";
    }
})

const fiveBtn = document.querySelectorAll(".button.num")[4]
fiveBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "5";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "5";
    }
})

const sixBtn = document.querySelectorAll(".button.num")[5]
sixBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "6";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "6";
    }
})

const sevenBtn = document.querySelectorAll(".button.num")[6]
sevenBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "7";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "7";
    }
})

const eightBtn = document.querySelectorAll(".button.num")[7]
eightBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "8";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "8";
    }
})

const nineBtn = document.querySelectorAll(".button.num")[8]
nineBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "9";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "9";
    }
})

const zeroBtn = document.querySelectorAll(".button.num")[9]
zeroBtn.addEventListener("click", () => {
    if (secnumOn == 0) {
        display.textContent = display.textContent + "0";
    } else {
        display.textContent = "";
        display.textContent = display.textContent + "0";
    }
})

const clearBtn = document.querySelector(".button.misc")
clearBtn.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = "";

    display.textContent = "";
    secnumOn = 0;
})

const addBtn = document.querySelectorAll(".button.operator")[0]
addBtn.addEventListener("click", () => {
    
    if (secnumOn == 1) {
        secondNum = +display.textContent;
        display.textContent = operate(firstNum, secondNum, operator);
        firstNum = +display.textContent;
        operator = "+";
    } else {
        operator = "+";
        firstNum = +display.textContent;
        display.textContent = display.textContent + "+";
        secnumOn = 1;
    }
})

const subBtn = document.querySelectorAll(".button.operator")[1]
subBtn.addEventListener("click", () => {
    if (secnumOn == 1) {
        secondNum = +display.textContent;
        display.textContent = operate(firstNum, secondNum, operator);
        firstNum = +display.textContent;
        operator = "-";
    } else {
        operator = "-";
        firstNum = +display.textContent;
        display.textContent = display.textContent + "-";
        secnumOn = 1;
    }
})

const multBtn = document.querySelectorAll(".button.operator")[2]
multBtn.addEventListener("click", () => {
    if (secnumOn == 1) {
        secondNum = +display.textContent;
        display.textContent = operate(firstNum, secondNum, operator);
        firstNum = +display.textContent;
        operator = "x";
    } else {
        operator = "x";
        firstNum = +display.textContent;
        display.textContent = display.textContent + "x";
        secnumOn = 1;
    }
})

const divideBtn = document.querySelectorAll(".button.operator")[4]
divideBtn.addEventListener("click", () => {
    if (secnumOn == 1) {
        secondNum = +display.textContent;
        display.textContent = operate(firstNum, secondNum, operator);
        firstNum = +display.textContent;
        operator = "/";
    } else {
        operator = "/";
        firstNum = +display.textContent;
        display.textContent = display.textContent + "/";
        secnumOn = 1;
    }
})

const equalBtn = document.querySelectorAll(".button.operator")[3]
equalBtn.addEventListener("click", () => {
    secondNum = +display.textContent;
    display.textContent = operate(firstNum, secondNum, operator);
    secnumOn = 0;
    if (display.textContent == "NaN") {
        display.textContent = "ERROR";
    } else if (!Number.isInteger(display.textContent)) {
        display.textContent = Math.floor(+display.textContent * 1000000) / 1000000
    }
})




const operate = function(a, b, operator) {
    return operator == "+" ? add(a, b)
        : operator == "-" ? sub(a,b)
        : operator == "x" ? mult(a, b)
        : operator == "/" && b == 0 ? "Nah man."
        : divide(a, b)
}
    