
// back to top
$(document).ready(function() {
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $(`#backtop`).fadeIn();
        } else{
            $(`#backtop`).fadeOut();
        }
    });
$("#backtop").click(function(){
    $(`html, body`).animate({scrollTop: 0}, 500);
    });
});

// đánh giá sản phẩm
let star = document.querySelectorAll('.star1');
      star.forEach((el,i)=>{
      el.addEventListener('click',()=>{
  for(let j = 0;j <= i;j++){
    star[j].style.color = '#EA9D02'
  }
  for(let x = i+1;x <= 5;x++){
    star[x].style.color = 'black';
  }
})
})

// sản phẩm
$('.item-slider-tc').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev-1 pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next-1 pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
    
  });

// chi tiết sản phẩm
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true
});
