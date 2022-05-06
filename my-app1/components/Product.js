import React from 'react'
import { Link } from 'react-router-dom'

export const Product = () => {
  return (
      <div className='App'>
    <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/product">Product</Link> | {" "}
        <Link to="About">About</Link>
    </nav>
      </div>
      
  )
}