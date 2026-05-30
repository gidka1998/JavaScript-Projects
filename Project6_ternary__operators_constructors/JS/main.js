// TERNARY OPERATOR FUNCTION
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;

    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";

    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


// CONSTRUCTOR FUNCTION (REQUIRED FIX)
function Student(name, course) {
    this.name = name;
    this.course = course;
}

function StudentFunction() {

    // using constructor + new keyword
    var student1 = new Student("John", "JavaScript");

    document.getElementById("New_and_This").innerHTML =
        "Student Name: " + student1.name + ", Course: " + student1.course;
}


// NESTED FUNCTION 
function outerFunction() {

    function innerFunction() {
        var result = 5 + 5;
        return result;
    }

    document.getElementById("Nested_Function").innerHTML =
        "The result is: " + innerFunction();
}