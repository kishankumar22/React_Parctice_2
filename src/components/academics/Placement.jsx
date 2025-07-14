import React, { useEffect, useState } from 'react';
import axiosInstance from '../../config';
import Layout from '../layout/Layout';

const Placement = () => {
  const [placements, setPlacements] = useState([]);
  const [filteredPlacements, setFilteredPlacements] = useState([]);
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('Selected'); // Default to Selected
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch placement data from API
    axiosInstance.get('/placements')
      .then(res => {
        const data = res.data.recordset || [];
        setPlacements(data);
        setFilteredPlacements(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching placement data:', err);
        setLoading(false);
      });
  }, []);

  // Extract unique years for filter dropdown
  const availableYears = [...new Set(placements.map(p => p.PlacementYear))].sort((a, b) => b - a);
  
  // Extract unique statuses for filter dropdown
  const availableStatuses = [...new Set(placements.map(p => p.Status))].filter(Boolean);

  // Filter placements based on selected year and status
  useEffect(() => {
    let filtered = placements;
    
    // Apply year filter
    if (selectedYear !== 'all') {
      filtered = filtered.filter(p => p.PlacementYear === parseInt(selectedYear));
    }
    
    // Apply status filter
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(p => p.Status === selectedStatus);
    }
    
    setFilteredPlacements(filtered);
  }, [selectedYear, selectedStatus, placements]);

  // Handle image URL generation with proper fallback
  const getImageUrl = (url) => {
    if (!url) return '/default-profile.png';
    if (url.startsWith('http') || url.startsWith('https')) return url;
    return `${axiosInstance.defaults.baseURL}${url}`;
  };

  // Handle year filter change
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Handle status filter change
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  // Handle student card click to show modal
  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  // Handle modal backdrop click


  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50  py-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              PLACEMENT RECORDS
            </h1>
            <p className="text-lg text-gray-600">
              Placement 100% Placement Assessment
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Filter by Year:</span>
                <select
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="all">All Years</option>
                  {availableYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Filter by Status:</span>
                <select
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="Selected">Selected</option>
                  <option value="Joined">Joined</option>
                  {availableStatuses.filter(status => !['Selected', 'Joined'].includes(status)).map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Showing {filteredPlacements.length} of {placements.length} records
            </div>
          </div>

          {/* Placement Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {filteredPlacements.map((placement) => (
              <div
                key={placement.PlacementId}
                className={`bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                  placement.Status === 'Joined' 
                    ? 'border-green-300 hover:border-green-400 ring-1 ring-green-100' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleStudentClick(placement)}
              >
                {/* Student Photo */}
                <div className="p-4 pb-3">
                  <div className="relative mx-auto w-40 h-40 mb-3">
                    <img
                      src={getImageUrl(placement.studentimage)}
                      alt={`${placement.fName} ${placement.lName}`}
                      className="w-full h-full  object-cover border-2 border-gray-200"
                      onError={(e) => {
                        e.target.src = '/default-profile.png';
                      }}
                    />
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      placement.Status === 'Joined' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                  </div>
                  
                  {/* Student Name */}
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 leading-tight">
                      {placement.fName} {placement.lName}
                    </h3>
                    <p className="text-blue-600 text-xs font-medium truncate">
                      {placement.CompanyName}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPlacements.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-2">No placement records found</div>
              <div className="text-gray-500 text-sm">
                {selectedYear !== 'all' 
                  ? `No records found for year ${selectedYear}` 
                  : 'No placement data available'}
              </div>
            </div>
          )}

          {/* Stats Footer */}
          {filteredPlacements.length > 0 && (
            <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    {filteredPlacements.length}
                  </div>
                  <div className="text-sm text-gray-500">Total Placements</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {filteredPlacements.filter(p => p.Status === 'Joined').length}
                  </div>
                  <div className="text-sm text-gray-500">Joined</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    {filteredPlacements.filter(p => p.Status === 'Selected').length}
                  </div>
                  <div className="text-sm text-gray-500">Selected</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">
                    {filteredPlacements.length > 0 
                      ? (filteredPlacements.reduce((sum, p) => sum + (p.PackageOffered || 0), 0) / filteredPlacements.length).toFixed(1)
                      : '0'
                    }
                  </div>
                  <div className="text-sm text-gray-500">Avg Package (LPA)</div>
                </div>
              </div>
            </div>
          )}

       
        </div>
      </div>
    </Layout>
  );
};

export default Placement;