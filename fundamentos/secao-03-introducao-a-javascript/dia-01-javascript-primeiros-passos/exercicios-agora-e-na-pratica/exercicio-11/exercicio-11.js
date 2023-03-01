let salarioBruto = 4848.00;
let salarioBase;
let descontoInss;
let descontoIr;
let salarioLiquido;
if (salarioBruto <= 1556.94) {
    descontoInss = salarioBruto * (8 / 100);
} else if (salarioBruto >= 1556.95 && salarioBruto < 2594.92) {
    descontoInss = salarioBruto * (9 / 100);
} else if (salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
    descontoInss = salarioBruto * (11 / 100);
} else {
    descontoInss = 570.88;
}
salarioBase = salarioBruto - descontoInss;
if (salarioBase < 1903.98) {
    descontoIr = 0;
}else if (salarioBase >= 1903.99 && salarioBase < 2826.65) {
    descontoIr = salarioBase * (7.5/100);
}else if (salarioBase >= 2826.66 && salarioBase < 3751.05) {
    descontoIr = salarioBase * (15/100);
}else if (salarioBase >= 3751.06 && salarioBase < 4664.68) {
    descontoIr = salarioBase * (22.5/100);
}else {
    descontoIr = 869.36
}
salarioLiquido = salarioBase - descontoIr;
console.log(`O salário liquido é de ${salarioLiquido.toFixed(2)}, reais`);
console.log(`O desconto do INSS é ${descontoInss.toFixed(2)}, reais`);
console.log(`O desconto do IR é ${descontoIr.toFixed(2)}, reais`);