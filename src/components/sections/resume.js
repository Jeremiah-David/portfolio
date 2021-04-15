
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import Pdf from './Pdf'
import resumePng from '../../resume.png'
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

    <a href={resume} download >
        <img className="resumePng" src={resumePng} />
      <h5 className="downloadResume">Click to download Resume PDF</h5>
    </a>
      
     </div>
    </>
  );
}
  
export default MyResume;