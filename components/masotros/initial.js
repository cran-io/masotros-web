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
      $('.page-wrapper').removeClass('selected');
      $('a[href="#'+id+'"]').parent().addClass('selected');

      $('.selected').removeClass('selected');
      $('a[href="#'+id+'"]').parent().addClass('selected');

      $('body').removeClass();
      $('body').addClass("page-"+id);
    }
    tops.push(top);
  });
});

// Info-button

$('.info-button').click(function(){
  $(this).toggleClass('open');
});

// Scrollify

$(function() {
  $.scrollify({
    section : ".section",
    scrollSpeed: 800
  });
});


// Internal Galery Slider

$(document).ready(function(){

  $('.screen .slides li').each( function(index){
    var count = $(this).find('img').length;

    switch(count) {
      case 1:
      break;
      case 2:
      $(this).addClass('two-img');
      break;
      case 3:
      $(this).addClass('three-img');
      break;
      case 4:
      $(this).addClass('four-img');
      break;
      case 5:
      $(this).addClass('five-img');
      break;
      case 6:
      $(this).addClass('six-img');
      break;
      case 7:
      $(this).addClass('seven-img');
      break;
      case 8:
      $(this).addClass('eight-img');
      break;
      default:
      break;
    }

  });
});

//form
 $(document).ready(function(){
   $('#formSubmit').click(function(){

       var html = '<p><span style="font-weight:bold;" >Teléfono:</span><span> ' + $('#formPhone').val() + '</span></p><p><span style="font-weight:bold;" >Mensaje: </span><span>' + $('#formMessage').val()+ '</span></p> ';
       var json = {
         'key': 'btvV0EOS5BcqEiK59AeNQQ',
         'message': {
           'subject': 'Mensaje via web',
           'html': html,
           'from_email': $('#formEmail').val(),
           'from_name': $('#formName').val(),
           'to': [
             {
               'email': 'info@masotros.com',
               'name': '+Otros',
               'type': 'to'
             }
           ],
           "global_merge_vars": [
                     {
                         "telephone": "TELFONO",
                         "content": $('#formPhone').val()
                     },
                     {
                         "message": "MENSAJE",
                         "content": $('#formMessage').val()
                     },
           ],
         }
       }
   	$.ajax({
   		type: "POST",
   		url: "https://mandrillapp.com/api/1.0/messages/send.json",
   		data:JSON.stringify(json),
   		success: function(){
           location.reload();
   		},
         error:function() {
           console.log("error");
   	  }
   	});
   });
 });


// --------- aLoad

window.onload = function () {
  aload();
};

//---------- Google Maps

// function initialize() {
//   var styles = [
//     {
//       stylers: [
//         { hue: "#34aec4" },
//         { saturation: 60 },
//         { lightness: -20 }
//       ]
//     },{
//       featureType: "road",
//       elementType: "geometry",
//       stylers: [
//         { lightness: 100 },
//         { visibility: "simplified" }
//       ]
//     },{
//       featureType: "road",
//       elementType: "labels",
//       stylers: [
//         { lightness: 20 }      ]
//     }
//   ];

//   var styledMap = new google.maps.StyledMapType(styles,
//     {name: "Styled Map"});

//   var mapCanvas = document.getElementById('map-canvas');
//   var pos = new google.maps.LatLng(-34.585481, -58.4312834,17);
//   var mapOptions = {
//     center: pos,
//     zoom: 15,
//         scaleControl: false,
//         disableDoubleClickZoom: true,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   }
//   var map = new google.maps.Map(mapCanvas, mapOptions)

//   var mapStylesmarker = new google.maps.Marker({
//     position: pos,
//     map: map,
//     title: 'Uriarte 1882'
//   });

//   map.mapTypes.set('map_style', styledMap);
//   map.setMapTypeId('map_style');
// }
// google.maps.event.addDomListener(window, 'load', initialize);
