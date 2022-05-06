import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
      <div className='App'>
          <h1>This Header</h1>
    <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/product">Product</Link> | {" "}
        <Link to="About">About</Link>
    </nav>
      </div>
      
  )
}
