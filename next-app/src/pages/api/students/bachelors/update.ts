import connectMongoDB from 'utils/connectMongoDB';
import bachelorStudent from "models/studentModel/BachelorStudentModel";

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function updateStudent(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'PATCH') {

        try {

            connectMongoDB();                                               // Connect to the MongoDB database
            const {
                _id,
                distinction,
                faculty_number,
                status_of_ksk,
                name,
                n_of_enrollment_order,
                names,
                egn,
                names_latin,
                phone_number,
                email,
                in_front_of_school,
                location_of_the_transitional_educationa_institution,
                professional_qualification,
                confirmation_by_nacid,
                desired_major,
                desired_shape,
                length_of_study,


                lastEditEmail,
                lastEditDate
            } = req.body;

            const updatedStudent = await bachelorStudent.findByIdAndUpdate(
                _id,
                {
                    distinction,
                    faculty_number,
                    status_of_ksk,
                    name,
                    n_of_enrollment_order,
                    names,
                    egn,
                    names_latin,
                    phone_number,
                    email,
                    in_front_of_school,
                    location_of_the_transitional_educationa_institution,
                    professional_qualification,
                    confirmation_by_nacid,
                    desired_major,
                    desired_shape,
                    length_of_study,


                    lastEditEmail,
                    lastEditDate
                },
                { new: true }
            );

            if (updatedStudent) {

                res.status(200).json({ message: 'Student Bachelor - updated successfully', student: updatedStudent });
            } else {

                res.status(404).json({ message: req.body });
            }
        } catch (error) {

            console.error(error);
            res.status(500).json({ message: 'Student Bachelor - Server error', error });
        }
    } else {

        res.status(405).json({ message: 'Student Bachelor - Method not allowed' });
    }
};