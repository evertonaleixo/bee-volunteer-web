import { NextApiRequest, NextApiResponse } from 'next'
import runMiddleware from './utils/handle_cors'
import connectToDatabase from './utils/mongoDB'

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(process.env.MONGODB_URI)
    await runMiddleware(req, res)
    const db = await connectToDatabase(process.env.MONGODB_URI)

    const collection = await db.collection('categories')


    if (req.method === 'POST') {
        await collection.insertOne(JSON.parse(req.body))
        res.status(200).json({ 'insert': 'done' });
    } else if (req.method === 'GET') {
        const categories = await collection.find({}).toArray()
        res.status(200).json({ categories })
    }
}
