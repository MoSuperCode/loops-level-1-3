
const loop = () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    let array = [];
    let i = Number(input.value);

    for (i; i > 0; i--) {
        if (Number(input.value) % 2 === 0) {
            array.push("o");
            console.log(array);
        } else if (Number(input.value) % 2 !== 0 && i > 1) {
            array.push("o");
            array.push("0");
            console.log(array);
            i--;
        } else if (i === 1) {
            array.push("o");
        }
        else if (Number(input.value) === "0") {
            prompt("0 i not a valid number");
        }


    }
    const quantity = array.toString();



    output.innerHTML = quantity.replaceAll(",", "");

    console.log(array);
    console.log(input.value);
};



