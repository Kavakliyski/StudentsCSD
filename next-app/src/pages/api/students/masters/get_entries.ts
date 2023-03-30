import connectMongoDB from 'utils/connectMongoDB';
import masterStudent from 'models/studentModel/MasterStudentModel';

import type { NextApiRequest, NextApiResponse } from 'next'


async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log('entries.ts')

    try {

        connectMongoDB();
        console.log('(Query) getting entries for Student Master...');

        const { query } = req;

        const searchParams: any = {};

        Object.entries(query).forEach(([key, value]) => {
            searchParams[key] = new RegExp((value as string), 'i');
        });

        console.log(searchParams);
        

        const entries = await masterStudent.find(searchParams).sort({ dateOfCreation: -1 });
        res.status(200).json(entries);
    } catch (error) {

        res.status(500).send(error);
    }
}

export default handler;
