
// const prevIcon = '<img src="./img/arrow-left.svg">'
// const nextIcon = '<img src="./img/arrow-right.svg">'


$(document).ready(function () {
    $('.popular-block').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        items: 4,
        navText: ['<img src="img/arrow-left.svg">','<img src="img/arrow-left.svg">'],
        // navText: [prevIcon, nextIcon],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })


    $('.promotional-slider-product').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        items: 4,
        navText: ['<img src="img/arrow-left.svg">','<img src="img/arrow-left.svg">'],
        // navText: [prevIcon, nextIcon],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    })

    $('.new-product').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        items: 4,
        navText: ['<img src="img/arrow-left.svg">','<img src="img/arrow-left.svg">'],
        // navText: [prevIcon, nextIcon],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1200:{
                items:3
            }
        }
    })
});



(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 80 ) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    }
}());

// $('#burger-toggle').on("click", function(event) {
//     event.preventDefault();
//     $(this).toggleClass('active');
//     $('#sort-menu').toggleClass('active');
// });

$('.burger-block').on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('#sort-menu').toggleClass('active');
});


$('#search').on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.search-block').toggleClass('active');
    
});

$('.close-icon').on('click', function () {
    $(this).parent().removeClass('active');
});


// quantity value 

function clickMinus($btn)
{
    let $input = $btn.next('.qty-input');
    let inputValue = $input.val();
    if (inputValue > 1) {
        inputValue--;
        $input.val(inputValue)
    }
    return inputValue;
}

function clickPlus($btn)
{
    let $input = $btn.prev('.qty-input');
    let inputValue = $input.val();
    inputValue++;
    $input.val(inputValue);

    return inputValue;
}

$('.btn-minus').on('click', function () {
    clickMinus($(this));
});

$('.btn-plus').on('click', function () {
    clickPlus($(this));
});






   
