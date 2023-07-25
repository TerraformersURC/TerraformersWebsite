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

const DynamicHeader = dynamic(() => import('./components/header'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betsween p-10">
      <DynamicHeader/>

      <div id="home"/>
      <Navbar/>

      <RotatedContentBar>
        <h1 id="about"> About the Terraformers </h1>
        <div className="content-flex-container" id="about">
          <Image
            priority
            className="content-img"
            id="Rover"
            src={Rover}
            width={450}
            height={450}
            alt=""
          />
          <p>
            <br/><br/><br/>
            We’re a group of programmers, engineers, designers, and amateur scientists from UMD out to create a functional rover here on Earth. We’re competing in Utah in 2024 with other rovers from around the globe, and will hopefully bring back a win for UMD! 
          </p>
        </div>
      </RotatedContentBar>

      <VertSpacer/>
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
          The Terraformers are constantly working to improve our rover and reach out to the community. Find out what we’re working on now here!
        </p>
      </div>
      
      <VertSpacer/>
      <RotatedContentBar>
        <div id="team"></div>
        <Image
          priority
          className="content-img"
          id="ter-img"
          src={TerraformersImg}
          width={450}
          height={450}
          alt=""
        />
        <div>
          <p>
            <br/><br/>
            We’re a group of programmers, engineers, designers, and amateur scientists from UMD out to create a functional rover here on Earth. We’re competing in Utah in 2024 with other rovers from around the globe, and will hopefully bring back a win for UMD! 
          </p>
        </div>
        <VertSpacer/>
        
        <div className="vert-spcr"> </div>

        <MemberExplorer/>
        <VertSpacer/>
        <VertSpacer/>
      </RotatedContentBar>

      <div className="vert-spcr"> </div>
      <h1 id="support"> Support Us! </h1>
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
        <div className="f1">
          <p>
            <br/><br/><br/>
            Making a fully functional Mars rover is no easy task, that’s why we need your help! Supporting our program via our tier system gets you increasingly cool rewards and helps keep the rover up and running.
          </p>
          <VertSpacer/>
          <LearnMoreButton text="Learn more"/>
        </div>
      </div>
      <VertSpacer/>
      <h1 id="contact"> Contact Us </h1>
      <p>
        You can reach us at terraformers@terraformers.tech
      </p>
      <VertSpacer/>
      <VertSpacer/>

      <Background/>
    </main>
  )
}

export function Team() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betsween p-10">
      
    </main>
  )
}