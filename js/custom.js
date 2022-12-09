$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            
        }
    })
})

$(document).ready(function () {
    $('#click1').click(function () {
        $('#para_1').slideToggle(1000);
        $('#color1').css('color', '#f5a425');
    })
    $('#click2').click(function () {
        $('#para_2').slideToggle(1000);
        $('#color2').css('color', '#f5a425');
    })
    $('#click3').click(function () {
        $('#para_3').slideToggle(1000);
        $('#color3').css('color', '#f5a425');
    })
})

$('.owl-two .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})
$('#heading-size').css('font-size', '1.5rem');

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.nav-bg');
    if (window.pageYOffset > 600) {
        navbar.classList.add('sticky');
    }
    else {
        navbar.classList.remove('sticky');
        navbar.classList.add('sticky-out');
    }
});
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('#bg-nav');
    if (window.pageYOffset > 600) {
        navbar.classList.add('sticky');
    }
    else {
        navbar.classList.remove('bg-nav-menu');
        navbar.classList.add('sticky-out');
    }
});
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.nav-menu .logo a ');
    if (window.pageYOffset > 600) {
        navbar.classList.add('color');
    }
    else {
        navbar.classList.remove('color');
        navbar.classList.add('color-out');
    }
});
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.a1');
    if (window.pageYOffset > 600) {
        navbar.classList.add('black');
    }
    else {
        navbar.classList.remove('black');
        navbar.classList.add('black-out');
    }
});
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.a2');
    if (window.pageYOffset > 600) {
        navbar.classList.add('black');
    }
    else {
        navbar.classList.remove('black');
        navbar.classList.add('black-out');
    }
});
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.a3');
    if (window.pageYOffset > 600) {
        navbar.classList.add('black');
    }
    else {
        navbar.classList.remove('black');
        navbar.classList.add('black-out');
    }
});
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.a4');
    if (window.pageYOffset > 600) {
        navbar.classList.add('black');
    }
    else {
        navbar.classList.remove('black');
        navbar.classList.add('black-out');
    }
});
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.a5');
    if (window.pageYOffset > 600) {
        navbar.classList.add('black');
    }
    else {
        navbar.classList.remove('black');
        navbar.classList.add('black-out');
    }
});
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.a6');
    if (window.pageYOffset > 600) {
        navbar.classList.add('black');
    }
    else {
        navbar.classList.remove('black');
        navbar.classList.add('black-out');
    }
});
$(document).ready(function(){
    $('.mobile-nav').click(function(){
        $(" nav ul ").slideDown();
        $('.mobile-nav').css('display','none');
        $('.close').css('display','block');
        $('.a1').css('color','#f5a425');
    })
    $('.close').click(function(){
        $(" nav ul ").slideUp();
        $('.mobile-nav').css('display','block');
        $('.close').css('display','none');
    })
})
