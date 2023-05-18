<?php 

// VARIABLES GLOBALES
// El valor de estas variables no pueden ser obtenidas, ya que nu nivel de scope, aunque es
// global, solo puede ser utilizado a cierto nivel, en este caso solo con el padre, ninguno por
// debajo de el puede acceder al valor de esta variable, así como aplica con esta funcion, la 
// cual retorna una variable undefined
$valor = 34;
function mostrar_data(){
    echo "valor de variable %s".$valor;
}

echo "valor de variable %s".$valor;

echo mostrar_data();

?>