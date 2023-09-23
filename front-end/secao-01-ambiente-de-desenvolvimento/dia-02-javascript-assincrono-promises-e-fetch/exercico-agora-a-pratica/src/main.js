import './style.css';
// import Swal from 'sweetalert2';

const btnStart = document.getElementById('btn');
const heroImg = document.getElementById('image');
const heroName = document.getElementById('name');

let number;
const randonNumber = () => {
  const totalIds = 731;
  number = Math.ceil(Math.random() * totalIds);
};

const generateHero = () => {
  const database = `https://akabab.github.io/superhero-api/api/id/${number}.json`;
  fetch(database).then((elemento) => elemento.json())
    .then((result) => {
      heroImg.src = result.images.lg;
      heroName.innerHTML = result.name;
    });
  // .catch((error) => {
  //   console.error(error);
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Ocorreu um erro ao carregar o herói!',
  //   });
  // });
};

btnStart.addEventListener('click', () => {
  randonNumber();
  generateHero();
});
