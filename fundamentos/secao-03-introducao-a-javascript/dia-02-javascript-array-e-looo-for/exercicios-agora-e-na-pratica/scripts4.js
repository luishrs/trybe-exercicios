let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let numNumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sumNumbers = sumNumbers + numbers[index]
    numNumbers += 1
}
averageNumbers = sumNumbers / numNumbers;
if (averageNumbers > 20) {
    console.log('Valor maior que 20');
}else {
    console.log('Valor menor ou igual a 20');
}

