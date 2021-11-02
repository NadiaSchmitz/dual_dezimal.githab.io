$(document).on('input', '#dual_1', function() {
  let zahl1 = $("#dual_1").val().split("");

  for (var j = 0; j < zahl1.length; j++) {
    if (zahl1[j] > 1) {
      $("#dual_1").val('');
      $('#dezimal_1').empty();
      PopUpShow();
      $('.popup_text').html('Ungültiges Zeichen');
      
    }
  }

  if (zahl1.length >= 30) {
    PopUpShow();
    $('.popup_text').html('Maximal 30 Zeichen');
  }

  let dezimal1 = 0;
  for (var i = 0; i < zahl1.length; i++) {
    dezimal1 = dezimal1 + zahl1[i] * Math.pow(2, zahl1.length - i - 1);
  }
  $("#dezimal_1").text(dezimal1);
})

$("#dual_remove").click(function() {
  $('#dual_1').val('');
  $('#dezimal_1').empty();
})
