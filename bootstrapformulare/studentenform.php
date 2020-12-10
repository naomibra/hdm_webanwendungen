<?php
$mysqli= new mysqli(localhost,'root','root','webWISE2021');
if (mysqli_connect_errno()) {
   echo "Keine Verbindung zur Datenbank möglich: " . mysqli_connect_error();
   }

//Teil 1

//insert name matrikel studiengang
$saved=false;
$n=$_POST["name"];
$m=$_POST["matrikelnummer"];
$s=$_POST["liste"];


     $abfrage="INSERT INTO studenten( Name, Matrikelnummer, Studiengang) VALUES ('".$n."',".$m.",'".$s."')";
     $id=$mysqli->insert_id;
    $ergebnis=$mysqli->query($abfrage);
    $id=$mysqli->insert_id; 
  
     if($ergebnis){
        $saved=true;
        
     }
     else{
         mysqli_error($mysqli);
     }


//Noten und Module

$mo=$_POST['module'];
$no=$_POST['noten'];
$saved2=false;


for($i=0;$i<count($mo);$i++){

$abfrage2="INSERT INTO Noten( Modul, Note, StudentenID) VALUES ('$mo[$i]','$no[$i]','$id')";
if($mysqli->query($abfrage2)===TRUE){

echo $mo[$i].": ".$no[$i]."<br>";
$saved2=true;

}
else{
   mysqli_error($mysqli);
}
 }

 //Bestätigungsseite
 if($saved===true){?>
    <p>Danke deine eingabe war erforgreich </p>
   <p>id:<?php echo $id;?></p>
    <p>Name: <?php echo $n; ?></p>
    <p>Matrikelnummer: <?php echo $m; ?></p>
    <p>Studiengang: <?php echo $s; ?></p>
    <?php

    /*for($j=0;$j<cout($mo);$j++){
       <p> <?php echo $mo[$j]echo $no[$j]; ?> </p>
    }*/
    }
    else {?>
    <p>Speichern in der DB ist fehlgeschlagen: <?php echo $saved; ?></p>
    <?php }
$mysqli -> close();
?>