import Swal from 'sweetalert2';

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacepinvalid.com.br/ws/${cep}/json/`);
    const data = await result.json();

    preEl.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Error de conexão ${error.message}`,
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
}
buttonEl.addEventListener('click', handleClick);
