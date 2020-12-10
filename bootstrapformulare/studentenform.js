ajax = new XMLHttpRequest();
if(ajax!=null) {
ajax.open("POST","studentenform.php");
ajax.onreadystatechange = function(){
if(this.readyState == 4){
if(this.status == 200){
   
   
console.log("yes es funktioniert verbunden!");
}
}
}
ajax.send(null);
}
else {
alert("Ihr Browser unterstützt kein Ajax!");}

let index=0;

function plus(){

    index++;
    //let form= document.getElementsByTagName("form")[0];
    let groupdiv=document.getElementById("grades");
    
    let divgroup=document.createElement("div");
    divgroup.setAttribute("class","form-group");
    groupdiv.appendChild(divgroup);

    let lmodul=document.createElement("label");
    lmodul.innerHTML="Modul";
    lmodul.setAttribute("for","module[]");

    let inmodul=document.createElement("input");
    inmodul.setAttribute("type","text");
    inmodul.setAttribute("id","mo"+index);
    //inmodul.setAttribute("name","modul"+index);
    inmodul.setAttribute("name","module[]");
    inmodul.setAttribute("class","form-control");

    let modultext= document.createElement("div");
    modultext.innerHTML="Der Modulname muss mind. 3 Zeichen lang sein";
    modultext.setAttribute("class","invalid-feedback");
    

    divgroup.appendChild(lmodul);
    divgroup.appendChild(inmodul);
    divgroup.appendChild(modultext);

    let lnote=document.createElement("label");
    lnote.innerHTML="Note";
    lnote.setAttribute("for","noten[]");

    let innote=document.createElement("input");
    innote.setAttribute("type","text");
    innote.setAttribute("id","no"+index);
    //innote.setAttribute("name","note"+index);
    innote.setAttribute("name","noten[]");
    innote.setAttribute("class","form-control");

    divgroup.appendChild(lnote);
    divgroup.appendChild(innote);
    return index;
    
}

function minus(){
    
    let groupdiv=document.getElementById("grades");
    let kind= groupdiv.children.length-1;
    console.log(kind);
    if(kind>0){
    groupdiv.removeChild(groupdiv.children[kind]);
}
}

///Validierung

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
let na= checkName();
let matr=checkMat();
let studie= checkStudiengang();
let modu =checkModul();
//let not= checkNote();
return na && matr && studie && modu /* && not*/;
}

function checkName(){
    let name=document.getElementById("name");
    if(name.value.length<3){
        name.setCustomValidity("-");
        return false;
    }
    name.setCustomValidity("");
        return true;
}

function checkMat(){
    let mat= document.getElementById("mat");
    if(mat.value.length<5){
        mat.setCustomValidity("-");
        return false;
    }
    mat.setCustomValidity("");
        return true;
}

function checkStudiengang(){
    let studiengang=document.getElementById("wahl");
    if(studiengang.value=="wähle"){
        studiengang.setCustomValidity("-")
        return false;
    }
    studiengang.setCustomValidity("")
        return true;
}








function checkModul(){
    let modul= document.getElementsByName("modul[]");
    
    for(let i=0; i<modul.length;i++){
       if(modul[i].value.length<3){
        modul[i].setCustomValidity("-");
        return false;
    } 

    modul.setCustomValidity("");
    return true;
}
}


function checkNote(){
    let note= document.getElementsByName("noten[]");
    if(note.value<0 || note.value>5){
        note.setCustomValidity("-");
        return false;
    }
    note.setCustomValidity("");
    return true;
}

