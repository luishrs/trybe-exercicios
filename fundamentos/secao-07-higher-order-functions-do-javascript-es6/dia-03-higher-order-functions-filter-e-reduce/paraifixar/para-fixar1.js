// Para fixar
// 1 - Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.


const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumNumbers = (array) => {
    const even = array.filter((number) => number % 2 === 0)
   return even.reduce((acc, current) => {
        return acc + current;
    })    
}
console.log(sumNumbers(numbers));

const sumNumberReduce = (array) => {
   return array.reduce((acc, current) => {
     return acc % 2 ===0 && current % 2 === 0 ? acc + current : acc;
    })
}
 console.log(sumNumberReduce(numbers));

