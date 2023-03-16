let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let numNumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sumNumbers = sumNumbers + numbers[index]
    numNumbers += 1
}
console.log(numNumbers);
console.log(sumNumbers);
averageNumbers = sumNumbers / numNumbers;
console.log(averageNumbers);