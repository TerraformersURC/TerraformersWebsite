import { useEffect, useState } from "react";
import VertSpacer from "./components/VertSpacer";

import Image from "next/image";
import OurRover from "../../public/OurRover.png";
import { DynamicFooter, DynamicHeader } from ".";


/** Support Section */
export function SupportSection() {
    const [onPhone, _setOnPhone] = useState(true);
  
    useEffect(() => {
      function handleResize() {
        _setOnPhone(window.innerHeight > window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
  
      handleResize();
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return (
      <div>
        <h1 id="support"> Support Us! </h1>
        { onPhone ?
          <div>
            <Image
              priority
              className="content-img"
              src={OurRover}
              width={450}
              height={450}
              alt=""
            />
            <div>
              <p>
                <br/><br/><br/>
                Making a fully functional Mars rover is no easy task, that’s why we need your help! 
                Supporting our program via our tier system gets you increasingly cool rewards and 
                helps keep the rover up and running.
              </p>
              {/* <VertSpacer/>
              <LearnMoreButton text="Learn more"/> */}
            </div>
          </div>
           :
          <div className="content-flex-container">
            <Image
              priority
              className="content-img"
              id="our-rover"
              src={OurRover}
              width={450}
              height={450}
              alt=""
            />
            <div>
              <p>
                <br/><br/><br/>
                Making a fully functional Mars rover is no easy task, that’s why we need your help! 
                Supporting our program via our tier system gets you increasingly cool rewards and 
                helps keep the rover up and running.
                <br/><br/>
                Sponsors get 501c3 tax benefits.
              </p>
              {/* <VertSpacer/>
              <LearnMoreButton text="Learn more"/> */}
            </div>
          </div>
        }
      </div>
    );
}

export default function Support() {
    return (<main className="flex min-h-screen flex-col items-center justify-betsween p-10">
      <DynamicHeader/>
      
      <SupportSection/>
      
      <DynamicFooter/>
    </main>);
}