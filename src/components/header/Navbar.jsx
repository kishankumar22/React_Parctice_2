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
    { name: "SIF", route: "https://jkiop.org/images/SIF-A(SIF-D1-Pharm).pdf", external: true },
    { name: "Misc", route: "/misc" },
    { name: "Gallery", route: "/campus/gallaryPage" },
    { name: "Contact", route: "/contact" },
    { name: "Admin Login", route: "https://admin.jkiop.org/auth/signin", external: true },
  ];

  return (
    <nav className="bg-[#395183] w-full  z-50 shadow-md sm:py-2 lg:p-0 py-2  ">
      <div className="mx-auto px-2 flex justify-between items-center relative flex-wrap">
        {/* Hamburger Button (Mobile) */}
        <button className="md:hidden text-white  sm:text-center text-lg relative z-50" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex  flex-wrap justify-start items-center text-white text-[12px] font-semibold font-roboto uppercase">
          <li
            className={`h-10 p-2 text-white text-opacity-75 hover:text-white flex justify-center align-middle border-r-2 border-black group transition-all duration-300 ${location.pathname === "/" ? "text-amber-400 hover:text-opacity-100 hover:text-amber-400" : ""
              }`}
          >
            <Link to="/" className="py-1">Home</Link>
          </li>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`p-2 text-white text-opacity-75 hover:text-white flex justify-center align-middle border-r-2 border-black group transition-all duration-300 whitespace-nowrap last:border-0 ${location.pathname === item.route ? "text-amber-400 hover:text-opacity-100 hover:text-amber-400" : ""
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
          className={`absolute  left-0 top-6  w-full  bg-blue-900 shadow-lg transform transition-all duration-300 ease-in-out ${menuOpen ? "h-auto opacity-100" : "max-h-0 opacity-0"
            }  overflow-hidden md:hidden`}
          style={{ zIndex: 20 }} // Set a higher z-index for the mobile menu
        >
          <ul className="text-center  text-white text-sm font-light uppercase">
            <li
              className={`p-2 group rounded transition-all duration-300 ${location.pathname === "/" ? "bg-blue-300" : ""
                }`}
            >
              <Link to="/" onClick={toggleMenu} className="group-hover:bg-yellow-500 block p-1 rounded">
                Home
              </Link>
            </li>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`p-2 group rounded transition-all hover:text-blue-700 duration-300 ${location.pathname === item.route ? "bg-blue-500" : ""
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