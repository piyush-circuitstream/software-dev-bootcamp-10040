function factorial(n = 1) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let n = 5;
console.log(`Factorial of ${n} is ${factorial(n)}`); // Output: 120