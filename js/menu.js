$(document).ready(function() {
  $('.add-contato').click(function() {
    $('#conteudo').load('contato/visao/add-contato.html')
  })

  $('.ctr-contato').click(function() {
    $('#conteudo').load('contato/visao/ctr-contato.html')
  })

  $('.dados-usuario').click(function() {
    $('#conteudo').load('usuario/visao/edit-usuario.html')
  })
})
