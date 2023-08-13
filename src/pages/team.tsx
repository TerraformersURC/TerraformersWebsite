import { useEffect, useState } from "react";
import RotatedContentBar from "./components/RotatedContentBar";
import VertSpacer from "./components/VertSpacer";
import MemberExplorer from "./components/MemberExplorer";

import Image from "next/image";
import TerraformersImg from "../../public/WhoAreTheTerraformers.png";
import { DynamicFooter, DynamicHeader } from ".";

import Membercard from "./components/MemberCard";

import useSWR from 'swr';

type Member = {
    name: string,
    desc: string,
    linkedin: string,
    instagram: String,
    src: string
}

export function TeamSection() {
    const [members, setMembers] = useState<Member[] | null>(null);
    useEffect(() => {
        async function fetchMembers() {
            const response = await fetch("/api/hello");
            const data = (await response.json()).people;
            setMembers(data);
        }
        fetchMembers();
    }, []);

    // Handle the loading state
    if (!members) return <div>Loading members...</div>;

    return (<div id="team">
  
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
  
        <div style={{width: "100%", textAlign: "center"}}>
            {members.map( (member: { name: any; src: any; desc: any; linkedin: any; instagram: any; }) => (
                <Membercard 
                    name={member.name}
                    src={member.src}
                    desc={member.desc}
                    linkedin={member.linkedin}
                    instagram={member.instagram}
                    key={member.src}
                />
            ))}
        </div>
        <VertSpacer/>
  
    </div>);
}

export default function Team() {
    return (<main className="flex min-h-screen flex-col items-center justify-betsween p-10">
        <DynamicHeader/>
        
        <TeamSection/>

        <DynamicFooter/>
    </main>);
}