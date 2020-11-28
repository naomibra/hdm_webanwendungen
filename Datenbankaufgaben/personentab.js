ajax = new XMLHttpRequest();
if(ajax!=null) {
ajax.open("POST","ppl.php");
ajax.onreadystatechange = function(){
if(this.readyState == 4){
if(this.status == 200){
   tabelleAufbauen(this.responseText);
   
console.log("yes es funktioniert");
}
}
}
ajax.send(null);
}
else {
alert("Ihr Browser unterstützt kein Ajax!");}







let tabelle=document.getElementsByTagName("table")[0];

function tabelleAufbauen(personen){
    let a= JSON.parse(personen);
    
    for(let i=0;i<a.length;i++){
        let tr=document.createElement("tr");
        tabelle.appendChild(tr);
        
        let ide = document.createElement("td");
        ide.innerHTML=a[i].Id;
        let namee = document.createElement("td");
        namee.innerHTML=a[i].Name;
        let agee = document.createElement("td");
        agee.innerHTML=a[i].Altersange;

        tr.appendChild(ide);
        tr.appendChild(namee);
        tr.appendChild(agee);



    }

}