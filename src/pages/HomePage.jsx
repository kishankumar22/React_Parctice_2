import React from 'react'
import Slider from '../components/header/Slider'
import NewsHead from '../components/home/NewsHead'
import Section from '../components/section/Section'
import LogoSlider from '../components/slider/LogoSlider'
import Layout from '../components/layout/Layout'



const HomePage = () => {
  return (
    <Layout>
          <div className=' md:flex-col '>
           <Slider/>
           <NewsHead/>
           <Section/>
           <LogoSlider/>
          </div>
    </Layout>
  )
}

export default HomePage
