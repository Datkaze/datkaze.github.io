import React from 'react'

const Header = () => {
  return (
    <React.Fragment>
        <header className="header">
      <div className="buy-success d-flex justify-content-center align-items-center hide">
        <p>Thêm vào giỏ thành công</p>
    </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="trang-chu.html">Techcom</a>
          <div className="nav-order order-1">

            <button className="icon-user" href="" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-user-alt"></i></button>

            <a href="gio-hang.html"><div className="cart-shop fas fa-shopping-cart position-relative"><span className="number-buy position-absolute badge">3</span></div></a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>

            
          </div>
          

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="menu">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="trang-chu.html">Trang Chủ</a>
              </li>

              
                <li className="nav-item-tc">
                  <a className="nav-link" href="san-pham.html">
                    Sản Phẩm <i className="arrow-tc fas fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" id="menuItem" href="Laptop.html">Laptop</a></li>
                    <li><a className="dropdown-item" id="menuItem" href="dien-thoai.html">Điện Thoại</a></li>
                    <li><a className="dropdown-item" id="menuItem" href="tivi.html">Tivi</a></li>
                    <li><a className="dropdown-item" id="menuItem" href="phu-kien.html">Phụ Kiện</a></li>
                  </ul>
                </li>
                
                <li className="nav-item-tc1">
                  <a className="nav-link-tc1" href="san-pham.html">
                    Sản Phẩm 
                  </a>
                  <button className="nav-link-tc2 dropdown" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-chevron-down"></i></button>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" id="menuItem" href="Laptop.html">Laptop</a></li>
                    <li><a className="dropdown-item" id="menuItem" href="dien-thoai.html">Điện Thoại</a></li>
                    <li><a className="dropdown-item" id="menuItem" href="tivi.html">Tivi</a></li>
                    <li><a className="dropdown-item" id="menuItem" href="phu-kien.html">Phụ Kiện</a></li>
                  </ul>
                  
                </li>
              
              
              <li className="nav-item">
                <a className="nav-link" href="tin-tuc.html">Tin Tức</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="lien-he.html">Liên Hệ</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
              <div className="btn btn-outline-success" type="submit"><i className="far fa-search"></i></div>
            </form>
            
          </div>
        </div>
      </nav>
    </header>
    </React.Fragment>
  )
}

export default Header