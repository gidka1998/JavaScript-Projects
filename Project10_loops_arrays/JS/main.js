// This function uses a while loop
function Call_Loop() {
    var digit = "";
    var x = 1;

    while (x <= 10) {
        digit += x + "<br>";
        x++;
    }

    document.getElementById("Loop").innerHTML = digit;
}


var Instruments = ['Guitar', 'Drums', 'Piano'];
var Content = "";
var Y;

function for_Loop() {

    var Instruments = ['Guitar', 'Drums', 'Piano'];
    var Content = "";

    for (var Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }

    document.getElementById('List_of_Instruments').innerHTML = Content;
}

// This function creates an array and displays values from it
function array_Function() {

    // Create an array
    var cars = ["BMW", "Audi", "Mercedes", "Tesla"];

    // Display values from the array
    document.getElementById("Array").innerHTML =
        "My favorite cars are: " + cars[0] + ", " + cars[1] + ", and " + cars[3] + ".";
}

// This function demonstrates the use of a const object
function constant_function() {

    // Create a const object with properties
    const car = {
        make: "Toyota",
        model: "Corolla",
        color: "Blue"
    };

    // Change a property's value
    car.color = "Red";

    // Add a new property
    car.year = 2025;

    // Display the changed and added properties
    document.getElementById("Constant").innerHTML =
        "The car is a " + car.color +
        " " + car.make +
        " " + car.model +
        " from " + car.year + ".";
}

// This function demonstrates the let keyword
function letFunction() {

    let x = 10;

    if (x > 5) {
        let y = 20; // y only exists inside this block

        document.getElementById("Let").innerHTML =
            "x = " + x + " and y = " + y;
    }
}

// Create an object using the let keyword
let student = {
    name: "Alex",
    course: "JavaScript",
    grade: "A",

    // Method inside the object
    description: function () {
        return "Student " + this.name + " is enrolled in " + this.course + " and has grade " + this.grade + ".";
    }
};

// Function to display object data in HTML
function showStudent() {

    document.getElementById("StudentInfo").innerHTML = student.description();
}