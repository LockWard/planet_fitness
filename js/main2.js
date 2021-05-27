  var suma=0;
function Crear1(){
  var tabla1 = document.getElementById("tabla1");
  var row = tabla1.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = (suma++)+1;
  cell2.innerHTML = document.getElementById("nombre").value; 
  cell3.innerHTML = document.getElementById("rol").value; 
  document.getElementById('nom').value = "";
}
function Eliminar1(){
  document.getElementById("tabla1").deleteRow(1);
}