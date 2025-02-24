import React from 'react'
import Slider from '../components/header/Slider'
import NewsHead from '../components/home/NewsHead'
import Section from '../components/section/Section'
import LogoSlider from '../components/slider/LogoSlider'
import Layout from '../components/layout/Layout'
import Gallery from '../components/home/Gallery'



const HomePage = () => {
  return (
    <Layout>
          <div>            
           <Slider/>
           {/* <NewsHead/> */}
           <Section/>
           <Gallery/>
           <LogoSlider/>
          </div>
    </Layout>
  )
}

export default HomePage
