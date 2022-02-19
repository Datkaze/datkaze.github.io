
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