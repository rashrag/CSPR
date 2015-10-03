<?php
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        extract($_GET);
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
                        $outp .= '{"Name":"'  . $document["kpiname"] . '"}';
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
                 $collection->remove(array("kpiname"=>$kpiname));
        }
?>
