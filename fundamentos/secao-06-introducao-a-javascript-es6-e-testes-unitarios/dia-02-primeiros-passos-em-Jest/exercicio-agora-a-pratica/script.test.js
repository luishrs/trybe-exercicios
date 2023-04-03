const myRemove = require('./myRemove.js');

describe('testar a função myRemove', () => {
    it ('deve restornar um array removendo o item correto', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);        
    });

    it ('deve restornar um array removendo o item correto', () => {        
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);        
    });

    it ('deve restornar um array removendo o item correto', () => {        
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
    
});
