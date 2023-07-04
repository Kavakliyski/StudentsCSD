import connectMongoDB from 'utils/connectMongoDB';
import masterStudent from 'models/studentModel/MasterStudentModel';

import type { NextApiRequest, NextApiResponse } from 'next'

import { withApiAuthRequired } from '@auth0/nextjs-auth0'


export default withApiAuthRequired(
    async function getOneStudent(req: NextApiRequest, res: NextApiResponse) {

        if (req.method === 'GET') {

            try {

                connectMongoDB();                           // Connect to the MongoDB database

                const { id } = req.query;
                const student = await masterStudent.findById(id);

                if (student) {

                    res.status(200).json({ message: 'Student Master found', student });
                } else {

                    res.status(404).json({ message: 'Student Master not found' });
                }
            } catch (error) {

                console.error(error);
                res.status(500).json({ message: 'Student Master - Server error' });
            }
        } else {

            res.status(405).json({ message: 'Student Master - Method not allowed' });
        }
    }
);