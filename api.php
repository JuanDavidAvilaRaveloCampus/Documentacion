<?php

    $nombreCliente = "Campers Campuslands";

    //Conocer el tamaño en carácteres de un String
    echo strlen($nombreCliente)."<br>";
    var_dump($nombreCliente)."<br>";

    // Eliminar espacio en blanco
    $texo = trim($nombreCliente)."<br>";
    echo strlen($texo)."<br>";

    //Convierte un String en Mayúsculas
    echo strtoupper($nombreCliente)."<br>";

    //Convierte un String en minúsculas
    echo strtolower($nombreCliente)."<br>";

    $mail_1 = "correo@correo.com";
    $mail_2 = "Correo@correo.com";

    var_dump(strtolower($mail_1) === strtolower($mail_2));
    echo str_replace('Juan', 'J', $nombreCliente);

    //Revisa si un string existe o no
    echo strpos($nombreCliente, 'Pedro');

    $tipoCliente = "Premium - Empresarial";

    echo "<br>";
    echo "<br>";

    echo "El Cliente ".$nombreCliente." es ".$tipoCliente."<br>";
    echo "El Cliente {$nombreCliente} es ${tipoCliente}";
?>