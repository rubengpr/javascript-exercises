const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }

    const array = [0, 1];
    for (let i = 2; i <= number; i++) {
        const newFiboValue = array[i - 1] + array[i - 2];
        array.push(newFiboValue);
    }

    return array[number];
};

console.log(fibonacci(5));  // Outputs: 5
console.log(fibonacci(-1)); // Outputs: OOPS


// Do not edit below this line
module.exports = fibonacci;
