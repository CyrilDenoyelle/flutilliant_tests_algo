const efficientIsPrime = (num) => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

SmallerPrimes = function (num) {
    const primes = [];
    for (let i = 2; i < num; i++) {
        if (efficientIsPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

module.exports = SmallerPrimes;

