import { Schema, model, models } from 'mongoose';

const masterStudentSchema = new Schema({

    distinction: 'string',
    faculty_number: 'string',
    status_of_ksk: 'string',
    name: 'string',
    n_of_enrollment_order: 'string',
    names: 'string',
    egn: 'string',
    names_latin: 'string',
    phone_number: 'string',
    email: 'string',
    in_front_of_school: 'string',
    location_of_the_transitional_educationa_institution: 'string',
    professional_qualification: 'string',
    confirmation_by_nacid: 'string',
    desired_major: 'string',
    desired_shape: 'string',
    length_of_study: 'string',
    cohort_in_moodle: 'string',
    method_of_application: 'string',
    date_of_initial_contact: 'string',
    month_of_inquiry: 'string',
    contact_source: 'string',
    paid_ksk: 'string',
    date_of_payment_ksk: 'string',
    comment_ksk: 'string',
    weekly_fee_paid: 'string',
    date_of_paid_weekly_fee: 'string',
    submission_period_in_adminuni: 'string',
    school_year: 'string',
    contract_issue_date: 'string',
    sem_fee_paid: 'string',
    date_of_sem_fee_paid: 'string',
    sem_Fee: 'string',
    discount: 'string',
    comment: 'string',
    sent_faculty_number: 'string',
    university_email: 'string',
    moodle_profile_created: 'string',
    email_sent_to_access_moodle: 'string',
    entered_into_cohort: 'string',
    entered_in_admin: 'string',


    lastEditEmail: 'string',
    lastEditDate: 'string',
    email_of_creation: 'string',
    dateOfCreation: 'string'
});

const masterStudent = models.MasterStudent || model('MasterStudent', masterStudentSchema);
export default masterStudent;