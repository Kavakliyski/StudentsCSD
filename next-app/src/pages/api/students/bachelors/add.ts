import connectMongoDB from "utils/connectMongoDB";
import bachelorStudent from "models/studentModel/BachelorStudentModel";

import type { NextApiRequest, NextApiResponse } from 'next'

import { withApiAuthRequired } from '@auth0/nextjs-auth0'


export default withApiAuthRequired(
    async function addBachelorStudent(req: NextApiRequest, res: NextApiResponse) {

        const {
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
            lastEditDate,
            email_of_creation,
            // dateOfCreation,
        } = req.body;

        try {

            connectMongoDB();
            console.log('Trying to create document for Student Bachelor...');
            const currentDate = new Date();

            const doc = await bachelorStudent.create({
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
                lastEditDate,
                email_of_creation,
                dateOfCreation: currentDate,
            });
            res.status(201).json(doc);

            console.log('Ceated document for Student Bachelor');

        } catch (err) {

            console.error('Error while creating new bachelor document:', err);
            res.status(400).send({ message: err });
        }
    }
);