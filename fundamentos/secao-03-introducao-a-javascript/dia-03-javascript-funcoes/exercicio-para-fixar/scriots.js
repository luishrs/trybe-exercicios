let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addClient(cliente) {
    if (typeof cliente === 'string') {
        clientesTrybeBank.push(cliente);
        return 'Cliente adicionado com sucesso!';
    } else {
        return 'O parâmetro deve ser uma string!';
    }
}
console.log(addClient(true));
console.log(addClient('Eva'));
console.log(clientesTrybeBank);