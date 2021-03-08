$(document).on('turbolinks:visit', function(event){
  $('body')
    .addClass('animated fadeOut')
    .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
      $('.page-content').removeClass('animated');
    });
});

$(document).on('turbolinks:load', function(event){
  $('body')
    .addClass('animated fadeIn')
    .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
      $('.page-content').removeClass('animated');
    });
});
