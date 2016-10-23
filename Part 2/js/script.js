$(function() {

  $('li').click(function() {
    var thisClass = this.className.slice(0, 2);
    $('div.t1').hide();
    $('div.t2').hide();
    $('div.t3').hide();
    $('div.' + thisClass).show();
    $('li').removeClass('tab-current');
    $(this).addClass('tab-current');
  });

} );
