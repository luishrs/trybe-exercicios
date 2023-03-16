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

    // const content = document.querySelectorAll('.paragraph');
    // console.log(content);
    const collortext = () => {
        const fontcolor = document.querySelectorAll('#font-color button');
        for (let index = 0; index < fontcolor.length; index += 1) {
            console.log(fontcolor[index]);
            fontcolor[index].addEventListener('click', () => {
                localStorage.setItem('lastfont', fontcolor[index].innerHTML);
                const content = document.querySelectorAll('.paragraph');
                for (let index2 = 0; index2 < content.length; index2 += 1) {
                    content[index2].style.color = localStorage.getItem('lastfont');
                    console.log(content[index]);

                }
            })
        }
    }
    collortext();
    console.log(localStorage.getItem('lastfont'));


}


