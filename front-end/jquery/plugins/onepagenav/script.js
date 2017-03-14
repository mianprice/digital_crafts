var assets = [
  "<div id='one'>one<div>",
  "<div id='two'>two<div>",
  "<div id='three'>three<div>",
  "<div id='four'>four<div>",
  "<div id='five'>five<div>",
  "<div id='six'>six<div>",
  "<div id='seven'>seven<div>",
  "<div id='eight'>eight<div>",
  "<div id='nine'>nine<div>",
  "<div id='ten'>ten<div>"
];

$(function() {
  assets.forEach(function(element) {
    $("body").append(element);
  });

  $("#nav").onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
        console.log("Started");
    },
    end: function() {
        //I get fired when the animation is ending
        console.log("Ended");
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
  });
});
