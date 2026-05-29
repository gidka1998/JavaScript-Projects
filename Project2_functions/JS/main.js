function My_First_Function () {
    var str = 'This is the button text!';
    document.getElementById('Button_Text').innerHTML = str;
}

// This function concatenates two parts of a sentence
function myFunction () {
    // Creating a variable with the first part of the sentence
    var sentence = 'I am learning';
    // Using the += operator to add more text to the sentence
    sentence += '  a lot from this book!';
    // Displaying the full sentence inside the HTML element
document.getElementById('Concatenate').innerHTML = sentence;
}