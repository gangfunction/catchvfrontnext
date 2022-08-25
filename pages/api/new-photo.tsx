import {MongoClient} from 'mongodb';
const MONGODB = process.env.MONGO_URL as any;
async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const data = req.body;


        const {id, image, uuid} = data;
        const client = await MongoClient.connect(MONGODB);
        const db = client.db();
        const collection = db.collection('images');

        const result=await collection.insertOne(data);
        console.log(result);
        await client.close();
        res.status(201).json({message:'photo successfully uploaded'});

    }
}

export default handler;