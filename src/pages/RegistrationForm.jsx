import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import axiosInstance from '../config';

const RegistrationForm = () => {
  const initialFormState = {
    fullName: '',
    fatherName: '',
    motherName: '',
    caste: '',
    religion: '',
    category: '--select--',
    permanentAddress: '',
    correspondingAddress: '',
    sex: 'Male',
    dob: '',
    email: '',
    mobileNumber: '',
    fatherMobileNumber: '',
    course: 'D. Pharma',
    image: null,
    education: [
      { slNo: 1, examination: 'Class X', board: '', year: '', overallPercentage: '', pcmPercentage: '' },
      { slNo: 2, examination: 'Class XII', board: '', year: '', overallPercentage: '', pcmPercentage: '' },
      { slNo: 3, examination: 'D. Pharma', board: '', year: '', overallPercentage: '', pcmPercentage: '' },
    ],
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index][name] = value;
    setFormData({ ...formData, education: updatedEducation });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/form/submit', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Form submitted successfully:', response.data);
      alert("Sent email successfully");
      setFormData(initialFormState); // Reset form after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Email not sent successfully");
    }
  };

  const handleReset = () => {
    setFormData(initialFormState); // Reset form when reset button is clicked
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="max-w-screen-xl mx-auto px-4 py-8 bg-white rounded">
      <div className="mb-4 mt-2  mx-4 lg:mx-12  sm:mx-44 md:mx-20 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[0.8rem]  sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
    Registration Form
  </h1>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Enter Father's Name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Mother's Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Enter Mother's Name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
              required
            />
          </div>
          < div>
            <label className="block text-sm font-medium">Caste</label>
            <input
              type="text"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              placeholder="Enter Caste"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Religion</label>
            <input
              type="text"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              placeholder="Enter Religion"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="--select--">--select--</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OBC">OBC</option>
              <option value="General">General</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Permanent Address</label>
            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              placeholder="Enter Permanent Address"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Corresponding Address</label>
            <textarea
              name="correspondingAddress"
              value={formData.correspondingAddress}
              onChange={handleChange}
              placeholder="Enter Corresponding Address"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Sex</label>
            <div className="mt-1 block w-full border border-gray-300 rounded-md p-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <input type="radio" name="sex" value="Male" checked={formData.sex === 'Male'} onChange={handleChange} className="mr-2" />
              <label className="mr-4 text-sm">Male</label>
              <input type="radio" name="sex" value="Female" checked={formData.sex === 'Female'} onChange={handleChange} className="mr-2" />
              <label className="text-sm">Female</label>
            </div>
          </ div>
          <div>
            <label className="block text-sm font-medium">Mobile Number</label>
            <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter Mobile Number" className="mt-1 block w-full border border-gray-300 rounded-md p-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Upload Image</label>
            <input type="file" name="image" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium">Father's Mobile Number</label>
            <input type="tel" name="fatherMobileNumber" value={formData.fatherMobileNumber} onChange={handleChange} placeholder="Enter Father's Mobile Number" className="mt-1 block w-full border border-gray-300 rounded-md p-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium">Course</label>
            <div className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <input type="radio" name="course" value="D. Pharma" checked={formData.course === 'D. Pharma'} onChange={handleChange} className="mr-2" />
              <label className="mr-4 text-sm">D. Pharma</label>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold mt-4 mb-2 text-center">Details of Educational Qualification</h3>
        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300 mx-auto w-8/12">
            <thead>
              <tr className='bg-blue-800 text-center text-white'>
                <th className="border border-gray-300 p-1 text-sm font-semibold">Si. No.</th>
                <th className="border border-gray-300 p-1 text-sm font-semibold">Examination</th>
                <th className="border border-gray-300 p-1 text-sm font-semibold">Board/University</th>
                <th className="border border-gray-300 p-1 text-sm font-semibold">Year of Passing</th>
                <th className="border border-gray-300 p-1 text-sm font-semibold">Overall %</th>
                <th className="border border-gray-300 p-1 text-sm font-semibold">% in PCM/PCB</th>
              </tr>
            </thead>
            <tbody>
              {formData.education.map((edu, index) => (
                <tr key={edu.slNo} className="hover:bg-gray-200">
                  <td className="border border-gray-300 text-center text-sm">{edu.slNo}</td>
                  <td className="border border-gray-300 text-center text-sm">{edu.examination}</td>
                  <td className="border border-gray-300 p-1">
                    <input type="text" name="board" value={edu.board} onChange={(e) => handleEducationChange(index, e)} placeholder="Enter Board" className="mt-1 block w-full border border-gray-300 rounded-md px-1 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm" required />
                  </td>
                  <td className="border border-gray-300 p-1">
                    <input type="text" name="year" value={edu.year} onChange={(e) => handleEducationChange(index, e)} placeholder="Enter Year" className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm" required />
                  </td>
                  <td className="border border-gray-300 p-1">
                    <input type="text" name="overallPercentage" value={edu.overallPercentage} onChange={(e) => handleEducationChange(index, e)} placeholder="(upto 2 decimal)" className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm" required />
                  </td>
                  <td className="border border-gray-300 p-1">
                    <input type="text" name="pcmPercentage" value={edu.pcmPercentage} onChange={(e) => handleEducationChange(index, e)} placeholder="(upto 2 decimal)" className="mt-1 block w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm" required />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-400 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-gray-500 transition duration-200"
          >
            Reset
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default RegistrationForm;