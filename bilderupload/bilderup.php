<?php


move_uploaded_file($_FILES['bild']['tmp_name'],"bilder/bild.jpg");
$s=$_FILES['bild']['name'];
echo "<img src='bilder/bild.jpg' width='300'/>"; 
?>
