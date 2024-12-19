import React from 'react'
import QuickLinks from '../home/QuickLinks'
import NoticeCircular from '../home/NoticeCircular'
import ProfileSection from '../home/ProfileSection'
import WhyUs from '../home/WhyUs'


const Section = () => {
  return (
    <>
    <div className='flex mt-6 h-heightsec p-2 gap-2 text-lg'>
        <div className='w-1/4  '><WhyUs/></div>
        <div className='w-2/4 '><NoticeCircular/></div>
        <div className='w-1/4 '><ProfileSection/></div>
    </div>
    </>
  )
}

export default Section