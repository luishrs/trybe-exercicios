window.onload = () => {
    // função altera background color
    const setBackgroundColor = () => {
        const backOptions = document.querySelectorAll('#background-color button');
        document.body.style.backgroundColor = localStorage.getItem('lastcolor');

        for (let index = 0; index < backOptions.length; index += 1) {
            backOptions[index].addEventListener('click', () => {
                document.body.style.backgroundColor = backOptions[index].innerHTML
                localStorage.setItem('lastcolor', backOptions[index].innerHTML);
            });
        }

    }
    setBackgroundColor();

    // função altera a cor da fonte de todos os paragrafos
    const setCollortext = () => {
        const paragraps = document.querySelector('.content');
        paragraps.style.color = localStorage.getItem('lastfont');
        const fontcolor = document.querySelectorAll('#font-color button');

        for (let index = 0; index < fontcolor.length; index += 1) {

            fontcolor[index].addEventListener('click', () => {
                localStorage.setItem('lastfont', fontcolor[index].innerHTML);
                const paragraps = document.querySelector('.content');
                paragraps.style.color = localStorage.getItem('lastfont');
            })
        }

    }
    setCollortext();    
    
    // função troca font dos paragrafos e grana no localstorage.
    
    const setFontSize = () => {
        
        const paragraphContent = document.querySelector('.content');
        const lastfont2 = localStorage.getItem('fontSize');
        paragraphContent.style.fontSize = (`${lastfont2}px`);
        const fontOptions = document.getElementsByClassName('fontButton');

        for (let index = 0; index < fontOptions.length; index += 1) {
            fontOptions[index].addEventListener('click', () => {
                const size = parseInt(fontOptions[index].innerHTML);
                paragraphContent.style.fontSize = `${size}px`;
                localStorage.setItem('fontSize', size);
            });
        }

    }
    setFontSize();    

    //funão troca o espaçamento de linhas.

    const setLineHeigth = () => {
        const lastLineHeight = localStorage.getItem('lineHeight');
        const paragraphContent = document.querySelector('.content');
        paragraphContent.style.lineHeight = lastLineHeight;
        const lineOptions = document.querySelectorAll('#line-height>button');

        for (let index = 0; index < lineOptions.length; index += 1) {            
            lineOptions[index].addEventListener('click', () => {
                paragraphContent.style.lineHeight = lineOptions[index].innerHTML;
                localStorage.setItem('lineHeight', lineOptions[index].innerHTML);
            })
        }

    }
    setLineHeigth();

    //função troca tipo da fonte.

    const setTypeFont = () => {
        const paragraphContent = document.querySelector('.content');
        const lastTypeFont = localStorage.getItem('lastTypeFont');
        paragraphContent.style.fontFamily = lastTypeFont;
        const fontButtons = document.querySelectorAll('#font-family>button');
        console.log(fontButtons);
        for (let index = 0; index < fontButtons.length; index += 1) {
            fontButtons[index].addEventListener('click', () =>{
                paragraphContent.style.fontFamily = fontButtons[index].innerHTML
                localStorage.setItem('lastTypeFont', fontButtons[index].innerHTML);
            })
            
        }
    }
    setTypeFont();    
}
