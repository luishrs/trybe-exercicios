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
                paragraps.style.color = localStorage.getItem('lastfont');

                // paragraps.style.collortext = localStorage.getItem('lastforcolor');


            })
        }
    }
    collortext();
    
    const fontSize = () => {
        let lastfont = document.querySelector('#font-size');        
        const lastfont2 = parseInt(localStorage.getItem('fontSize'));
        console.log(`${lastfont2}px`);
        lastfont.style.fontSize = `${lastfont2}px`;
        console.log(lastfont);

        const fontOptions = document.querySelectorAll('#font-size button');
        for (let index = 0; index < fontOptions.length; index += 1) {
            fontOptions[index].addEventListener('click', () => {
                lastfont.style.fontSize = fontOptions[index].innerHTML;
                
                localStorage.setItem('fontSize', fontOptions[index].innerHTML);
            });
            
        }
       
        
    }
    fontSize();



}

