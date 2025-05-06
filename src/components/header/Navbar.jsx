import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/aboutus" },
    { name: "Courses", route: "/courses" },
    { name: "Registration", route: "/registration" },
    { name: "Admission", route: "/admission-process" },
    { name: "Placement", route: "/placement" },
    { name: "Faculty", route: "/faculity" },
    { name: "Infrastructure", route: "/infrastructure" },
    { name: "Facilities", route: "/facilities" },
    { name: "Career", route: "/career" },
    { name: "SIF", route: "https://jkiop.org/images/SIF-A(SIF-D1-Pharm).pdf", external: true },
    { name: "Misc", route: "/misc" },
    { name: "Gallery", route: "/campus/gallaryPage" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <nav className="bg-[#1E3A8A] w-full z-50 shadow-md sm:py-2 lg:p-0 py-2">
      <div className="mx-auto px-2 flex justify-between items-center relative flex-wrap">
        <button className="md:hidden text-white text-lg relative z-50" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className="hidden md:flex flex-wrap justify-around items-center text-white text-sm font-semibold font-roboto uppercase w-full">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`p-2 hover:text-orange-400 hover: transition-all duration-200 ${
                location.pathname === item.route ? "text-[#FFD700]" : ""
              }`}
            >
              {item.external ? (
                <a href={item.route} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              ) : (
                <Link to={item.route}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
        <div
          className={`absolute left-0 top-6 w-full bg-[#0F172A] shadow-lg transform transition-all duration-300 ease-in-out ${
            menuOpen ? "h-auto opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden md:hidden`}
          style={{ zIndex: 20 }}
        >
          <ul className="text-center text-white text-base font-light uppercase">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`p-2 rounded transition-transform duration-200 hover:bg-blue-400 hover:scale-105 ${
                  location.pathname === item.route ? "bg-blue-500" : ""
                }`}
              >
                {item.external ? (
                  <a
                    href={item.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={toggleMenu}
                    className="block p-2 rounded"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.route}
                    onClick={toggleMenu}
                    className="block p-2 rounded"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;