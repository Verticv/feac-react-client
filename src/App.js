import "./App.css";
import X from "./assets/x.png";
import { useEffect, useRef, useState } from "react";
import { SiOpensea } from "react-icons/si";
import { PiSpeakerSimpleHighFill, PiSpeakerSimpleXFill } from "react-icons/pi";
import VideoJS from "./VideoJS";
import { TypeAnimation } from "react-type-animation";

function App() {
  const [audio] = useState(typeof Audio !== "undefined" && new Audio("https://curiyus.s3.amazonaws.com/music.mp3")); //this will prevent rendering errors on NextJS since NodeJs doesn't recognise HTML tags neither its libs.
  const [isPlaying, setIsPlaying] = useState(false);
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
      <audio id="audio" preload="none" loop muted autoPlay autoplay>
        <source src={"https://curiyus.s3.amazonaws.com/music.mp3"} type="audio/mp3" />
      </audio>
      <div className="w-screen h-16 px-8 flex items-center justify-between fixed z-50 bg-opacity-50 ">
        <div className=" flex space-x-4 items-center">
          <button>
            <p className="text-5xl hover:text-yellow-200 text-white">FEAC</p>
          </button>
          <button
            className="rounded-full flex items-center justify-center text-black  hover:text-yellow-200 pt-0.5"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <PiSpeakerSimpleHighFill className="w-6 h-6" /> : <PiSpeakerSimpleXFill className="w-6 h-6" />}
          </button>
        </div>
        <div className="flex space-x-4 items-center">
          <SiOpensea className="w-8 h-8 hover:text-yellow-200 cursor-pointer text-white" />
          <div className="bg-black w-8 h-8 flex items-center justify-center rounded-full">
            <img src={X} className="w-7 h-7 rounded-full" alt="" />
          </div>
        </div>
      </div>
      <div
        style={{ minHeight: "calc(200svh - 3.5rem)" }}
        className="p-4 absolute top-16 flex justify-between w-full text-white space-x-4 px-8 overflow-y-auto z-20  "
      >
        <div style={{ width: "16%" }} className="w-full">
          <TypeAnimation
            sequence={[
              // 40000,
              `Hello world..
              We are F!@#ing Early Adopted Club(FEAC).
              FEAC was born from the concern of "How should we (artists) respond as new technologies are released daily, and the scope of AI's influence expands daily?" Based on this, we anticipate the mega-hit of Vision Pro and have formulated plans to create a new ecosystem it will bring about.
              `,
            ]}
            wrapper="span"
            speed={65}
            style={{ fontSize: "1.5rem", whiteSpace: "pre-line", textShadow: "#00000050 1px 1px 2px" }}
          />
        </div>
        {/* <div style={{ width: "16%" }} className="w-full">
          <TypeAnimation
            sequence={[
              50000,
              `To begin, we created 5,000 1-of-1 artists, each with their own distintive style. Every member of FEAC will base their creative activities on Vision Pro(or not) till Zuck or Musk lauches NEW-TECH gear.\n
              Let's begin.
              Here's our plan.`,
            ]}
            wrapper="span"
            speed={65}
            style={{ fontSize: "1.5rem", whiteSpace: "pre-line" }}
          />
        </div>
        <div className="w-full text-white">
          <TypeAnimation
            sequence={[
              60000,
              `ROADMAP #1`,
              2500,
              `You know what? Let's not start with elaborate plans. I'm not some genius team member; I'm just a person who loves art. It's like whenever I'm going through tough times, the thought of creating something makes me excited and happy (even if it's short-lived).  I have so many ideas, maybe because I'm always lost in random thoughts?  But executing those ideas always hits obstacles, and the most common reason is, well, money.  It might sound like an excuse, but I truly believe it.  Um... why am I sharing all this? Have you ever experienced something like this?  Going through thoughts, actions, and failures over and over until all those failures and experiences come together, and bam!  You get that eureka moment. As if all the previous failures were meant for that one thing.  For me, that's FEAC - the F!@#ing Early Adopted Club.  Pretty funny, right? In this ever-evolving world where new technologies and their derivatives emerge, it can be tough to keep up, right?  Well, not really. Just ignore it. But I can't simply ignore my love for creation.  So, I've always been refreshing the connection between my brain and the world.  And then, I heard that Apple is launching Vision Pro, but it's still 2024, so there's time.  I felt like this was a chance given to me by Apple. What changes when you put on glasses?  What can you do with them? And then, it hit me. Let's F!@#ing Early Adopt in the Vision Pro ecosystem.  We may not become Apes or Punks, but it's like doing your holiday homework in advance (if you've never done it, sorry).  I dream of having a super hip artist club in the Vision Pro ecosystem, preparing for the second NFT boom through Vision Pro's mega-hit.  How about it? With AR, we can bring all our works and other artists' works into our space. NFTs are finally doing their thing. We'll be the first! In painting, video, 3D, music, fashion, whatever, we'll be the first through Vision Pro.  Collaborating with each other, showcasing to the world, and if we get the opportunity, we can even host exhibitions together.  In a world driven by technology, we'll lead with art. People with a lot to say can even open their own podcasts.  All through Vision Pro. Doesn't it sound fun? These features are going to be unveiled through the FEAC app.  To make it happen, we just need 4,999 more FEAC members (I'm one already), and it'll all flow smoothly.  It might be just my imagination, but it's exhilarating.  If you're interested in joining my imagination and making it happen together, feel free to reach out.  I can't do this alone; it's impossible. Let's all enjoy this together!`,
            ]}
            wrapper="span"
            speed={65}
            style={{ fontSize: "1.5rem", whiteSpace: "pre-line" }}
          />
        </div> */}
      </div>
      <div className="w-full flex justify-center fixed z-10">
        <div style={{ height: "100svh", width: "calc(100svh / 1060 * 1640)" }} className="h-full w-full ">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      </div>
    </div>
  );
}

export default App;
