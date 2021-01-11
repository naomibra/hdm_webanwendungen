<?php
 $mysqli= new mysqli(localhost,'root','root','webWISE2021');

 if (mysqli_connect_errno()) {
    echo "Keine Verbindung zur Datenbank möglich: " . mysqli_connect_error();
    }
?>