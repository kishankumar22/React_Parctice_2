import React from 'react'
import Layout from '../layout/Layout'
import LatestPost from './LatestPost'

const Placement = () => {
  return (
    <>
      <Layout>
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row">
            {/* Left Column (col-8) */}
            <div className="md:w-8/12 mb-4">
            <div className="mb-4 mt-2  mx-4 lg:mx-12  sm:mx-44 md:mx-20 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[1rem]  sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
    Placements
  </h1>
</div>
              <h2 className="text-sm mt-12 font-normal mx-12">Placement 100% Placement assessment.   </h2>

            </div>
            {/* Right Column (col-4) */}
            <div className="md:w-4/12">
              <LatestPost />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Placement
