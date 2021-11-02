$(document).on('input', '#dezimal', function() {
  let zahl = $("#dezimal").val();
  if (zahl.length >= 12) {
    PopUpShow();
    $('.popup_text').html('Maximal 12 Zeichen');
  }
  let dual = [];
  let rezT = zahl;
  for (var i = zahl; i > 0; i = Math.floor(i / 2)) {
    rezT = Math.floor(rezT) / 2;
    if (rezT == Math.floor(rezT)) {
      dual.push(0);
    }
    else {
      dual.push(1);
    }
  }
  dual = dual.reverse();
  console.log(dual)
  if (dual[0] == 0) {
    dual.shift();
  }
  $("#dual").text(dual.join(""));
})

$("#dezimal_remove").click(function() {
  $('#dezimal').val('');
  $('#dual').empty();
})