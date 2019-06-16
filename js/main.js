$('.holder').slice(0,3).show();

$('#btnMore').on('click', function() {
  $('.holder:hidden').slice(0,3).slideDown();
  if($('.holder:hidden').length === 0) {
    $('#btnMore').fadeOut();
  }
});



      	$('.port').slice(0,6).show();

$('#btnMore2').on('click', function() {
  $('.port:hidden').slice(0,3).slideDown();
  if($('.port:hidden').length === 0) {
    $('#btnMore2').fadeOut();
  }
});