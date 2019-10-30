$("#button1").on("click", function(){
    $('.hideMe').slideToggle();
});

$('#button2').on("dblclick", function(){
    $('.cssChange').css('background-color' , 'red')
});

$( "#button3" ).hover(
    function() {
      $('.appendMe').append( $( "<div class='child'>I got appended! Nice!</div>" ) );
    }, function() {
      $('.appendMe').find( "div" ).last().remove();
    }
  );