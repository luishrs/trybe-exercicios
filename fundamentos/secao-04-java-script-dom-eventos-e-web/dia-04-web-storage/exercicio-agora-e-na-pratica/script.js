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
        const lastfont = document.querySelector('.content');        
        const lastfont2 = localStorage.getItem('fontSize');        
        lastfont.style.fontSize = (`${lastfont2}px`);
        

        const fontOptions = document.getElementsByClassName('fontButton');
        for (let index = 0; index < fontOptions.length; index += 1) {
            fontOptions[index].addEventListener('click', () => {
                const size = parseInt(fontOptions[index].innerHTML);
                console.log(size);
                lastfont.style.fontSize = `${size}px`;
                
                
                localStorage.setItem('fontSize', size);
            });
            
        }
       
        
    }
    fontSize();



}

