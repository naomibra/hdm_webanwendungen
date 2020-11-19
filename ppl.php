<?php
include('openDBConnection.php');

//Personenaufgabe
$abfrage ="SELECT * FROM personen";
$ergebnis = $mysqli -> query($abfrage);

if($ergebnis != false) {
    $daten = array();
    while($row = $ergebnis -> fetch_assoc()) {
    $daten[] = $row; }
                   echo json_encode($daten);
                   
               }



    



include('closeDBConnection.php');

?>