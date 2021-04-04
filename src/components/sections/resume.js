
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import Pdf from './Pdf'

import resume from '../../JeremiahDavidResume.pdf'
  
  
const MyResume = ()=> {
  
    pdfjs.GlobalWorkerOptions.workerSrc = 
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
     const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  return (
    <>
    <div className="resume">
      <Document className="resumeDoc"
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
        >
        <Page pageNumber={pageNumber} />
      </Document>
     </div>
    </>
  );
}
  
export default MyResume;