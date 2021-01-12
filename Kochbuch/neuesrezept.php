<?php
include("openDB.php");

$titel=$_POST["rname"];
$ktext=$_POST["kurzb"];
$dauer=$_POST["dauer"];
$grad=$_POST["schwiergkeit"];
//$bild="https://www.chefkoch.de/magazin/sites/default/files/styles/slick_media/public/media/image/2020-11/Artikel_5296_X_Kuerbisstrudel_01_0.jpg?itok=DWEOKRqN";
$type=$_POST["liste"];
$ztext=$_POST["zubereitung"];

//Bild
$filename = mktime().jpg;
if (isset($_FILES['bild']) && $_FILES['bild']['error'] == 0) {
    echo "das bild ist da";
 };

move_uploaded_file($_FILES['bild']['tmp_name'],"kochbuchbilder/".$filename);
$_FILES['bild']['name'];
$bild="http://localhost:8888/webanwendungen/Kochbuch/kochbuchbilder/".$filename;

$sicher=false;
//einspeisen rezept ohne zutaten

$abfrage1="INSERT INTO Rezepte( Name, Kurztext, Dauer, Schwierigkeitsgrad, Bildpfad, Kategorie, Beschreibung) VALUES ('$titel','$ktext','$dauer','$grad', '$bild', '$type','$ztext')";

$ergebnis1=$mysqli->query($abfrage1);
$id=$mysqli->insert_id;
if($ergebnis1){
    $sicher=true;
}
else{
    echo mysqli_error($mysqli)."<br>";
    echo("fail bro try again");
    
}

//zutaten
$menge=$_POST['menge'];
$art=$_POST['einheitenauswahl'];
$zutatenname= $_POST['zname'];

for($i=0;$i<count($menge);$i++){

    $abfrage2="INSERT INTO Zutaten( Menge, Einheit, Zutat, Rezeptid) VALUES ('$menge[$i]','$art[$i]','$zutatenname[$i]','$id')";
    $ergebnis2=$mysqli->query($abfrage2);
    if($ergebnis2){
        echo $menge[$i]." ".$art[$i]." ".$zutatenname[$i]."<br>";
    }
    else{
        mysqli_error($mysqli);
        

    }
}
ini_set('display_errors', 'On');
//echo $_FILES['bild']['error'];
echo error_reporting(E_ALL);

include("closeDB.php")

?>
 

