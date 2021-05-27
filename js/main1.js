var suma1=0;
function Crear(){
  var tabla = document.getElementById("tabla");
  var row1 = tabla.insertRow(1);
  var celda1 = row1.insertCell(0);
  var celda2 = row1.insertCell(1);
  var celda3 = row1.insertCell(2);
  celda1.innerHTML = (suma1++)+1;
  celda2.innerHTML = document.getElementById("nom").value; 
  celda3.innerHTML = "$50";
  document.getElementById('nom').value = "";
  var yea = document.getElementById("tabla").rows.length;
  document.getElementById("totalT").innerHTML=((yea-1)*50);
}
function Eliminar(){
  document.getElementById("tabla").deleteRow(1);
  var yea = document.getElementById("tabla").rows.length;
  document.getElementById("totalT").innerHTML=((yea-1)*50);
}