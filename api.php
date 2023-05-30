<?php

    // * isset()
    // Este método verifica si el array tiene contenido y retorna un booleano

    //aquí el condicional debe de retornar true, por ende se ejecuta la primera condición
    $variable = "Hi";

    if (isset($variable)){
        echo "La variable tiene contenido dentro <br>";
    } else {
        echo "La variable está vacía <br>";
    };

    //aquí el condicional debe de retornar false, por ende se ejecuta la segunda condición
    $variable = "";

    if (isset($variable)){
        echo "La variable tiene contenido dentro <br>";
    } else {
        echo "La variable está vacía <br>";
    };


    //  EJEMPLO CON EMPTY
    // ? empy verifica si una variable está vacía, siendo el caso retorna true, si no, false
    $variable_2 = '';
    if (isset($variable_2)){
        echo "La variable_2 tiene contenido dentro <br>";
    } else {
        echo "La variable_2 está vacía <br>";
    };

    $variable_2 = 'asdf';
    if (isset($variable_2)){
        echo "La variable_2 tiene contenido dentro <br>";
    } else {
        echo "La variable_2 está vacía <br>";
    };
    
    echo "<br>";


    //! AQUÍ OTRO EJEMPO

    $clientes_1 = [];
    $clientes_2 = array ();
    $clientes_3 = array ('Pedro', 'Juan', 'Karen');
    $cliente = [
        'nombre' => 'Juan',
        'saldo' => 200
    ];

    // Empty - Verifica si un arreglo está vacío
    var_dump( empty($clientes_1)."<br>");
    var_dump( empty($clientes_2)."<br>");
    var_dump( empty($clientes_3)."<br>");

    /*
        *Isset - Revisar si un arreglo está creado o una propiedad está definida
    */ 

    echo "<br>";
    var_dump( isset($clientes_1)."<br>");
    var_dump( isset($clientes_2)."<br>");
    var_dump( isset($clientes_3)."<br>");

    echo "<br>";
    echo "<br>";
    /*
        ? Isset - Perime revisar si una propiedad de un arreglo asociativo, existe!
    */

    var_dump( isset($clientes_3['nombre'])."<br>");
    var_dump( isset($clientes_3['codigo'])."<br>");



    
?>