// GLOBAL VARIABLE
var globalMessage = "I am a global variable";


// FUNCTION WITH ERROR (for debugging)
function debugFunction() {

    var localMessage = "I am a local variable";

    // Intentional error
    var result = 10 + wrongVariable;

    console.log("Global:", globalMessage);
    console.log("Local:", localMessage);
    console.log("Result:", result);
}

// Call function to trigger error
debugFunction();


// TIME FUNCTION
function timeFunction() {

    var time = new Date().getHours();
    var reply;

    if (time < 12) {
        reply = "Good morning!";
    } else if (time < 18) {
        reply = "Good afternoon!";
    } else {
        reply = "Good evening!";
    }

    document.getElementById("Greeting").innerHTML = reply;
}


// SIMPLE IF STATEMENT FUNCTION
function checkNumber() {

    var number = 10;

    if (number > 5) {
        document.getElementById("CheckNumberResult").innerHTML =
            "The number is greater than 5.";
    }
}

// IF / ELSE WITH USER INPUT
function checkValue() {

    var number = document.getElementById("UserInput").value;
    number = Number(number);

    if (number >= 10) {
        document.getElementById("InputResult").innerHTML =
            "You entered a large number!";
    } else {
        document.getElementById("InputResult").innerHTML =
            "You entered a small number!";
    }
}