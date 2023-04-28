import { Membercard } from "./MemberCard";

const members = [
    {name: "Ankit Virgase", desc: "Aero", linkedin: "", instagram: "", src: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="},
    {name: "Mikolaj Kostrzewa", desc: "CompE", linkedin: "", instagram: "", src: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="},
    {name: "Lucas Ballmer", desc: "Csec", linkedin: "", instagram: "", src: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="},
    {name: "Arjun __", desc: "Math", linkedin: "", instagram: "", src: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="},
    {name: "__", desc: "__", linkedin: "", instagram: "", src: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="}
]

export const MemberExplorer = () => {
    return (<div className="member-explorer">
        {
            members.map( member => (
                <Membercard 
                    name={member.name}
                    src={member.src}
                    desc={member.desc}
                    linkedin={member.linkedin}
                    instagram={member.instagram}
                />
            ))
        }
    </div>);
} 