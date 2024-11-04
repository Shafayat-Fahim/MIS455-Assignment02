function voterDetector() {
    const age = parseInt(document.getElementById("input").value);
    const finalResult = document.getElementById("result");

    if (isNaN(age)) {
        finalResult.textContent = "Please enter valid number!";
    }   else if (age >= 18) {
        finalResult.textContent = "Congratulations! You are a voter!";
    }   else {
        finalResult.textContent = "Sorry, Your not a voter!"
    }
}