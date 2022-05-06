import React from 'react'
import { Routes, Route } from 'react-router-dom'
import GioiThieu from './page/GioiThieu'
import LienHe from './page/LienHe'
import SanPham from './page/SanPham'
import TinTuc from './page/TinTuc'
import TrangChu from './page/TrangChu'

const Main = () => {
  return (
    <Routes>
      <Route path='/trang-chu' element={<TrangChu/>}/>
      <Route path='/gioi-thieu' element={<GioiThieu/>}/>
      <Route path='/san-pham' element={<SanPham/>}/>
      <Route path='/tin-tuc' element={<TinTuc/>}/>
      <Route path='/lien-he' element={<LienHe/>}/>
    </Routes>
  )
}

export default Main