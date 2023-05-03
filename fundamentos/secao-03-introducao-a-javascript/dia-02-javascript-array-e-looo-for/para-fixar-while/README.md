While
Você aprendeu a trabalhar com o loop for e agora sabe que, ao utilizá-lo, é preciso informar a quantidade de iterações que ele deverá realizar. Mas o que acontece quando você não sabe quantas vezes um loop deve se repetir? 🤔

Por exemplo, quando é preciso descobrir se duas variáveis possuem o mesmo valor.

⚠️ Tenha muito cuidado! É fácil causar loops infinitos utilizando o while!

Ao contrário do for, o while executa a iteração com apenas uma condição. Enquanto essa condição for verdadeira, o conteúdo de escopo do while vai sendo cumprido e, ao encontrar uma condição falsa, o bloco é encerrado. Por exemplo:

Copiar

let counter = 0;

while(counter !== 5) {
  counter += 1;
}
Nesse caso, o while será executado até que a condição deixe de ser verdadeira, ou seja, até que a variável counter alcance o valor 5.

E se o valor inicial fosse 6, o que aconteceria?

Ele entraria em um loop infinito e poderia até travar o computador. Para evitar esse tipo de problema, é importante se certificar do valor inicial atribuído e da condição que será avaliada como verdadeira dentro do while.

💡 Dica: Com o comando break é possível encerrar o loop while quando assim desejar. Veja um exemplo aqui.

Para o exercício a seguir, simule um jogo com dois dados de seis lados. O objetivo é rolar o segundo dado até que o número sorteado seja igual ao do primeiro dado. Assim, utilize o código Math.ceil(Math.random() * 6) para gerar um número aleatório entre 01 e 06. Não se preocupe em entender como funciona o código; por enquanto, é importante entender apenas que, toda vez que o executar, um número aleatório será gerado.

Geralmente o while é utilizado quando não se sabe o início e o fim do laço, algo de que se tem pouco controle (até quando deverá se repetir). Aqui, o objetivo é que o número da variável d1 seja igual ao número armazenado na variável d2.