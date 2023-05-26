let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function deleteClient(cliente) {
   if (typeof cliente !== 'string' || !clientesTrybeBank.includes(cliente)) {
    console.log('ERRO: cliente não encontrado ou parâmetro inválido!');
   }else {
    let index = clientesTrybeBank.indexOf(cliente);
    clientesTrybeBank.splice(index, 1);
    console.log(`Cliente ${cliente} removido com sucesso`);
   }
}

deleteClient('Ada');
console.log(clientesTrybeBank);



// Gabarito
// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function removeCliente(cliente) {
//   if (typeof cliente === 'string') {
//     let clienteEncontrado = false;
//     for (let index = 0; index < clientesTrybeBank.length; index += 1) {
//       if (cliente === clientesTrybeBank[index]) {
//         clientesTrybeBank.splice(index, 1);
//         clienteEncontrado = true;
//         return 'Cliente excluída(o) com sucesso.';
//       }
//     }

//     if (clienteEncontrado === false) {
//       return 'Cliente não encontrada(o)'
//     }
//   } else {
//     return 'O parâmetro passado deve ser do tipo "string"!';
//   }
// };

// console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
// console.log(removeCliente('Barney')); // Cliente não encontrada(o)
// console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
// console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]