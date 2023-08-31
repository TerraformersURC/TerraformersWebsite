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
        <h1 id="projects"> Projects </h1>
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
          <div></div>
          <Image
            priority
            className="content-img"
            id="arm"
            src={Arm}
            width={450}
            height={450}
            alt=""
          />
        </div>
        <p>
          <br/>
          The Terraformers are constantly working to improve our rover and reach out to the community. 
          Find out what we’re working on now here!
        </p>
      </div>
    );
}

export default function Projects() {
    return (<main className="flex min-h-screen flex-col items-center justify-between p-10">
        <DynamicHeader/>
        
        <ProjectsSection/>

        <DynamicFooter/>
    </main>);
}