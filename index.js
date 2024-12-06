function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
isPrime(2);
function evenOdd(num) {
    return num % 2 === 0;
}

evenOdd(3);// adding changes of tracking , add and push
cd 