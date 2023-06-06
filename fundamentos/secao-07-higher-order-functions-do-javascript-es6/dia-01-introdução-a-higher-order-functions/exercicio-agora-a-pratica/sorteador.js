const drawnNumber = () => Math.ceil(Math.random()*5);

const luckNumber = (number, callback) => {     
    const loterynumber = callback();
    console.log(loterynumber);
    return number === loterynumber ? 'Parabéns, você ganhou' : 'Tente novamente';}
console.log(luckNumber(2, drawnNumber));