<?php
include 'conexao.php';

session_start();

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

try {
    $stmt = $conn->prepare("SELECT * FROM usuario WHERE EMAIL_USUARIO = :usuario AND SENHA_USUARIO = :senha");
    $stmt->bindParam(':usuario', $usuario);
    $stmt->bindParam(':senha', $senha);
    $stmt->execute();

    if ($stmt->rowCount() == 1) {
        $_SESSION['login'] = true;
        $_SESSION['usuario'] = $usuario;

        echo "<p style='color: green;'>Login efetuado com sucesso!</p>";

        exit;
    }

} 

catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
?>