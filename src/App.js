import "./App.css";
import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
// import Main from "./Main";
import VideoJS from "./VideoJS";
import axios from "axios";

function App() {
  const [audio] = useState(typeof Audio !== "undefined" && new Audio("https://curiyus.s3.amazonaws.com/music.mp3")); //this will prevent rendering errors on NextJS since NodeJs doesn't recognise HTML tags neither its libs.
  const [isPlaying, setIsPlaying] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [show, setShow] = useState(false);
  const [addressValue, setAddressValue] = useState("");
  const [addressStatus, setAddressStatus] = useState(null);
  const playerRef = useRef(null);

  const validate = () => {
    const getJsons = async () => {
      return { a: (await axios.get('https://seongilshinamg.s3.ap-northeast-2.amazonaws.com/a.json')).data, b: (await axios.get('https://seongilshinamg.s3.ap-northeast-2.amazonaws.com/b.json')).data }
    }
    getJsons().then((jsons) => {
      if (jsons.b.includes(addressValue) && jsons.a.includes(addressValue)) {
        setAddressStatus("BOTH")
      }
      if (jsons.b.includes(addressValue)) {
        setAddressStatus("OG")
      } else if (jsons.a.includes(addressValue)) {
        setAddressStatus("FEALIST")
      } else {
        setAddressStatus("none")
      }
    })
  }

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    muted: true,
    sources: [
      {
        src: "https://seongilshinamg.s3.ap-northeast-2.amazonaws.com/feac_main_real.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      // videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      // videojs.log("player will dispose");
    });
  };

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  return (
    <div className="w-screen relative font-vt h-screen wrap overflow-x-hidden bg-black">
      <audio id="audio" preload="none" loop muted autoPlay>
        <source src={"https://curiyus.s3.amazonaws.com/music.mp3"} type="audio/mp3" />
      </audio>
      <NavBar accounts={accounts} setAccounts={setAccounts} setIsPlaying={setIsPlaying} isPlaying={isPlaying} setShow={setShow} />
      <div className="w-full relative flex items-center h-full justify-center fixed z-10">
        {show && (
          <div className="absolute flex bg-black w-96 shadow flex-col">
            <p className="text-white text-lg">WALLET CHECKER</p>
            <div className="flex">
              <input className="w-80 h-10 bg-white z-50 rounded px-3 outline-none" placeholder="Wallet address" value={addressValue} onChange={e => setAddressValue(e.target.value)} />
              <button className="px-4 h-10 bg-white rounded ml-2" onClick={validate}>Check</button>
            </div>
            <p className="text-white text-lg">{addressStatus === "BOTH" ? "OG FEAC & FEALISTED" : addressStatus === "none" ? "NOT FEALISTED" : addressStatus === "FEALIST" ? "FEALISTED" : addressStatus === "OG" ? "OG FEAC" : ""}</p>

          </div>
        )}
        {!show && (
          <div style={{ height: "100svh", width: "calc(100svh / 1060 * 1640)" }} className=" h-full w-full ">
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
