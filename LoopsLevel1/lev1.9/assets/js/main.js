let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];
const numberInput = document.getElementById("input");
const output = document.getElementById("output");
const inputText = document.getElementById("inputText");

function compare() {
    output.innerHTML = "";
    for (let word of words) {

        if (Number(numberInput.value) === word.length) {
            output.innerHTML += word + "<br>";
        }
    }
}
function add() {
    if (inputText.value === '') { }
    else {
        words.push(inputText.value);
        console.log(words);

    }

}