let numArr = [5, 22, 15, 100, 55];

let x;
for (let num of numArr) {
    for (x = 2; x < num; x++) {
        let y = num % x;
        if (y == 0) {
            console.log("what wrong with you");
            let z = num / x;
            console.log(x);
            console.log(y);
            console.log(z);
            document.getElementById("ass").innerHTML += `${num} lässt sich durch ${x} teilen! Das Ergebnis ist ${z}` + "<br>";
        }
    }
}