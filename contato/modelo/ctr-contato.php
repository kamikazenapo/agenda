<?php

  include('../../conexao/conexao.php');

  $usuario_idUsuario = 1;

  $sql = mysqli_query($conecta, "SELECT * FROM contato WHERE usuario_idUsuario = ".$usuario_idUsuario."");

  while ($resultado = mysqli_fetch_assoc($sql)) {
    $contato[] = array_map('utf8_encode', $resultado);
  }

  echo json_encode($contato);
?>
