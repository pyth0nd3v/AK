$(function(){


/**
 * ================================
 * PRELOADER                     
 * ================================
 */
// makes sure the whole site is loaded
$(window).on('load', function() {
  // will first fade out the loading animation
  $("#loader").fadeOut();
  //then background color will fade out slowly
  $("#loader-wrapper").delay(200).fadeOut("slow");

});

/**
 * ================================
 * ANIMATION                    
 * ================================
 */

var wow = new WOW({ mobile: false });
       wow.init();


/**
 * ================================
 * nAVIGATION                   
 * ================================
 */

$("#top-navigation-bar li").click(function(){
  $("#top-navigation-bar li.active").removeClass("active");  
  $(this).addClass("active");
})

var str=location.href.toLowerCase();
$("#top-navigation-bar li a").each(function() {
  if(str.indexOf(this.href.toLowerCase())>-1){
    $('#top-navigation-bar li.active').removeClass("active");
    $(this).parent("li").addClass("active");
  }
});



/**
 * ================================
 * FULL SCREEN VIEW                    
 * ================================
 */


$(window).on("load resize", function(){
  $(".full-height").css("height",window.innerHeight);
  })


/**
 * ================================
 * GOOGLE MAPS                    
 * ================================
 */


// Initialize map with GMaps
var map = new GMaps({
  div: '#map',
  lat: 31.475357,
  lng: 74.343064,
  zoom: 15
});

// Add marker
map.addMarker({
  lat: 31.475357,
  lng: 74.343064,
  title: 'Atomic Kode',
  infoWindow: {
    content: '<div class="map-info-window"><h4>Atomic Kode Headquarters</h4><p>Lahore, Pakistan</p></div>'
  }
});


/**
 * ================================
 * CONTACT FORM                    
 * ================================
 */

$('#contact-form').validate({
	rules:{
		name:'required',
		email: 'required',
		message: 'required'
	},

	messages:{
		name:'Please enter your name',
		email:'Please enter a valid email',
		message: 'Please write down your messsage'
	},

    errorClass:"local-error",

	submitHandler: function(){
        
    }
})




});



