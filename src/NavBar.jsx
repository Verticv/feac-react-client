import React from "react";
// import { PiSpeakerSimpleHighFill, PiSpeakerSimpleXFill } from "react-icons/pi";

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
    <div className="w-screen h-16 px-8 flex items-center justify-between fixed z-50 bg-opacity-50 ">
      <div className=" flex space-x-4 items-center">
        <button>
          <p className="text-5xl hover:text-yellow-200 text-white">FEAC</p>
        </button>
        {/* <button
          className="rounded-full flex items-center justify-center text-white  hover:text-yellow-200 pt-0.5"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <PiSpeakerSimpleHighFill className="w-6 h-6" /> : <PiSpeakerSimpleXFill className="w-6 h-6" />}
        </button> */}
      </div>
      <div className="flex space-x-10 items-center">
        {/* {isConnected ? (
          <button>
            <p className="text-3xl text-green-500">CONNECTED</p>
          </button>
        ) : (
          <button onClick={connectAccount}>
            <p className="text-3xl hover:text-yellow-200 text-white">CONNECT WALLET</p>
          </button>
        )} */}
        <button>
          <p className="text-3xl hover:text-yellow-200 text-white">OPENSEA</p>
        </button>
        <a href="https://twitter.com/WE_ARE_FEAC" target="_blank" rel="noopener noreferrer">
          <button>
            <p className="text-3xl hover:text-yellow-200 text-white">X(TWIITER)</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
