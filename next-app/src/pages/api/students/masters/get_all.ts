import connectMongoDB from 'utils/connectMongoDB';
import masterStudent from 'models/studentModel/MasterStudentModel';

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function getStudent(req: NextApiRequest, res: NextApiResponse) {


    try {

        connectMongoDB();
        console.log('Mongoose: getting docs for Student Master...');

    } catch (error) {
        
        res.status(500).send(error);
    }
}