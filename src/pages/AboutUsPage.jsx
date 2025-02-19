import React, { useState } from 'react';
import pic1 from "../assets/images/ddugate.jpg";
import pic2 from "../assets/images/intro3.jpg";
import pic3 from "../assets/images/intro1.jpg";
import pic4 from "../assets/images/intro2.jpg";
import pic5 from "../assets/images/pddu.jpg";
import pic6 from "../assets/images/intro4.jpg";
import pic7 from "../assets/images/intro5.jpg";
import pic8 from "../assets/images/intro6.jpg";
import Layout from '../components/layout/Layout';

const AboutUsPage = () => {
  const [isGovernanceVisible, setGovernanceVisible] = useState(false);

  // Function to toggle visibility of Governance section
  const toggleGovernance = () => {
    setGovernanceVisible(!isGovernanceVisible);
  };

  return (
    <Layout>
      <div className="flex">
        {/* Column 1: sm-3 */}
        <div className="w-1/4 p-4 text-white">
          <div className='pt-4'>
            <ul className='text-black cursor-pointer'>
              <li className='text-2xl font-bold border-b pb-3 text-blue-800 border-blue-800 cursor-default'>About the University</li>
              <li className="pl-3 text-sm font-normal border border-gray-100 p-4 border-l-4 border-l-blue-800 mt-2 shadow-sm hover:bg-amber-300 ">Introduction</li>
              <li className="pl-3 text-sm font-normal border border-gray-100 p-4 border-l-4 border-l-blue-800 mt-2 shadow-sm hover:bg-amber-300 ">Vision & Mission</li>
              <li className="pl-3 text-sm font-normal border border-gray-100 p-4 border-l-4 border-l-blue-800 mt-2 shadow-sm hover:bg-amber-300 ">Core Values</li>
              <li className="pl-3 text-sm font-normal border border-gray-100 p-4 border-l-4 border-l-blue-800 mt-2 shadow-sm hover:bg-amber-300 ">Strategic plan</li>
              
              {/* Governance with toggle */}
              <li
                className="pl-3 text-sm font-normal border border-gray-100 p-4 border-l-4 border-l-blue-800 mt-2 shadow-sm hover:bg-amber-300 cursor-pointer relative"
                onClick={toggleGovernance}
              >
                Governance 
                <span className='ml-40 text-xl'>+ </span>
                {isGovernanceVisible && (
                  <ul className='absolute -left-1 top-full w-56  bg-white shadow-md'>
                    <li className="pl-3 text-sm font-normal border border-gray-100 border-l-4 border-l-blue-800 p-4  shadow-sm hover:bg-amber-300">Chancellor</li>
                    <li className="pl-3 text-sm font-normal border border-gray-100 p-4 mt-2 shadow-sm  border-l-4 border-l-blue-800 hover:bg-amber-300">Vice Chancellor</li>
                    <li className="pl-3 text-sm font-normal border border-gray-100 p-4 mt-2 shadow-sm border-l-4 border-l-blue-800 hover:bg-amber-300">finance officer</li>
                    <li className="pl-3 text-sm font-normal border border-gray-100 p-4 mt-2 shadow-sm border-l-4 border-l-blue-800 hover:bg-amber-300">Registrar</li>
                    <li className="pl-3 text-sm font-normal border border-gray-100 p-4 mt-2 shadow-sm border-l-4 border-l-blue-800 hover:bg-amber-300">Dean Of Faculty</li>
                    <li className="pl-3 text-sm font-normal border border-gray-100 p-4 mt-2 shadow-sm border-l-4 border-l-blue-800 hover:bg-amber-300">head of department</li>
                    <li className="pl-3 text-sm font-normal border border-gray-100 p-4 mt-2 shadow-sm border-l-4 border-l-blue-800 hover:bg-amber-300">Directors</li>
                    <li className="pl-3 text-sm font-normal border border-gray-100 p-4 mt-2 shadow-sm border-l-4 border-l-blue-800 hover:bg-amber-300">librarian</li>
                  </ul>
                )}
              </li>
              
              <li className="pl-3 text-sm font-normal border border-gray-100 p-4 border-l-4 border-l-blue-800 mt-2 shadow-sm hover:bg-amber-300 ">Act status</li>
              <li className="pl-3 text-sm font-normal border border-gray-100 p-4 border-l-4 border-l-blue-800 mt-2 shadow-sm hover:bg-amber-300 ">University in figure</li>
              <li className="pl-3 text-sm font-normal border border-gray-100 p-4 border-l-4 border-l-blue-800 mt-2 shadow-sm hover:bg-amber-300 ">Downloads </li>
              <li className="pl-3 text-sm font-normal border border-gray-100 p-4 border-l-4 border-l-blue-800 mt-2 shadow-sm hover:bg-amber-300 ">Kulgeet</li>
            </ul>
          </div>
        </div>

        {/* Column 2: sm-9 */}
        <div className="w-3/4 text-black p-4">
          <div className='p-4 border border-gray-200 rounded-md shadow-md'>
            <div>
              <h3 className="text-2xl font-bold border-b pb-3 text-blue-800 border-blue-800 ">Introduction</h3>
              <div className="bg-blue-800 w-40 h-1 -mt-0.5 "></div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4 p-2">
              {/* Image Gallery */}
              <div className="flex w-52 h-52"><img src={pic8} alt="Image 1" className="w-full h-auto p-2 border border-gray-300 rounded" /></div>
              <div className="flex w-52 h-52"><img src={pic3} alt="Image 2" className="w-full h-auto p-2 border border-gray-300 rounded" /></div>
              <div className="flex w-52 h-52"><img src={pic4} alt="Image 3" className="w-full h-auto p-2 border border-gray-300 rounded" /></div>
              <div className="flex w-52 h-52"><img src={pic2} alt="Image 4" className="w-full h-auto p-2 object-fill border border-gray-300 rounded" /></div>
              <div className="flex w-52 h-52"><img src={pic6} alt="Image 5" className="w-full h-auto p-2 border border-gray-300 rounded" /></div>
              <div className="flex w-52 h-52"><img src={pic7} alt="Image 6" className="w-full h-auto p-2 border border-gray-300 rounded" /></div>
              <div className="flex w-52 h-52"><img src={pic5} alt="Image 7" className="w-full h-auto p-2 border border-gray-300 rounded" /></div>
              <div className="flex w-52 h-52"><img src={pic1} alt="Image 8" className="w-56 h-auto p-2 border border-gray-300 rounded" /></div>
            </div>
            <div className='font-roboto text-[15px] text-justify text-black mr-5'>
            <p className='pt-2 pl-2 '>
              Deen Dayal Upadhyaya Gorakhpur University, founded in 1957, is the first university in Uttar Pradesh to emerge as a leading higher-studies centre after Independence. It has earned an A++ accreditation from NAAC for its relentless pursuit of its motto, “Let the noble thoughts come to us from all directions,” which reflects its openness to diverse perspectives, cultures, and values in its academic and organizational spheres.
            </p>
            <p className='pt-2 pl-2  font-roboto text-[15px] ' >The university bears the name of the eminent political philosopher, Pandit Deen Dayal Upadhyaya. It is situated in Gorakhpur, where it draws inspiration from the spiritual, philosophical, patriotic, and philanthropic heritage of Gautam Buddha, Sant Kabir, Guru Gorakshnath, Bismil, Hanuman Prasad Poddar, and the world-famous Gita Press.</p>
            <p className='pt-2 pl-2  font-roboto text-[15px]'>The university spans 190.96 acres and comprises eight faculties with forty departments that have been instrumental in providing holistic education to the people of Eastern Uttar Pradesh, Western Bihar, and Nepal since its inception. As a residential-cum-affiliating State University with academic jurisdiction over three districts of Eastern Uttar Pradesh, it boasts of a rich academic legacy, distinguished alumni, competent, qualified, and committed faculty members, transparent and efficient administrative system, ample career growth opportunities, advanced research facilities, and a lively and secure campus.</p>
            <p className='pt-2 pl-2  font-roboto text-[15px]'>The university has more than 12,000 enrolled students, of whom more than 50% are women. It has successfully implemented a range of innovative schemes and programs to impart holistic education to its students. The university is renowned nationwide for its quality research, outstanding teaching and learning processes, national and international awards, sports activities and achievements, involvement in outreach and extension activities, strong student support system, placements in reputed government and private organizations, and transparent and effective governance.</p>
            <p className='pt-2 pl-2  font-roboto text-[15px]'>The university is furnished with facilities such as an automated Central Library, ICT-enabled classrooms, state-of-the-art laboratories, an Incubation centre, Health Centre, separate hostels for men and women, facilities for sports and games, an environment-friendly campus, a gender-sensitive environment, and a ragging-free atmosphere.</p>
            <p className='pt-2 pl-2  font-roboto text-[15px]'>The university aims to excel as a University of Excellence in the near future by blending value-based ethical education with modern scientific education and advancing on the path of academic progress, contributing to the social, economic, political, cultural, and educational development of the region. The university’s A++ accreditation by NAAC demonstrates its dedication to excellence in education and academic standards.</p>
            {/* More content */}

            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUsPage;