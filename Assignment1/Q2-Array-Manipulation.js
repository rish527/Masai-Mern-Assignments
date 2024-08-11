let numbers = [1, 2, 3, 4, 5, 6, 7];

function addNumbers(numbers, num) {
    numbers.push(num);
}

function removeNumbers(numbers, num) {
    let index = numbers.indexOf(num);
    if (index != -1) {
        numbers.splice(index, 1);
    } else {
        console.log(num + " is not in the list");
    }
}

function sortNumbers(numbers) {
    let sorted = numbers.slice().sort((a, b) => a - b);
    return sorted;
}

function calculateSum(numbers) {
    let sum = 0;
    numbers.forEach(i => {
        sum += i;
    });
    return sum;
}

function calculateAverage(numbers) {
    return calculateSum(numbers) / numbers.length;
}

console.log("Initial array: " + numbers);

let num = 4;
addNumbers(numbers, num);
console.log("After adding", num, " : ", numbers);

removeNumbers(numbers, num);
console.log("After removing", num, " : ", numbers);

console.log("Sorted array: ", sortNumbers(numbers));

console.log("Sum of numbers: ", calculateSum(numbers));

console.log("Average of numbers: ", calculateAverage(numbers));
