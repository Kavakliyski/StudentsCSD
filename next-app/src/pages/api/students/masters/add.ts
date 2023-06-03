import connectMongoDB from "utils/connectMongoDB";
import masterStudent from 'models/studentModel/MasterStudentModel';

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function addStudent(req: NextApiRequest, res: NextApiResponse) {

    const {
        distinction,
        faculty_number,
        status_of_ksk,
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
        month_of_inquiry,
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
        lastEditDate,
        email_of_creation,
        dateOfCreation
        
    } = req.body;

    try {

        connectMongoDB();
        console.log('Trying to create document for Student Master...');

        const doc = await masterStudent.create({
            distinction,
            faculty_number,
            status_of_ksk,
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
            month_of_inquiry,
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
            lastEditDate,
            email_of_creation,
            dateOfCreation
        });

        console.log('Created document for Student Master');

        res.status(201).json(doc);
    } catch (err) {

        console.error('Error while creating new Master document:', err);
        res.status(400).send({ message: err });
    }
}