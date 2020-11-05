$(document).ready(function() {
  $('.btn-edit').click(function(e) {
    e.preventDefault();

    $('#modalContato .modal-title').empty();
    $('#modalContato .modal-body').empty();
    $('#modalContato .modal-footer').empty();

    $('#modalContato .modal-title').append('Edição de contato');

    //$('#modalContato').modal('show');

    var dados = "idContato="
    dados += $(this).attr('id');

    $.ajax({
      type: 'POST',
      dataType: 'json',
      data: dados,
      url: 'contato/modelo/view-contato.php',
      success: function(dados) {
        for (var i = 0; dados.length > i; i++) {
          let body = `
            <form id="edit-contato" class="mt-3">
              <div class="form-group">
                <label for="">Nome do contato</label>
                <input id="" class="form-control" type="text" name="nomeContato" value="${dados[i].nomeContato}">
              </div>

              <div class="form-group">
                <label for="">Endereço do contato</label>
                <input id="" class="form-control" type="text" name="enderecoContato" value="${dados[i].enderecoContato}">
              </div>

              <div class="form-group row">
                <div class="col-6">
                  <label for="">Telefone do contato</label>
                  <input id="" class="form-control" type="text" name="telefoneContato" value="${dados[i].telefoneContato}">
                </div>

                <div class="col-6">
                  <label for="">Celular do contato</label>
                  <input id="" class="form-control" type="text" name="celularContato" value="${dados[i].celularContato}">
                </div>
              </div>

              <div class="form-group">
                <label for="">Email do contato</label>
                <input id="" class="form-control" type="text" name="emailContato" value="${dados[i].emailContato}">
              </div>

              <input type="hidden" name="idContato" value="${dados[i].idContato}">

              <button class="btn btn-outline-success btn-update">
                <i class="mdi mdi-content-save"></i> Salvar
              </button>
            </form>
          `

          $('#modalContato .modal-body').append(body);
        }

        $('#modalContato').modal('show');
        $('body').append('<script src="contato/controle/update-contato.js"></script>');
      }
    })
  })
})
