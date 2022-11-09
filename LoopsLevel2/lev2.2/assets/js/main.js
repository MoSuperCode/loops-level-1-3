
const loop = () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    let array = [];
    let i;

    for (i = Number(input.value); i > 0; i--) {
        array.push("o");
    }
    const quantity = array.toString();

    output.innerHTML = quantity.replaceAll(",", "");

    console.log(array);
    console.log(input.value);
};



