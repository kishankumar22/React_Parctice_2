import React from 'react'
import Header from '../header/Header'
import Navbar from '../header/Navbar'
import Footer from '../footer/Footer'
import LatestNews from '../header/LatestNews'
const Layout = ({children}) => {
  return (
    <div>
    <LatestNews/>
    <Header/>
    <Navbar/>
        <div className='content'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
