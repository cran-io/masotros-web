// ------- Scroll Section Menu

$(function() {
  //$('a[href*=#]:not([href=#])')
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// -------- Current nav

var navLink = $('nav ul a');
var aArray = [];

for(var i = 0; i < navLink.length; i++) {
  var aChild = navLink[i];
  var navArray = $(aChild).attr('href');
  aArray.push(navArray);
  var selector = aArray.join(" , ");
}

$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  var tops = [];

  if(scrollTop > 0) {
    $('.logo').addClass('page-play');
    $('.page-nav').addClass('page-play');
  }
  else {
    $('.logo').removeClass('page-play');
    $('.page-nav').removeClass('page-play');
  }
  
  $(selector).each(function(){
    var top = $(this).position().top -90;
    if(scrollTop > top) {
      var id = $(this).attr('id');
      
      $('.selected').removeClass('selected');
      $('a[href="#'+id+'"]').parent().addClass('selected');
    }
    tops.push(top);
  });
});