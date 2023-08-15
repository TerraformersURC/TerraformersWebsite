import Background from "./components/background";
import Navbar from "./components/navbar";
import Membercard from "./components/MemberCard";
import VertSpacer from "./components/VertSpacer";
import LearnMoreButton from "./components/LearnMoreButton";

import RotatedContentBar from "./components/RotatedContentBar";

import Image from "next/image";

import Rover from "../../public/Rover.png";
import Arm from "../../public/Arm.png";
import Suspension from "../../public/Suspension.png";
import TerraformersImg from "../../public/WhoAreTheTerraformers.png";
import OurRover from "../../public/OurRover.png";
import MemberExplorer from "./components/MemberExplorer";
import Head from "next/head";

import dynamic from 'next/dynamic'

import { useState, useEffect } from 'react'

import Script from 'next/script'
import Link from "next/link";

/** Dynamic headers */
export const DynamicHeader = dynamic(() => import('./components/header'), {
  loading: () => <p>Loading...</p>,
})

export const DynamicFooter = dynamic(() => import('./components/footer'), {
  loading: () => <p>...</p>,
})

/* Utility Functions */

/* Page Sections */

/** About Section */
export function AboutSection() {
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
          style={{objectFit: 'cover'}}
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
      <div style={{paddingLeft: "20%", paddingRight: "20%"}}>
        <p>
          <br/>
          The Terraformers are constantly working to improve our rover and reach out to the community. 
          Find out what we’re working on now here!
        </p>
      </div>
    </div>
  );
}

/** Team Section */
export function TeamSection() {
  return (
    <RotatedContentBar>
      <div id="team"/>

      <div style={{textAlign: "center", width: "100%", marginRight: "1rem"}}>
        <div style={{paddingLeft: "10%", paddingRight: "10%"}}>
          <Image
            priority
            className="content-img"
            style={{width: "80vw"}}
            src={TerraformersImg}
            width={1060}
            height={196}
            alt=""
          />
        </div>
        
        <div id="who-are-we" style={{marginRight: "1rem"}}>
          <p>
            <br/><br/><br/>
            We’re a group of programmers, engineers, designers, and amateur scientists from UMD 
            out to create a functional rover here on Earth. We’re competing in Utah in 2024 with 
            other rovers from around the globe, and will hopefully bring back a win for UMD! 
          </p>
        </div>
      </div>
      <VertSpacer/>

      <div style={{paddingLeft: "2rem", paddingRight: "3rem"}}>
        <MemberExplorer/>
      </div>
      <VertSpacer/>
      <VertSpacer/>
    </RotatedContentBar>
  );
}

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
    <div style={{paddingLeft: "20%", paddingRight: "20%"}}>
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

            <VertSpacer/>
            <Link href="/support"> Learn More </Link>
          </div>
        </div>
      }
    </div>
  );
}

/** Contacts Section
 * Our contact information.
 */
export function ContactsSection() {
  return (
    <div style={{width: "100%", textAlign: "center"}}>
      <h1 id="contact"> Contact Us </h1>
      <p>
        You can reach us at terraformers@terraformers.tech
      </p>
    </div>
  );
}

/** Layout of the home page */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10" style={{overflowX: "hidden"}}>
      <DynamicHeader/>
      
      <div>
        <AboutSection/>
        <VertSpacer/>
        
        <ProjectsSection/>
        <VertSpacer/>

        <TeamSection/>
        <VertSpacer/>
        
        <SupportSection/>
      </div>

      <DynamicFooter/>
    </main>
  )
}