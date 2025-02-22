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
    { name: "About Us", route: "/aboutus" },
    { name: "Courses", route: "/courses" },
    { name: "Registration", route: "/registration" },
    { name: "Admission", route: "/admission-process" },
    { name: "Placement", route: "/placement" },
    { name: "Faculty", route: "/faculity" },
    { name: "Infrastructure", route: "/infrastructure" },
    { name: "Facilities", route: "/facilities" },
    { name: "Career", route: "/career" },
    { name: "SIF", route: "https://jkiop.org/images/SIF-A(SIF-D1-Pharm).pdf", external: true }, // Mark as external
    { name: "Misc", route: "/misc" },
    { name: "Gallery", route: "/campus/gallaryPage" },
    { name: "Contact", route: "/contact" },
    { name: "Login & Portals", route: "http://localhost:5173/auth/signin" , external: true},
  ];

  return (
    <nav className="bg-blue-900 w-full z-50 h-10 flex items-center shadow-md">
      <div className="container mx-auto px-2 flex justify-between items-center relative">
        {/* Hamburger Button (Mobile) */}
        <button className="md:hidden text-white text-lg relative z-50" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-nowrap justify-center items-center text-white text-[12px] font-semibold font-roboto uppercase">
          <li
            className={`h-10 w-full p-2 hover:bg-blue-600 flex justify-center align-middle border-r-2 border-black group transition-all duration-300 ${location.pathname === "/" ? "bg-red-500" : ""
              }`}
          >
            <Link to="/" className="py-1">Home</Link>
          </li>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`p-2 hover:bg-blue-600 h-10 flex justify-center align-middle border-r-2 border-black group transition-all duration-300 whitespace-nowrap last:border-0 ${location.pathname === item.route ? "bg-red-500" : ""
                }`}
            >
              {item.external ? (
                <a href={item.route} target="_blank" rel="noopener noreferrer" className="group-hover:text-yellow-500 py-1 rounded">
                  {item.name}
                </a>
              ) : (
                <Link to={item.route} className="group-hover:text-yellow-500 py-1 rounded">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-10 w-full bg-blue-900 shadow-lg transform transition-all duration-300 ease-in-out ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden md:hidden`}
        >
          <ul className="space-y-2 text-center text-white text-sm font-light uppercase">
            <li
              className={`p-2 group rounded transition-all duration-300 ${location.pathname === "/" ? "bg-red-500" : ""
                }`}
            >
              <Link to="/" onClick={toggleMenu} className="group-hover:bg-yellow-500 block p-2 rounded">
                Home
              </Link>
            </li>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`p-2 group rounded transition-all duration-300 whitespace-nowrap ${location.pathname === item.route ? "bg-red-500" : ""
                  }`}
              >
                {item.external ? (
                  <a href={item.route} target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="group-hover:bg-yellow-500 block p-2 rounded">
                    {item.name}
                  </a>
                ) : (
                  <Link to={item.route} onClick={toggleMenu} className="group-hover:bg-yellow-500 block p-2 rounded">
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