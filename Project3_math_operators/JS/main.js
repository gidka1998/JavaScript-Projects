// Addition function
function addNumbers() {

    var num1 = 10;
    var num2 = 5;
    var result = num1 + num2;

    document.getElementById("Add").innerHTML = "10 + 5 = " + result;
}


// Subtraction function
function subtractNumbers() {

    var num1 = 20;
    var num2 = 8;
    var result = num1 - num2;

    document.getElementById("Subtract").innerHTML = "20 - 8 = " + result;
}


// Multiplication function
function multiplyNumbers() {

    var num1 = 6;
    var num2 = 4;
    var result = num1 * num2;

    document.getElementById("Multiply").innerHTML = "6 × 4 = " + result;
}


// Division function
function divideNumbers() {

    var num1 = 20;
    var num2 = 4;
    var result = num1 / num2;

    document.getElementById("Divide").innerHTML = "20 ÷ 4 = " + result;
}

// This function evaluates a complex mathematical expression
function complexMath() {

    var result = (1 + 2) * 10 / 2 - 5;

    document.getElementById("Expression").innerHTML =
        "(1 + 2) * 10 / 2 - 5 = " + result;
}

// This function demonstrates the modulus operator
function modulusOperation() {

    var num1 = 17;
    var num2 = 5;
    var result = num1 % num2;

    document.getElementById("Modulus").innerHTML =
        "17 % 5 = " + result;
}

// This function demonstrates the negation operator
function negationOperation() {

    var num = 10;
    var result = -num;

    document.getElementById("Negation").innerHTML =
        "The negation of 10 is: " + result;
}

// Increment operator function
function incrementFunction() {

    var num = 10;
    num++;

    document.getElementById("Increment").innerHTML =
        "Increment result: " + num;
}


// Decrement operator function
function decrementFunction() {

    var num = 10;
    num--;

    document.getElementById("Decrement").innerHTML =
        "Decrement result: " + num;
}


// Math.random() function
function randomFunction() {

    var randomNum = Math.random();

    document.getElementById("Random").innerHTML =
        "Random number: " + randomNum;
}