var assets = [
  "<div class='one grid-item grid-item--weird'>1<div>",
  "<div class='two grid-item grid-item--height2'>2<div>",
  "<div class='three grid-item grid-item--width2'>3<div>",
  "<div class='four grid-item'>4<div>",
  "<div class='five grid-item grid-item--height2'>5<div>",
  "<div class='six grid-item'>6<div>",
  "<div class='seven grid-item grid-item--width2 grid-item--height2'>7<div>",
  "<div class='eight grid-item'>8<div>",
  "<div class='nine grid-item'>9<div>",
  "<div class='ten grid-item grid-item--height2'>10<div>",
  "<div class='one grid-item grid-item--width2'>1<div>",
  "<div class='two grid-item'>2<div>",
  "<div class='three grid-item grid-item--height2'>3<div>",
  "<div class='four grid-item grid-item--width2 grid-item--height2'>4<div>",
  "<div class='five grid-item'>5<div>",
  "<div class='six grid-item'>6<div>",
  "<div class='seven grid-item'>7<div>",
  "<div class='eight grid-item grid-item--width2'>8<div>",
  "<div class='nine grid-item'>9<div>",
  "<div class='ten grid-item'>10<div>"
];

$(function() {
  assets.forEach(function(element) {
    $(".grid").append(element);
  });

  var elemArray = $(".grid-item").toArray();
  elemArray.forEach(function(element){
    var classes = $(element).attr('class').split(' ');
    var t = "<br><br>" + $(element).text() + "<br>";
    classes.forEach(function(c) {
      t += "<br>" + c;
    });
    var h = $(element).css('height');
    var w = $(element).css('width');
    t += "<br><br>" + h + " X " + w;
    $(element).html(t);
  });

  $(".grid").masonry({
    itemSelector: ".grid-item",
    columnWidth: 200
  });
});
