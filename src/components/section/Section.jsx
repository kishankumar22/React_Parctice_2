import React from 'react';
import QuickLinks from '../home/QuickLinks';
import NoticeCircular from '../home/NoticeCircular';
import ProfileSection from '../home/ProfileSection';
import WhyUs from '../home/WhyUs';

const Section = () => {
  return (
    <div className='flex flex-col md:flex-row h-auto gap-4 p-4 mb-4 text-lg'>
      <div className='md:basis-1/4  mb-4 md:mb-4'>
        <WhyUs />
      </div>
      <div className='md:basis-2/4 mb-4 md:mb-0'>
        <NoticeCircular />
      </div>
      <div className='md:basis-1/4 mb-4 md:mb-0'>
        <ProfileSection />
      </div>
    </div>
  );
};

export default Section;