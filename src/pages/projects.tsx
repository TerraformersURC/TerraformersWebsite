import { useEffect, useState } from "react";
import VertSpacer from "./components/vert-spacer";

import Image from "next/image";
import Suspension from "../../public/Suspension.png";
import Arm from "../../public/Arm.png";
import { DynamicFooter, DynamicHeader } from ".";

/** Projects Section */
export function ProjectsSection() {
    return (
      <div>
        
        
      </div>
    );
}

export default function Projects() {
    return (<main className="flex min-h-screen flex-col items-center justify-between p-10">
        <DynamicHeader/>
        <h1 id="projects"> Projects </h1>
        
        <ProjectsSection/>

        <p>
          <br/>
          The Terraformers are constantly working to improve our rover and reach out to the community. 
          Find out what we’re working on now here!
        </p>

        <VertSpacer/>

        <div className="content-flex-container">
          <Image
            priority
            className="content-img"
            id="suspension"
            src={Suspension}
            width={450}
            height={450}
            alt=""
          />
          <p>
            Our novel Tri Tracks extend our suspension to overcome the smaller debris on a simulated martian surface.
          </p>
        </div>

        <VertSpacer/>

        <div className="content-flex-container">
          <Image
            priority
            className="content-img"
            id="arm"
            src={Arm}
            width={450}
            height={450}
            alt=""
          />
          <p>
            An interesting rendition of a potential arm reduces the moving parts required to achieve 6 degrees of freedom.
          </p>
        </div>

        <VertSpacer/>

        <DynamicFooter/>
    </main>);
}