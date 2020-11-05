<?php
  include('../../conexao/conexao.php');

  $sql = "SELECT * FROM usuario WHERE loginUsuario = '".$_POST['login']."' AND senhaUsuario = '".$_POST['password']."'";

  if (mysqli_query($conecta, $sql)) {
    $pesquisa = mysqli_query($conecta, $sql);

    if ($resultado = mysqli_fetch_array($pesquisa)) {
      if (count($resultado) > 0) {
        session_start();
        $_SESSION['idUsuario'] = $resultado['idUsuario'];
        $data = array('return' => true);
      } else {
        $data = array('return' => false, 'erro' => 'Usuário e/ou senha não são válidos');
      }
    } else {
      $data = array('return' => false, 'erro' => 'Usuário e/ou senha não são válidos');
    }
  }

  echo json_encode($data);
?>
