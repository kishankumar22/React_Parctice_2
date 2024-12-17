import React from "react";
import { FaCaretRight } from "react-icons/fa";

// Replace these imports with your actual image paths
import studentImg from "../../assets/images/student.png";
import facilitiesImg from "../../assets/images/e-learn.png";
import libraryImg from "../../assets/images/research.png";
import iqacImg from "../../assets/images/celebration.png";
import nirfImg from "../../assets/images/accr.png";
import alumniImg from "../../assets/images/admission.png";

const QuickLinks = () => {
  const links = [
    {
      name: "Students",
      image: studentImg,
      url: "#",
      dropdown: [
        "SERVE Portal",
        "SAMARTH Student Portal",
        "SAMARTH Examination Form Filling Process",
        "Study in India",
        "43rd Convocation, 2024",
        "SUDHAR Portal",
        "Dean of Students' Welfare",
        "Hostel Management",
        "Anti-Ragging Committee",
        "Grievance Redressal",
        "Internal Complaint Committee",
      ],
    },
    { name: "Facilities", image: facilitiesImg, url: "#" },
    { name: "Library", image: libraryImg, url: "#" },
    { name: "Alumni", image: alumniImg, url: "#" },
    {
      name: "IQAC Ranking",
      image: iqacImg,
      url: "#",
      dropdown: ["2024"],
    },
    { name: "NIRF Affiliated Colleges", image: nirfImg, url: "#" },
    { name: "Alumni", image: alumniImg, url: "#" },
  ];

  return (
    <div className=" bg-gray-50">
      <div className="w-full flex bg-white h-10 items-center">
      <h2 className="text-2xl w-80  font-bold text-left mb-2 h-8 items-center  bg-gray-200">Quick Links</h2>
      <div className="justify-start border-t-4 w-full  border-yellow "></div> {/* Vertical line */}
    </div>
      <div className="flex flex-col m-0 space-y-2 relative">
        {links.map((link, index) => (
          <div key={index} className="relative group">
            {/* Main Link */}
            <a
              href={link.url}
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
            </a>

            {/* Dropdown Menu */}
            {link.dropdown && (
              <ul className="hidden group-hover:flex flex-col absolute left-60 top-0 w-full bg-gray-100 shadow-lg z-20 p-1">
                {link.dropdown.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="block px-4 py-1 hover:bg-gray-200 hover:text-gray-700 transition-colors text-sm"
                    >
                      {item}
                    </a>
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
