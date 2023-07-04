import connectMongoDB from 'utils/connectMongoDB';
import masterStudent from 'models/studentModel/MasterStudentModel';

import type { NextApiRequest, NextApiResponse } from 'next'

import { withApiAuthRequired } from '@auth0/nextjs-auth0'


export default withApiAuthRequired(
    async function updateStudent(req: NextApiRequest, res: NextApiResponse) {

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
                    cohort_in_moodle,
                    method_of_application,
                    date_of_initial_contact,
                    contact_source,
                    paid_ksk,
                    date_of_payment_ksk,
                    comment_ksk,
                    sem_fee_paid,
                    date_of_sem_fee_paid,
                    submission_period_in_adminuni,
                    school_year,
                    contract_issue_date,
                    sem_Fee,
                    discount,
                    comment,
                    sent_faculty_number,
                    university_email,
                    moodle_profile_created,
                    email_sent_to_access_moodle,
                    entered_into_cohort,
                    entered_in_admin,

                    lastEditEmail,
                    lastEditDate
                } = req.body;

                const updatedStudent = await masterStudent.findByIdAndUpdate(
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
                        cohort_in_moodle,
                        method_of_application,
                        date_of_initial_contact,
                        contact_source,
                        paid_ksk,
                        date_of_payment_ksk,
                        comment_ksk,
                        sem_fee_paid,
                        date_of_sem_fee_paid,
                        submission_period_in_adminuni,
                        school_year,
                        contract_issue_date,
                        sem_Fee,
                        discount,
                        comment,
                        sent_faculty_number,
                        university_email,
                        moodle_profile_created,
                        email_sent_to_access_moodle,
                        entered_into_cohort,
                        entered_in_admin,

                        lastEditEmail,
                        lastEditDate
                    },
                    { new: true }
                );

                if (updatedStudent) {

                    res.status(200).json({ message: 'Student Master - updated successfully', student: updatedStudent });
                } else {

                    res.status(404).json({ message: req.body });
                }
            } catch (error) {

                console.error(error);
                res.status(500).json({ message: 'Student Master - Server error', error });
            }
        } else {

            res.status(405).json({ message: 'Student Master - Method not allowed' });
        }
    }
);