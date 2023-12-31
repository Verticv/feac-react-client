import React, { useEffect, useState } from "react";
// import { ethers, BigNumber } from "ethers";
import feacNFT from "./FeacNFT.json";
import axios from "axios";
const { ethers } = require("ethers");

const feacNFTAddress = "0xf676a7B25d1dD1DC86362bAEB58474a2BfD5D318";

const Main = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  useEffect(() => {
    const input = 'ghjk'
    const getJsons = async () => {
      return { a: (await axios.get('https://seongilshinamg.s3.ap-northeast-2.amazonaws.com/a.json')).data, b: (await axios.get('https://seongilshinamg.s3.ap-northeast-2.amazonaws.com/b.json')).data }
    }
    getJsons().then((jsons) => {
      console.log(jsons.a.includes(input), jsons.b.includes(input))
    })
  }, [])

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(feacNFTAddress, feacNFT.abi, signer);

      try {
        const valueInWei = ethers.parseEther((0.001 * mintAmount).toString());
        const response = await contract.mint(mintAmount, {
          value: valueInWei,
        });
        console.log("Response : ", response);
      } catch (err) {
        console.log("error : ", err);
      }
    }
  }

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <div>
      <div
        style={{ minHeight: "calc(100svh - 4rem)" }}
        className="p-4 absolute top-16 w-full text-white space-x-4 px-8 overflow-y-auto z-20 flex-col flex items-center justify-center"
      >
        <div className="bg-black text-white flex flex-col items-center p-8 px-12 rounded-2xl bg-opacity-80">
          <h1 className="text-white text-8xl h-16 flex items-center">FEAC</h1>
          <h2 className="mt-4 text-2xl">F!@#ing Early Adopted Club(FEAC).</h2>
          {isConnected ? (
            <>
              <div className="flex h-10 items-center mt-8 space-x-4">
                <button
                  className="text-6xl h-10 w-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-yellow-200"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <div className="text-black h-10 w-48 rounded-full text-center text-4xl outline-none bg-white">
                  {mintAmount}
                </div>
                <button
                  className="text-6xl h-10 w-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-yellow-200"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
              <button
                className="w-full bg-white text-black rounded mt-8 h-12 text-2xl hover:bg-yellow-200"
                onClick={handleMint}
              >
                Mint Now
              </button>
            </>
          ) : (
            <button
              className="w-full bg-white text-black rounded mt-8 h-12 text-2xl hover:bg-yellow-200"
              onClick={connectAccount}
            >
              Connect wallet to Mint.
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
