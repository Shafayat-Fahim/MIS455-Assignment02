function vowelOrNot() {
    const input = document.getElementById("input").value;
    const resultElement = document.getElementById("result");

    if ((!input) || (input.length !== 1) || (!/[a-zA-Z]/.test(input))) {
        resultElement.textContent = "Please enter a valid English alphabet.";
        return;
    }

    if (("aeiou".includes(input)) || ("AEIOU".includes(input))) {
        resultElement.textContent = `The character '${input}' is a vowel!`;
    }   else {
        resultElement.textContent = `The character '${input}' is a consonant!`;
    }
}