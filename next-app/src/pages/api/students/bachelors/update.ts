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
                n_of_enrollment_order,
                names,
                names_latin,
                phone_number,
                email,
                egn,
                person_to_contact,
                in_front_of_school,
                location_of_the_transitional_educationa_institution,
                high_school_diploma_gpa,
                certificate_from_ruo,
                desired_major,
                desired_shape,
                bachelor_course,
                duration_semesters,
                form_of_study,
                method_of_application,
                date_of_initial_contact,
                contact_source,
                paid_ksk,
                date_of_payment_ksk,
                sem_fee_paid,
                date_of_paid_sem_fee,
                submission_period_in_adminuni,
                school_year,
                contract_issue_date,
                sem_Fee,
                discount,
                reason_for_discount,
                email_sent_with_faculty_number,
                university_email,
                university_mail_group,
                moodle_profile_created,
                email_sent_to_access_moodle,
                entered_in_admin,
                entered_into_cohort,


                lastEditEmail,
                lastEditDate
            } = req.body;

            const updatedStudent = await bachelorStudent.findByIdAndUpdate(
                _id,
                {
                    distinction,
                    faculty_number,
                    status_of_ksk,
                    n_of_enrollment_order,
                    names,
                    names_latin,
                    phone_number,
                    email,
                    egn,
                    person_to_contact,
                    in_front_of_school,
                    location_of_the_transitional_educationa_institution,
                    high_school_diploma_gpa,
                    certificate_from_ruo,
                    desired_major,
                    desired_shape,
                    bachelor_course,
                    duration_semesters,
                    form_of_study,
                    method_of_application,
                    date_of_initial_contact,
                    contact_source,
                    paid_ksk,
                    date_of_payment_ksk,
                    sem_fee_paid,
                    date_of_paid_sem_fee,
                    submission_period_in_adminuni,
                    school_year,
                    contract_issue_date,
                    sem_Fee,
                    discount,
                    reason_for_discount,
                    email_sent_with_faculty_number,
                    university_email,
                    university_mail_group,
                    moodle_profile_created,
                    email_sent_to_access_moodle,
                    entered_in_admin,
                    entered_into_cohort,

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