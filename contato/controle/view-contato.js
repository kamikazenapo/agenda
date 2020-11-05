$(document).ready(function() {
  $('.btn-view').click(function(e) {
    e.preventDefault();

    $('#modalContato .modal-title').empty();
    $('#modalContato .modal-body').empty();
    $('#modalContato .modal-footer').empty();

    //$('#modalContato').modal('show');

    var dados = "idContato="
    dados += $(this).attr('id');

    $.ajax({
      type: 'POST',
      dataType: 'json',
      data: dados,
      url: 'contato/modelo/view-contato.php',
      success: function(dados) {
        let contato = `
          <p>Endereço: ${dados[0].enderecoContato}</p>
          <p>Telefone: ${dados[0].telefoneContato}</p>
          <p>Celular: ${dados[0].celularContato}</p>
          <p>E-mail: ${dados[0].emailContato}</p>
        `

        $('#modalContato .modal-title').append(dados[0].nomeContato);
        $('#modalContato .modal-body').append(contato);

        $('#modalContato').modal('show');
      }
    })
  })
})
