$(document).ready(function() {
    
/* animation-on-header */
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeInUp');
    },{
        offset: '100%'
    });
    
    setTimeout(function(){
        $('.js--wp-2').waypoint(function(direction){
            $('.js--wp-2').addClass('animated pulse');
        },{
            offset: '100%'
        });
    }, 1000);   
    
    setTimeout(function(){
        $('.js--wp-3').waypoint(function(direction){
            $('.js--wp-3').addClass('animated pulse');
        },{
            offset: '100%'
        });
    }, 1000);   
    
    
/* sticky nav */
    
    $('.js--features-1').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');            
        } else {
            $('nav').removeClass('sticky');
        }  
    }, {
        offset: '460px;'
    });
    
    
/* navigation-scroll */ /*chamosvlebi linkebit igive gverdze*/ 
    
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
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
    
    
    
/* quick links */
    
    $('.js--section-slideshow1').waypoint(function(direction){
        if(direction == "down"){
            $('header').addClass('quicklinks2');            
        } else {
            $('header').removeClass('quicklinks2');
        }  
    }, {
        offset: '99%;'
    });
    
    $('.js--section-slideshow1').waypoint(function(direction){
        if(direction == "down"){
            $('header').addClass('quicklinks3');            
        } else {
            $('header').removeClass('quicklinks3');
        }  
    }, {
        offset: '50%;'
    });
    
    $('.js--section-slideshow1').waypoint(function(direction){
        if(direction == "down"){
            $('header').addClass('quicklinks4');            
        } else {
            $('header').removeClass('quicklinks4');
        }  
    }, {
        offset: '-125%;'
    });
    
    
/* animation-on-scroll */ /*features animacia*/
    
    $('.js--features-1').waypoint(function(direction){
        $('.js--features-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    });
    
    
    
/*map*/
    var map = new GMaps({
      div: '.map',
      lat: 41.806316, 
      lng: 44.781615,
      zoom: 15
    });
    
    map.addMarker({
      lat: 41.8063589,
      lng: 44.7676511,
      title: 'Lima',
      infoWindow: {
          content: '<p>Our University</p>'
        }
    });

 });


/*animacia section steps*/
$('.js--s1').waypoint(function(direction){
        $('.js--s1').addClass('animated fadeInUp');
    },{
        offset: '100%'
    });

/* team */

$('.memberbig2').hide();
$('.memberbig3').hide();
$('.memberbig1').show();


$( ".member1img" ).click(function() {
  $( ".memberbig1" ).show( "slow", function() {
  });
    $( ".memberbig2" ).hide( "slow", function() {
  });
    $( ".memberbig3" ).hide( "slow", function() {
  });
});

$( ".member2img" ).click(function() {
  $( ".memberbig2" ).show( "slow", function() {
  });
    $( ".memberbig1" ).hide( "slow", function() {
  });
    $( ".memberbig3" ).hide( "slow", function() {
  });
});

$( ".member3img" ).click(function() {
  $( ".memberbig3" ).show( "slow", function() {
  });
    $( ".memberbig1" ).hide( "slow", function() {
  });
    $( ".memberbig2" ).hide( "slow", function() {
  });
});

$('.section-us').waypoint(function(direction){
        $('.memberbig1').addClass('animated fadeInUp');
    },{
        offset: '50%'
    });

/*numbers */

 setTimeout(function(){
        $('.js-numbers').waypoint(function(direction){
            $('.js-numbers').addClass('animated pulse');
        },{
            offset: '70%'
        });
    }, 100);   


        $('.section-numbers').waypoint(function(direction){
        if(direction == "down"){
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            
        } 
        }, {
            offset: '460px;'
        });



/*services */

$('.js-servicesleft1').waypoint(function(direction){
        $('.js-servicesleft1').addClass('animated fadeInLeft');
    },{
        offset: '100%'
    });

$('.js-servicesleft2').waypoint(function(direction){
        $('.js-servicesleft2').addClass('animated fadeInLeft');
    },{
        offset: '100%'
    },500);

$('.js-servicesleft3').waypoint(function(direction){
        $('.js-servicesleft3').addClass('animated fadeInLeft');
    },{
        offset: '100%'
    },500);

$('.js-servicesright1').waypoint(function(direction){
        $('.js-servicesright1').addClass('animated fadeInRight');
    },{
        offset: '100%'
    });

$('.js-servicesright2').waypoint(function(direction){
        $('.js-servicesright2').addClass('animated fadeInRight');
    },{
        offset: '100%'
    },500);

$('.js-servicesright3').waypoint(function(direction){
        $('.js-servicesright3').addClass('animated fadeInRight');
    },{
        offset: '100%'
    },500);

/*features2 */

 $('.js--features2').waypoint(function(direction){
        $('.js--features2').addClass('animated fadeIn');
    },{
        offset: '50%'
    });

 setTimeout(function(){
     $('.js--features21').waypoint(function(direction){
            $('.js--features21').addClass('animated pulse');
        },{
            offset: '50%'
        });   
 },300);




//quizz//
setTimeout(function(){
        $('.js-quizzh41').waypoint(function(direction){
            $('.js-quizzh41').addClass('animated rollIn');
        },{
            offset: '80%'
        });
    }, 1000);  

setTimeout(function(){
        $('.js-quizzh42').waypoint(function(direction){
            $('.js-quizzh42').addClass('animated rollIn');
        },{
            offset: '80%'
        });
    }, 1000);  

setTimeout(function(){
        $('.js-quizzh43').waypoint(function(direction){
            $('.js-quizzh43').addClass('animated rollIn');
        },{
            offset: '80%'
        });
    }, 1000);  

setTimeout(function(){
        $('.js-quizzh44').waypoint(function(direction){
            $('.js-quizzh44').addClass('animated rollIn');
        },{
            offset: '80%'
        });
    }, 1000);  

setTimeout(function(){
        $('.js-quizzh45').waypoint(function(direction){
            $('.js-quizzh45').addClass('animated rollIn');
        },{
            offset: '80%'
        });
    }, 1000);  

setTimeout(function(){
        $('.js-quizz1').waypoint(function(direction){
            $('.js-quizz1').addClass('animated flipInX');
        },{
            offset: '70%'
        });
    }, 4000);  

setTimeout(function(){
        $('.js-quizz2').waypoint(function(direction){
            $('.js-quizz2').addClass('animated flipInX');
        },{
            offset: '70%'
        });
    }, 4000);  

setTimeout(function(){
        $('.js-quizz3').waypoint(function(direction){
            $('.js-quizz3').addClass('animated flipInX');
        },{
            offset: '70%'
        });
    }, 4000);  

setTimeout(function(){
        $('.js-quizz4').waypoint(function(direction){
            $('.js-quizz4').addClass('animated flipInX');
        },{
            offset: '70%'
        });
    }, 4000);  

setTimeout(function(){
        $('.js-quizz5').waypoint(function(direction){
            $('.js-quizz5').addClass('animated flipInX');
        },{
            offset: '70%'
        });
    }, 4000);

//gallery

setTimeout(function(){
        $('.js-gallery1').waypoint(function(direction){
            $('.js-gallery1').addClass('animated zoomIn');
        },{
            offset: '70%'
        });
    }, 2000);

setTimeout(function(){
        $('.js-gallery2').waypoint(function(direction){
            $('.js-gallery2').addClass('animated zoomIn');
        },{
            offset: '70%'
        });
    }, 3000);

setTimeout(function(){
        $('.js-gallery3').waypoint(function(direction){
            $('.js-gallery3').addClass('animated flipInX');
        },{
            offset: '70%'
        });
    }, 4000);







