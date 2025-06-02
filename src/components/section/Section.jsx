import React from 'react';
import NoticeCircular from '../home/NoticeCircular';
import ProfileSection from '../home/ProfileSection';
import WhyUs from '../home/WhyUs';

const Section = () => {
  return (
    <div className='flex flex-col gap-4 pt-4 mb-6 text-lg'>
      {/* For mobile, tablet, and laptop screens */}
      <div className='flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row gap-4 w-full'>
        <div className='flex-1 min-w-0 mb-4 md:mb-0 md:row-span-1 lg:basis-1/3'>
          <WhyUs />
        </div>
        <div className='flex-1 min-w-0 mb-4 md:mb-0 md:row-span-1 lg:basis-1/3'>
          <ProfileSection />
        </div>
        <div className='flex-1 min-w-0 mb-4 md:mb-0 md:col-span-2 md:row-span-1 lg:basis-1/3'>
          <NoticeCircular />
        </div>
      </div>
    </div>
  );
};

export default Section;