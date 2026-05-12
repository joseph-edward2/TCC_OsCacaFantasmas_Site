<?php

$hostname = 'localhost';
$username = 'root';
$password = '';
$database = 'site_jogo';

try {
    $conn = new PDO("mysql:host=localhost;dbname=site_jogo", "root", "");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Erro na conexão: " . $e->getMessage();
}
?>