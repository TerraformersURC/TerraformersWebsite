import { useEffect, useState } from "react";
import RotatedContentBar from "./components/RotatedContentBar";
import VertSpacer from "./components/VertSpacer";

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
      <RotatedContentBar> { /* Computer View */}
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
            We’re a group of programmers, engineers, designers, and amateur scientists from UMD out to 
            create a functional rover here on Earth. We’re competing in Utah in 2024 with other rovers 
            from around the globe, and will hopefully bring back a win for UMD! 
          </p>
        </div>
      </RotatedContentBar>
        :
      <RotatedContentBar> { /* Phone View */}
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
            We’re a group of programmers, engineers, designers, and amateur scientists from UMD out to
            create a functional rover here on Earth. We’re competing in Utah in 2024 with other rovers 
            from around the globe, and will hopefully bring back a win for UMD! 
          </p>
        </div>
        <VertSpacer/>
      </RotatedContentBar>;
}

export default function About() {
    return (<main className="flex min-h-screen flex-col items-center justify-betsween p-10">
        <DynamicHeader/>

        <AboutContent/>

        <DynamicFooter/>
    </main>);
}