Introdução
O que vamos aprender
Hoje você vai aprender um pouco sobre fluxo de exceção, isto é, sobre como tratar os erros no seu código e na sua aplicação utilizando os métodos throw e try/catch.

Você será capaz de
Lançar erros com throw e capturá-los com o bloco try/catch.
Por que isso é importante?
Imagine que você desenvolveu uma aplicação para realizar o cadastro dos clientes de uma loja. Você cria campos para a pessoa digitar informações, como nome, e-mail e senha, e cria o botão para finalizar o cadastro. Ao testar seu código, tudo está funcionando corretamente.

Como você acha que seu código vai se comportar caso alguém digite um e-mail sem o @? E se um cliente inserir uma senha com caracteres especiais? E um número de CPF inválido? 🤔

Ou ainda, se sua aplicação for se conectar a um banco de dados e este não estiver disponível? E se sua página fizer uma requisição a um backend e ocorrer um erro? Ainda não estamos trabalhando com bancos de dados ou backend, mas chegaremos lá. 😉

Ao desenvolver uma aplicação, você precisa analisar os caminhos que o seu código pode percorrer. Geralmente, as pessoas sempre pensam no caminho em que a aplicação funcionará corretamente. Porém, isso nem sempre acontece, portanto é necessário se preparar para lidar com situações de desvios no funcionamento correto da sua aplicação.

A sua aplicação deve estar preparada para lidar com esse tipo de situação, então a utilização dos fluxos de exceção, como o throw e o try/catch, vão auxiliar você nessa tarefa.

Legal, né? 🤩

