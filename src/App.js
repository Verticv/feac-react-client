import "./App.css";
import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import VideoJS from "./VideoJS";

function App() {
  const [audio] = useState(typeof Audio !== "undefined" && new Audio("https://curiyus.s3.amazonaws.com/music.mp3")); //this will prevent rendering errors on NextJS since NodeJs doesn't recognise HTML tags neither its libs.
  const [isPlaying, setIsPlaying] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const playerRef = useRef(null);

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
      <NavBar accounts={accounts} setAccounts={setAccounts} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
      <Main accounts={accounts} setAccounts={setAccounts} />
      <div className="w-full flex justify-center fixed z-10">
        <div style={{ height: "100svh", width: "calc(100svh / 1060 * 1640)" }} className="h-full w-full ">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      </div>
    </div>
  );
}

export default App;
