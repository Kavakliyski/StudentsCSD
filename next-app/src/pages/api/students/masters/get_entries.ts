import connectMongoDB from 'utils/connectMongoDB';
import masterStudent from 'models/studentModel/MasterStudentModel';

import type { NextApiRequest, NextApiResponse } from 'next'

import { withApiAuthRequired } from '@auth0/nextjs-auth0'


export default withApiAuthRequired(
    async function handler(req: NextApiRequest, res: NextApiResponse) {

        try {

            connectMongoDB();
            console.log('(Query) getting entries for Student Master...');

            const { query } = req;
            const searchParams: any = {};

            Object.entries(query).forEach(([key, value]) => {
                searchParams[key] = new RegExp((value as string), 'i');
            });


            const entries = await masterStudent.find(searchParams).sort({ dateOfCreation: -1 });

            console.log('\x1b[32m%s\x1b[0m', `Mongoose: Students MASTER Query --> Mongoose found items ${entries.length}`)
            res.status(200).json(entries);
        } catch (error) {

            res.status(500).send(error);
        }
    }
);