for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

for (let i = 9; i > 0; i--) {
    console.log(i);
}

for (let x = 0; x < 11; x++) {
    const multi = x * 9;
    console.log(`9 times ` + x + ` is ` + multi);
}

for (let i = 1; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ` is even.`)
    } else {console.log(i + ` is odd.`)}
}