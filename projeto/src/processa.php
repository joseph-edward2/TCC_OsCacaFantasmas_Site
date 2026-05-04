<?php
// Configurações do banco
$host = 'localhost';
$db   = 'contato';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    
    // Pegando os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $fone = $_POST['fone'];
    $mensagem = $_POST['mensagem'];

    // Preparando a inserção (evita ataques de SQL Injection)
    $sql = "INSERT INTO contato (nome_usu, email_usu, fone_usu, msg_usu) VALUES (:nome, :email, :fone, :mensagem)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['nome' => $nome, 'email' => $email, 'fone' => $fone, 'mensagem' => $mensagem]);

    echo "Mensagem enviada!";
} catch (PDOException $e) {
    echo "Erro ao conectar: " . $e->getMessage();
}
?>