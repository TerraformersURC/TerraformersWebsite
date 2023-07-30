// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  people: Person[],
}

type Person = {
  name: string,
  desc: string,
  linkedin: string,
  instagram: String,
  src: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ people: [
      {name: "Mikolaj Kostrzewa", desc: "Project Manager", linkedin: "", instagram: "https://www.instagram.com/koste707/", src: "people/Mikolaj.jpg"},
      {name: "Ankit Verghese", desc: "Chief Engineer", linkedin: "https://linkedin.com/in/ankit-verghese", instagram: "https://www.instagram.com/_agv108/", src: "people/Ankit.jpg"},
      {name: "Lucas Ballmer", desc: "Attorney General", linkedin: "", instagram: "", src: "people/Lucas.jpg"},
      {name: "Nick Thoennes", desc: "Computer Science", linkedin: "https://linkedin.com/in/nicholas-thoennes-166a02252", instagram: "https://www.instagram.com/_agv108/", src: "https://media.licdn.com/dms/image/D4E03AQFtd5xxbWImCw/profile-displayphoto-shrink_200_200/0/1681923403641?e=1687996800&v=beta&t=L7U-yn60Knol2D1Cudbb_UVyNfjnL1Eoz8ulStowuJE"},
      {name: "Chris M Reina", desc: "Aerospace Engineering", linkedin: "https://linkedin.com/in/chris-martinez-reina", instagram: "https://www.instagram.com/colawastedpanda/", src: "https://media.licdn.com/dms/image/C4D03AQF_C8M1tXZ49g/profile-displayphoto-shrink_200_200/0/1632143182216?e=1687996800&v=beta&t=JjEzDDdTu7bLMbaPasX9Tbw8-j25Yx9x06BBQPVJJP0"},
      {name: "Patrick Sullivan", desc: "Computer Science", linkedin: "https://linkedin.com/in/patrick-sullivan-03172b265", instagram: "https://www.instagram.com/patrickttsulliv/", src: "people/Patrick.jpg"}
    ]
  })
}
