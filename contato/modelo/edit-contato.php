<?php
  include('../../conexao/conexao.php');

  $nomeContato = utf8_decode($_POST['nomeContato']);
  $enderecoContato = utf8_decode($_POST['enderecoContato']);
  $telefoneContato = utf8_decode($_POST['telefoneContato']);
  $celularContato = utf8_decode($_POST['celularContato']);
  $emailContato = utf8_decode($_POST['emailContato']);
  $idContato = $_POST['idContato'];


  $sql = "UPDATE contato
          SET nomeContato = '".$nomeContato."',
              enderecoContato = '".$enderecoContato."',
              telefoneContato = '".$telefoneContato."',
              celularContato = '".$celularContato."',
              emailContato = '".$emailContato."'
          WHERE idContato = ".$idContato;

  if(mysqli_query($conecta, $sql)) {
    $data = array('return' => true);
  } else {
    $data = array('return' => false, 'erro' => mysqli_error($conecta));
  }

  echo json_encode($data);
?>
