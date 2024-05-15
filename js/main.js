$(document).ready(function(){
    const shopSwiper = new Swiper('.shop_products', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView:2.5,
        spaceBetween:25,
        
    });
    const categorySwiper = new Swiper('.category_slider_wrap', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // slidesPerView:2.5,
        // spaceBetween:25,
        pagination: {
            el: '.category_slider_wrap .pager',
            type:'bullets',
            clickable:true
        }
    });
    const detailSwiper = new Swiper('.details_pic_slides', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView:1.2,
        spaceBetween:25,
        pagination: {
            el: '.details_pic_slides_wrapper .pager',
            type:'bullets',
            clickable:true
        }
    });
    const asideOpenBtn = $('.menu_icon_left'),
        aside = $('aside'),
        asideCloseBtn = aside.find('.close');
    
    asideOpenBtn.click(function(){
        aside.animate({left:0},300);
    })
    asideCloseBtn.click(function(){
        aside.animate({left:'-100%'},300)
    })
});

document.addEventListener('DOMContentLoaded', function() {
    const check_circle = document.querySelectorAll('.pay_method');

    check_circle.forEach(method => {
        method.addEventListener('click', function() {
            this.classList.add('selected');
            check_circle.forEach(m => {
                if (m !== this) {
                    m.classList.remove('selected');
                }
            });
        });
    });
});

