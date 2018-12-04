window.cipher = {
  encode: (offset, message) => {
    let resultEncode = "";
    for (let i = 0; i < message.length; i++) {
      let codeAscii = message.charCodeAt(i)
      if (codeAscii >= 65 && codeAscii <= 90) {
        let textEncode = ((codeAscii - 65 + parseInt(offset)) % 26) + 65;
        resultEncode += String.fromCharCode(textEncode);
      } else if (codeAscii >= 97 && codeAscii <= 122) {
        let textEncode = ((codeAscii - 97 + parseInt(offset)) % 26) + 97;
        resultEncode += String.fromCharCode(textEncode);
      } else if (codeAscii >= 48 && codeAscii <= 57) {
        let textEncode = ((codeAscii - 48 + parseInt(offset)) % 10) + 48;
        resultEncode += String.fromCharCode(textEncode);
      } else {
        let textEncode = codeAscii;
        resultEncode += String.fromCharCode(textEncode);
      }
    }
    return resultEncode;
  },

  decode: (offset, message) => {
    let resultDecode = "";
    for (let i = 0; i < message.length; i++) {
      let codeAscii = message.charCodeAt(i)
      if (codeAscii >= 65 && codeAscii <= 90) {
        let textDecode = ((codeAscii - 90 - parseInt(offset)) % 26) + 90;
        resultDecode += String.fromCharCode(textDecode);
      } else if (codeAscii >= 97 && codeAscii <= 122) {
        let textDecode = ((codeAscii - 122 - parseInt(offset)) % 26) + 122;
        resultDecode += String.fromCharCode(textDecode);
      } else if (codeAscii >= 48 && codeAscii <= 57) {
        let textDecode = ((codeAscii - 57 - parseInt(offset)) % 10) + 57;
        resultDecode += String.fromCharCode(textDecode);
      } else {
        let textDecode = codeAscii;
        resultDecode += String.fromCharCode(textDecode);
      }
    }
    return resultDecode;
  }
};
