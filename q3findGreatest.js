function findGreatest() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const num3 = parseFloat(document.getElementById("number3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Please enter valid numbers.");
    }   else if ((num1 > num2) & (num1 > num2)) {
        console.log("The greatest number is: " + num1 + "");
    }   else if ((num2 > num1) & (num2 > num3)) {
        console.log("The greatest number is: " + num2 + "");
    }   else if ((num3 > num1) & (num3 > num2)) {
        console.log("The greatest number is: " + num3 + "");
    }   else {
        console.log("Try again with three different numbers!");
    }
}