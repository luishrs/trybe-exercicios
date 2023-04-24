const myFizzBuzz = require('./script');

describe(' verifica se a função myFizzBuzz retorna os strings coretas', () => {
    it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('Caso num seja um número divisível apenas por 3, retorna "fizz"', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });

    it('Caso num seja um número divisível apenas por 5, retorna "buzz"', () => {
        expect(myFizzBuzz(25)).toBe('buzz');
    });

    it('Se número não é divisível nem por 3 e nem por 5,, retorna o próprio número', () => {
        expect(myFizzBuzz(14)).toBe(14);
    });

    it('Caso não seja um número, retorna false', () => {
        expect(myFizzBuzz('2')).toBe(false);
    });

});