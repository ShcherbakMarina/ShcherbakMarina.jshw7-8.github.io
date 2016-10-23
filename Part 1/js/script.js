$(function() {
  var $hints = $('span');
  var $button = $('button');

  $button.on('click', function() {
    $hints.fadeIn();
    $hints.css('display', 'inline-block');
  })

  $('input').mouseover(function() {
    var thisClass = this.className;
    $('span.' + thisClass).fadeIn();
    $('span.' + thisClass).css('display', 'inline-block');
  })

  $('input').mouseout(function() {
    var thisClass = this.className;
    $('span.' + thisClass).fadeOut();
  })
});
