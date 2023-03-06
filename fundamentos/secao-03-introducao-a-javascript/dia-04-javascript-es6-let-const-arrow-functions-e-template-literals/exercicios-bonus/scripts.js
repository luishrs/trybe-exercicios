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