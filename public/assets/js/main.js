(function(){
  $(document).ready(function(){
      //Generic Element
      $('a[href^="#"]').on('click', function (event) {
          var target = $(this.getAttribute('href'));
          if (target.length) {
              event.preventDefault();
              $('html, body').stop().animate({
                  scrollTop: target.offset().top
              }, 1000);
          }
      });

      if($(window).scrollTop() > 650){
          $("body")
              .addClass("call-to-action-fixed")
              .addClass("call-to-action-fixed__open");
      }

      $(window).on('scroll', function(){
          if($(window).scrollTop() > 180){
              $("body").addClass("call-to-action-fixed");
          }else{
              $("body").removeClass("call-to-action-fixed");
          }

          if($(window).scrollTop() > 650){
              $("body").addClass("call-to-action-fixed__open");
          }else{
              $("body").removeClass("call-to-action-fixed__open");
          }
      })
  })
})();