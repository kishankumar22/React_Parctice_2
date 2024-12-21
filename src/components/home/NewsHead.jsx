import React from "react";
import { Link } from "react-router-dom";
import news from "../../assets/logo/new.gif";

const NewsHead = () => {
  const newsItems = [
    {
      title: "Ability Enhancement Courses and Skill Enhancement Courses",
      url: "/enhancement-courses", // Example internal link
    },
    {
      title: "SAMARTH Examination Form Filling Process",
      url: "https://samarth.example.com", // Example external link
    },
    {
      title: "Admission (2024-2025)",
      url: "/admission-2024-2025", // Example internal link
    },
    {
      title: "Hostel Registration",
      url: "https://hostel.example.com", // Example external link
    },
    {
      title: "Study in India",
      url: "/study-in-india", // Example internal link
    },
  ];

  return (
    <div className="news-head bg-gray-200 flex flex-col sm:flex-row h-auto p-2 font-bold items-center">
      <ul className="flex flex-wrap p-1 my-1 justify-center items-center w-full">
        {newsItems.map((item, index) => (
          <li key={index} className="mx-3 mb-2 sm:mb-0">
            {item.url.startsWith("http") ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm sm:text-base md:text-lg"
              >
                {item.title}
                <img className="h-4 sm:h-2 ml-2" src={news} alt="news" />
              </a>
            ) : (
              <Link
                to={item.url}
                className="flex items-center text-sm sm:text-base md:text-lg"
              >
                {item.title}
                <img className="h-4 sm:h-2 ml-2" src={news} alt="news" />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsHead;
