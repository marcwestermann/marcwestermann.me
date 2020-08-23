$(document).ready(function () {
    new needShareDropdown(document.getElementById('share_3'));
    new needShareDropdown(document.getElementById('share_2'));
    new needShareDropdown(document.getElementById('share_1'));

    $('.fancybox').fancybox();
});

$('a[href*="#"]').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: $(this.hash).offset().top}, 500);
});