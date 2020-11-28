ajax = new XMLHttpRequest();
if(ajax!=null) {
ajax.open("POST","rezepte.php");
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
alert("Ihr Browser unterstützt kein Ajax!");
}

//test

//let testi=[{"id":"1","Name":"Tagliatelle al Salmone","Kurztext":"Nudeln und Lachs","Dauer":"1 Stunde","Schwierigkeitsgrad":"Einfach","Bildpfad":"https:\/\/img.chefkoch-cdn.de\/rezepte\/2109501340136606\/bilder\/815906\/crop-960x640\/tagliatelle-al-salmone.jpg","Kategorie":"Fisch","Beschreibung":"Zun\u00e4chst den Lachs w\u00fcrfeln und in 2 EL Oliven\u00f6l rundum kurz anbraten. Dann herausnehmen und die gehackten Schalotten in die Pfanne geben. Kurz anschwitzen, bis sie glasig sind und dann den Knoblauch hineinpressen und direkt mit dem Wei\u00dfwein abl\u00f6schen. Nun den Wein bis zur H\u00e4lfte reduzieren und dann die Gem\u00fcsebr\u00fche dazugeben. Dies nun ca. weitere 5 Minuten zusammen k\u00f6cheln lassen. \r\n\r\nAnschlie\u00dfend die Dosentomaten und das Tomatenmark beif\u00fcgen. Ordentlich mit Salz und Pfeffer w\u00fcrzen, den Saft der halben Limette dazugeben, die So\u00dfe abschmecken und nach Belieben noch eine Zehe Knoblauch hineinpressen. Nach ca. 5 Minuten die Sahne dar\u00fcber gie\u00dfen und dann den Lachs wieder in die So\u00dfe legen. Nochmal kurz aufkochen lassen, dann die zwischenzeitlich gekochten Tagliatelle in die Sauce geben und kurz darin ziehen lassen, damit sie etwas Sauce aufnehmen k\u00f6nnen. \r\n\r\nDill und Petersilie dar\u00fcber streuen und mit etwas Fleur de Sel bestreut servieren","zutaten":[{"Menge":"500","Einheit":"Gramm","Zutat":"Tagliatelle"},{"Menge":"250","Einheit":"Gramm","Zutat":"Lachs"},{"Menge":"2","Einheit":"St\u00fcck","Zutat":"Schalotten"}]},{"id":"2","Name":"Krake im Dip","Kurztext":"Kochen mit Kindern","Dauer":"10 Minuten","Schwierigkeitsgrad":"Einfach","Bildpfad":"https:\/\/img.chefkoch-cdn.de\/rezepte\/2048121331388184\/bilder\/668330\/crop-960x640\/krake-im-dip.jpg","Kategorie":"Vorspeise","Beschreibung":"Eine Paprika waschen und unten etwas abschneiden. Diese dann hochkant stellen und im unteren Drittel aus Mayonnaise oder Frischk\u00e4se zwei Augen Formen. Darauf werden die Schokotropfen (Backzubeh\u00f6r, zu finden bei den Zuckerstreuseln) als Pupillen gesetzt.\r\n\r\nNun die Paprika in die Sch\u00fcssel mit dem Dip stellen. \r\n\r\nAus der zweiten Paprika Streifen schneiden und diese als Arme neben die Paprika (in den Dip) legen. Man nimmt etwa 4 auf jeder Seite.\r\n\r\nDas Ganze sieht dann insgesamt so aus, als schaut die Krake aus dem Dip raus. Dies eignet sich wunderbar um ein B\u00fcfett aufzupeppen.","zutaten":[{"Menge":"2","Einheit":"St\u00fcck","Zutat":"Paprikaschoten"},{"Menge":"1","Einheit":"Packung","Zutat":"Frischk\u00e4se"}]}];

function umwandlung(jason){
    let array=JSON.parse(jason);
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
        h3.innerHTML=array[i].Kurztext;
        h3.setAttribute("class","card-text");
        divcard.appendChild(h3);

        let h4=document.createElement("h4");
        h4.innerHTML=array[i].Dauer;
        h4.setAttribute("class","card-text");
        divcard.appendChild(h4);

        let h42=document.createElement("h4");
        h42.innerHTML=array[i].Schwierigkeitsgrad;
        h42.setAttribute("class","card-text");
        divcard.appendChild(h42);

        let bild=document.createElement("img");
        bild.setAttribute("width","80%");
        bild.setAttribute("src",array[i].Bildpfad);
        divcard.appendChild(bild);

        let h5=document.createElement("h5");
        h5.innerHTML=array[i].Kategorie;
        divcard.appendChild(h5);

        

        //buttons
        
        let b1=document.createElement("button");
        b1.innerHTML="Einfügen";
        b1.setAttribute("class","btn btn-sm btn-primary");
        b1.setAttribute("type","button");
        divcard.appendChild(b1);

        let b2=document.createElement("button");
        b2.innerHTML="Detail";
        b2.setAttribute("class","btn btn-sm btn-warning");
        b2.setAttribute("data-toggle","modal");
        b2.setAttribute("type","button");
        b2.setAttribute("data-target","#modal"+array[i].id);
        divcard.appendChild(b2);

        let ul =document.createElement("ul");
        divcard.appendChild(ul);
    }
 }

 function modaleaufbauen(array){
    let body=document.getElementsByTagName("body")[0];
    for(let i=0;i<array.length;i++){

        let divmodal=document.createElement("div");
        divmodal.setAttribute("class","modal");
        divmodal.setAttribute("id","modal"+array[i].id);
        body.appendChild(divmodal);

        //dialog
        let divdia=document.createElement("div");
        divdia.setAttribute("class","modal-dialog");
        divmodal.appendChild(divdia);

        //modal-content
        let divcont=document.createElement("div");
        divcont.setAttribute("class","modal-content");
        divdia.appendChild(divcont);

        //modal-header
        let divheader=document.createElement("div");
        divheader.setAttribute("class","modal-header");
        divcont.appendChild(divheader);

        let h5=document.createElement("h5");
        h5.setAttribute("class","modal-title");
        h5.innerHTML=array[i].Name;
        divheader.appendChild(h5);

        let close=document.createElement("button");
        close.setAttribute("class","close");
        close.setAttribute("data-dismiss","modal");
        close.setAttribute("type","button");
        divheader.appendChild(close);

        let span=document.createElement("span");
        span.innerHTML="X";
        close.appendChild(span);

        //modal-body
        let modalbody=document.createElement("div");
        modalbody.setAttribute("class","modal-body");
        divcont.appendChild(modalbody);

        let modalbild=document.createElement("img");
        modalbild.setAttribute("width","30%");
        modalbild.src=array[i].Bildpfad;
        modalbody.appendChild(modalbild);
        
        //Zutaten
        let divzutat=document.createElement("div");
        divzutat.innerHTML="<strong>Zutaten: </strong><br/>";
        modalbody.appendChild(divzutat);

        let ul=document.createElement("ul");
        divzutat.appendChild(ul);

        for(let z=0;z<array[i].Zutaten.length;z++){
            let li=document.createElement("li");
            li.innerHTML=array[i].Zutaten[z].Menge+" "+array[i].Zutaten[z].Einheit+" "+array[i].Zutaten[z].Zutat;
            ul.appendChild(li);
        }
        
        console.log(array[i].Zutaten);

        let modaltext=document.createElement("p");
        modaltext.innerHTML="<strong>Beschreibung </strong><br/>"+array[i].Beschreibung;
        modalbody.appendChild(modaltext);

        

    }

 }



 function cardsAufbauen(s){
    let sachen= umwandlung(s);
     geruestAufbauen();
     modaleaufbauen(sachen)
     carderstellen(sachen);
     inhalteEinfuegen(sachen);
     

 
 
  }