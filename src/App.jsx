import React from 'react'
import Main from './components/main/Main'
import Mac from './Pages/Mac/Mac'
import Iphone from './Pages/Iphone/iphone'
import  ProductPage from './Pages/Productpage/Productpage'
import Shared from './Pages/sharedlayout/Sharedlayeout'
import Ipad from './Pages/ipad/Ipad'
import Watch from './Pages/whach/Wach'
import Music from './Pages/music/Music'
import Tv from './Pages/tv/Tv'
import Support from './Pages/support/Support'
import For04 from './Pages/Four04/Four04'
import { Routes,Route } from 'react-router-dom'

import './css/bootstrap.css'
import './css/styles.css'

export default function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Shared/>}>  
    <Route path='/' element={<Main/>} />
    <Route path='Mac' element={<Mac/>} />
    <Route path='iphone' element={<Iphone/>} />
    <Route path='iphone/:productID' element={<ProductPage/>} />
    <Route path='ipad' element={<Ipad/>} />
    <Route path='watch' element={<Watch/>} />
    <Route path='tv' element={<Tv/>} />
    <Route path='music' element={<Music/>} />
    <Route path='support' element={<Support/>} />
    <Route path='*' element={<For04/>} />

    </Route>
    </Routes>  
    </>
  )
}
