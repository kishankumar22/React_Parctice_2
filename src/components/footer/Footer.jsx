import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/images/logo3.png"; // Replace with your logo
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="md:flex-col flex-wrap">
        <div className="flex row justify-center bg-black h-48">
          <div className="col-sm-12 pr-2">
            <img
              src={logo1}
              alt="University Logo"
              className="w-24 h-24 pt-3 rounded-full"
            />
          </div>
          <div className="col-sm-4 m-3 p-2 leading-4 font-bold text-white">
            <p className="text-xl font-normal leading-relaxed">
              दीनदयाल उपाध्याय गोरखपुर विश्‍वविद्यालय
            </p>
            <p className="text-sm leading-8">
              Deen Dayal Upadhyaya Gorakhpur University
            </p>
            <p className="font-medium leading-8">
              सिविल लाइंस, गोरखपुर - 273009, उत्तर प्रदेश (भारत)
            </p>
            <p className="text-sm font-medium leading-8">
              Civil Lines, Gorakhpur - 273009, Uttar Pradesh (INDIA)
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full p-2 md:w-1/5 text-white mb-6 md:mb-0">
            <h1 className="font-bold border-b-2 pb-2 mb-2">Quick Links</h1>
            <ul>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" />
                <Link to="/results" className="hover:text-gray-300">
                  Result
                </Link>
              </li>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" />
                <Link to="/tenders" className="hover:text-gray-300">
                  Tenders
                </Link>
              </li>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" />
                <Link to="/contact-us" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" />
                <Link to="/rti" className="hover:text-gray-300">
                  RTI
                </Link>
              </li>
            </ul>
          </div>

          {/* Co-Curricular */}
          <div className="w-full p-2 md:w-1/5 text-white mb-6 md:mb-0">
            <h1 className="font-bold border-b-2 pb-2 mb-2">Co-Curricular</h1>
            <ul>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" />
                <Link to="/sports" className="hover:text-gray-300">
                  Sports
                </Link>
              </li>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" />
                <Link to="/ncc" className="hover:text-gray-300">
                  NCC
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="w-full p-2 md:w-1/5 text-white mb-6 md:mb-0">
            <h1 className="font-bold border-b-2 pb-2 mb-2">Important Links</h1>
            <ul>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" />
                <a
                  href="https://www.education.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  MHRD
                </a>
              </li>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" />
                <a
                  href="https://www.aiu.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  AIU
                </a>
              </li>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" />
                <a
                  href="https://www.ncte.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  NCTE
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between bg-black text-yellow p-3">
          <p>
            <a href="#" className="hover:text-gray-300">
              Copyright © Deen Dayal Upadhyaya Gorakhpur University.
            </a>
          </p>
          <p>
            <a href="#" className="hover:text-gray-300">
              Your Visitor Number : Web Analytics
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
