$(document).ready(function() {
});

function randomBackground() {
    var bgColorArray= ['assets/img/background1.jpg', 'assets/img/background2.jpg','assets/img/background3.jpg','assets/img/background4.jpg'];
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];
    $('.bg img').attr('src', selectBG);

} randomBackground();
