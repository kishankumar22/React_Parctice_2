import React from 'react'
import QuickLinks from '../home/QuickLinks'
import NoticeCircular from '../home/NoticeCircular'
import ProfileSection from '../home/ProfileSection'


const Section = () => {
  return (
    <>
    <div className='flex mt-6 text-lg'>
        <div className='w-1/4  p-1'><QuickLinks/></div>
        <div className='w-2/4 p-1'><NoticeCircular/></div>
        <div className='w-1/4 p-1'><ProfileSection/></div>
    </div>
    </>
  )
}

export default Section