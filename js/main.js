$('.document').ready(function(){
  $('.js_tabs-link').on('click', function(){
  var tabNum = $(this).attr('href');
  $(this).addClass('tab-active');
  $(this).removeClass('tab-active');
  console.log(tabNum);
    $(tabNum).show(400);
    $(tabNum).siblings().hide();
  });
});