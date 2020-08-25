$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('[data-toggle="popover"]').popover();

  $('.carousel').carousel({
    interval: 2000
  })

  // Some actions in the modal

  $('#exampleModal').on('show.bs.modal', function (e) {

    console.log('el model se está mostrando')

    $('#modal').removeClass('btn btn-outline-success')
    $('#modal').addClass('btn btn-primary')
    $('#modal').prop('disabled', true)

  })
  $('#exampleModal').on('shown.bs.modal', function (e) {

    console.log('el model se mostró')
  })
  $('#exampleModal').on('hide.bs.modal', function (e) {

    console.log('el model se oculta')
  })
  $('#exampleModal').on('hidden.bs.modal', function (e) {

    console.log('el model se ocultó')
    $('#modal').prop('disabled', false)
  })
})