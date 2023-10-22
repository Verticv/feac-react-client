import axios from 'axios';
import React, { useState } from 'react'

const WalletChecker = () => {

  const [addressValue, setAddressValue] = useState("");
  const [addressStatus, setAddressStatus] = useState(null);

  const validate = () => {
    const getJsons = async () => {
      return { a: (await axios.get('https://seongilshinamg.s3.ap-northeast-2.amazonaws.com/a.json')).data, b: (await axios.get('https://seongilshinamg.s3.ap-northeast-2.amazonaws.com/b.json')).data }
    }
    getJsons().then((jsons) => {
      if (jsons.b.includes(addressValue) && jsons.a.includes(addressValue)) {
        setAddressStatus("BOTH")
      } else if (jsons.b.includes(addressValue)) {
        setAddressStatus("OG")
      } else if (jsons.a.includes(addressValue)) {
        setAddressStatus("FEALIST")
      } else {
        setAddressStatus("none")
      }
    })
  };


  return (
    <div style={{ height: "calc(100svh - 5rem)" }} className="w-full relative flex items-center h-full justify-center fixed z-10">

      <div className=" flex bg-black w-96 shadow flex-col">
        <p className="text-white text-lg">WALLET CHECKER</p>
        <div className="flex">
          <input className="w-80 h-10 bg-white z-50 rounded px-3 outline-none" placeholder="Wallet address" value={addressValue} onChange={e => setAddressValue(e.target.value)} />
          <button className="px-4 h-10 bg-white rounded ml-2" onClick={validate}>Check</button>
        </div>
        <p className="text-white text-lg">{addressStatus === "BOTH" ? "OG FEAC & FEALISTED" : addressStatus === "none" ? "NOT FEALISTED" : addressStatus === "FEALIST" ? "FEALISTED" : addressStatus === "OG" ? "OG FEAC" : ""}</p>
      </div>
    </div>
  )
}

export default WalletChecker