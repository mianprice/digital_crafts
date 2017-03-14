var assets = [
  "<div id='one'>one<div>",
  "<div class='parallax-window lag-fix' data-parallax='scroll' data-image-src='Sierra.jpg'>two<div>",
  "<div id='three'>three<div>",
  "<div class='parallax-window lag-fix' data-parallax='scroll' data-image-src='Sierra.jpg'>four<div>",
  "<div id='five'>five<div>",
  "<div class='parallax-window lag-fix' data-parallax='scroll' data-image-src='Sierra.jpg'>six<div>",
  "<div id='seven'>seven<div>",
  "<div class='parallax-window lag-fix' data-parallax='scroll' data-image-src='Sierra.jpg'>eight<div>",
  "<div id='nine'>nine<div>",
  "<div class='parallax-window lag-fix' data-parallax='scroll' data-image-src='Sierra.jpg'>ten<div>",
  "<div id='eleven'>eleven<div>"
];

$(function() {
  assets.forEach(function(element) {
    $("body").append(element);
  });


});
