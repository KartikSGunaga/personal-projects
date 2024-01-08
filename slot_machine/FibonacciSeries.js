function fibonacci(n) {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

const n = 9; 
const fibonacciSequence = fibonacci(n);
console.log(`First ${n} Fibonacci numbers:`, fibonacciSequence);
