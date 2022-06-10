import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Laptop from '../components/Laptop'
import Phone from '../components/Phone'
import Phukien from '../components/Phukien'
import Tivii from '../components/Tivii'
import NewsDetail from '../details/NewsDetail'
import ProductDetail from '../details/ProductDetail'
import Cart from './Cart'
import Contact from './Contact'
import Home from './Home'
import News from './News'
import Payment from './Payment'
import Product from './Product'


const RouterPage = () => {
  return (
   <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/news' element={<News/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/laptop' element={<Laptop/>}/>
       <Route path='/phone' element={<Phone/>}/>
       <Route path='/tivii' element={<Tivii/>}/>
       <Route path='/phukien' element={<Phukien/>}/>
       <Route path='/productdetail' element={<ProductDetail/>}/>
       <Route path='/newsdetail' element={<NewsDetail/>}/>
       <Route path='/payment' element={<Payment/>}/>
   </Routes>
  )
}

export default RouterPage