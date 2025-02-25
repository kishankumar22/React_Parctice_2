import React from 'react';
import QuickLinks from '../home/QuickLinks';
import NoticeCircular from '../home/NoticeCircular';
import ProfileSection from '../home/ProfileSection';
import WhyUs from '../home/WhyUs';

const Section = () => {
  return (
    <div className=' h-auto  flex flex-col md:flex-row gap-4 p-4 mb-4 text-lg'>
      <div className='md:basis-1/3 mb-4 md:mb-0'> {/* Adjusted basis for better distribution */}
        <WhyUs />
      </div>
      <div className='md:basis-1/3 mb-4 md:mb-0'> {/* Adjusted basis for better distribution */}
        <NoticeCircular />
      </div>
      <div className='md:basis-1/3 mb-4 md:mb-0'> {/* Adjusted basis for better distribution */}
        <ProfileSection />
      </div>
    </div>
  );
};

export default Section;