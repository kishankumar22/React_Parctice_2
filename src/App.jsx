import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/header/Navbar';
import Footer from './components/footer/Footer';


function App() {
  return (
    <Router  basename="/React_Parctice_2
    ">

      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
   </Router>
  );
}

export default App;
