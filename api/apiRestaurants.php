<?php
  $db_host = 'localhost';
  $db_user = 'root';
  $db_password = 'root';
  $db_db = 'my_app';
  $db_port = 8889;

  $con = new mysqli(
    $db_host,
    $db_user,
    $db_password,
    $db_db
  );
	
  if ($con) {
    $sql = "SELECT * FROM restaurants";
    $result = mysqli_query($con, $sql);

    if($result){
        header("Content-Type: JSON");
        $i = 0;
        while($row = mysqli_fetch_assoc($result)){
            $response[$i]['id_restaurant'] = $row ['id_restaurant'];
            $response[$i]['name'] = $row ['name'];
            $response[$i]['address'] = $row ['address'];
            $response[$i]['lat'] = $row ['lat'];
            $response[$i]['lng'] = $row ['lng'];
            $response[$i]['kind_food'] = $row ['kind_food'];
            $i++;
        }
        echo json_encode($response,JSON_PRETTY_PRINT);
    }
    
  } else {
      echo "DB connection failed";
  }

?>