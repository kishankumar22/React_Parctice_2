import React from 'react'
import QuickLinks from '../home/QuickLinks'
import NoticeCircular from '../home/NoticeCircular'
import ProfileSection from '../home/ProfileSection'
import WhyUs from '../home/WhyUs'


const Section = () => {
  return (
    <>
    <div className='flex  h-heightsec gap-2 p-2 mb-4 text-lg'>
        <div className='basis-1/4 '><WhyUs/></div>
        <div className='basis-2/4'><NoticeCircular/></div>
        <div className='basis-1/4'><ProfileSection/></div>
    </div>
    </>
  )
}

export default Section