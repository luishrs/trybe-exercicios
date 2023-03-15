window.onload = () => {

    const backgroundColor = () => {
        const teste = document.querySelectorAll('#background-color button');
        document.body.style.backgroundColor = localStorage.getItem('lastcolor');
        for (let index = 0; index < teste.length; index += 1) {

            teste[index].addEventListener('click', () => {
                document.body.style.backgroundColor = teste[index].innerHTML
                localStorage.setItem('lastcolor', teste[index].innerHTML);
            });
        }
    }
    backgroundColor();

}


