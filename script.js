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

const display = document.querySelector(".display");

const oneBtn = document.querySelector(".button num")
oneBtn.addEventListener("click", () => {
    display.textContent = "1";
})

// let firstNum = 

// let operator = 

// let secondNum =

// const operate = function(a, b, operator) {
//     operator == "+" ? add(a, b)
//     : operator == "-" ? sub(a,b)
//     : operator == "*" ? mult(a, b)
//     : operator == "/" ? divide(a, b)
// }
    