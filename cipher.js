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
        let textEncode = ((codeAscii - 65 + parseInt(offset)) % 26) + 65;
        //guarda el resultado de cada una y la vuelve a convertir en letra
        resultEncode += String.fromCharCode(textEncode);     
      }
    } 
    //devuelve el resultado
    return resultEncode;
  },

  decode: (offset, string) => {
    let resultDecode = "";
    for (let i = 0; i < string.length; i++) {
      let codeAscii = string.charCodeAt(i)
      console.log(codeAscii)
      //if (65 <= codeAscii <= 90) {
      if (codeAscii >= 65 && codeAscii <= 90) {
        let textDecode = ((codeAscii - 65 + parseInt(offset)) % 26) + 65;
        resultDecode += String.fromCharCode(textDecode);
        console.log("mayus")
      //} if (97 <= codeAscii <= 122) {
      } else if (codeAscii >= 97 && codeAscii <= 122) {
        let textDecode = ((codeAscii - 97 + parseInt(offset)) % 26) + 97;
        resultDecode += String.fromCharCode(textDecode);
        console.log("minus")
      } else {
        let textDecode = codeAscii;
        resultDecode += String.fromCharCode(textDecode);
      }
    }
    return resultDecode;
    
  }
};
