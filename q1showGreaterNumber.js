function findGreater() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers.");
    } else if (num1 > num2) {
        console.log("The greater number is: " + num1 + "");
    } else if (num2 > num1) {
        console.log("The greater number is: " + num2 + "");
    } else {
        console.log("Both numbers are equal.");
    }
}