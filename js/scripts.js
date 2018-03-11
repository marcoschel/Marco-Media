/* Menu animatie! */

function myFunction(x) { document.getElementById("mySidenav").classList.toggle("open");
    x.classList.toggle("change");
}


/* LET IT SNOW IN THE HEADER! */

function $snow() {
  var snow = $('<div id="snow"/>').css({
      'position': 'absolute',
      'top': '-50px'
    }).html('	&#x2022;'),
    animationHeight = $('.snow-container').height(),
    animationWidth = $(document).width(),
    snowCount = 600;

  setInterval(function() {

    var startPositionLeft = Math.random() * animationWidth,
      startPositionTop = 0,
      startOpacity = 1,
      duration = Math.random() * animationHeight + 7000,
      snowCol = '#fff',
      endPositionLeft = startPositionLeft - 100 + Math.random() * 200,
      endPositionTop = animationHeight + 100;

    snow.clone().appendTo('.snow-container').css({
      left: startPositionLeft,
      top: startPositionTop,
      opacity: startOpacity,
      'color': snowCol

    }).animate({
        opacity: 0,
        top: endPositionTop,
        left: endPositionLeft,
      },
      duration,
      'linear',

      function() {
        $(this).remove();
      });
  }, snowCount);

}

$(document).ready(function() {
  $snow();
});
