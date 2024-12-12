import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import './Navbar.css';

const Navbar = () => {
  const menuItems = [
    {
      name: 'About Us',
      dropdown: [
        {
          name: 'Our History',
          nestedDropdown: [
            'Chancellor',
            'Vice Chancellor',
            'Finance Officer',
            {
              name: 'Registrar',
              nestedDropdown: [
                'Academic Calendar',
                'List of Faculty Members',
                'Programmes Offered',
                'Courses, Syllabi ',
                'Time Table',
              ],
            },
            'Deans of Faculties',
            'Dean of Students\' Welfare',
          ],
        },
        'Mission & Vision',
        'Leadership',
        'Alumni',
        'Accreditation',
      ],
    },
    {
      name: 'Academics',
      dropdown: ['Programs Offered', 'Departments', 'Curriculum', 'Faculty', 'Academic Calendar'],
    },
    {
      name: 'Research',
      dropdown: ['Research Areas', 'Publications', 'Collaborations', 'Grants', 'Research Centers'],
    },
    {
      name: 'Campus & Facilities',
      dropdown: ['Library', 'Hostels', 'Sports', 'IT Services', 'Transport'],
    },
    {
      name: 'Admission',
      dropdown: ['Undergraduate', 'Postgraduate', 'PhD', 'International Students', 'FAQs'],
    },
    {
      name: 'Examination',
      dropdown: ['Exam Schedule', 'Results', 'Revaluation', 'Exam Guidelines', 'Online Exam Portal'],
    },
    // {
    //   name: 'Careers',
    //   dropdown: ['Job Openings', 'Internships', 'Faculty Positions', 'Staff Positions', 'Apply Now'],
    // },
    {
      name: 'Media',
      dropdown: ['News', 'Events', 'Photo Gallery', 'Videos', 'Press Releases'],
    },
    {
      name: 'Login & Portals',
      dropdown: ['Student Portal', 'Faculty Portal', 'Admin Portal', 'Alumni Portal', 'Parent Portal'],
    },
  ];

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list text-base font-normal">
          <li className="navbar-item active">
            <a href="#">Home</a>
          </li>
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-item dropdown">
              <a href="#" className="dropdown-link">
                {item.name} <IoMdArrowDropdown className="dropdown-arrow" />
              </a>
              <ul className="dropdown-menu">
                {item.dropdown.map((subItem, subIndex) => (
                  <li key={subIndex} className="dropdown-item">
                    {typeof subItem === 'string' ? (
                      <a href="#">{subItem}</a>
                    ) : (
                      <>
                        <a href="#" className="nested-dropdown-link">
                          {subItem.name} <IoMdArrowDropdown className="dropleft-arrow" />
                        </a>
                        <ul className="nested-dropdown-menu">
                          {subItem.nestedDropdown.map((nestedItem, nestedIndex) => (
                            <li key={nestedIndex} className="dropdown-item">
                              {typeof nestedItem === 'string' ? (
                                <a href="#">{nestedItem}</a>
                              ) : (
                                <>
                                  <a href="#" className="nested-dropdown-link">
                                    {nestedItem.name} <IoMdArrowDropdown className="dropleft-arrow" />
                                  </a>
                                  <ul className="nested-dropdown-menu">
                                    {nestedItem.nestedDropdown &&
                                      nestedItem.nestedDropdown.map((deepNestedItem, deepNestedIndex) => (
                                        <li key={deepNestedIndex} className="dropdown-item">
                                          <a href="#">{deepNestedItem}</a>
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
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
