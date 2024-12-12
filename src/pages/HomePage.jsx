import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/header/Navbar'
import Slider from '../components/header/Slider'
import NewsHead from '../components/home/NewsHead'


const HomePage = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Slider/>
      <NewsHead/>

    </div>
  )
}

export default HomePage
