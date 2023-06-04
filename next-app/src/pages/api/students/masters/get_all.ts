import connectMongoDB from 'utils/connectMongoDB';
import masterStudent from 'models/studentModel/MasterStudentModel';

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function getStudent(req: NextApiRequest, res: NextApiResponse) {


    try {

        connectMongoDB();
        console.log('Mongoose: getting docs for Student Master...');

        const StudentDataSorted = await masterStudent.find().sort({ dateOfCreation: -1 });
        
        console.log(`Mongoose: Student Master --> Mongoose found items ${StudentDataSorted.length}`);
        res.status(200).json(StudentDataSorted);
    } catch (error) {
        
        res.status(500).send(error);
    }
}