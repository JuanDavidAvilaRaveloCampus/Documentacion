# METODOS:



### $_GET: 

Este método se utiliza para recuperar información del servidor. La data que se busque y retorne, va a ser adjuntada a la URL, por lo que este método no es muy seguro.

Ejemplos: 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- <script src="main.js" defer></script> -->
    
</head>
<body>
    <form action="api.php" method="get">
        <input type="text" name="username"><br>
        <input type="password" name="password"><br>
        <input type="submit" value="Log in">
    </form>

    <pre></pre>
</body>
</html>
```

```php
<?php 

    $username = $_GET["username"];
    $password = $_GET["password"];

    echo "Usuario: {$username}<br>";
    echo "Password: {$password}<br>";
```

Aplicando este método, la URL se verá algo así:

```URL
http://localhost/SkylAb-105/Ejercicios/api.php?username=Juan&password=123
```