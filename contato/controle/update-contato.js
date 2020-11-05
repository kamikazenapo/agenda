$(document).ready(function() {
  $('#edit-contato').submit(function(e) {
    e.preventDefault();

    var dados = $('#edit-contato').serialize();
    var url = "contato/modelo/edit-contato.php";

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: url,
      async: true,
      data: dados,
      success: function(dados) {
        if(dados.return) {
          $('#modalContato').modal('hide');

          Swal.fire({
            title: 'SysAgenda',
            text: 'Atualização efetuada com sucesso!',
            type: 'success',
            confirmButtonText: 'ok'
          })
        } else {
          $('#modalContato').modal('hide');

          Swal.fire({
            title: 'SysAgenda',
            text: dados.erro,
            type: 'error',
            confirmButtonText: 'Tentar novamente'
          })
        }

        window.setTimeout(function() {
          $('#conteudo').load('contato/visao/ctr-contato.html');
        }, 1000)
      }
    })
  })
})
