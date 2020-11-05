$(document).ready(function() {
  $('#form-login').submit(function(e) {
    e.preventDefault();

    var dados = $('#form-login').serialize();
    var url = 'usuario/modelo/validate.php';

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: url,
      data: dados,
      success: function(dados) {
        if (dados.return) {
          let url = "nav.html";
          $(location).attr('href', url);
        } else {
          Swal.fire({
            title: 'SysAgenda',
            text: dados.erro,
            type: 'error',
            confirmButtonText: 'Tentar novamente'
          })
        }

        $('#form-login input').val('');
      }
    })
  })
})
