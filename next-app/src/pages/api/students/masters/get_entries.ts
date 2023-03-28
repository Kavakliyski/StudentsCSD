import connectMongoDB from 'utils/connectMongoDB';
import masterStudent from 'models/studentModel/MasterStudentModel';

import type { NextApiRequest, NextApiResponse } from 'next'


async function handler(req: NextApiRequest, res: NextApiResponse) {


    try {

        connectMongoDB();
        console.log('(Query) getting entries for Student Master...');

        const entries = await masterStudent.find({ status_of_ksk: 'Приет'}).sort({ dateOfCreation: -1 });
        res.status(200).json(entries);
    } catch (error) {

        res.status(500).send(error);
    }
}

export default handler;
