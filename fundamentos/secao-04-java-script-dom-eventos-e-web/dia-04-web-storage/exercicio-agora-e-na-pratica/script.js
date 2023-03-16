window.onload = () => {
    // função altera background color
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

    // função altera a cor da fonte de todos os paragrafos
    const collortext = () => {
        const paragraps = document.querySelector('.content');
        paragraps.style.color = localStorage.getItem('lastfont');

        const fontcolor = document.querySelectorAll('#font-color button');
        for (let index = 0; index < fontcolor.length; index += 1) {

            fontcolor[index].addEventListener('click', () => {
                localStorage.setItem('lastfont', fontcolor[index].innerHTML);
                const paragraps = document.querySelector('.content');
                console.log(paragraps);
                paragraps.style.color = localStorage.getItem('lastfont');

                // paragraps.style.collortext = localStorage.getItem('lastforcolor');


            })
        }
    }
    collortext();
    console.log(localStorage.getItem('lastfont'));




}

