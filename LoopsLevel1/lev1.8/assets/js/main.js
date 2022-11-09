let number = 0;

do {
    number++;
    if (number % 2 === 0) {
        console.log(number);
    }
    else {
        console.log(`The number ${number} is odd `);
    }
} while (number < 20);