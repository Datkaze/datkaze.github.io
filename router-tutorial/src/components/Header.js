import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='wrap-logo'>
        <div className='img-logo'>
          <img src='https://theme.hstatic.net/200000053174/1000744395/14/logo.png?v=465'/>
        </div>
        <nav>
          <Link to='/trang-chu'>Trang Chu</Link>
          <Link to='/gioi-thieu'>Gioi Thieu</Link>
          <Link to='/san-pham'>San Pham</Link>
          <Link to='/tin-tuc'>Tin Tuc</Link>
          <Link to='/lien-he'>Lien He</Link>

        </nav>
    </div>
  )
}

export default Header
