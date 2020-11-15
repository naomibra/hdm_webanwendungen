<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Json

</title>

</head>
<body>

<?php

$person= array(
    "id"=>123,
    "name"=>"Ute",
    "alter"=>40,
);
echo json_encode($person);

$studenten= array();
//$noten=array();

$studenten[]=array("name"=>"Hans","matr"=>123,"studiengang"=>"Wing","noten"=>array("modul"=>"Mathe","note"=>3,
"modul"=>"bwl","note"=>1)
);

$studenten[]=array("name"=>"lola","matr"=>163,"studiengang"=>"dc","noten"=>array("modul"=>"Mathe","note"=>3,
"modul"=>"bwl","note"=>1)
);
/*$noten[]=array("modul"=>"Mathe","note"=>3,
"modul"=>"bwl","note"=>1);*/

echo "<br>".json_encode($studenten);
?>



</body>
</html>

