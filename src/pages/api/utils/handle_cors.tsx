import { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

export default function runMiddleware(req: NextApiRequest, res: NextApiResponse) {

    const cors = Cors({
        methods: ['GET', 'HEAD'],
    })
    const fn = cors;

    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  };
