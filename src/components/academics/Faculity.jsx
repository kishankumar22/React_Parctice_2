import React from 'react';
import Layout from '../layout/Layout';
import LatestPost from './LatestPost';

const Faculity = () => {
  return (
    <Layout>
      <div className="container h-auto mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Column (col-8) */}
          <div className="md:w-8/12 p-2">
          <div className='bg-gray-200 h-8 mx-48 flex items-center justify-center shadow-md'>
              <h1 className="text-xl text-center font-bold uppercase text-white bg-blue-900 rounded-lg p-2 shadow-lg">
              faculity
              </h1>
            </div>
            <div className='px-4 m-4 overflow-x-auto'>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-2 px-4 text-left">S.NO.</th>
                    <th className="py-2 px-4 text-left">Name Of Faculty</th>
                    <th className="py-2 px-4 text-left">Qualification</th>
                    <th className="py-2 px-4 text-left">Designation</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  <tr className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 px-4">Mr. Jai Bhargava</td>
                    <td className="py-2 px-4">M. Pharma</td>
                    <td className="py-2 px-4">Principal</td>
                  </tr>
                  <tr className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 px-4">Ms. Sunny</td>
                    <td className="py-2 px-4">M. Pharma</td>
                    <td className="py-2 px-4">Lecturer</td>
                  </tr>
                  <tr className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-2 px-4">3</td>
                    <td className="py-2 px-4">Km Sonia</td>
                    <td className="py-2 px-4">M. Pharma</td>
                    <td className="py-2 px-4">Lecturer</td>
                  </tr>
                  <tr className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-2 px-4">4</td>
                    <td className="py-2 px-4">Mr. Niranjan Prashad</td>
                    <td className="py-2 px-4">B. Pharma</td>
                    <td className="py-2 px-4">Lecturer</td>
                  </tr>
                  <tr className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-2 px-4">5</td>
                    <td className="py-2 px-4">Mr. Atul</td>
                    <td className="py-2 px-4">B. Pharma</td>
                    <td className="py-2 px-4">Lecturer</td>
                  </tr>
                  <tr className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-2 px-4">6</td>
                    <td className="py-2 px-4">Ms. Lakshmi</td>
                    <td className="py-2 px-4">B. Pharma</td>
                    <td className="py-2 px-4">Lecturer</td>
                  </tr>
                  <tr className="border-b border-gray-300 hover:bg-gray-100">
                    <td className="py-2 px-4">7</td>
                    <td className="py-2 px-4">Km Anjali</td>
                    <td className="py-2 px-4">B. Pharma</td>
                    <td className="py-2 px-4">Lecturer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column (col-4) */}
          <div className="md:w-4/12 p-2">
            <LatestPost/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faculity;