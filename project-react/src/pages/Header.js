import React from 'react'

const Header = () => {
  return (
    <React.Fragment>
        <header class="header">
      <div class="buy-success d-flex justify-content-center align-items-center hide">
        <p>Thêm vào giỏ thành công</p>
    </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="trang-chu.html">Techcom</a>
          <div class="nav-order order-1">

            <button class="icon-user" href="" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-user-alt"></i></button>

            <a href="gio-hang.html"><div class="cart-shop fas fa-shopping-cart position-relative"><span class="number-buy position-absolute badge">3</span></div></a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>

            
          </div>
          

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="menu">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="trang-chu.html">Trang Chủ</a>
              </li>

              
                <li class="nav-item-tc">
                  <a class="nav-link" href="san-pham.html">
                    Sản Phẩm <i class="arrow-tc fas fa-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" id="menuItem" href="Laptop.html">Laptop</a></li>
                    <li><a class="dropdown-item" id="menuItem" href="dien-thoai.html">Điện Thoại</a></li>
                    <li><a class="dropdown-item" id="menuItem" href="tivi.html">Tivi</a></li>
                    <li><a class="dropdown-item" id="menuItem" href="phu-kien.html">Phụ Kiện</a></li>
                  </ul>
                </li>
                
                <li class="nav-item-tc1">
                  <a class="nav-link-tc1" href="san-pham.html">
                    Sản Phẩm 
                  </a>
                  <button class="nav-link-tc2 dropdown" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-chevron-down"></i></button>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" id="menuItem" href="Laptop.html">Laptop</a></li>
                    <li><a class="dropdown-item" id="menuItem" href="dien-thoai.html">Điện Thoại</a></li>
                    <li><a class="dropdown-item" id="menuItem" href="tivi.html">Tivi</a></li>
                    <li><a class="dropdown-item" id="menuItem" href="phu-kien.html">Phụ Kiện</a></li>
                  </ul>
                  
                </li>
              
              
              <li class="nav-item">
                <a class="nav-link" href="tin-tuc.html">Tin Tức</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="lien-he.html">Liên Hệ</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
              <div class="btn btn-outline-success" type="submit"><i class="far fa-search"></i></div>
            </form>
            
          </div>
        </div>
      </nav>
    </header>
    </React.Fragment>
  )
}

export default Header