$(window).on('load', function(){
  $('.preloader-wrapper .preloader').fadeOut();
  $('.preloader-wrapper').delay(500).fadeOut('slow');
});

// $(function(){ // this replaces document.ready
//   $(window).on("load", function(){
//     $('.preloader-wrapper').fadeOut('slow', function() {
//       $(this).remove();
//     });
//   });
// });
