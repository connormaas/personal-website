
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}
preload([
    'img/intro-bg-1.jpg',
    'img/intro-bg-2.jpg',
    'img/intro-bg-3.jpg',
    'img/intro-bg-4.jpg'
]);

$(document).ready(function() {
  var urls = ['img/intro-bg-1.jpg', 'img/intro-bg-1.jpg'];
  var cout = 1;
  $('.intro').css('background-image', 'url("' + urls[0] + '")');
  setInterval(function() {
    $('.intro').css('background-image', 'url("' + urls[cout] + '")');
    cout == urls.length-1 ? cout = 0 : cout++;
  }, 5000);

});
