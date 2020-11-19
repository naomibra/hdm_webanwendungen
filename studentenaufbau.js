ajax = new XMLHttpRequest();
if(ajax!=null) {
ajax.open("POST","studenten.php");
ajax.onreadystatechange = function(){
if(this.readyState == 4){
if(this.status == 200){
   ///tabelleAufbauen(this.responseText);
   
console.log("yes es funktioniert");
}
}
}
ajax.send(null);
}
else {
alert("Ihr Browser unterstützt kein Ajax!");}

let cardcol= document.getElementsByClassName("card-columns")[0];

 function cardsAufbauen(studenten){
     let array=JSON.parse(studenten);
     for(let i=0;i<array.length;i++){
         let divcard =document.createElement("div");

     }
 }
