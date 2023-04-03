const validadeAge = (age) => {
    if (age < 18) {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    }
};

const validateInfos = (name, age) => {
    if (!name || !age) {
        throw new Error('Todas as informações são necessárias');
    }
};

const studentRegister = (name, age) => {
    // seu código aqui
    try {
        validadeAge(age);
        validateInfos(name, age);
        return `${name}, seja bem-vindo(a) à AuTrybe!`
    } catch (error) {
        return error.message;
    }
};

console.log(studentRegister("Carlos", 18)); // Fluxo completo
console.log(studentRegister("Carlos", 12)) // Fluxo de exceção
console.log(studentRegister("Renan")) // Fluxo de exceção
