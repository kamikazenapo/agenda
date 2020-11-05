$(document).ready(function() {
  $('#add-contato').submit(function(e) {
    e.preventDefault();

    var dados = $('#add-contato').serialize();
    var url = "contato/modelo/add-contato.php";

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: url,
      async: true,
      data: dados,
      success: function(dados) {
        if(dados.return) {
          Swal.fire({
            title: 'SysAgenda',
            text: 'Cadastro efetuado com sucesso!',
            type: 'success',
            confirmButtonText: 'ok'
          })
        } else {
          Swal.fire({
            title: 'SysAgenda',
            text: dados.erro,
            type: 'error',
            confirmButtonText: 'Tentar novamente'
          })
        }
        $('#add-contato input').val('');
      }
    })
  })
})
