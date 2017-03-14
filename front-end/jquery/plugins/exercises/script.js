$.fn.reverse = function(preserveCapitalization) {
  var t = $(this).text();
  if (preserveCapitalization) {
    t = t.toLowerCase();
  }
  console.log(t);
  var arr = t.split('');
  arr.reverse();
  if (preserveCapitalization) {
    arr[0] = arr[0].toUpperCase();
    console.log(arr);
  }
  t = arr.join('');
  console.log(t);
  $(this).text(t);
};


$(function() {
  $('body').on('click', function() {
    var b = $('.banner').toArray();
    var preserveCapitalize = true;
    b.forEach(function(element) {
      $(element).reverse(preserveCapitalize);
    });
  });
});
