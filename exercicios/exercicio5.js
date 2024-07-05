for (let i = 0; i < 5; i++){
    let num = Math.floor(Math.random() * 100) + 1;
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("fizzbuzz");
    }
    else if (num % 3 === 0) {
        console.log("fizz");  
    }
    else if (num % 5 === 0) {
        console.log("buzz");
    }
}