<?php
include('openDB.php');

$rezepte=array();
$abfrage1="SELECT * FROM Rezepte";
$ergebnis1=$mysqli->query($abfrage1);
if($abfrage1!=false){

    while($row=$ergebnis1->fetch_assoc()){
            $id=$row["id"];
            $zutaten=array();

            $abfrage2="SELECT Menge,Einheit,Zutat FROM Zutaten WHERE Rezeptid =".$id;
            $ergebnis2=$mysqli->query($abfrage2);

            if($abfrage2!=false){
                        while($row2= $ergebnis2->fetch_assoc()){
                        $zutaten[]=$row2;
                                }
           
            }
            $row["Zutaten"]=$zutaten;
            $rezepte[]=$row;
    }
     echo json_encode($rezepte);
}

include('closeDB.php');

?>