

$(function () {
  $(".board").on('click','.cell', function() {
    var t = $(this).text();
    if (t === 'X') {
      t = "";
    } else if (t === 'O') {
      t = "X";
    } else {
      t = "O";
    }
    $(this).text(t);
  });
});
