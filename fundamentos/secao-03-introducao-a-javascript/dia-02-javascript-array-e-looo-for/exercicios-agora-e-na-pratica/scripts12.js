let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];
let smallerWord = array[0]

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > biggerWord.length) {
        biggerWord = array[index];
    }
    if (array[index].length < smallerWord.length) {
        smallerWord = array[index];
    }
}
console.log(biggerWord);
console.log(smallerWord);



/*let frutas = ['banana', 'uva', 'maçã'];
console.log(frutas[1].length);*/