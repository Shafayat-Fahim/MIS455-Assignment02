function tempMessage() {
    const temp = parseFloat(document.getElementById("temp").value);
    const resultElement = document.getElementById("result");

    if (isNaN(temp)) {
        resultElement.textContent = "Please enter valid temperature.";
        return;
    }

    let message;

    if (temp < 0) {
        message = "Freezing weather!";
    }   else if (temp >= 0 && temp < 10) {
        message = "Very cold weather!";
    }   else if (temp >= 10 && temp < 20) {
        message = "Cold weather!";
    }   else if (temp >= 20 && temp < 30) {
        message = "Normal in Temp!";
    }   else if (temp >= 30 && temp < 40) {
        message = "It's hot!";
    }   else if (temp >= 40) {
        message = "It's very hot!"
    }

    resultElement.textContent = message;
}