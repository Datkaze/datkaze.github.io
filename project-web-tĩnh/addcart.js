// giỏ hàng
let number = 4;
function addToCart(){
    document.querySelector('.buy-success').classList.remove('hide')

    setTimeout(()=>{
      document.querySelector('.buy-success').classList.add('hide')
    },1000)
    document.querySelector('.number-buy').innerText = number++;
}


// chi tiết sản phẩm
$('.inputQuanlity').each(function() {
  let $this = $(this),
    qty = $this.parent().find('.is-form');
    let d = 1;
  $(qty).on('click', function() {
    if ($(this).hasClass('btn-minus')) {
      if (d >= 2) d += -1
    } else if ($(this).hasClass('btn-plus')) {
      let x = Number($this.val()) + 1
      if (x) d += 1
    }
    $this.attr('value', d).val(d)
  })
})