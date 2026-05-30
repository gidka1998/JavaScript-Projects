// Type coercion example
var result = 10 + "5"; // number + string

// Displays type of variable using typeof
document.write("Type of result: " + typeof result + "<br>");

// Infinity and -Infinity
function showInfinity() {

    var largeNumber = 2E310;
    var negativeNumber = -2E310;

    document.write("Infinity: " + largeNumber + "<br>");
    document.write("-Infinity: " + negativeNumber + "<br>");
}


// Greater than / Less than
function booleanLogic() {

    var greater = 10 > 5;
    var lesser = 10 < 5;

    document.getElementById("Greater").innerHTML = greater;
    document.getElementById("Lesser").innerHTML = lesser;
}


// == operator
function equalityCheck() {

    var a = (10 == "10"); // true
    var b = (10 == 5);    // false

    document.getElementById("EqualTrue").innerHTML =
        "10 == '10' → " + a + "<br>10 == 5 → " + b;
}


// === operator
function strictEqualityCheck() {

    var a = (10 === 10);     // true
    var b = (10 === "10");   // false
    var c = (10 === 5);      // false

    document.getElementById("StrictResults").innerHTML =
        a + " | " + b + " | " + c;
}


// AND operator
function andOperatorDemo() {

    var result = (10 > 5 && 20 > 10);

    document.getElementById("AndResults").innerHTML = result;
}


// NOT operator
function notOperatorDemo() {

    var result = !false;

    document.getElementById("NotResults").innerHTML = result;
}