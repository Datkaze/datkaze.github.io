// giỏ hàng
let number = 4
function addToCart(){
    document.querySelector('.buy-success').classList.remove('hide')

    setTimeout(()=>{
      document.querySelector('.buy-success').classList.add('hide')
    },1000)
    document.querySelector('.number-buy').innerText = number++;
}
