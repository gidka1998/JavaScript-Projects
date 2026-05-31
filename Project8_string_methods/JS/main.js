// This function uses the concat() method to join strings
function fullSentence() {

    var part1 = "I am ";
    var part2 = "learning ";
    var part3 = "JavaScript ";
    var part4 = "string methods.";

    // Concatenate the strings together
    var sentence = part1.concat(part2, part3, part4);

    // Display the result in the HTML element
    document.getElementById("Concatenate").innerHTML = sentence;
}


// This function demonstrates the slice() method
function sliceMethod() {

    // Original string
    var sentence = "I am learning JavaScript string methods.";

    // Extract characters from index 14 up to (but not including) index 24
    var section = sentence.slice(14, 24);

    // Display the sliced section
    document.getElementById("Slice").innerHTML = section;
}

// This function uses the toString() method
function stringMethod() {

    // Create a number
    var number = 123;

    // Convert the number to a string
    document.getElementById("Numbers").innerHTML = number.toString();
}

// This function demonstrates the toPrecision() method
function precisionMethod() {

    // Create a number with many digits
    var number = 123.456789;

    // Return the number with a specified length
    document.getElementById("Precision").innerHTML =
        number.toPrecision(5);
}

