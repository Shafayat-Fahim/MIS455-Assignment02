function calculateGrade() {
    const name = document.getElementById("iname").value;
    const marks = parseFloat(document.getElementById("imarks").value);

    if (isNaN(marks) || (marks < 0) || (marks > 100)) {
        console.log("Please enter valid marks.");
    }   else if (marks >= 90) {
        console.log(`${name}, you got 'A'`);
    }   else if (marks >= 85) {
        console.log(`${name}, you got 'A-'`);
    }   else if (marks >= 80) {
        console.log(`${name}, you got 'B+'`);
    }   else if (marks >= 75) {
        console.log(`${name}, you got 'B'`);
    }   else if (marks >= 70) {
        console.log(`${name}, you got 'B-'`);
    }   else if (marks >= 65) {
        console.log(`${name}, you got 'C+'`);
    }   else if (marks >= 60) {
        console.log(`${name}, you got 'C'`);
    }   else if (marks >= 55) {
        console.log(`${name}, you got 'C-'`);
    }   else if (marks >= 50) {
        console.log(`${name}, you got 'D+'`);
    }   else if (marks >= 45) {
        console.log(`${name}, you got 'D'`);
    }   else {
        console.log(`${name}, you got 'F'`);
    }
}