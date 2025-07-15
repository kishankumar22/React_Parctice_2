import React, { useEffect, useState } from 'react';
import axiosInstance from '../../config';
import Layout from '../layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';

const Placement = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeYear, setActiveYear] = useState(null);

  useEffect(() => {
    axiosInstance.get('/placements')
      .then(res => {
        const data = res.data.recordset || [];
        const selectedStudents = data.filter(p => p.Status === 'Selected');
        setPlacements(selectedStudents);
        // Set the most recent year with data as active (e.g., 2026 if available)
        const years = [...new Set(selectedStudents.map(p => p.PlacementYear))].sort((a, b) => b - a);
        if (years.length > 0) setActiveYear(years[0]);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching placement data:', err);
        setLoading(false);
      });
  }, []);

  const getImageUrl = (url) => url ? url.startsWith('http') ? url : `${axiosInstance.defaults.baseURL}${url}` : '/default-profile.png';

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-10 w-10 border-4 border-indigo-600 border-t-transparent rounded-full"
          />
        </div>
      </Layout>
    );
  }

  // Get unique years from data, limited to the last 5 years (2026, 2025, 2024, 2023, 2022)
  const availableYears = [...new Set(placements.map(p => p.PlacementYear))].sort((a, b) => b - a);
  const displayYears = availableYears.filter(year => [2026, 2025, 2024, 2023, 2022].includes(year));

  const filteredPlacements = activeYear ? placements.filter(p => p.PlacementYear === activeYear) : [];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-600">
            Selected Students
          </h1>
          <p className="text-gray-600 text-md mt-1">
            🎉 100% Placement Success in {activeYear} | Join Our Success Stories!
          </p>
        </motion.div>

        {/* Year Tabs */}
        {displayYears.length > 0 && (
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {displayYears.map(year => (
              <motion.button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${activeYear === year ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-indigo-500 hover:text-white transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {year}
              </motion.button>
            ))}
          </div>
        )}

        {/* Placements Grid */}
        <AnimatePresence>
          {filteredPlacements.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredPlacements.map(placement => (
                <PlacementCard 
                  key={placement.PlacementId}
                  placement={placement}
                  getImageUrl={getImageUrl}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 bg-white rounded-xl shadow-md"
            >
              <p className="text-gray-600 text-sm">No selected students available for {activeYear || 'this year'}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

const PlacementCard = ({ placement, getImageUrl }) => {
  const packageValue = placement.PackageOffered || 0;

  const getBorderColor = () => {
    if (packageValue >= 6) return 'border-yellow-400';    // Gold for 6+ LPA
    if (packageValue >= 3) return 'border-blue-500';      // Blue for 3-5 LPA
    return 'border-green-500';                            // Green for 1-2 LPA
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`bg-white rounded-xl overflow-hidden shadow-md border-2 ${getBorderColor()} transition`}
    >
      <div className="flex justify-center p-4">
        <img
          src={getImageUrl(placement.studentimage)}
          alt={`${placement.fName} ${placement.lName}`}
          className="h-60 w-60 object-cover rounded-full border-2 border-gray-200"
          onError={(e) => e.target.src = '/default-profile.png'}
        />
      </div>

      <div className="px-4 pb-4 text-center">
        <div className="font-bold text-gray-800 text-md flex justify-center items-center gap-2">
          <span>{placement.fName} {placement.lName}</span>
          <span className="text-indigo-600 text-sm font-medium">| {packageValue} LPA</span>
        </div>

        <span className="inline-block mt-2 bg-indigo-100 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full">
          {placement.CompanyName}
        </span>
      </div>
    </motion.div>
  );
};

export default Placement;