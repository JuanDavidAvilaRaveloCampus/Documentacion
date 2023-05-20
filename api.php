<?php 

$x = $_POST ["x"];
$y = $_POST ["y"];
// $z = $_POST ["z"];
$total = null;

// $total = abs($x);
$total = rand($x, $y);
echo $total;