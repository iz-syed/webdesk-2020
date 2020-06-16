 // seleted product thumb images slider start
$(function() {
  
  $host = $('[mag-thumb="inner"]');
  $host.mag();

  $('.fancybox').click(function(){        
    $.fancybox(galPhotos);        
  });

});


