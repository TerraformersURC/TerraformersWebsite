import { useEffect, useState } from "react";
import VertSpacer from "./components/vert-spacer";

import Image from "next/image";
import TearsAndRewardsTable from "../../public/sponsorship_tears_and_rewards.png"
import SponsorFlyer from "../../public/sponsor_flyer_icon.png"
import { DynamicFooter, DynamicHeader } from ".";
import Link from "next/link";

export function RewardsProgram() {
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
    <Image
      priority
      className="content-img"
      style={{width: "60%"}}
      src={TearsAndRewardsTable}
      width={450}
      height={450}
      alt=""
    /> :
    <Image
      priority
      className="content-img"
      style={{width: "100%"}}
      src={TearsAndRewardsTable}
      width={450}
      height={450}
      alt=""
    />;
}

export function FlyerDetail() {
  return (<div style={{width: "70%"}}>
    <Link href="\sponsor_flyer.pdf" target="_blank" style={{paddingLeft: "20%"}}>
      <Image
        priority
        style={{width: "100%"}}
        src={SponsorFlyer}
        width={450}
        height={450}
        alt=""
      />
    </Link>
    <p>
      <Link href="\sponsor_flyer.pdf" target="_blank"> Here </Link> is the flyer we hand out to our sponsors.
    </p>
    
    <VertSpacer/>
  </div>);
}

export default function Sponsors() {
  return (<main className="flex min-h-screen flex-col items-center justify-between p-10">
    <DynamicHeader/>

    <h1 id="support"> Our Rewards Program </h1>

    <p>
      <br/>
      Making a fully functional Mars rover is no easy task, that’s why we need your help! 
      Supporting our program via our tier system gets you increasingly cool rewards and 
      helps keep the rover up and running.
    </p>
    <VertSpacer/>

    <RewardsProgram/>
    <VertSpacer/>

    <p>
      <br/>
      All sponsors recieve 501c3 tax benefits.
    </p>
    <VertSpacer/>

    <FlyerDetail/>

    <DynamicFooter/>
  </main>);
}