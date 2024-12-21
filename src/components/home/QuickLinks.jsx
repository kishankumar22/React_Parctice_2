import React from "react";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

// Replace these imports with your actual image paths
import studentImg from "../../assets/logo/student.png";
import facilitiesImg from "../../assets/logo/e-learn.png";
import libraryImg from "../../assets/logo/research.png";
import iqacImg from "../../assets/logo/celebration.png";
import nirfImg from "../../assets/logo/accr.png";
import alumniImg from "../../assets/logo/admission.png";

const QuickLinks = () => {
  const links = [
    {
      name: "Students",
      image: studentImg,
      url: "/students",
      dropdown: [
        { name: "SERVE Portal", url: "/serve-portal" },
        { name: "SAMARTH Student Portal", url: "/samarth-student" },
        { name: "SAMARTH Examination Form Filling Process", url: "/exam-form" },
        { name: "Study in India", url: "/study-in-india" },
        { name: "43rd Convocation, 2024", url: "/convocation-2024" },
        { name: "SUDHAR Portal", url: "/sudhar-portal" },
        { name: "Dean of Students' Welfare", url: "/dean-students" },
        { name: "Hostel Management", url: "/hostel-management" },
        { name: "Anti-Ragging Committee", url: "/anti-ragging" },
        { name: "Grievance Redressal", url: "/grievance-redressal" },
        { name: "Internal Complaint Committee", url: "/complaint-committee" },
      ],
    },
    { name: "Facilities", image: facilitiesImg, url: "/facilities" },
    { name: "Library", image: libraryImg, url: "/library" },
    { name: "Alumni", image: alumniImg, url: "/alumni" },
    {
      name: "IQAC Ranking",
      image: iqacImg,
      url: "/iqac-ranking",
      dropdown: [{ name: "2024", url: "/iqac-2024" }],
    },
    { name: "NIRF Affiliated Colleges", image: nirfImg, url: "/nirf-colleges" },
    { name: "Alumni", image: alumniImg, url: "/alumni" },
  ];

  return (
    <div className="bg-gray-50">
      <div className="w-full flex bg-white h-10 items-center">
        <h2 className="text-2xl w-80 font-bold text-left mb-2 h-8 items-center bg-gray-200">
          Quick Links
        </h2>
        <div className="justify-start border-t-4 w-full border-yellow"></div>
      </div>

      <div className="flex flex-col m-0 space-y-2 relative">
        {links.map((link, index) => (
          <div key={index} className="relative group">
            {/* Main Link */}
            <Link
              to={link.url}
              className="flex items-center bg-gray-300 shadow-md p-2 transition-colors group-hover:text-white group-hover:bg-kesariya"
            >
              <img
                src={link.image}
                alt={link.name}
                className="h-10 w-10 object-contain mr-4 transition-transform filter group-hover:brightness-0 group-hover:invert"
              />
              <span className="font-medium text-base text-gray-800 transition-colors flex-1 group-hover:text-white">
                {link.name}
              </span>
              {link.dropdown && (
                <FaCaretRight className="text-gray-800 group-hover:text-white ml-2" />
              )}
            </Link>

            {/* Dropdown Menu */}
            {link.dropdown && (
              <ul className="hidden group-hover:flex flex-col absolute left-60 top-0 w-full bg-gray-100 shadow-lg z-20 p-1">
                {link.dropdown.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.url}
                      className="block px-4 py-1 hover:bg-gray-200 hover:text-gray-700 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
