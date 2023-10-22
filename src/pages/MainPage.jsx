import React from 'react'
import logo from "../assets/logo.png"
import main from "../assets/main.png"
import { Link } from 'react-router-dom'
import { SiOpensea } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'

const MainPage = () => {
  return (
    <div style={{ minHeight: "calc(100svh - 5rem)" }} className="bg-gray-200 px-5 lg:px-24 w-full h-full ">
      <div className="flex h-20 space-x-8 items-center justify-end py-4 z-50 relative">
        <Link to="https://opensea.io/collection/feac/drop">
          <button>
            <SiOpensea className="text-black w-8 h-8" />
          </button>
        </Link>
        <Link to="https://twitter.com/WE_ARE_FEAC">
          <button>
            <FaXTwitter className="text-black w-6 h-6" />
          </button>
        </Link>
      </div>
      <div style={{ minHeight: "calc(100svh - 13rem)", height: window.innerWidth > 800 && "calc(100svh - 13rem)" }} className="h-full flex flex-col-reverse sm:flex-row items-center justify-center z-10 pb-20">
        <div className='sm:w-1/2 mt-8 sm:mt-0'>
          <img src={logo} alt="" className='h-32 object-contain' />
          <div className='flex items-center '>
            <p className='mt-6 sm:mt-12 text-xl text-gray-800'>F_-_ing Early Adopted Club</p>
          </div>
        </div>
        <div className='sm:w-1/2 pt-8 pb-4'>
          <img src={main} alt="" className='w-full h-full object-contain rounded-lg' />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col h-24 sm:h-12 items-center justify-between py-4 z-50 relative bg-red-10 font-vt text-xl text-gray-400">
        <p>Designed in NY, Operated in Seoul</p>
        <p>FOUNDED 2023 by F*ing Early Adopters</p>
      </div>

    </div>
  )
}

export default MainPage