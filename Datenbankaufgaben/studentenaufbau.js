

function studentenLesen(){
ajax = new XMLHttpRequest();
if(ajax!=null) {
ajax.open("POST","studenten.php");
ajax.onreadystatechange = function(){
if(this.readyState == 4){
if(this.status == 200){
    cardsAufbauen(this.responseText);
   
console.log("yes es funktioniert");
}
}
}
ajax.send(null);
}
else {
alert("Ihr Browser unterstützt kein Ajax!");}
}
studentenLesen();


function umwandlung(studenten){
    let array=JSON.parse(studenten);
    return array;

}

 function geruestAufbauen(){
    let body=document.getElementsByTagName("body")[0];
    let container=document.createElement("div");
    container.setAttribute("class","container");
    body.appendChild(container);
    
    let cc=document.createElement("div");
    cc.setAttribute("class","card-columns");
    container.appendChild(cc);

 }

 
 function carderstellen(array){
     let cardcol=document.getElementsByTagName("div")[1];
    for(let i=0;i<array.length;i++){
    let divcard =document.createElement("div");
    divcard.setAttribute("class","card border-primary");
    cardcol.appendChild(divcard);
    }
 }

 function inhalteEinfuegen(array){
    
    
    for(let i=0;i<array.length;i++){
    let divcard=document.getElementsByClassName("card border-primary")[i];
    let h2 =document.createElement("h2");
        h2.innerHTML=array[i].Name;
        h2.setAttribute("class","card-title");
        divcard.appendChild(h2);

        let h3=document.createElement("h3");
        h3.innerHTML=array[i].Matrikelnummer;
        h3.setAttribute("class","card-text");
        divcard.appendChild(h3);

        let h3s=document.createElement("h3");
        h3s.innerHTML=array[i].Studiengang;
        h3s.setAttribute("class","card-text");
        divcard.appendChild(h3s);

        let ul =document.createElement("ul");
        divcard.appendChild(ul);
}
 }

 function notenSetzen(array){
    for(let i=0;i<array.length;i++){
        let ul=document.getElementsByTagName("ul")[i];
    for(let j=0;j<array[i].Noten.length;j++){
        let li= document.createElement("li");
        li.innerHTML=array[i].Noten[j].Modul+" : "+array[i].Noten[j].Note;
        ul.appendChild(li);
      }
}

 }

 function cardsAufbauen(s){
   let sachen= umwandlung(s);
    geruestAufbauen();
    carderstellen(sachen);
    inhalteEinfuegen(sachen);
    notenSetzen(sachen);


 }