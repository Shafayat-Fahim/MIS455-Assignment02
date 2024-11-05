function discountCalculator() {
    const name = document.getElementById("iName").value;
    const fees = parseFloat(document.getElementById("iFees").value);
    const birthYear = parseInt(document.getElementById("iBirthYear").value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    const resultElement = document.getElementById("result");

    if ((!name) || (isNaN(fees)) || (isNaN(birthYear))) {
        resultElement.textContent = "Please enter valid inputs for name, tuition fees and birth year.";
        return;
    }

    let discountRate = 0;

    if (fees > 50000 && age > 21) {
        discountRate = 0.15;
    }   else if (fees > 40000 && age > 20) {
        discountRate = 0.10;
    }   else if (fees > 30000 && age > 19) {
        discountRate = 0.05;
    }   else {
        discountRate = 0.02;
    }

    const discountAmount = fees * discountRate;
    const payableAmount = fees - discountAmount;

    resultElement.innerHTML = `${name}, your discount amount is BDT ${discountAmount} and payable amount is BDT ${payableAmount}.`;
}