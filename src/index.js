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
  
  document.getElementById("reload").onclick = () => {
    location.reload();
  }

}



