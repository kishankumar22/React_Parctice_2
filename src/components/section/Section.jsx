import React from 'react'
import QuickLinks from '../home/QuickLinks'
import NoticeCircular from '../home/NoticeCircular'
import ProfileSection from '../home/ProfileSection'


const Section = () => {
  return (
    <>
    <div className='flex w-full  flex-wrap '>
        <div className='w-1/4 '><QuickLinks/></div>
        <div className='w-2/4'><NoticeCircular/></div>
        <div className='w-1/4'><ProfileSection/></div>
    </div>
    </>
  )
}

export default Section