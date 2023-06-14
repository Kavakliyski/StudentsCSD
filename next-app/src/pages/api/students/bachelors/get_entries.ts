import connectMongoDB from 'utils/connectMongoDB';
import bachelorStudent from 'models/studentModel/BachelorStudentModel';

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function getEntries(req: NextApiRequest, res: NextApiResponse) {


    try {

        connectMongoDB();
        console.log('(Query) getting entries for Student Bachelor...');
        
        const { query } = req;
        
        console.log(query);
        const searchParams: any = {};

        Object.entries(query).forEach(([key, value]) => {
            searchParams[key] = new RegExp((value as string), 'i');
        });


        const entries = await bachelorStudent.find(searchParams).sort({ dateOfCreation: -1 });
        
        console.log('\x1b[32m%s\x1b[0m', `Mongoose: Students BACHELOR Query --> Mongoose found items ${entries.length}`)
        res.status(200).json(entries);
    } catch (error) {

        res.status(500).send(error);
    }
}