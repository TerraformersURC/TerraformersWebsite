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
  src: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ people: [
      {name: "Mikolaj Kostrzewa", desc: "Project Manager", linkedin: "", src: "people/Mikolaj.jpg"},
      {name: "Ankit Verghese", desc: "Chief Engineer", linkedin: "https://linkedin.com/in/ankit-verghese", src: "people/Ankit.jpg"},
      {name: "Lucas Ballmer", desc: "Attorney General", linkedin: "https://www.linkedin.com/in/lucas-ballmer-a3770324a", src: "people/Lucas.jpg"},
      {name: "Grace Herron", desc: "Editor in Chief", linkedin: "https://www.linkedin.com/in/grace-herron-88a115184/", src: "people/Grace.jpg"},
      {name: "Nick Thoennes", desc: "Design Lead", linkedin: "https://www.linkedin.com/in/nick-thoennes-166a02252", src: "people/Nick.jpg"},
      {name: "Patrick Sullivan", desc: "Software", linkedin: "https://linkedin.com/in/patrick-sullivan-03172b265", src: "people/Patrick.jpg"},
      {name: "Joseph Kleinman", desc: "Media Chair", linkedin: "https://www.linkedin.com/in/joseph-kleinman-b96730283", src: "people/Joseph.jpg"}
    ]
  })
}
