import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import AcademicsPage from './pages/AcademicsPage';
import RegistrationForm from './pages/RegistrationForm';
import ContactPage from './pages/ContactPage';
import PdfPage from './components/header/PdfPage';
import Gallery from './components/home/Gallery';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pdfpage" element={<PdfPage />} />
        <Route path="/campus/gallary" element={<Gallery />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;