let paipai = document.getElementById('pai');
let item1 = document.createElement('section');
item1.innerHTML = 'irmão para elementoOndeVoceEsta';
paipai.appendChild(item1);

let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let item2 = document.createElement('section');
item2.innerHTML = 'terceito filho de elementoOndeVoceEsta';
ondeVoceEsta.appendChild(item2);


let primeiroFilhoDoFilho= document.querySelector('#primeiroFilhoDoFilho');
let item3 = document.createElement('p');
item3.innerHTML = 'filho para primeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(item3);

const terceiroFilho = filhoPrimeiroFilhoDoFilho
      .parentElement // primeiroFilhoDoFilho
      .parentElement // elementoOndeVoceEsta
      .nextElementSibling; // terceiroFilho
    console.log(terceiroFilho);