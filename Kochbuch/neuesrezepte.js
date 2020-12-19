ajax = new XMLHttpRequest();
if(ajax!=null) {
ajax.open("POST","neuesrezept.php");
ajax.onreadystatechange = function(){
if(this.readyState == 4){
if(this.status == 200){
   
   
console.log("yes es funktioniert verbunden! mit der Datenbank");
}
}
}
ajax.send(null);
}
else {
alert("Ihr Browser unterstützt kein Ajax!");}











//buttons

function plus(){
    let divgruppe= document.getElementById("ingrediens");
    console.log("hi mom")
    let tem= document.querySelector("template");
    const clone= tem.content.cloneNode(true);
    let divplus=document.createElement("div");
    divplus.setAttribute("class","form-group");
    divplus.append(clone);
        divgruppe.append(divplus);
  
}
function minus(){
    let divgruppe= document.getElementById("ingrediens");
    console.log(divgruppe.children.length);
    let letzteskind=divgruppe.children.length-1;
    if(divgruppe.children.length>3){
        divgruppe.removeChild(divgruppe.children[letzteskind]);
    }

}

//slider

function slide(){
    let p=document.getElementById("wert");
    let sliderr=document.getElementsByName("dauer")[0].value;
    p.innerHTML= sliderr+" minuten";

}