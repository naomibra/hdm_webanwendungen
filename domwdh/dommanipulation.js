let body=document.getElementsByTagName("body")[0];

let zahl =3;

let h1= document.createElement("h1");
h1.innerHTML="Eine Liste mit "+ zahl+"Listenelemen(ten) und "+zahl+"Bild(ern)";

body.appendChild(h1);

let div = document.createElement("div");
body.appendChild(div);

let ul= document.createElement("ul");
div.appendChild(ul);

for(let i=1;i<zahl+1;i++){
    let li=document.createElement("li");
    li.innerHTML="Punkt"+i;
    ul.appendChild(li);
}
