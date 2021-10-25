$(document).on('input', '#dezimal', function() {
  let zahl = $("#dezimal").val();
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
  $("#dual").text(dual.join(""));
  
})
