const mainelem = document.createElement('main');// criei o elemento main.
mainelem.id = 'mainelem';// adicionei uma id
document.body.appendChild(mainelem);// coloquei ele dentro do body.

const titleH1 = document.createElement('h1');// criei o elemento h1.
titleH1.id = 'title';// adicionei id
titleH1.innerHTML = 'Paleta de Cores';// inseri o texto
document.body.insertBefore(titleH1, document.body.firstChild);// coloquei ele dentro do body, mas como firstChild.

const palette = document.createElement('section');// criei o elemento main.
palette.id = 'color-palette';// adicionei id.
mainelem.appendChild(palette);// coloquei dentro do main.

// botão criado e adicionado o escutador para chamar a função que gera cores para a paleta.

const buttonRandonColor = document.createElement('button'); // criei um botão.
buttonRandonColor.innerHTML = 'Cores aleatórias'; // adicionei texto ao botão.
buttonRandonColor.id = 'button-random-color'; // adicionei id.
mainelem.appendChild(buttonRandonColor); // coloquei ele dentro da section.

// input e botão criado

const boardSection = document.createElement('section');
boardSection.id = 'board-section';
mainelem.insertBefore(boardSection, palette.nextSibling); // insere boardSection apoós irmão do mesmo nivel.
const inputSize = document.createElement('input');
inputSize.id = 'board-size';
boardSection.appendChild(inputSize);
const buttonSize = document.createElement('button');
buttonSize.id = 'generate-board';
buttonSize.innerHTML = 'VQV';
boardSection.appendChild(buttonSize);

const generateColor = () => { // função gera cor aleatória.
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rColor = `rgb(${r}, ${g}, ${b})`;
  return rColor;
};

// função cria div para paleta

function createDiv(numero) { // essa função cria div dentro da section pallete e ja coloca id em cada div.
  for (let index = 0; index < numero; index += 1) {
    const elem = document.createElement('div'); // cria o elemento e diz que é uma div.
    elem.className = 'color'; // elemento recebe classe.
    elem.id = `color${index}`;
    palette.appendChild(elem);// a div é colocada dentro da section
  }
}
createDiv(4);


// função para salvar no localstorage as cores das paleta.

function saveLocal(array) {
  const colorArray = [];
  for (let index = 0; index < array.length; index += 1) {
    const backgroundColor = window.getComputedStyle(array[index]).backgroundColor;
    colorArray.push(backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(colorArray));
}

// selecionei as dis com cores da paleta.
const colorPalette = document.querySelectorAll('#color-palette div'); // selecionei a section depois a div para fazer um array.

// função cria as cores da paleta

function paintPalette() {
  const firstColor = 'rgb(0, 0, 0)';
  for (let index = 0; index < colorPalette.length; index += 1) {
    if (index === 0) { // depois de criar, se for a primeira div criada.
      colorPalette[index].style.backgroundColor = firstColor; // recebe backgroundcolor black.
    } else { // se não recebe uma cor aleatoria.
      colorPalette[index].style.backgroundColor = generateColor();
      //
    }
    // localStorage.setItem('palette', JSON.stringify(colorPalette[index].style.backgroundColor));
  }
  saveLocal(colorPalette); // aqui eu chamo a função que salva.
}

// funçao que recebe as cores da paleta salvas no local storage.

const paletteLoad = () => {
  const elemColor = JSON.parse(localStorage.getItem('colorPalette'));
  if (elemColor) {
    for (let index = 0; index < elemColor.length; index += 1) {
      colorPalette[index].style.backgroundColor = elemColor[index];
    }
  } else {
    paintPalette();
  }
};
paletteLoad();

// botão de gera a cor aleatória.

buttonRandonColor.addEventListener('click', paintPalette);

// função cria o quadro de pixel.

function createdPixelBoard(dimension) {
  const frameColor = document.createElement('section'); // criei uma nova section para o quadro.
  frameColor.id = 'pixel-board'; // adicionei id
  mainelem.appendChild(frameColor); // aloquei no main
  document.querySelectorAll('#pixelLine').forEach(elem => elem.remove());
  const pixelBoardArea = document.createElement('div');
  pixelBoardArea.classList.add('pixe-board--area');
  frameColor.appendChild(pixelBoardArea);
  for (let index = 0; index < dimension; index += 1) {
    const pixelBoardLine = document.createElement('div');
    pixelBoardLine.id = 'pixelLine';
    pixelBoardArea.appendChild(pixelBoardLine);
    for (let index2 = 0; index2 < dimension; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelBoardLine.appendChild(pixel);
    }
  }

}

createdPixelBoard(5);

// função recebe o input para gerar tamanha do quadro

inputSize.addEventListener('change', () => {
  const size = inputSize.value;
  if (!isNaN(size)) { // isNaN compara se size é um numero.
    if (size > 0 && size < 50) {
      createdPixelBoard(size);
    } else {
      alert('Board inválido!');
    }
  }
});

// função adicionei a classe selected a colorPalete

colorPalette[0].classList.add('selected');
for (let index = 0; index < colorPalette.length; index += 1) {
  colorPalette[index].addEventListener('click', (event) => {
    const colorSelected = document.getElementsByClassName('selected')[0];
    if (colorSelected) {
      colorSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

// função para savlar pixels pintados no local storage

const boardPixelSave = () => {
  const allPixel = document.querySelectorAll('.pixel');
  const pixelBoardPainted = [];
  for (let index = 0; index < allPixel.length; index += 1) {
    const currentPixelColor = window.getComputedStyle(allPixel[index]).backgroundColor;
    pixelBoardPainted.push(currentPixelColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(pixelBoardPainted));
};

// função pega a cor selecionada da paleta e pinta o pixel

function addPaintinglistener() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', (event) => {
      const selectedElem = document.querySelector('.selected');
      const backgroundColor = window.getComputedStyle(selectedElem).backgroundColor;
      event.target.style.backgroundColor = backgroundColor;
      boardPixelSave();
    });
  }
}
addPaintinglistener();

// função resseta para branco todos os pixels.

const resetButton = document.createElement('button');
resetButton.innerHTML = 'Limpar';
resetButton.id = 'clear-board';
document.querySelector('#button-random-color').after(resetButton);
const resetPixels = () => {
  const pixels = document.querySelectorAll('.pixel');
  const pixelsClear = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelsClear.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
};

resetButton.addEventListener('click', resetPixels);

// função recebe pixels salvos com cores do local storage.

const BoardLoad = () => {
  const allPixel = document.querySelectorAll('.pixel');
  const boardSave = JSON.parse(localStorage.getItem('pixelBoard'));
  if (boardSave) {
    for (let index = 0; index < allPixel.length; index += 1) {
      allPixel[index].style.backgroundColor = boardSave[index];
    }
  } else {
    resetPixels();
  }
};
BoardLoad();

console.log(age);
