import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = [
    {
      name: "About Us",
      route: "/aboutus",
      dropdown: [
        {
          name: "Introduction",
          route: "/aboutus",
          nestedDropdown: [
            { name: "Chancellor", route: "/aboutus/chancellor" },
            { name: "Vice Chancellor", route: "/aboutus/vice-chancellor" },
            { name: "Finance Officer", route: "/aboutus/finance-officer" },
            {
              name: "Registrar",
              route: "/aboutus/registrar",
              nestedDropdown: [
                { name: "Academic Calendar", route: "/aboutus/academic-calendar" },
                { name: "List of Faculty Members", route: "/aboutus/faculty-members" },
                { name: "Programmes Offered", route: "/aboutus/programmes-offered" },
                { name: "Courses, Syllabi", route: "/aboutus/courses-syllabi" },
                { name: "Time Table", route: "/aboutus/time-table" },
              ],
            },
            { name: "Deans of Faculties", route: "/aboutus/deans" },
            { name: "Dean of Students' Welfare", route: "/aboutus/dean-students-welfare" },
          ],
        },
        { name: "Mission & Vision", route: "/aboutus/mission-vision" },
        { name: "Leadership", route: "/aboutus/leadership" },
        { name: "Alumni", route: "/aboutus/alumni" },
        { name: "Accreditation", route: "/aboutus/accreditation" },
      ],
    },
    {
      name: "Academics",
      route: "/academics",
      dropdown: [
        { name: "Programs Offered", route: "/academics/programs-offered" },
        { name: "Departments", route: "/academics/departments" },
        { name: "Curriculum", route: "/academics/curriculum" },
        { name: "Faculty", route: "/academics/faculty" },
        { name: "Academic Calendar", route: "/academics/academic-calendar" },
      ],
    },
    {
      name: "Research",
      route: "/research",
      dropdown: [
        { name: "Research Areas", route: "/research/areas" },
        { name: "Publications", route: "/research/publications" },
        { name: "Collaborations", route: "/research/collaborations" },
        { name: "Grants", route: "/research/grants" },
        { name: "Research Centers", route: "/research/centers" },
      ],
    },
    {
      name: "Campus & Facilities",
      route: "/campus",
      dropdown: [
        { name: "Library", route: "/campus/library" },
        { name: "Hostels", route: "/campus/hostels" },
        { name: "Sports", route: "/campus/sports" },
        { name: "IT Services", route: "/campus/it-services" },
        { name: "Transport", route: "/campus/transport" },
      ],
    },
    {
      name: "Admission",
      route: "/admission",
      dropdown: [
        { name: "Undergraduate", route: "/admission/undergraduate" },
        { name: "Postgraduate", route: "/admission/postgraduate" },
        { name: "PhD", route: "/admission/phd" },
        { name: "International Students", route: "/admission/international" },
        { name: "FAQs", route: "/admission/faqs" },
      ],
    },
    {
      name: "Examination",
      route: "/examination",
      dropdown: [
        { name: "Exam Schedule", route: "/examination/schedule" },
        { name: "Results", route: "/examination/results" },
        { name: "Revaluation", route: "/examination/revaluation" },
        { name: "Exam Guidelines", route: "/examination/guidelines" },
        { name: "Online Exam Portal", route: "/examination/portal" },
      ],
    },
    {
      name: "Media",
      route: "/media",
      dropdown: [
        { name: "News", route: "/media/news" },
        { name: "Events", route: "/media/events" },
        { name: "Photo Gallery", route: "/media/photo-gallery" },
        { name: "Videos", route: "/media/videos" },
        { name: "Press Releases", route: "/media/press-releases" },
      ],
    },
    {
      name: "Login & Portals",
      route: "/login-portals",
      dropdown: [
        { name: "Student Registration", route: "/registration" }, // Updated route
        { name: "Faculty Portal", route: "/login-portals/faculty-portal" },
        { name: "Admin Portal", route: "/login-portals/admin-portal" },
        { name: "Alumni Portal", route: "/login-portals/alumni-portal" },
        { name: "Parent Portal", route: "/login-portals/parent-portal" },
      ],
    },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list text-base font-normal uppercase">
        <li className="navbar-item active">
          <Link to="/">Home</Link>
        </li>
        {menuItems.map((item, index) => (
          <li key={index} className="navbar-item dropdown border-black border-l-2">
            <Link to={item.route} className="dropdown-link">
              {item.name} <IoMdArrowDropdown className="dropdown-arrow" />
            </Link>
            <ul className="dropdown-menu">
              {item.dropdown.map((subItem, subIndex) => (
                <li key={subIndex} className="dropdown-item lowercase">
                  <Link to={subItem.route}>{subItem.name}</Link>
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
  );
};

export default Navbar;