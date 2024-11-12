import React from 'react'
import { Outlet } from 'react-router-dom'
import Nb from './Components/Nb'
import Footer from './Components/Footer'

const Layout = () => {
  return (
    <div>
      <main>
        <Nb/>
        <Outlet/>
        <Footer/>
      </main>
    </div>
  )
}

export default Layout
