const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (array, name) => {
  //Adicione seu código aqui
 return names.some((slectName) => slectName === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
    //Adicione seu código aqui
const verifyAges = (array, age) => {
    return array.every((array) => array.age > age );
}
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));