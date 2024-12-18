import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = [
    {
      name: "About Us",
      dropdown: [
        {
          name: "Introduction",
          nestedDropdown: [
            "Chancellor",
            "Vice Chancellor",
            "Finance Officer",
            {
              name: "Registrar",
              nestedDropdown: [
                "Academic Calendar",
                "List of Faculty Members",
                "Programmes Offered",
                "Courses, Syllabi ",
                "Time Table",
              ],
            },
            "Deans of Faculties",
            "Dean of Students' Welfare",
          ],
        },
        "Mission & Vision",
        "Leadership",
        "Alumni",
        "Accreditation",
      ],
    },
    {
      name: "Academics",
      dropdown: ["Programs Offered", "Departments", "Curriculum", "Faculty", "Academic Calendar"],
    },
    {
      name: "Research",
      dropdown: ["Research Areas", "Publications", "Collaborations", "Grants", "Research Centers"],
    },
    {
      name: "Campus & Facilities",
      dropdown: ["Library", "Hostels", "Sports", "IT Services", "Transport"],
    },
    {
      name: "Admission",
      dropdown: ["Undergraduate", "Postgraduate", "PhD", "International Students", "FAQs"],
    },
    {
      name: "Examination",
      dropdown: ["Exam Schedule", "Results", "Revaluation", "Exam Guidelines", "Online Exam Portal"],
    },
    {
      name: "Media",
      dropdown: ["News", "Events", "Photo Gallery", "Videos", "Press Releases"],
    },
    {
      name: "Login & Portals",
      dropdown: ["Student Portal", "Faculty Portal", "Admin Portal", "Alumni Portal", "Parent Portal"],
    },
  ];

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list text-base font-normal">
          <li className="navbar-item active">
            <Link to="/">Home</Link>
          </li>
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item dropdown">
              <Link to="/aboutus" className="dropdown-link">
                {item.name} <IoMdArrowDropdown className="dropdown-arrow" />
              </Link>
              <ul className="dropdown-menu">
                {item.dropdown.map((subItem, subIndex) => (
                  <li key={subIndex} className="dropdown-item">
                    {typeof subItem === "string" ? (
                      <Link to="/aboutus">{subItem}</Link>
                    ) : (
                      <>
                        <Link to="/aboutus" className="nested-dropdown-link">
                          {subItem.name} <IoMdArrowDropdown className="dropleft-arrow" />
                        </Link>
                        <ul className="nested-dropdown-menu">
                          {subItem.nestedDropdown.map((nestedItem, nestedIndex) => (
                            <li key={nestedIndex} className="dropdown-item">
                              {typeof nestedItem === "string" ? (
                                <Link to="/aboutus">{nestedItem}</Link>
                              ) : (
                                <>
                                  <Link to="/aboutus" className="nested-dropdown-link">
                                    {nestedItem.name} <IoMdArrowDropdown className="dropleft-arrow" />
                                  </Link>
                                  <ul className="nested-dropdown-menu">
                                    {nestedItem.nestedDropdown &&
                                      nestedItem.nestedDropdown.map((deepNestedItem, deepNestedIndex) => (
                                        <li key={deepNestedIndex} className="dropdown-item">
                                          <Link to="/aboutus">{deepNestedItem}</Link>
                                        </li>
                                      ))}
                                  </ul>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
