import { useEffect, useState } from "react";
import Membercard from "./member-card";

import useSWR from 'swr';

type Member = {
    name: string,
    desc: string,
    linkedin: string,
    src: string
}  

export default function MemberExplorer() {
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

    return (
        <div className="member-explorer">
            {
                members.map( (member: { name: any; src: any; desc: any; linkedin: any; }) => (
                    <Membercard 
                        name={member.name}
                        src={member.src}
                        desc={member.desc}
                        linkedin={member.linkedin}
                        key={member.src}
                    />
                ))
            }
        </div>
    );
}