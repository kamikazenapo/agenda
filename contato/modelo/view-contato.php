<?php

  include('../../conexao/conexao.php');

  $idContato = $_POST['idContato'];

  $sql = mysqli_query($conecta, "SELECT * FROM contato WHERE idContato = ".$idContato."");

  while ($resultado = mysqli_fetch_assoc($sql)) {
    $contato[] = array_map('utf8_encode', $resultado);
  }

  echo json_encode($contato);
?>
