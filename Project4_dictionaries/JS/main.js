// This function demonstrates a JavaScript dictionary (object)
function myDictionary() {

// Creating an object with key-value pairs
var Student = {
    Name: "John",
    Age: 25,
    Course: "JavaScript",
    City: "Dublin"
};

// Deleting the Course key and its value
delete Student.Course;

// Attempting to display the deleted value
document.getElementById("Dictionary").innerHTML = Student.Course;
}
