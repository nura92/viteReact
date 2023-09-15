import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Navigation from '../../components/Nav/Nav'

import Footer from '../../components/footer/Footer'

export default function Sharedlayeout() {
  return (
    <>
   <Navigation/>
   <Outlet/>
   <Footer/>
    </>
  )
}
