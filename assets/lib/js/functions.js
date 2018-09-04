(function($) {

  /****************

  Flex  JS 1.0
  By Themanoid

  *****************/

  "use strict";

  // Vertical Centering

  function vCenter(){
      var windowHeight = $(window).height();
      if($(window).width() > 992){ // When screensize is above 992px
        $('.centered').each(function(){
          $(this).css('height',  $(this).parent().height()+'px'); // Set fixed parent height to each .centered object
        });
      } else {
        $('.centered').css('height', 'auto'); // Change height to auto when screensize is less than 992px
      }
  }

  var $container = $('#grid');

  // Trigger it on pageload
  $(window).load(function(){
    $('section').css('min-height', $(window).height()+'px');
    $('.bg').addClass('normal');
    $('#loader .bar').animate({
        width : '100%'
    }, 500, function(){
        $('#loader').addClass('remove');
        $('#loader').fadeOut(500, function(){
            $('.container-fluid').removeClass('inloading');
            $('.moveUp').addClass('animated fadeInUp');
            $('nav').addClass('animated fadeInDown');
            $('nav.alt-menu').removeClass('animated fadeInDown');
        });
        $container.isotope();
    });
    vCenter();
  });

  // Trigger it on resize
  $(window).resize(function(){
    $('section').css('min-height', $(window).height()+'px');
    vCenter();
  });

  // Placeholder fallback (for older IE versions)
  $('input, textarea').placeholder();

 	// Smooth anchor links script
  $('a.anchor').click(function(e){
    var hash = $(this).attr('href');
    if($(window).width() < 992){
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, 'easeInOutQuart');
    } else {
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, 'easeInOutQuart');
    }
    e.preventDefault();
  });

  // Responsive nav trigger on tap
  $('nav').click(function(){
    $('nav').toggleClass('hover');
  });

  $('a').click(function(e){
    var href = $(this).attr('href');
    if(!$(this).hasClass('anchor') && $(this).attr('href') != '#' ){
      $('.container-fluid').addClass('inloading');
      setTimeout(function(){
         window.location = href;
      }, 500);
      e.preventDefault();
    }
  });

  // Trigger animations when .animated class reaches viewport
  $('.animated').waypoint(function(direction){
    $(this).addClass('fadeInDown');
  }, { offset : '90%' });

  // Trigger alternative menu
  $('.menu-trigger').click(function(e){
    $('.alt-menu').fadeToggle();
    vCenter();
    $(this).toggleClass('active');
    e.preventDefault();
  });

  // Filters
  $('a[data-filter]').click(function(e) {
    $('#filters a').removeClass('active');
    $(this).addClass('active');
    var $this = $(this);
    var filterValue = $this.attr('data-filter');
    $container.isotope({ filter: filterValue });
    e.preventDefault();
  });

  // Affix the menu 
  $('nav').affix({
      offset: {
        top: 30
      }
  });

})(jQuery);
