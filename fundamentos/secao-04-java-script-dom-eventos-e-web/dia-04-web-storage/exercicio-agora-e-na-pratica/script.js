window.onload = () => {
    // função altera background color
    const backgroundColor = () => {
        const backOptions = document.querySelectorAll('#background-color button');
        document.body.style.backgroundColor = localStorage.getItem('lastcolor');
        for (let index = 0; index < backOptions.length; index += 1) {
            backOptions[index].addEventListener('click', () => {
                document.body.style.backgroundColor = backOptions[index].innerHTML
                localStorage.setItem('lastcolor', backOptions[index].innerHTML);
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
            })
        }
    }
    collortext();

    // console.log(paragraphContent);
    
    // função troca font dos paragrafos e grana no localstorage.
    
    const fontSize = () => {
        
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
    fontSize();

    

    const lineHeigth = () => {
        const lastLineHeight = localStorage.getItem('lineHeight');
        const paragraphContent = document.querySelector('.content');
        paragraphContent.style.lineHeight = lastLineHeight;
        const lineOptions = document.querySelectorAll('#line-height>button');
        console.log(lineOptions);
        for (let index = 0; index < lineOptions.length; index += 1) {
            console.log(lineOptions[index].innerHTML);
            lineOptions[index].addEventListener('click', () => {
                paragraphContent.style.lineHeight = lineOptions[index].innerHTML;
                localStorage.setItem('lineHeight', lineOptions[index].innerHTML);
            })
        }
    }
    lineHeigth();



    // for (let index = 0; index < lineOptions.length; index += 1) {
    //     lineOptions[index].addEventListener('click', () => {
    //         // console.log(lineOptions[index]);
    //         const heights = lineOptions[index].innerHTML;
    //         paragraphContent.style.lineHeigth = heights;
    //         console.log(heights);
    
    //     })
    
    // }
}
