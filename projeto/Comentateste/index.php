<?php

$conexao = mysqli_connect("localhost", "root", "", "comentario");
$resultado = mysqli_query($conexao, "SELECT usu_nome, texto_comentario FROM comentario ORDER BY id_comentario DESC");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste documento</title>

</head>
<body>

    <div class="container">

  <h1>Comentários</h1>
  <p class="subtitulo">Deixe sua opinião abaixo</p>

  <!-- Formulário -->
  <div class="form-card">
    <form action="conexao.php" method="POST">
      <label>Seu nome</label>
      <input type="text" name="nome" placeholder="Ex: João Silva" required>

      <label>Comentário</label>
      <textarea name="mensagem" placeholder="Escreva seu comentário aqui..." required></textarea>

      <button type="submit">Enviar comentário</button>
    </form>
  </div>

  <hr>

  
  <?php $total = mysqli_num_rows($resultado); ?>
  <p class="secao-label"><?= $total ?> comentário<?= $total != 1 ? 's' : '' ?></p>

  <?php if ($total === 0): ?>
    <p class="vazio">Nenhum comentário ainda. Seja o primeiro!</p>

  <?php else: ?>
    <?php while($linha = mysqli_fetch_assoc($resultado)): ?>
      
      <div class="comentario">
        <div class="avatar"> </div>
        <div>
          <h3 class="nome"><?= htmlspecialchars($linha['usu_nome']) ?></h3>
          <p class="texto"><?= htmlspecialchars($linha['texto_comentario']) ?></p>
        </div>
      </div>
    <?php endwhile; ?>
  <?php endif; ?>
</body>
</html>