const imageArray = () => {
    const returnArray = [];
    for (i = 1; i <= 100; i++) {
        returnArray.push(`image_${i}.jpg`);
    }
    console.log(returnArray);
};
imageArray();