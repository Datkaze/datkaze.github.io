import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '.Home'
import About from './About'
import Product from '.Product'
import NoteFound from './NoteFound'


const Main = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='*' element={<NoteFound/>}/>
    </Routes>
  )
}

export default Main