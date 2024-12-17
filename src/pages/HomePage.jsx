import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/header/Navbar'
import Slider from '../components/header/Slider'
import NewsHead from '../components/home/NewsHead'
import QuickLinks from '../components/home/QuickLinks'
import NoticeCircular from '../components/home/NoticeCircular'
import ProfileSection from '../components/home/ProfileSection'
import Section from '../components/section/Section'
import LogoSlider from '../components/slider/LogoSlider'
import Footer from '../components/footer/Footer'


const HomePage = () => {
  return (
    <div>
      <Header/>
      <Navbar/> 
      <Slider/>
      {/* <NewsHead/> */}
       {/* <QuickLinks/> */}
      {/* <NoticeCircular/>  */}
      {/* <ProfileSection/> */}
      <Section/>
      <LogoSlider/>
    
    </div>
  )
}

export default HomePage
