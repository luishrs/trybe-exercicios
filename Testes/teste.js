// function inserirTexto(TEXTO_ORIGEM, TEXTO_INSERIDO, INDICE) {
//     let resultado =(""
//         + TEXTO_ORIGEM.substring(0, INDICE)
//         + TEXTO_INSERIDO
//         + TEXTO_ORIGEM.substring(INDICE)
//     );
//     return resultado
// }
// console.log(inserirTexto("Isso é teste.", "um ", 7));
function inserirTexto(originText, insertText, indexText) {
    result = (""
      + originText.substring(0, indexText)
      + insertText
      + originText.substring(indexText)
    );
    return console.log(result);
  }
  console.log(inserirTexto('02345879107', '(', 0));
  let resultado = inserirTexto('02345879107', ('(',')'), (0,3));
  