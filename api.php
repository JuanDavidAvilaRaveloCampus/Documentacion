<?php 

$item = "Pizza";
$price = 5.99;
$quantity = $_POST["quantity"];
$total = $quantity * $price;

echo "You have ordered: {$quantity} * {$item}/s<br>";
echo "Your total is: \${$total}";