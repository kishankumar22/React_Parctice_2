import React from "react";
import news from "../../assets/images/new.gif";

const NewsHead = () => {
  return (
    <div className="news-head bg-yellow flex flex-col sm:flex-row h-auto p-2 font-bold items-center">
      <ul className="flex flex-wrap p-1 my-1 justify-center items-center w-full">
        <li className="mx-3 mb-2 sm:mb-0">
          <a href="" className="flex items-center text-sm sm:text-base md:text-lg">
            Ability Enhancement Courses and Skill Enhancement Courses
            <img className="h-4 sm:h-2 ml-2" src={news} alt="" />
          </a>
        </li>
        <li className="mx-3 mb-2 sm:mb-0">
          <a href="" className="flex items-center text-sm sm:text-base md:text-lg">
            SAMARTH Examination Form Filling Process
            <img className="h-4 sm:h-2 ml-2" src={news} alt="" />
          </a>
        </li>
        <li className="mx-3 mb-2 sm:mb-0">
          <a href="" className="flex items-center text-sm sm:text-base md:text-lg">
            Admission (2024-2025)
            <img className="h-4 sm:h-2 ml-2" src={news} alt="" />
          </a>
        </li>
        <li className="mx-3 mb-2 sm:mb-0">
          <a href="" className="flex items-center text-sm sm:text-base md:text-lg">
            Hostel Registration
            <img className="h-4 sm:h-2 ml-2" src={news} alt="" />
          </a>
        </li>
        <li className="mx-3 mb-2 sm:mb-0">
          <a href="" className="flex items-center text-sm sm:text-base md:text-lg">
            Study in India
            <img className="h-4 sm:h-2 ml-2" src={news} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NewsHead;
