import Membercard from "./MemberCard";

const members = [
    {name: "Mikolaj Kostrzewa", desc: "Project Manager", linkedin: "", instagram: "https://www.instagram.com/koste707/", src: "people/Mikolaj.jpg"},
    {name: "Ankit Verghese", desc: "Chief Engineer", linkedin: "https://linkedin.com/in/ankit-verghese", instagram: "https://www.instagram.com/_agv108/", src: "people/Ankit.jpg"},
    {name: "Lucas Ballmer", desc: "Attorney General", linkedin: "", instagram: "", src: "https://media.licdn.com/dms/image/D5603AQF4kWHIat-3Lw/profile-displayphoto-shrink_200_200/0/1679191174432?e=1687996800&v=beta&t=PaH1NPF1-mRvviFwMSup63D5R_0gWzGokqCUqihnnls"},
    {name: "Isabelle Summann", desc: "Media Chair", linkedin: "", instagram: "", src: "https://ca.slack-edge.com/T04HUDB1KMK-U04TKR3H3NC-50d4d52bfcec-72"},
    {name: "Nick Thoennes", desc: "Computer Science", linkedin: "https://linkedin.com/in/nicholas-thoennes-166a02252", instagram: "https://www.instagram.com/_agv108/", src: "https://media.licdn.com/dms/image/D4E03AQFtd5xxbWImCw/profile-displayphoto-shrink_200_200/0/1681923403641?e=1687996800&v=beta&t=L7U-yn60Knol2D1Cudbb_UVyNfjnL1Eoz8ulStowuJE"},
    {name: "Chris Martinez Reina", desc: "Aerospace Engineering", linkedin: "https://linkedin.com/in/chris-martinez-reina", instagram: "https://www.instagram.com/colawastedpanda/", src: "https://media.licdn.com/dms/image/C4D03AQF_C8M1tXZ49g/profile-displayphoto-shrink_200_200/0/1632143182216?e=1687996800&v=beta&t=JjEzDDdTu7bLMbaPasX9Tbw8-j25Yx9x06BBQPVJJP0"},
    {name: "Patrick Sullivan", desc: "Computer Science", linkedin: "https://linkedin.com/in/patrick-sullivan-03172b265", instagram: "https://www.instagram.com/patrickttsulliv/", src: "people/Patrick.jpg"}
]

export default function MemberExplorer() {
    return (
        <div className="member-explorer">
            {
                members.map( member => (
                    <Membercard 
                        name={member.name}
                        src={member.src}
                        desc={member.desc}
                        linkedin={member.linkedin}
                        instagram={member.instagram}
                        key={member.src}
                    />
                ))
            }
        </div>
    );
}