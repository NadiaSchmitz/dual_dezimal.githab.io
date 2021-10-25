$(document).on('input', '#dual_1', function() {
  let zahl1 = $("#dual_1").val().split("");
  let dezimal1 = 0;
  for (var i = 0; i < zahl1.length; i++) {
    dezimal1 = dezimal1 + zahl1[i] * Math.pow(2, zahl1.length - i - 1);
  }
  $("#dezimal_1").text(dezimal1);
})
