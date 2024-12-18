import React from "react";
import "./header.css";
import logo1 from "../../assets/images/logo1.jpg"; // Replace with your logo
import logo2 from "../../assets/images/logo2.png"; // Replace with your logo
import SocialLinks from "../socialLinks/SocialLinks";

const Header = () => {
  return (
    // <header className="header-container">
    //   {/* Parent container wrapping all 4 elements */}
    //   <div className="header-content">
        
    //     {/* Left Logo */}  
    //     <div className="header-left">
    //       <img src={logo1} alt="University Logo 1" className="logo" />
    //     </div>
        
    //     {/* Header Text */}
    //     <div className="header-text">
    //       <h1>दीनदयाल उपाध्याय गोरखपुर विश्‍वविद्यालय</h1>
    //       <h3>Deen Dayal Upadhyaya Gorakhpur University</h3>
    //       <b>(Accredited A++ by NAAC)</b>
    //     </div>
        
    //     {/* Social Links */}
    //     <div className="social-links-container">
    //       <SocialLinks />
    //     </div>
        
    //     {/* Right Logo */}
    //     <div className="right-logo-container">
    //       <img src={logo2} alt="University Logo 2" className="logo right-logo" />
    //     </div>
        
    //   </div>
    // </header>
    <>
    <div class=" flex flex-row header">
  <div class="basis-2/4 header-left flex flex-row">
         <img src={logo1} alt="University Logo 1" className="logo"/>
         <div className="flex-col p-2">
          <h1 className="text-red-700 font-bold font-sans">दीनदयाल उपाध्याय गोरखपुर विश्‍वविद्यालय</h1>
          <h3 className="text-black-500 font-bold font-sans">Deen Dayal Upadhyaya Gorakhpur University</h3>
          <p className="text-base text-black my-1">(Accredited A++ by NAAC)</p>
    </div>   
 
  </div>

  <div className=" basis-2/4 header-right flex flex-row justify-end items-center ">
      
        <div className="">
          <SocialLinks />
        </div>
       
        <div className="right-logo-container">
          <img src={logo2} alt="University Logo 2" className="logo right-logo" />
        </div>
    </div>
</div>
    </>
  );
};

export default Header;
