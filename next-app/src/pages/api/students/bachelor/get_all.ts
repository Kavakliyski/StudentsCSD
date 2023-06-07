import connectMongoDB from 'utils/connectMongoDB';
import bachelorStudent from "models/studentModel/BachelorStudentModel";

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function getAllBachelorStudent(req: NextApiRequest, res: NextApiResponse) {


    try {

        connectMongoDB();
        console.log('Mongoose: getting docs for Students BACHELOR...');

        const SortedBachelorsDocs = await bachelorStudent.find().sort({ dateOfCreation: -1 });

        console.log('\x1b[32m%s\x1b[0m', `Mongoose: Students BACHELOR --> Mongoose found items ${SortedBachelorsDocs.length}`)
        res.status(200).json(SortedBachelorsDocs);
    } catch (error) {

        res.status(500).send(error);
    }
}