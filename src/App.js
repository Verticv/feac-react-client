import "./App.css";
import { TypeAnimation } from "react-type-animation";
import BG from "./assets/bg.mp4";
import X from "./assets/x.png";
import music from "./assets/music.mp3";
import { useEffect, useState } from "react";
import { SiOpensea } from "react-icons/si";
import { PiSpeakerSimpleHighFill, PiSpeakerSimpleXFill } from "react-icons/pi";
import "./utils/slide.css";

function App() {
  const [radius, setRadius] = useState(0);
  //inside your component function.
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(music)); //this will prevent rendering errors on NextJS since NodeJs doesn't recognise HTML tags neither its libs.
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRadius(radius + 1);
    }, 10);

    return () => clearInterval(intervalId); //This is important
  }, [radius]);

  return (
    <div className="w-screen relative font-vt h-screen wrap">
      <audio id="audio" loop muted autoPlay>
        <source src={music} type="audio/mp3" />
      </audio>
      <div className="w-screen h-16 px-8 flex items-center justify-between fixed z-50 bg-opacity-50 ">
        <button className=" flex space-x-4 items-center">
          <p className="text-5xl hover:text-yellow-200">FEAC</p>
          <button
            className="rounded-full flex items-center justify-center text-black  hover:text-yellow-200 pt-0.5"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <PiSpeakerSimpleHighFill className="w-6 h-6" /> : <PiSpeakerSimpleXFill className="w-6 h-6" />}
          </button>
        </button>
        <div className="flex space-x-4 items-center">
          <SiOpensea className="w-8 h-8 hover:text-yellow-200 cursor-pointer" />
          <div className="bg-black w-8 h-8 flex items-center justify-center rounded-full">
            <img src={X} className="w-7 h-7 rounded-full" alt="" />
          </div>
        </div>
      </div>
      <div
        style={{ minHeight: "calc(200svh - 3.5rem)" }}
        className="p-4 absolute top-16 flex justify-between w-full text-gray-500 space-x-4 px-8 overflow-y-auto z-20  "
      >
        <div className="w-full">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `Once upon a time, in a world where the tech-savvy and the artistic minds collided, a group of daring pioneers emerged as the 'Fucking Early Adopted Club.'\n 
          Yes, you heard that right, they were so early to adopt new technology that they practically had their own time zone!\n
          `,
            ]}
            wrapper="span"
            speed={65}
            style={{ fontSize: "1.5rem", whiteSpace: "pre-line" }}
          />
        </div>
        <div className="w-full">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `Their journey began when they stumbled upon the mystical Apple Vision Pro. \n
          The club members hailed themselves as "fucking early adopted" because they were the first ones to explore the wonders of this visionary tool.\n
          It was like seeing into the future, only with an artsy twist!\n
          `,
            ]}
            wrapper="span"
            speed={65}
            style={{ fontSize: "1.5rem", whiteSpace: "pre-line" }}
          />
        </div>
        <div className="w-full">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `In the club, everyone was a hype artist, and their creative genius knew no bounds.\n
              They embraced the Apple Vision Pro and unleashed its potential to create masterpieces that transcended imagination.\n
              Each piece of art had a touch of tech wizardry and an explosion of hype, making their works the talk of the digital town.
          `,
            ]}
            wrapper="span"
            speed={65}
            style={{ fontSize: "1.5rem", whiteSpace: "pre-line" }}
          />
        </div>
        <div className="w-full">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `But the club didn't stop there; they had bigger dreams in mind. They decided to embark on a mission to bring nature to the realm of space computing. Thus, the idea of the "Nature Render Image" for the Vision Pro app was born. With this third app during the space computing era, they aimed to merge the digital world with the serene beauty of nature.`,
            ]}
            wrapper="span"
            speed={65}
            style={{ fontSize: "1.5rem", whiteSpace: "pre-line" }}
          />
        </div>
        <div className="w-full">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `Using their combined skills and expertise, the Fucking Early Adopted Club set out to create the most awe-inspiring, window-into-nature experience for users. Picture this: you're working on your computer, and suddenly, the Vision Pro app identifies your window and fills it with a breathtaking nature render image. It's like having a virtual nature retreat right at your desk!`,
            ]}
            wrapper="span"
            speed={65}
            style={{ fontSize: "1.5rem", whiteSpace: "pre-line" }}
          />
        </div>
        <div className="w-full">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `As the club continued to grow, they attracted artists, tech enthusiasts, and nature lovers from all corners of the digital universe. Each day brought new challenges and opportunities for creative brilliance. They organized virtual art exhibitions that made the metaverse gasp in admiration.`,
            ]}
            wrapper="span"
            speed={65}
            style={{ fontSize: "1.5rem", whiteSpace: "pre-line" }}
          />
        </div>
        <div className="w-full">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `One day, they even dared to ask Siri to join the club. After all, Siri had witnessed their impressive artistry and undeniable passion for technology. Though Siri politely declined the offer, the club members found humor in their audacious request.
              `,
            ]}
            wrapper="span"
            speed={65}
            style={{ fontSize: "1.5rem", whiteSpace: "pre-line" }}
          />
        </div>
        <div className="w-full">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `As the story of the Fucking Early Adopted Club spread far and wide, the world couldn't help but join in on the joke. Their journey from being tech geeks to visionary artists and nature enthusiasts became an internet sensation, with memes, GIFs, and parodies dedicated to their unique quest.
              `,
            ]}
            wrapper="span"
            speed={65}
            style={{ fontSize: "1.5rem", whiteSpace: "pre-line" }}
          />
        </div>
        <div className="w-full">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `And so, the Fucking Early Adopted Club continued to ride the wave of innovation and laughter, leaving a trail of creative inspiration and amusement wherever they went. Their NFT project and artistic endeavors became legendary, forever etched into the annals of the metaverse in a fun-loving, light-hearted way. And the moral of the story? Embrace technology, explore creativity, and never be afraid to find humor in the midst of your wildest ventures.
              `,
            ]}
            wrapper="span"
            speed={65}
            style={{ fontSize: "1.5rem", whiteSpace: "pre-line" }}
          />
        </div>
      </div>
      <div className="w-full flex justify-center fixed z-10 pr-7">
        <video
          style={{ borderRadius: radius }}
          src={BG}
          // width="750"
          // height="500"
          muted
          autoPlay
          className="h-screen"
          loop
        ></video>
      </div>
    </div>
  );
}

export default App;
