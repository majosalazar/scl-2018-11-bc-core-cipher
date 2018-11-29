window.onload = () => {
  let offset, string
  
  document.getElementById("btnEncode").onclick = () => {
    string = document.getElementById("message").value;
    offset = document.getElementById("key").value;
    let textEncode = cipher.encode(offset, string);
    document.getElementById("resultText").innerHTML = textEncode;
  }
   
  document.getElementById("btnDecode").onclick = () => {
    string = document.getElementById("message").value;
    offset = document.getElementById("key").value;
    let textDecode = cipher.decode(offset, string);
    document.getElementById("resultText").innerHTML = textDecode;
  }
  
  document.getElementById("reload").onclick = () => {
    location.reload();
  }

}



