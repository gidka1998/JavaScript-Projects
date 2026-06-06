function getReceipt() {

    // This will hold the receipt text shown to the user
    var text1 = '<h3>You Ordered:</h3>';

    // Total price starts at 0
    var runningTotal = 0;

    // Will store price of selected size
    var sizeTotal = 0;

    // Get all radio buttons with class "size"
    var sizeArray = document.getElementsByClassName('size');

    // Loop through sizes to find which one is selected
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value; // store selected size

            // Add size to receipt text
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // Determine price based on selected size
    if (selectedSize === 'Personal Pizza') {
        sizeTotal = 6;
    } else if (selectedSize === 'Small Pizza') {
        sizeTotal = 8;
    } else if (selectedSize === 'Medium Pizza') {
        sizeTotal = 10;
    } else if (selectedSize === 'Large Pizza') {
        sizeTotal = 14;
    } else if (selectedSize === 'Extra Large Pizza') {
        sizeTotal = 16;
    }

    // Start total with size price
    runningTotal = sizeTotal;

    // Debug logs
    console.log(selectedSize + ' = $' + sizeTotal + '.00');
    console.log('size text1: ' + text1);
    console.log('subtotal: $' + runningTotal + '.00');

    // Move to toppings calculation
    getTopping(runningTotal, text1);
}


function getTopping(runningTotal, text1) {

    // Total price for toppings
    var toppingTotal = 0;

    // Array to store selected toppings
    var selectedTopping = [];

    // Get all checkbox elements with class "toppings"
    var toppingArray = document.getElementsByClassName('toppings');

    // Loop through all toppings to find selected ones
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {

            // Add selected topping to array
            selectedTopping.push(toppingArray[j].value);

            console.log("selected topping item: (" + toppingArray[j].value + ")");

            // Add topping to receipt text
            text1 = text1 + toppingArray[j].value + '<br>';
        }
    }

    // Count how many toppings selected
    var toppingCount = selectedTopping.length;

    // First topping is free, extra toppings cost $1 each
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    // Add toppings cost to running total
    runningTotal = runningTotal + toppingTotal;

    // Debug logs
    console.log('total selected topping item:' + toppingCount);
    console.log(toppingCount + ' topping - 1 free topping = $' + toppingTotal + '.00');
    console.log('topping text1: ' + text1);
    console.log('Purchase Total: $' + runningTotal + '.00');

    // Show receipt in HTML
    document.getElementById('showText').innerHTML = text1;

    // Show total price in HTML
    document.getElementById('totalPrice').innerHTML =
        '<h3>Total: <strong>$' + runningTotal + '.00</strong></h3>';
}