
const elementH1 = document.createElement('h1');
elementH1.innerText = 'TrybeTrip - Agência de Viagens';
elementH1.className = 'title';
document.body.appendChild(elementH1);

const elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);

const elementSection = document.createElement('section');
elementSection.className = 'center-content';
elementMain.appendChild(elementSection);

const elementP = document.createElement('p');
elementP.innerHTML = 'teste elementoP';
elementSection.appendChild(elementP);

const leftSection = document.createElement('section');
leftSection.className = 'left-content';
elementMain.appendChild(leftSection);

const rigthSection = document.createElement('section');
rigthSection.className = 'right-content';
elementMain.appendChild(rigthSection);

const elementImg = document.createElement('img');
elementImg.className = 'small-image';
elementImg.src = 'https://picsum.photos/200';
leftSection.appendChild(elementImg);

const listaNoOrden = document.createElement('ul');
rigthSection.appendChild(listaNoOrden);
const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
    'Sete', 'Oito', 'Nove', 'Dez'];
for (let num in arrayNumbers) {
    const elementoLi = document.createElement('li');
    elementoLi.innerHTML = arrayNumbers[num];
    listaNoOrden.appendChild(elementoLi);
}

for (let index = 0; index < 3; index += 1) {
    const tagElement = document.createElement('h3');
    tagElement.innerHTML = 'Show' + index;
    tagElement.className = 'description';
    elementMain.appendChild(tagElement);
}

const sectionleftcontent = document.getElementsByClassName('left-content')[0];
elementMain.removeChild(sectionleftcontent);

const sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight = 'auto';

const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.parentNode.style.backgroundColor = 'green';

const ul = document.getElementsByTagName('ul')[0];
      ul.lastChild.remove();
      ul.lastChild.remove();











