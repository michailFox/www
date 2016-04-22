<?php
     
    try {
          # MySQL через PDO_MYSQL
          $DBH = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
        }
    catch(PDOException $e) {
            echo $e->getMessage();
        }

?>