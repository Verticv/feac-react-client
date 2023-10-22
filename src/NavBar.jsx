import React from "react";
// import { PiSpeakerSimpleHighFill, PiSpeakerSimpleXFill } from "react-icons/pi";
import logo from "./assets/logo.png"
import { Link } from "react-router-dom";

const NavBar = ({ accounts, setAccounts, setIsPlaying, isPlaying }) => {
  // const isConnected = Boolean(accounts[0]);

  // async function connectAccount() {
  //   if (window.ethereum) {
  //     const accounts = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     setAccounts(accounts);
  //   }
  // }

  return (
    <div className="w-screen h-20 px-5 sm:px-10 lg:px-24 flex items-center justify-between z-50 relative">
      <div className="flex space-x-4 items-center">
        <Link to="/">
          <img src={logo} style={{ filter: "brightness(0) invert(1)" }} alt="feac" className="h-7 object-contain" />
        </Link>
        {/* <button
          className="rounded-full flex items-center justify-center text-white  hover:text-yellow-200 pt-0.5"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <PiSpeakerSimpleHighFill className="w-6 h-6" /> : <PiSpeakerSimpleXFill className="w-6 h-6" />}
        </button> */}
      </div>
      <div className="flex space-x-6 sm:space-x-10 items-center">
        {/* <Link to="/mission">
          <button>
            <p className="hover:text-yellow-200 text-white">Mission</p>
          </button>
        </Link> */}
        <Link to="/wallet-checker">
          <button>
            <p className="hover:text-yellow-200 text-white">Wallet checker</p>
          </button>
        </Link>
      </div>

    </div>
  );
};

export default NavBar;
