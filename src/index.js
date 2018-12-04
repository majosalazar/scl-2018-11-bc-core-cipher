window.onload = () => {
  let offset, message
  
  document.getElementById("btnEncode").onclick = () => {
    message = document.getElementById("message").value;
    offset = document.getElementById("key").value;
    let textEncode = cipher.encode(offset, message);
    document.getElementById("resultText").innerHTML = textEncode;
  }
   
  document.getElementById("btnDecode").onclick = () => {
    message = document.getElementById("message").value;
    offset = document.getElementById("key").value;
    let textDecode = cipher.decode(offset, message);
    document.getElementById("resultText").innerHTML = textDecode;
  }
  

  //boton para copiar el mensaje de resultado
  document.getElementById("copyText").onclick = () => {
    let selectMessage = document.getElementById("resultText");
    let range = document.createRange();
    let select = window.getSelection();

    select.removeAllRanges();
    range.selectNodeContents(selectMessage);
    select.addRange(range);
    document.execCommand("copy"); 

  }
 
  //boton limpiar pagina
  document.getElementById("clear").onclick = () => {
    document.getElementById("message").value = "";
    document.getElementById("key").value = "";
    document.getElementById("resultText").innerHTML = "";
    //location.reload();
  }

}



