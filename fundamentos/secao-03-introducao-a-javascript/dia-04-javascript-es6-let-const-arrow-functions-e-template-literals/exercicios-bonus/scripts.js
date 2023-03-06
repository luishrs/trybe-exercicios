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
console.log(lesson2);

function listKeys(Object, key) {
    return Object[key]
}
console.log(listKeys(lesson2, 'materia'));

function objectSize(obj) {
   return Object.keys(obj).length;
}
console.log(objectSize(lesson2));

function listKeys(obj) {
    return Object.values(obj)
}
console.log(listKeys(lesson1));

let allLessons = Object.assign({}, {
   lesson1: lesson1,
   lesson2: lesson2,
   lesson3: lesson3,    
});

console.log(allLessons);