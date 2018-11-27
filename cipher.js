window.cipher = {
  encode: (offset, string) => {
    //aqui guardara el texto
    let resultEncode = "";
    //recorre el texto
    for (let i = 0; i < string.length; i++) {
      //nueva variable texto en mayuscula
      let textM = string.toUpperCase();
      //convierte la letra a numero ascii y lo guarda
      let codeAscii = textM.charCodeAt(i);
      //si aparece un 32 lo reemplace por un espacio y que lo guarde
      if (codeAscii === 32) {
        resultEncode += " ";
      }else {
        //ejecuta la operacion matematica de desplazamiento y la guarda
        let textDis = ((codeAscii - 65 + parseInt(offset)) % 26) + 65;
        //guarda el resultado de cada una y la vuelve a convertir en letra
        resultEncode += String.fromCharCode(textDis);     
      }
    } 
    //devuelve el resultado
    return resultEncode;
  },

  decode: (offset, string) => {
    
  }
};
