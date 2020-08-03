(function($) {
    "use strict";
    
      $.fn.andSelf = function() {
        return this.addBack.apply(this, arguments);
      }

      /*
      |====================
      | Mobile NAv trigger
      |=====================
      */
      
      $('.navbar-nav>li>a').on('click', function(){
          $('.navbar-collapse').collapse('hide');
      });
    
      /*
      | ==========================
      | NAV FIXED ON SCROLL
      | ==========================
      */
      $(window).on('scroll', function() {
          var scroll = $(window).scrollTop();
          if (scroll >= 30) {
              $(".nav-scroll").addClass("nav-strict");
          } else {
              $(".nav-scroll").removeClass("nav-strict");
          }
      });
  
      $(window).on('scroll', function() {
          var scroll = $(window).scrollTop();
          if (scroll >= 30) {
              $(".nav-scroll").addClass("nav-strict");
          } else {
              $(".nav-scroll").removeClass("nav-strict");
          }
      });

      var owl = $('#testimonial');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:20,
        autoplay:true,
        autoWidth:true,
        smartSpeed: 800,
        autoplayTimeout:1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause:false
    });
    // $('#testimonial').owlCarousel({
    //     loop: true,
    //     responsiveClass: true,
    //     nav: false,
    //     autoplay: true,
    //     smartSpeed: 500,
    //     // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     margin: 20,
    //     items:1,
    //     dots: false,
    //     animateIn: 'slideInRight',
    //     animateOut: 'slideOutLeft',
    //     mouseDrag: false,
    //     touchDrag: false,
    //     responsive: {
    //         0: {
    //             // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //         },
    //         768: {
    //         },
    //         1170: {
    //             items: 1,
    //         }
    //     }
    // });


            // var mySplitText = new SplitText("#qoute h1", {type:"words,chars"}), 
            // chars = mySplitText.chars;

            // TweenLite.set("#qoute h1", {
            //     perspective:400
            // });
            // TweenMax.staggerFrom(chars, 0.8, {
            //     opacity: 0, y:80, x:20, ease:Back.easeOut,
            // }, 0.1);


      //OWL CAROUSEL  

    //       // blog post
    // $('#togglor-carousel').owlCarousel({
    //     loop: true,
    //     responsiveClass: true,
    //     nav: false,
    //     autoplay: false,
    //     smartSpeed: 500,
    //     // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     margin: 20,
    //     items:1,
    //     dots: true,
    //     animateIn: 'fadeIn',
    //     animateOut: 'fadeOut',
    //     mouseDrag: false,
    //     touchDrag: false,
    //     responsive: {
    //         0: {
    //             mouseDrag: true,
    //             touchDrag: true,
    //             animateIn: 'slideInRight',
    //             animateOut: 'slideOutLeft',
    //             autoplay: false,
    //             // nav: true,
    //             // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //         },
    //         768: {
    //             mouseDrag: true,
    //             touchDrag: true,
    //             animateIn: 'slideInRight',
    //             animateOut: 'slideOutLeft',
    //             autoplay: false,
    //         },
    //         1170: {
    //             items: 1,
    //         }
    //     }
    // });   



    // document.querySelector('.owl-controls .owl-dots .owl-dot').classList.add('two');

    // document.querySelector('.Li_1').addEventListener('click',   function(){
    //     document.querySelector('.Li_1').classList.add('active');
    //     document.querySelector('.Li_2').classList.remove('active');
    // })

    // document.querySelector('.Li_2').addEventListener('click', function(){
    //     document.querySelector('.Li_2').classList.add('active');
    //     document.querySelector('.Li_1').classList.remove('active');
    // })

    // $('.Li_1').on('click', function(){
    //     document.querySelector('.Li_1').classList.add('active');
    //     document.querySelector('.Li_2').classList.remove('active');
    //     document.querySelector('.show_1').classList.add('class_show');
    //     document.querySelector('.show_2').classList.remove('class_show');
    //     document.querySelector('.show_3').classList.add('class_show_3');
    //     document.querySelector('.show_4').classList.remove('class_show_3');
    //     document.querySelector('.show_5').classList.add('class_show_4');
    //     document.querySelector('.show_6').classList.remove('class_show_4');        

    // });

    // $('.Terms_1').on('click', function(){     
    //     document.querySelector('.show_7').classList.toggle('class_show_5');
    //     document.querySelector('.show_8').classList.remove('class_show_5');     
    // });    
    // $('.Terms_2').on('click', function(){     
    //     document.querySelector('.show_8').classList.toggle('class_show_5');
    //     document.querySelector('.show_7').classList.remove('class_show_5');     
    // });     

    // $('.Li_2').on('click', function(){
    //     document.querySelector('.Li_2').classList.add('active');
    //     document.querySelector('.Li_1').classList.remove('active');
    //     document.querySelector('.show_2').classList.add('class_show');
    //     document.querySelector('.show_1').classList.remove('class_show');
    //     document.querySelector('.show_4').classList.add('class_show_3');
    //     document.querySelector('.show_3').classList.remove('class_show_3');
    //     document.querySelector('.show_6').classList.add('class_show_4');
    //     document.querySelector('.show_5').classList.remove('class_show_4');        
    // });


    // var resize = () => {
    //     if(innerWidth < 768) {
    //         document.querySelector('.s_1').classList.remove('container-fluid')
    //         document.querySelector('.s_1').classList.remove('px-0')
    //         document.querySelector('.s_1').classList.add('container')
    //         document.querySelector('.s_1 .app-moc-inner img').classList.add('img-fluid')
    //         document.querySelector('.s_2 .app-moc-inner img').classList.add('img-fluid')
    //         document.querySelector('.s_3').classList.remove('container-fluid')
    //         document.querySelector('.s_3').classList.remove('px-0')
    //         document.querySelector('.s_3').classList.add('container')
    //         document.querySelector('.s_3 .app-moc-inner img').classList.add('img-fluid')
    //     }
    // }

    // addEventListener('DOMContentLoaded', resize)

    // var resizes = () => {
    //     if(innerWidth < 768) {
    //         document.querySelector('.s_4').classList.remove('container-fluid')
    //         document.querySelector('.s_4').classList.remove('px-0')
    //         document.querySelector('.s_4').classList.add('container')
    //         document.querySelector('.s_4 .app-moc-inner img').classList.add('img-fluid')
    //         document.querySelector('.s_5 .app-moc-inner img').classList.add('img-fluid')
    //         document.querySelector('.s_6').classList.remove('container-fluid')
    //         document.querySelector('.s_6').classList.remove('px-0')
    //         document.querySelector('.s_6').classList.add('container')
    //         document.querySelector('.s_6 .app-moc-inner img').classList.add('img-fluid')
    //     }
    // }

    // addEventListener('DOMContentLoaded', resizes)    

    // //GSAP ANIMATON

    //      /* 
    //   TwinMax Code Start          
    //  */

    // var controller = new ScrollMagic.Controller,
    // addScene = function(e, t) {
    //     var o = new ScrollMagic.Scene({
    //         triggerElement: e,
    //         triggerHook: "onEnter",
    //         offset: 100
    //     }).setTween(t);
    //     return o = o.addTo(controller)
    // };

    // console.log("Loading scene 1"), 
    // TweenMax.from(".mh-nav", 0.1, {y:'-80', opacity: 0, ease: Power1.easeOut}),
    // TweenMax.from(".header-details h1", 1.3, {y:'90', opacity: 0, ease: Power1.easeOut}),
    // TweenMax.from(".header-details h6", 1.2, {y:'80', delay: .2, opacity: 0, ease: Power1.easeOut}),
    // TweenMax.from(".header-details p", 1.2, {y:'80', delay: .2, opacity: 0, ease: Power1.easeOut}),
    // TweenMax.from(".header-details .dw-btn", 1.2, {y:'80', delay: .3, opacity: 0, ease: Power1.easeOut}),
    // TweenMax.from(".kiwe-home .header-inner .header-details .db_btn .db_img", 1.2, {y:'80', delay: .3, opacity: 0, ease: Power1.easeOut}),
    // TweenMax.from(".kiwe-home .header-inner .header-app-image .main-image", 1.6, {scale: 1.4, ease: Power3.easeOut}),
    // TweenMax.from(".kiwe-home .header-inner .header-app-image .img-aa .bg-shape .img-1", 1.2, {rotation: 0, opacity: 0, ease: Power2.easeOut}),
    // TweenMax.from(".kiwe-home .header-inner .header-app-image .img-aa .bg-shape .img-2", 1.2, {rotation: 0, opacity: 0, ease: Power2.easeOut}),
    // TweenMax.from(".kiwe-home .header-inner .header-app-image .img-aa .bg-shape .img-3", 1.2, {rotation: 0, opacity: 0, ease: Power2.easeOut}),
    // TweenMax.from(".kiwe-home .header-inner .header-app-image .img-aa .bg-shape .img-4", 1.2, {rotation: 0, opacity: 0, ease: Power2.easeOut}),

    // console.log("Loading scene 2"),

    // addScene("#section-2", new TweenMax.from("#section-2 .app-moc-inner", 1, {
    //     y:'90', opacity: 0, scale:1.1, x: '-20', ease: Power1.easeOut,
    // }).delay(.4)),
    // addScene("#section-2", new TweenMax.from("#section-2.kiwe-app-feature .app-moc-details h6", 1, {
    //     y:'40', opacity: 0, ease: Power1.easeOut,
    // }).delay(.3)),
    // addScene("#section-2", new TweenMax.from("#section-2.kiwe-app-feature .app-moc-details h2", 1, {
    //     y:'40', opacity: 0, ease: Power1.easeOut,
    // }).delay(.3)),
    // addScene("#section-2", new TweenMax.from("#section-2.kiwe-app-feature .app-moc-details img", 1, {
    //      opacity: 0, ease: Power1.easeOut,
    // }).delay(.6)),
    // addScene("#section-2", new TweenMax.from("#section-2.kiwe-app-feature .app-moc-details h4", 1, {
    //     y:'40', opacity: 0, ease: Power1.easeOut,
    // }).delay(.4)),
    // addScene("#section-2", new TweenMax.from("#section-2.kiwe-app-feature .app-moc-details p", 1, {
    //     y:'40', opacity: 0, ease: Power1.easeOut,
    // }).delay(.5)),
    // addScene("#section-2", new TweenMax.from("#section-2 .btn-more-q", 1, {
    //     y:'40', opacity: 0, ease: Power1.easeOut,
    // }).delay(.6));


    
  }(jQuery));
  
  
  
  