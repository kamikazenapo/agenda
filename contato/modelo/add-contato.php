<?php
  include('../../conexao/conexao.php');

  $nomeContato = utf8_decode($_POST['nomeContato']);
  $enderecoContato = utf8_decode($_POST['enderecoContato']);
  $telefoneContato = utf8_decode($_POST['telefoneContato']);
  $celularContato = utf8_decode($_POST['celularContato']);
  $emailContato = utf8_decode($_POST['emailContato']);
  $usuario_idUsuario = 1;

  if ($nomeContato !== '' && $celularContato !== '') {
    $sql = "INSERT INTO contato (nomeContato, enderecoContato, telefoneContato, celularContato, emailContato, usuario_idUsuario)
            VALUES ('".$nomeContato."', '".$enderecoContato."', '".$telefoneContato."', '".$celularContato."', '".$emailContato."', ".$usuario_idUsuario.")";

    if(mysqli_query($conecta, $sql)) {
      $data = array('return' => true);
    } else {
      $data = array('return' => false, 'erro' => mysqli_error($conecta));
    }
  } else {
    $data = array('return' => false, 'erro' => 'Nome e celular são obrigatórios');
  }

  echo json_encode($data);
?>
