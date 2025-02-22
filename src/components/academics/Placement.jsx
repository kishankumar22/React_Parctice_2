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
          <div className="md:w-8/12 p-2">
            <div className='bg-gray-200 h-8 mx-48 flex items-center justify-center shadow-md'>
              <h1 className="text-xl text-center uppercase font-bold text-white bg-blue-900 rounded-lg p-2 shadow-lg">
                Placement
              </h1>
            </div>
            <h2 className="text-sm mt-12 font-normal mx-12">Placement 100% Placement assessment.   </h2>
           
          </div>
          {/* Right Column (col-4) */}
          <div className="md:w-4/12">
          <LatestPost/>
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Placement
