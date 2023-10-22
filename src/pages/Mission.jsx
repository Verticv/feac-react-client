import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

const Mission = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, ] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }
  return (
    <div className='w-full h-full bg-white'>
      <Document file="https://drive.google.com/file/d/11txbMfzSt2_ZItZ1qn1V39tLAz12E_Te/view" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}

export default Mission