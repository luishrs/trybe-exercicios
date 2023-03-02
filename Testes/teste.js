// function verificaFimPalavra(palavra, final) {
//     if (palavra.endsWith(final)) {
//         return true;
//     }
//     return false;
// }
//  console.log(verificaFimPalavra('coração','aaaa')); 


//  function verificaFimPalavra(palavra, final) {
//     if (final.length > palavra.length) {  // verifica se palavra2 é maior do que palavra1
//       return false;
//     } else {
//       for (let index = 1; index <= final.length; index+= 1) {
//         if (palavra[palavra.length - index] !== final[final.length - index]) {  // compara caracteres a partir do final de palavra1
//           return false;
//         }
//       }
//       return true;
//     }
//   }
//   console.log(verificaFimPalavra('coração','oção')); 
  
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};
console.log(car['model']);