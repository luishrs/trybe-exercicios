// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };
//   for(let joanete in names) {
//     console.log(`Olá, ${names.person1}`);
//   }

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};
for (let keys in car) {
    console.log(keys + ' :' + car[keys]);
}