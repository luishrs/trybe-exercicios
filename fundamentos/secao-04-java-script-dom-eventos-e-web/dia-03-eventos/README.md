Conheça o addEventListener
O código mais comum para criar um escutador de eventos em um elemento é através de uma função nativa do JavaScript, chamada addEventListener. Funções nativas são funções que já existem prontas dentro da linguagem e, como toda função, podem receber parâmetros.

No seu uso mais comum, addEventListener recebe dois parâmetros:

O evento que estamos esperando escutar: Exemplos: click, change, mouseover etc.;

A função (criada por você) que será executada quando o evento acontecer. Ela pode receber um parâmetro de evento.

Anota aí 📝: Você pode passar um parâmetro para a sua função que vai permitir acessar diversos atributos do evento, como o target, que é o elemento-alvo em que o evento ocorre. Por exemplo, caso você queira capturar o valor digitado em um input, você pode usar da seguinte maneira: event.target.value.

Assista ao vídeo abaixo para aprender como utilizar eventos no seu código:


Saiba mais 💡: Para saber mais sobre os tipos de eventos, como click, change, mouseover, keyup, entre outros, acesse este link. Caso queira aprender ainda mais sobre o event.target, clique aqui.

Lembre-se que você pode passar diversos event listeners para um mesmo elemento e que todos os elementos podem receber eventos. Tudo depende apenas de sua necessidade. Você pode usar eventos em caixas de texto, botões e até mesmo elementos estáticos, como div e p.

Agora que você já tem entendimento sobre o funcionamento de alguns eventos, acesse este link e veja um exemplo interativo. Nele você verá a diferença entre o evento change e o evento keyup.

Para finalizar o conteúdo do dia, que tal alguns exercícios para treinarmos o que você acabou de aprender?!

Para os exercícios, copie os códigos HTML, CSS e JS abaixo e salve-os todos no mesmo diretório, com os nomes index.html, style.css e main.js, respectivamente.

Faça o que se pede no arquivo main.js. Você não precisará alterar os arquivos HTML e CSS. Para facilitar, os seletores já foram dados no início do arquivo main.js.

