<?php
include('openDBConnection.php');

$abfrage ="SELECT * FROM personen";
$ergebnis = $mysqli -> query($abfrage);

if($ergebnis != false) {
    $daten = array();
    while($row = $ergebnis -> fetch_assoc()) {
    $daten[] = $row; }
                   echo json_encode($daten);
               }


//Studenten
$studi=array();
$abfrage1="SELECT * FROM studenten";
$ergebnis1= $mysqli->query($abfrage1);
if($ergebnis1 != false){
    while($row=$ergebnis1->fetch_assoc()){
        $id=$row["id"];
        $grades=array();

        $abfrage2="SELECT Modul,Note FROM Noten WHERE StudentenID =".$id;
        $ergebnis2 = $mysqli->query($abfrage2);
        if ($ergebnis2 != false) {
            while ($row2 = $ergebnis2->fetch_assoc()) {
            $note[] = $row2; 
        }
        
        
        
        }
        $row["Noten"] = $note;
        $studi[]=$row;
        echo "<br>".json_encode($studi);
    }

}

include('closeDBConnection.php');

?>