$(document).ready(function() {
  PopUpHide();
});

function PopUpShow() {
  $('.popup').show();
}

function PopUpHide() {
  $('.popup').hide();
  $('#dezimal').val('');
  $('#dual').empty();
  $('#dual_1').val('');
  $('#dezimal_1').empty();
}
