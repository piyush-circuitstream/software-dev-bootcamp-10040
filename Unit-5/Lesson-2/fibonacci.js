function fibonacci(n) {
    if (n <= 1) {
        return n; // base case: return n itself for 0 or 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}

function getFibonacciSequence(x) {
    let sequence = [];
    for (let i = 0; i < x; i++) {
        sequence.push(fibonacci(i)); // push the fibonacci number at index i
    }
    return sequence;
}


let n = 5;
console.log(`Fibonacci of ${n} is ${fibonacci(n)}`); 
console.log(`Fibonacci sequence up to ${n} terms:`, getFibonacciSequence(n));