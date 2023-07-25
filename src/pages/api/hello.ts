// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  people: [Person],
}

type Person = {
  name: string,
  img_url: string, /* URL */
  info: string,
  instagram: String,
  linkedin: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ people: [
      {
        name: "Lucas Ballmer", 
        img_url: "TODO", 
        info: "Dev", 
        instagram: "None", 
        linkedin: "None"
      }
    ]
  })
}
