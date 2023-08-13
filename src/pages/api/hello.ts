/**
 * hello traveler
 * This is the API for the terraformers URC rover team.
 */
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  people: Member[],
}

type Member = {
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
      {name: "Grace Herron", desc: "Editor in Chief", linkedin: "", instagram: "people/Grace.jpg", src: "people/Grace.jpg"},
      {name: "Nick Thoennes", desc: "Design Lead", linkedin: "https://linkedin.com/in/nicholas-thoennes-166a02252", instagram: "https://www.instagram.com/_agv108/", src: "people/Nick.jpg"},
      {name: "Patrick Sullivan", desc: "Software", linkedin: "https://linkedin.com/in/patrick-sullivan-03172b265", instagram: "https://www.instagram.com/patrickttsulliv/", src: "people/Patrick.jpg"}
    ]
  })
}
