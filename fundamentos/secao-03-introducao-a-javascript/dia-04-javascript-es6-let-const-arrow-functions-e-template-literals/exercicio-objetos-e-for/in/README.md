🚀 Exercícios - objetos e for/in
Com base neste objeto, faça os exercícios a seguir.

Copiar
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
Imprima no console uma mensagem de boas-vindas para a personagem acima, na qual tenha o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:
Copiar
Bem-vinda, Margarida
Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:
Copiar
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é:
Copiar
personagem
origem
nota
recorrente
Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é:
Copiar
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é:
Copiar
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
🚀 Leitura de Objetos
Com base neste objeto, faça os exercícios a seguir.

Copiar
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:

Copiar
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, em que “<quantidade>” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.