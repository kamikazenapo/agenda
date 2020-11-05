$(document).ready(function() {
  $('tbody').empty();

  var url ="contato/modelo/ctr-contato.php"

  $.ajax({
    type: 'POST',
    dataType: 'json',
    url: url,
    async: true,
    success: function(dados) {
      if (dados && dados.length) {
        for (var i = 0; i< dados.length; i++) {
          const contato = `
          <tr>
            <td class="text-center" width="5%">${dados[i].idContato}</td>
            <td class="text-center" width="45%">${dados[i].nomeContato}</td>
            <td class="text-center" width="15%">${dados[i].telefoneContato}</td>
            <td class="text-center" width="15%">${dados[i].celularContato}</td>
            <td class="text-center" width="20%">
              <button id="${dados[i].idContato}" class="btn btn-outline-primary btn-sm btn-view">
                <i class="mdi mdi-eye mdi-18-px"></i>
              </button>

              <button id="${dados[i].idContato}" class="btn btn-outline-warning btn-sm btn-edit">
                <i class="mdi mdi-pencil mdi-18-px"></i>
              </button>

              <button id="${dados[i].idContato}" class="btn btn-outline-danger btn-sm btn-delete">
                <i class="mdi mdi-delete mdi-18-px"></i>
              </button>
            </td>
          </tr>
          `

          $('tbody').append(contato);
        }

        $('body').append('<script>$(".btn-new").click(function() { $("#conteudo").load("contato/visao/add-contato.html")})</script>');
        $('body').append('<script src="contato/controle/view-contato.js"></script>');
        $('body').append('<script src="contato/controle/edit-contato.js"></script>');
        $('body').append('<script src="contato/controle/delete-contato.js"></script>');
      }
    }
  })
})
