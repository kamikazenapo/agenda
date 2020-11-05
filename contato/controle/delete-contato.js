$(document).ready(function() {
  $('.btn-delete').click(function(e) {
    e.preventDefault();

    var dados = 'idContato=';
    dados += $(this).attr('id');

    Swal.fire({
      title: 'SysAgenda',
      text: 'Você tem certeza que deseja excluir o registro?',
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar a exclusão'
    }).then((result) => {
      if (result.value) {
        $.ajax({
          type: 'POST',
          dataType: 'json',
          data: dados,
          url: 'contato/modelo/delete-contato.php',
          success: function(dados) {
            if (dados.return) {
              Swal.fire({
                title: 'SysAgenda',
                text: 'O registro foi deletado com sucesso',
                type: 'success'
              })
            } else {
              Swal.fire({
                title: 'SysAgenda',
                text: dados.erro,
                type: 'danger'
              })
            }

            $('#conteudo').load('contato/visao/ctr-contato.html');
          }
        })
      }
    })
  })
})
