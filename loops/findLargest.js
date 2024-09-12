function findLargest(number1, number2, number3, number4) {
    return Math.max(number1, number2, number3, number4);
}

function checkRange(number, from, to) {
    return number >= from && number <= to;
}

// Largest number
const largestNumber = findLargest(15, 40, 2, 37);
console.log(largestNumber); // 40


// Check range
const numberInRange = checkRange(100, 99, 105);
console.log(numberInRange); // true

const numberNotInRange = checkRange(100, 101, 105);
console.log(numberNotInRange); // false