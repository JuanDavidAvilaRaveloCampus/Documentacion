# Math funtions

#### abs()

Esta función, convierte a todo parámeto numérico en un número entero positivo:

Ejemplo:

```php
$x = $_POST ["x"];
$total = null;

$total = abs($x);
```

Se verá así:

<img src="/home/skylab-105/.config/Typora/typora-user-images/image-20230520145041763.png" style="zoom:67%;" />

y como respuesta: 

<img src="/home/skylab-105/.config/Typora/typora-user-images/image-20230520145127027.png" alt="image-20230520145127027" style="zoom: 67%;" />

#### round()

Redondea todo parámetro numérico al entero positivo más cercano:

```php
$total = round($x);
```

#### 

#### floor()

Redondea hacia abajo el valor de un número decimal o de coma flotante a su entero más cercano hacia abajo.

```php
$total = floor($x);
```

#### ceil()

Redondea un número hacia arriba al entero más cercano. Toma un valor  decimal o de coma flotante y devuelve el siguiente entero más alto.

```php
echo ceil(3.14);  // Resultado: 4
echo ceil(9.99);  // Resultado: 10
echo ceil(-4.5);  // Resultado: -4
echo ceil(0);     // Resultado: 0
```

#### pow()

Calcula la potencia de un número. Toma dos argumentos: la base y el  exponente, y devuelve el resultado de elevar la base al exponente.

sintaxis:

```php
pow($base, $exponente)
```

Ejemplos:

```php
echo pow(2, 3);   // Resultado: 8 (2 elevado a la 3)
echo pow(10, 2);  // Resultado: 100 (10 elevado a la 2)
echo pow(5, 0);   // Resultado: 1 (cualquier número elevado a 0 es igual a 1)
echo pow(4, -2);  // Resultado: 0.0625 (4 elevado a la -2, es decir, 1/4^2)

```

#### sqrt()

Calcula la raíz cuadrada de un número. 

sintaxis:

```php
sqrt($numero)
```

Ejemplos:

```php
echo sqrt(16);   // Resultado: 4 (raíz cuadrada de 16)
echo sqrt(25);   // Resultado: 5 (raíz cuadrada de 25)
echo sqrt(2);    // Resultado: 1.4142135623731 (raíz cuadrada de 2, aproximación)
echo sqrt(0);    // Resultado: 0 (la raíz cuadrada de 0 es 0)

```

#### max()

Encontra el valor máximo entre un conjunto de valores. Puede tomar una  lista de argumentos separados por coma o un array como parámetro y  devuelve el valor más grande.

sintaxis:

```php
max($valor1, $valor2, $valor3, ...)
```

también puede contener arrays

```php
max($array)
```

Aquí algunos ejemplos:

```php
echo max(5, 10, 8, 3);  // Resultado: 10 (el valor máximo entre 5, 10, 8 y 3)
echo max([2, 7, 4, 9]); // Resultado: 9 (el valor máximo en el array [2, 7, 4, 9])
echo max(-5, -10, -8);  // Resultado: -5 (el valor máximo entre -5, -10 y -8)

```

#### min()

Encuentra el valor minimo entre un conjunto de valores. Puede tomar una lista de argumentos separados por una coma o un array como parámetro y retorna el menor valor.

sintaxis:

```php
min($valor1, $valor2, $valor3, ...)
```

ejemplos:

```php
echo min(5, 10, 8, 3);  // Resultado: 3 (el valor mínimo entre 5, 10, 8 y 3)
echo min([2, 7, 4, 9]); // Resultado: 2 (el valor mínimo en el array [2, 7, 4, 9])
echo min(-5, -10, -8);  // Resultado: -10 (el valor mínimo entre -5, -10 y -8)

```

#### pi()

Pi, es pi :D

#### rand()

Genera un número entero aleatorio. Se puede especificar un rango dentro del cual deseas generar el número aleatorio.

sintaxis:

```php
rand($min, $max)
```

ejemplos:

```php
echo rand(1, 10);  // Genera un número aleatorio entre 1 y 10
echo rand(50, 100);  // Genera un número aleatorio entre 50 y 100

```



