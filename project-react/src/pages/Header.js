import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <React.Fragment>
        <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Techcom</Link>
          <div className="nav-order order-1">

            <button className="icon-user" to="" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-user-alt"></i></button>

            <Link to="/cart"><div className="cart-shop fas fa-shopping-cart position-relative"><span className="number-buy position-absolute badge">3</span></div></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>

            
          </div>
          

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="menu">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Trang Chủ</Link>
              </li>

              
                <li className="nav-item-tc">
                  <Link className="nav-link" to="/product">
                    Sản Phẩm <i className="arrow-tc fas fa-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" id="menuItem" to="/laptop">Laptop</Link></li>
                    <li><Link className="dropdown-item" id="menuItem" to="/phone">Điện Thoại</Link></li>
                    <li><Link className="dropdown-item" id="menuItem" to="/tivii">Tivi</Link></li>
                    <li><Link className="dropdown-item" id="menuItem" to="/phukien">Phụ Kiện</Link></li>
                  </ul>
                </li>
                
                <li className="nav-item-tc1">
                  <a className="nav-link-tc1" to="san-pham.html">
                    Sản Phẩm 
                  </a>
                  <button className="nav-link-tc2 dropdown" to="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-chevron-down"></i></button>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" id="menuItem" to="/laptop">Laptop</Link></li>
                    <li><Link className="dropdown-item" id="menuItem" to="/phone">Điện Thoại</Link></li>
                    <li><Link className="dropdown-item" id="menuItem" to="/tivii">Tivi</Link></li>
                    <li><Link className="dropdown-item" id="menuItem" to="/phukien">Phụ Kiện</Link></li>
                  </ul>
                  
                </li>
              
              
              <li className="nav-item">
                <Link className="nav-link" to="/news">Tin Tức</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Liên Hệ</Link>
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