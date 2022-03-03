
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
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
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
  $('.slice-slider-ctsp2').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ]
    
  });


  $(() => {
    $(".slice-slider-ctsp2 img").click(function(){
      let imgPath = $(this).attr('src');
      $("#main-img").attr('src', imgPath);
    })
  })





// let cartForm = document.querySelector('.shopping-cart');
// let cartBtn = document.querySelector('#cart-btn');
// let menuBtn = document.querySelector('#menu-btn');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
// }

// document.querySelector('#cart-btn').onclick = () =>{
//     cartForm.classList.toggle('active');
// }


// // document.querySelector('#menu-btn').onclick = () =>{
// //     navbar.classList.toggle('active');
// // }

// menuBtn.addEventListener('click', ()=>{
//     menuBtn.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// })


// window.onscroll = () =>{
//     searchForm.classList.remove('active');
//     cartForm.classList.remove('active');
    
// }