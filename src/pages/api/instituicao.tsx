import { NextApiRequest, NextApiResponse } from 'next'
import runMiddleware from './utils/handle_cors'
import connectToDatabase from './utils/mongoDB'

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res)
    const db = await connectToDatabase(process.env.MONGODB_URI)

    const collection = await db.collection('instituicoes')


    if (req.method === 'POST') {
        await collection.insertOne(JSON.parse(req.body))
        res.status(200).json({ 'insert': 'done' });
    } else if (req.method === 'GET') {
        const instituicoes = await collection.find({}).toArray()
        res.status(200).json({ instituicoes })
    }
}
