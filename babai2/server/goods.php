<?php
    $goods = $_GET['id'];
    $db = mysqli_connect("127.0.0.1", "root", "", "bbf");
    $sql="SELECT * FROM hotlist where id=$goods";
$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
$response = array("status"=>"success","res" => $data);
echo json_encode($response,true);
?>
