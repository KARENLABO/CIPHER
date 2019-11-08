// ESTA FUNCION GUARDA EL VALOR DEL OFFSET 
function valorOffset(){
  let objOffset = parseInt(document.getElementById("range").value);
  return objOffset;
}

// ESTA FUNCION GUARDA EL VALOR DE TEXTO A CIFRAR
function guardarValorCif(){
  let saveCifrado = document.getElementById('valorACifrar').value;
  return saveCifrado.toUpperCase();
}

 let mostrarCifra =document.getElementById('valorACifrar');
 mostrarCifra.addEventListener("keyup",cifra);
 

// ESTA FUNCION GUARDA EL VALOR DE TEXTO A DECIFRAR
function guardarValorDes(){
  let saveCifrado = document.getElementById('valorADecifrar').value;
  return saveCifrado.toUpperCase();
}

let mostrardescifra =document.getElementById('valorADecifrar');
mostrardescifra.addEventListener("keyup",decifra);


function cifra(){
  let offSet= parseInt(valorOffset());
  let string= guardarValorCif();
  let valueCifra=window.cipher.encode(offSet,string);
  document.getElementById("valorADecifrar").value = valueCifra;
}

function decifra(){
  let offSet= parseInt(valorOffset());
  let string= guardarValorDes();
  let valueDecifra= window.cipher.decode(offSet,string);
  document.getElementById("valorACifrar").value = valueDecifra;
}





