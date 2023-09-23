let person = {
    name: 'Roberto',
};

let lastName = {
    lastName: 'Silva',
};

let newPerson = Object.assign({}, person, lastName);
newPerson.name = 'Gilberto';

// let obj = { value1: 10, value2: 11 };
// let cloneObj = obj;
console.log(newPerson);
console.log(person);