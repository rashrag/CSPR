<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
   // connect to mongodb
   $m = new MongoClient();
   // select a database
   $db = $m->ghci;
  
   $collection = $db->patients;
   echo "Collection selected succsessfully";

   $cursor = $collection->find();
   $outp= "";
   // iterate cursor to display title of documents
   foreach ($cursor as $document) {
     if ($outp != "") 
	 {$outp .= ",";}
    $outp .= '{"Name":"'  . $document["name"] . '",';
    $outp .= '"Id":"'   . $document["id"]        . '",';
    $outp .= '"City":"'. $document["city"]     . '"}';
	}

   $outp ='{"records":['.$outp.']}';
   echo $outp;
?>