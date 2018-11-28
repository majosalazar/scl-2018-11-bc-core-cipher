window.cipher = {
  encode: (offset, string) => {
    let resultEncode = "";
    for (let i = 0; i < string.length; i++) {
      let codeAscii = string.charCodeAt(i)
      console.log(codeAscii)
      if (codeAscii >= 65 && codeAscii <= 90) {
        let textEncode = ((codeAscii - 65 + parseInt(offset)) % 26) + 65;
        resultEncode += String.fromCharCode(textEncode);
        console.log("mayus")
      } else if (codeAscii >= 97 && codeAscii <= 122) {
        let textEncode = ((codeAscii - 97 + parseInt(offset)) % 26) + 97;
        resultEncode += String.fromCharCode(textEncode);
        console.log("minus")
      } else {
        let textEncode = codeAscii;
        resultEncode += String.fromCharCode(textEncode);
      }
    }
    return resultEncode;
  },

  decode: (offset, string) => {
    let resultDecode = "";
    for (let i = 0; i < string.length; i++) {
      let codeAscii = string.charCodeAt(i)
      console.log(codeAscii)
      if (codeAscii >= 65 && codeAscii <= 90) {
        let textDecode = ((codeAscii - 90 - parseInt(offset)) % 26) + 90;
        resultDecode += String.fromCharCode(textDecode);
        console.log("mayus")
      } else if (codeAscii >= 97 && codeAscii <= 122) {
        let textDecode = ((codeAscii - 122 - parseInt(offset)) % 26) + 122;
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
