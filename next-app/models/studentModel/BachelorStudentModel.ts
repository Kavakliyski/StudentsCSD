import { Schema, model, models } from 'mongoose';

const bachelorStudentSchema = new Schema({

    distinction: 'string',
    faculty_number: 'string',
    status_of_ksk: 'string',
    n_of_enrollment_order: 'string',
    names: 'string',
    names_latin: 'string',
    phone_number: 'string',
    email: 'string',
    egn: 'string',
    person_to_contact: 'string',
    in_front_of_school: 'string',
    location_of_the_transitional_educationa_institution: 'string',
    high_school_diploma_gpa: 'string',
    certificate_from_ruo: 'string',
    desired_major: 'string',
    desired_shape: 'string',
    bachelor_course: 'string',
    duration_semesters: 'string',
    form_of_study: 'string',
    method_of_application: 'string',
    date_of_initial_contact: 'string',
    contact_source: 'string',
    paid_ksk: 'string',
    date_of_payment_ksk: 'string',
    sem_fee_paid: 'string',
    date_of_paid_sem_fee: 'string',
    submission_period_in_adminuni: 'string',
    school_year: 'string',
    contract_issue_date: 'string',
    sem_Fee: 'string',
    discount: 'string',
    reason_for_discount: 'string',
    email_sent_with_faculty_number: 'string',
    university_email: 'string',
    university_mail_group: 'string',
    moodle_profile_created: 'string',
    email_sent_to_access_moodle: 'string',
    entered_in_admin: 'string',
    entered_into_cohort: 'string',

    lastEditEmail: 'string',
    lastEditDate: 'string',
    email_of_creation: 'string',
    dateOfCreation: 'string',
});

const bachelorStudent = models.BachelorStudent || model('BachelorStudent', bachelorStudentSchema);
export default bachelorStudent;
