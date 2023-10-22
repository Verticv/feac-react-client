import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import FEAC_PDF from "../assets/feac.pdf"
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const Mission = () => {
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`



  return (

    <div style={{ height: 'calc(100svh - 5rem)' }} className='w-full h-full bg-gray-200 flex flex-col items-center justify-center'>

      <div style={{ width: window.innerWidth < 780 ? window.innerWidth : window.innerWidth / 5 * 3, height: window.innerWidth < 780 ? window.innerWidth / 16 * 9 : window.innerWidth / 5 * 3 / 16 * 9 }} className="bg-gray-300">
        <Document file={FEAC_PDF}>
          <Page pageNumber={pageNumber} width={window.innerWidth < 780 ? window.innerWidth : window.innerWidth / 5 * 3} />
        </Document>
      </div>
      <div className='flex items-center space-x-4 mt-4'>
        <button onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}><AiOutlineArrowLeft /></button>
        <p className='text-sm text-gray-600'>
          Page {pageNumber} of 9
        </p>
        <button onClick={() => pageNumber < 9 && setPageNumber(pageNumber + 1)}><AiOutlineArrowRight /></button>
      </div>


    </div>
  )
}

export default Mission