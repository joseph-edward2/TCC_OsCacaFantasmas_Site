<?php
include("conexao.php"); //conecta o banco de dados

//Pegando os dados enviados pelo form
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

//Inserindo no banco
try {
    $stmt = $conn->prepare("INSERT INTO usuario (email_usuario, senha_usuario) VALUES (:usuario, :senha)");
    $stmt->bindParam(':usuario', $usuario);
    $stmt->bindParam(':senha', $senha);
    $stmt->execute();

    echo "Cadastro efetuado com sucesso <a href='../index.html'> Efetuar Login </a>";

} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
?>