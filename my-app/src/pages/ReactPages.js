import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Product from './Product'
import Contact from './Contact'
import Home from './Home'
import {NotFound}from './NotFound'
import SingleProduct from './SingleProduct'

const ReactPages = () => {
  return (
   <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='*' element={<NotFound/>}/>
       <Route path='/product/single-product' element={<SingleProduct/>}/>
   </Routes>
  )
}

export default ReactPages