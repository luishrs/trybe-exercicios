let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};
function addShift(Object, key, value) {
    Object[key] = value;
}
addShift(lesson2, 'turno', 'noite');
// console.log(lesson2);

function listKeys(Object, key) {
    return Object[key]
}
// console.log(listKeys(lesson2, 'materia'));

function objectSize(obj) {
   return Object.keys(obj).length;
}
// console.log(objectSize(lesson2));

function listKeys(obj) {
    return Object.values(obj)
}
// console.log(listKeys(lesson1));

let allLessons = Object.assign({}, {
   lesson1: lesson1,
   lesson2: lesson2,
   lesson3: lesson3,    
});

// console.log(allLessons);
//Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

function numberOfStudants(obj) {
    let totalNumber = 0;
    let keys = Object.keys(obj);
    for(index in keys){
        totalNumber += obj[keys[index]].numeroEstudantes;
    }
    return totalNumber;
}
console.log(numberOfStudants(allLessons));
