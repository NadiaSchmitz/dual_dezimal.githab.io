{"filter":false,"title":"dezimaldual.js","tooltip":"/dezimaldual.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["$(document).on('input', '#dezimal', function() {","  let zahl = $(\"#dezimal\").val();","  let dual = [];","  let rezT = zahl;","  for (var i = zahl; i > 0; i = Math.floor(i / 2)) {","    rezT = Math.floor(rezT) / 2;","    if (rezT == Math.floor(rezT)) {","      dual.push(0);","    }","    else {","      dual.push(1);","    }","  }","  dual = dual.reverse();","  $(\"#dual\").text(dual.join(\"\"));","  ","})",""],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":2},"end":{"row":14,"column":33},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1631096029463,"hash":"aacbad5cc17cd650e41148733fdc02dadc3d9327"}