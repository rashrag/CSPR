<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	extract_all();
	$m = new MongoClient();
	$db = $m->ghci;
	$collection = $db->kpis;
	if($type==1)
	{
		$cursor = $collection->find();
		$outp= "";
		// iterate cursor to display title of documents
		foreach ($cursor as $document)
		{
			if ($outp != ""){$outp .= ",";}
			$outp .= '{"Name":"'  . $document["name"] . '",';
			$outp .= '"Id":"'   . $document["id"]        . '",';
			$outp .= '"City":"'. $document["city"]     . '"}';
		}

	   $outp ='{"records":['.$outp.']}';
	   echo $outp;
	}
	else if($type==2)
	{
	  $document = array( "kpiname" =>$kpiname);
	  $collection->insert($document);
	}
	else if($type==3)
	{
		 $collection->remove(array("kpiname"=>"kpiname"),false);
	}
?>