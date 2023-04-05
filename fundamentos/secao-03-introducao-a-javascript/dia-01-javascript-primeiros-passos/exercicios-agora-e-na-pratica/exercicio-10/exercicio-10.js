let valorVenda = 150;
let valorCusto = 78;
let impostoSobreOCusto = 20;
let valorCustototal = valorCusto * ((impostoSobreOCusto / 100)+1);
let lucro = valorVenda - valorCustototal
if (valorCusto < 0 || valorVenda < 0) {
    console.log('ERRO');
}else {
    console.log(`O lucro total é ${lucro.toFixed(2)} reais!`);
}
