<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>grundlagen

</title>

</head>
<body>

<?php

$r1=rand(0,100);
$r2=rand(0,100);
$erg=$r1+$r2;
echo( "$r1+$r2 sind $erg");

function kleinste($z1,$z2){
    if($rz1<$z2){
        return $z1;
    }
    return $z2;
}

echo("<br>die kleinere Zahl ist: ".kleinste($r1,$r2));

//Schleifen,Funktionen,Arrays
function arrayAnlegen($laenge){
    $zahlen=array();
    for($i=0;$i<$laenge;$i++){
        $zahlen[$i]=rand(0,10);

    }
    
    return $zahlen;
}



function araryAlsString($a){
    return json_encode($a);
}

$neu=arrayAnlegen(10);
 

 function summeBerechnen($a){
     $sum=0;
     for($i=0;$i<count($a);$i++){
     $sum=$sum+$a[$i];
    }
    return $sum;
 }
 function maximaleZahl ($a){
     $max=$a[0];
     for($i=0;$i<count($a);$i++){
         if($a[$i]>$max){
             $max=$a[$i];
         }
         $max=$max;
     }
     return $max;
 }
 
 function zahlEnthalten($x,$a){
     $da="false";
    $i=0;
     while($i<count($a)&& $da=="false"){
        
         if($a[$i]==$x){
             $da="true";
         } 
         
         $i++;
     }
     return $da;
}
echo "<br> das array: ".araryAlsString($neu);
echo "<br>die summe ist ".summeBerechnen($neu);
echo"<br> die maximale zahl ist: ". maximaleZahl($neu);
echo "<br>".zahlEnthalten(2,$neu);
 


//assoziative Arrays

$noten = array(
    "Mathe"=>2.0,
    "Bwl"=>3.0,
    "SWE"=>4.0,
    "Chi"=>2.5,
);
 foreach($noten as $aua){
     echo $aua."<br>";
 }

 function summeBerechnena($a){
     $sum=0;
     foreach($a as $note){
         $sum=$sum+$note;
     }
     return $sum;
    }



    function durchschnitt($a){
        return $d= summeBerechnena($a)/count($a);
    }



    function schlecht($a){
        $maxi=0;
        foreach($a as $note){
            if($note>$maxi){
                $maxi=$note;
            }
        }
        return $maxi;

    }

    
    function zahlEnthaltena($x, $a){

         $vorhanden= "false";
         foreach($a as $zahl){
             if($zahl==$x){
                 $vorhanden="true";
             }
         }
         return $vorhanden;

    }
    
    function arrystring($a){
    return json_encode($a);
}
echo "<br> die summer aller noten: ".summeBerechnena($noten);
echo"<br> der durchschnitt ist: ".durchschnitt($noten);
echo "<br> die schlechsteste note ist: ". schlecht($noten);
echo "<br> die note ist: ".zahlEnthaltena(7,$noten);
echo "<br> Das array als string".arrystring($noten);


?>



</body>
</html>
