    <?php

    $host="localhost";
    $db="comentario";
    $user="root";
    $senha="";

    $conexao=mysqli_connect($host,$user,$senha, $db);

    if($_SERVER["REQUEST_METHOD"]== "POST"){
        $nome= $_POST["nome"];
        $comentario = $_POST["mensagem"];
        $sql="INSERT INTO comentario (usu_nome, texto_comentario) VALUES('$nome', '$comentario')";

        $query = mysqli_query($conexao,$sql);

        if($query){
            header('Location:index.php');
            echo "conequito";
        }
    }
   

    $conexao->close();
    ?>