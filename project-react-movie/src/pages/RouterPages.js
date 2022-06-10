import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Anime from './Anime'
import Home from './Home'
import MovieTheaters from './MovieTheaters'
import SeriesMovie from './SeriesMovie'

const RouterPages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movietheaters' element={<MovieTheaters/>}/>
        <Route path='/seriesmovie' element={<SeriesMovie/>}/>
        <Route path='/anime' element={<Anime/>}/>
    </Routes>
  )
}

export default RouterPages