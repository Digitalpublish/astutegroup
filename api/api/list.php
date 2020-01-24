<?php
/**
 * Returns the list of product.
 */
require 'connect.php';
    
$product = [];
$sql = "SELECT name, email, subject, message FROM product";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $product[$cr]['name']    = $row['name'];
    $product[$cr]['subject'] = $row['subject'];
    $product[$cr]['email'] = $row['email'];
    $product[$cr]['message'] = $row['message'];
    $cr++;
  }
    
  echo json_encode(['data'=>$product]);
}
else
{
  http_response_code(404);
}