<?php
    $id = $_GET['id'];
    $db = mysqli_connect("127.0.0.1", "root", "", "bbf");
    $sql="SELECT * FROM products where id=$id";
$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
$response = array("status"=>"success","res" => $data);
echo json_encode($response,true);
?>