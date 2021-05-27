var iden = "MAD66L800170";
var Nus = "Roger1210";
var Contra = "123456";
function validar(){
    var us = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;
    if(us==Nus && pass == Contra){
        window.open("Planet Fitness Menu.html");
    }
    else if(us == "" || pass == ""){
        alert("Datos vacios");
    }
    else{
        alert("Revise sus datos");
    }
    }
function configuracion(){
    var idenP = document.getElementById("iden").value;
    var Nuss = document.getElementById("usuario1").value;
    var Contraa = document.getElementById("pass1").value;
    if(idenP == iden && Nuss != "" && Contraa != ""){
        alert("Datos de usuario cambiados");
        Nus = document.getElementById("usuario1").value;
        Contra = document.getElementById("pass1").value;
        return Nus;
        return Contra;
    }
    else if(idenP != iden){
        alert("Codigo de identificacion incorrecto");
    }
    else{
        alert("Error a la hora de cambiar los datos");
    }
}