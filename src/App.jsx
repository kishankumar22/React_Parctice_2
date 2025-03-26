import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import AcademicsPage from './pages/AcademicsPage';
import RegistrationForm from './pages/RegistrationForm';
import ContactPage from './pages/ContactPage';
import PdfPage from './components/header/PdfPage';
// import Gallery from './components/home/Gallery';
import GalleryPage from './pages/GalleryPage';
import Career from './components/academics/Career';
import Courses from './components/academics/Courses';
import Placement from './components/academics/Placement';
import AdmissionProcess from './components/admissions/AdmissionProcess';
import Faculity from './components/academics/Faculity';
import Infrastructure from './components/academics/Infrastructure';

import Misc from './components/academics/Misc';
import Facilities from './components/academics/Facilities';
import LatestPostPage from './components/academics/LatestPostPage';

import Chairman from './components/academics/Chairman';
import Principal from './components/academics/Principal';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/chairman" element={<Chairman/>}/>
        <Route path="/principal" element={<Principal/>}/>
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pdfpage" element={<PdfPage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/admission-process" element={<AdmissionProcess />} />
        <Route path="/faculity" element={<Faculity />} />
        <Route path="/misc" element={<Misc/>} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/campus/gallaryPage" element={<GalleryPage />} />
        <Route path="/post/:slug" element={<LatestPostPage/>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;