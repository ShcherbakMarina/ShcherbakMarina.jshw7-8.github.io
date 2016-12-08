$(function() {
  var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5"
      }
    });

  $('button').button().on('click', function() {
    tooltips.tooltip( "open" );  
  });

  $('.ui-helper-hidden-accessible').remove();
});
