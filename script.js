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

let firstNum;

let operator;

let secondNum;

const display = document.querySelector(".display");

const oneBtn = document.querySelectorAll(".button.num")[0]
oneBtn.addEventListener("click", () => {
    display.textContent = display.textContent + "1";
})

const twoBtn = document.querySelectorAll(".button.num")[1]
twoBtn.addEventListener("click", () => {
    display.textContent = display.textContent + "2";
})

const threeBtn = document.querySelectorAll(".button.num")[2]
threeBtn.addEventListener("click", () => {
    display.textContent = display.textContent + "3";
})

const fourBtn = document.querySelectorAll(".button.num")[3]
fourBtn.addEventListener("click", () => {
    display.textContent = display.textContent + "4";
})

const fiveBtn = document.querySelectorAll(".button.num")[4]
fiveBtn.addEventListener("click", () => {
    display.textContent = display.textContent + "5";
})

const sixBtn = document.querySelectorAll(".button.num")[5]
sixBtn.addEventListener("click", () => {
    display.textContent = display.textContent + "6";
})

const sevenBtn = document.querySelectorAll(".button.num")[6]
sevenBtn.addEventListener("click", () => {
    display.textContent = display.textContent + "7";
})

const eightBtn = document.querySelectorAll(".button.num")[7]
eightBtn.addEventListener("click", () => {
    display.textContent = display.textContent + "8";
})

const nineBtn = document.querySelectorAll(".button.num")[8]
nineBtn.addEventListener("click", () => {
    display.textContent = display.textContent + "9";
})

const zeroBtn = document.querySelectorAll(".button.num")[9]
zeroBtn.addEventListener("click", () => {
    display.textContent = display.textContent + "0";
})

const clearBtn = document.querySelector(".button.misc")
clearBtn.addEventListener("click", () => {
    display.textContent = "";
})

const addBtn = document.querySelectorAll(".button.num")[1]
twoBtn.addEventListener("click", () => {
    display.textContent = display.textContent + "2";
})


// const operate = function(a, b, operator) {
//     operator == "+" ? add(a, b)
//     : operator == "-" ? sub(a,b)
//     : operator == "*" ? mult(a, b)
//     : operator == "/" ? divide(a, b)
// }
    