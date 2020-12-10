<?php


//code
function save($n,$a){
//connecten
$mysqli= new mysqli(localhost,'root','root','webWISE2021');
if (mysqli_connect_errno()) {
   echo "Keine Verbindung zur Datenbank möglich: " . mysqli_connect_error();
   }
    $abfrage="INSERT INTO personen(Name, Altersange) VALUES ('".$n."',".$a.")";
    $ergebnis=$mysqli->query($abfrage);
    if($ergebnis){
        return true;
    }
    else{
        return mysqli_error($mysqli);
    }

//db 
$mysqli -> close();
}
   
    $saved=false;
    $name=$_GET["Name1"];
    $age=$_GET["Altersange1"];
    $saved= save($name,$age);


if($saved===true){?>
<p>Danke deine eingabe war erforgreich </p>
<p>Name: <?php echo $name; ?></p>
<p>Alter: <?php echo $age; ?></p>
<?php
}
else {?>
<p>Speichern in der DB ist fehlgeschlagen: <?php echo $saved; ?></p>
<?php }



?>