let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function deleteClient(cliente) {
    if (typeof cliente === 'string') {
        clientesTrybeBank.push(cliente);
        return 'Cliente adicionado com sucesso!';
    } else {
        return 'O parâmetro deve ser uma string!';
    }
}
console.log(deleteClient(true));
console.log(deleteClient('Eva'));
console.log(clientesTrybeBank);