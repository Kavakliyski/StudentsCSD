import connectMongoDB from 'utils/connectMongoDB';
import masterStudent from 'models/studentModel/MasterStudentModel';

import type { NextApiRequest, NextApiResponse } from 'next'

import { withApiAuthRequired } from '@auth0/nextjs-auth0'


export default withApiAuthRequired(
    async function GET(req: NextApiRequest, res: NextApiResponse) {


        try {

            connectMongoDB();
            console.log('Mongoose: getting docs for Students MASTER...');

            const SortedMastersDocs = await masterStudent.find().sort({ dateOfCreation: -1 });

            console.log('\x1b[32m%s\x1b[0m', `Mongoose: Students MASTER --> Mongoose found items ${SortedMastersDocs.length}`)
            res.status(200).json(SortedMastersDocs);
        } catch (error) {

            res.status(500).send(error);
        }
    }
);