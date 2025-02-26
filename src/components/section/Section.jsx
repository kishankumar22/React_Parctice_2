import React from 'react';
import QuickLinks from '../home/QuickLinks';
import NoticeCircular from '../home/NoticeCircular';
import ProfileSection from '../home/ProfileSection';
import WhyUs from '../home/WhyUs';

const Section = () => {
  return (
    <div className='flex flex-col gap-4 pt-4 mb-6 text-lg'>
      {/* For mobile and tablet screens */}
      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <div className='flex-1 min-w-0 mb-4 md:mb-0 md:basis-1/3'> {/* 3 columns on large screens */}
          <WhyUs />
        </div>
        <div className='flex-1 min-w-0 mb-4 md:mb-0 md:basis-1/3'> {/* 3 columns on large screens */}
          <NoticeCircular />
        </div>
        <div className='flex-1 min-w-0 mb-4 md:mb-0 md:basis-1/3'> {/* 3 columns on large screens */}
          <ProfileSection />
        </div>
      </div>
    </div>
  );
};

export default Section;