console.log('my javascript is working');

$(document).ready(function(){
  $('body').click(function(){
    // $(this).addclass('myclass');
    // $('h1').css('opacity','0.5').css('font-size','30px');

    $('h1').css('background','yellow');
  });

  $('#heading').draggable();

  $('#subHeading').droppable();
});
