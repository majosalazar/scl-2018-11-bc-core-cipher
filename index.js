let offset, string

btnEncode = () => {
  string = document.getElementById("message").value.toUpperCase();
  offset = document.getElementById("key").value;
  console.log("hola " + string + " key " + offset); 
  let textEncode = window.cipher.encode(offset, string);
  document.getElementById("resultText").innerHTML = textEncode.toLowerCase();

}

function btnEncode() {
  
}


//btnEncode(message, key)

let btnDecode = (mensaje, clave) => {
  console.log("hola " + decodeMessage + " key " + decodeKey);

}


resultText.innerHTML = btnDecode(message, key);

let reload = () => {

}

