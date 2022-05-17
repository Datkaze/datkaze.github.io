import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import Contact from './Contact'
import Home from './Home'
import News from './News'

const RouterPage = () => {
  return (
   <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/news' element={<News/>}/>
       <Route path='/contact' element={<Contact/>}/>
   </Routes>
  )
}

export default RouterPage