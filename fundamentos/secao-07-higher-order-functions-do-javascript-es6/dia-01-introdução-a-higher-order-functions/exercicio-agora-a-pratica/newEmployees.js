const employGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_') + '@trybe.com';
  return {fullName, email}
}

console.log(employGenerator('LUIS henrique'));


const newEmployees = (employGenerator) => {
  const employees = {
    id1: employGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(employGenerator));