let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let selectedNumber = [];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] >= 1 && numbers[index] <= 25) {
        selectedNumber.push(numbers[index])
    }
}
console.log(selectedNumber.sort((a, b) => a - b));

let twentyFive = [];
for (let index2 = 0; index2 <= 25; index2 += 1) {
    twentyFive.push(index2)
}
console.log(twentyFive);