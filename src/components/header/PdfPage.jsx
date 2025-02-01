
import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../layout/Layout';

const PdfPage = () => {
  const location = useLocation();
  const { pdfUrl } = location.state || {}; // Get the PDF URL from the state

  return (
    <Layout>
      <div className='h-[75vh]'>
        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="PDF Viewer"
          />    
        ) : (
          <p>No PDF file available.</p>
        )}
      </div>
    </Layout>
  );
};

export default PdfPage;
