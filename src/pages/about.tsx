import { useEffect, useState } from "react";
import RotatedContentBar from "./components/rotated-content-bar";
import VertSpacer from "./components/vert-spacer";
import PhotoExplorer from "./components/photo-explorer"

import Image from "next/image";
import Rover from "../../public/Rover.png";
import { DynamicFooter, DynamicHeader } from ".";

export function AboutContent(){
    const [onPhone, _setOnPhone] = useState(true);

    useEffect(() => {
      function handleResize() {
        _setOnPhone(window.innerHeight > window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
  
      handleResize();
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return !onPhone ? 
      <div>
        <h1 id="about"> About the Terraformers </h1>
  
        <div className="content-flex-container">
          <Image
            priority
            className="content-img"
            id= "Rover"
            src={Rover}
            width={450}
            height={450}
            alt=""
          />
  
          <p>
            <br/><br/><br/>
            We’re the Terraformers, UMD’s club for conquering Mars right here on Earth! We’re building, 
            programming, and perfecting a real Mars Rover to compete in a competition for universities 
            around the globe this summer. Our team of engineers, programers, and scientists are working 
            hard to get our rover ship shape for our competition in Utah, and bring home a win! Our rover 
            will be doing experiments, conquering obstacles, and all sorts of things as if it were really 
            on the red planet. Whether you’d like to join the team, sponsor the journey, or just look around, 
            we’re happy to have you aboard!
          </p>
        </div>
      </div>
        :
      <div> { /* Phone View */}
        <h1 id="about"> About the Terraformers </h1>
  
        <Image
          priority
          className="content-img"
          id= "Rover"
          src={Rover}
          width={450}
          height={450}
          alt=""
        />
  
        <div>
          <p>
            <br/><br/>
            We’re the Terraformers, UMD’s club for conquering Mars right here on Earth! We’re building, 
            programming, and perfecting a real Mars Rover to compete in a competition for universities 
            around the globe this summer. Our team of engineers, programers, and scientists are working 
            hard to get our rover ship shape for our competition in Utah, and bring home a win! Our rover 
            will be doing experiments, conquering obstacles, and all sorts of things as if it were really 
            on the red planet. Whether you’d like to join the team, sponsor the journey, or just look around, 
            we’re happy to have you aboard!
          </p>
        </div>
        <VertSpacer/>
      </div>;
}

export default function About() {
    return (<main className="flex min-h-screen flex-col items-center justify-betsween p-10">
        <DynamicHeader/>

        <AboutContent/>

        <PhotoExplorer/>
        
        <DynamicFooter/>
    </main>);
}