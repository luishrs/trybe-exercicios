Para fixar o conteúdo, que tal analisar mais este exemplo?

Copiar
let countries = {
  franca: 'Paris',
  brasil: 'Brasília',
  espanha: 'Madrid',
  portugal: 'Lisboa',
};
let pairKeyValue = Object.entries(countries);
console.log(pairKeyValue);
Observe que o retorno da variável pairKeyValue é um array. Cada um dos elementos é outro array com apenas dois dados: a chave da propriedade e seu valor.

Para ver os valores separadamente, adicione o for abaixo do código anterior e execute-o novamente:

Copiar
for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};