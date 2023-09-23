let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function deleteClientes(cliente) {
    if (typeof cliente === 'string') {
        clientesTrybeBank.push(cliente);
        return 'Cliente adicionado com sucesso!';
    } else {
        return 'O parâmetro deve ser uma string!';
    }
}
console.log(deleteClientes(true));
console.log(deleteClientes('Eva'));
console.log(clientesTrybeBank);