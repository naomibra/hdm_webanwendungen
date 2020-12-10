ajax = new XMLHttpRequest();
if(ajax!=null) {
ajax.open("POST","personenform.php");
ajax.onreadystatechange = function(){
if(this.readyState == 4){
if(this.status == 200){
console.log("yes es funktioniert");
}
}
}
ajax.send(null);
}
else {
alert("Ihr Browser unterstützt kein Ajax!");}

//validierung
function bootstrapValidate() {
    let form = document.getElementsByTagName("form")[0];
    if (checkAll() === false) {
    event.preventDefault();
    event.stopPropagation();
    form.classList.add('was-validated');
    return false;
    }
    form.classList.add('was-validated');
    return true;
    }


function checkAll(){
    let r1=checkName();
    let r2=checkAge();
    return r1 && r2;

}

function checkName(){
    let feld =document.getElementById("name");
    if(feld.value.length < 3||feld.value[0] != feld.value[0].toUpperCase()){
        feld.setCustomValidity("-");
        return false;

    }
    feld.setCustomValidity("");
    return true;

}
//standard wieder angeschalten
function checkAge(){
    let afeld= document.getElementById("age");
   return afeld.checkValidity();
   
    
}

