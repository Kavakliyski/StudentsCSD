// styles
import { PageConfig } from "@/styles/PagesConfigElements";
import { StudentFormCU, StudentFormWrapper } from "@/styles/FormElements";

// auth
import { useAuth } from "@/context/AuthContext";

// axios
import axios from "axios";

// react
import { useState } from "react";
import { useRouter } from "next/router";

// Material UI
import Button from '@mui/material/Button';

// components
import InputText from "@/components/inputs/InputText";
import InputDropdown from "@/components/inputs/InputDropdown";

// majors, options
import { MajorsMasters } from "@/majors/MajorsMasters";
import { optionsCohort_in_moodle, optionsConfirmation_by_nacid, optionsDesired_shape, optionsEmail_sent_to_access_moodle, optionsEntered_in_admin, optionsEntered_into_cohort, optionsLength_of_study, optionsMethod_of_application, optionsMoodle_profile_created, optionsPaid_ksk, optionsProfessional_qualification, optionsSent_faculty_number, optionsStatus_of_ksk, optionsSubmission_period_in_adminuni } from "@/components/inputs/selectorsForDropdown";


const API_URL = '/api/students/bachelors/add';


export default function Createbachelor() {

    const Router = useRouter();

    const { user } = useAuth();                                       // get user email
    const [errorAdd, setErrorAdd] = useState(null);                   // error on adding

    const [distinction, setdistinction] = useState("");
    const [faculty_number, setfaculty_number] = useState("");
    const [status_of_ksk, setstatus_of_ksk] = useState("");
    const [n_of_enrollment_order, setn_of_enrollment_order] = useState("");
    const [names, setnames] = useState("");
    const [names_latin, setnames_latin] = useState("");
    const [phone_number, setphone_number] = useState("");
    const [email, setemail] = useState("");
    const [egn, setegn] = useState("");
    const [person_to_contact, setperson_to_contact] = useState("");
    const [in_front_of_school, setin_front_of_school] = useState("");
    const [location_of_the_transitional_educationa_institution, setlocation_of_the_transitional_educationa_institution] = useState("");
    const [high_school_diploma_gpa, sethigh_school_diploma_gpa] = useState("");
    const [certificate_from_ruo, setcertificate_from_ruo] = useState("");
    const [desired_major, setdesired_major] = useState("");
    const [desired_shape, setdesired_shape] = useState("");
    const [bachelor_course, setbachelor_course] = useState("");
    const [duration_semesters, setduration_semesters] = useState("");
    const [form_of_study, setform_of_study] = useState("");
    const [method_of_application, setmethod_of_application] = useState("");
    const [date_of_initial_contact, setdate_of_initial_contact] = useState("");
    const [contact_source, setcontact_source] = useState("");
    const [paid_ksk, setpaid_ksk] = useState("");
    const [date_of_payment_ksk, setdate_of_payment_ksk] = useState("");
    const [sem_fee_paid, setsem_fee_paid] = useState("");
    const [date_of_paid_sem_fee, setdate_of_paid_sem_fee] = useState("");
    const [submission_period_in_adminuni, setsubmission_period_in_adminuni] = useState("");
    const [school_year, setschool_year] = useState("");
    const [contract_issue_date, setcontract_issue_date] = useState("");
    const [sem_Fee, setsem_Fee] = useState("");
    const [discount, setdiscount] = useState("");
    const [reason_for_discount, setreason_for_discount] = useState("");
    const [email_sent_with_faculty_number, setemail_sent_with_faculty_number] = useState("");
    const [university_email, setuniversity_email] = useState("");
    const [moodle_profile_created, setmoodle_profile_created] = useState("");
    const [email_sent_to_access_moodle, setemail_sent_to_access_moodle] = useState("");
    const [entered_in_admin, setentered_in_admin] = useState("");
    const [entered_into_cohort, setentered_into_cohort] = useState("");

    // format the date - dd.mm.year clock
    const formattedDate = new Date().toLocaleString("bg-BG", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });


    const handleSubmit = (event: any) => {
        event.preventDefault();

        axios
            .post(API_URL, {
                distinction: distinction,
                faculty_number: faculty_number,
                status_of_ksk: status_of_ksk,
                n_of_enrollment_order: n_of_enrollment_order,
                names: names,
                names_latin: names_latin,
                phone_number: phone_number,
                email: email,
                egn: egn,
                person_to_contact: person_to_contact,
                in_front_of_school: in_front_of_school,
                location_of_the_transitional_educationa_institution: location_of_the_transitional_educationa_institution,
                high_school_diploma_gpa: high_school_diploma_gpa,
                certificate_from_ruo: certificate_from_ruo,
                desired_major: desired_major,
                desired_shape: desired_shape,
                bachelor_course: bachelor_course,
                duration_semesters: duration_semesters,
                form_of_study: form_of_study,
                method_of_application: method_of_application,
                date_of_initial_contact: date_of_initial_contact,
                contact_source: contact_source,
                paid_ksk: paid_ksk,
                date_of_payment_ksk: date_of_payment_ksk,
                sem_fee_paid: sem_fee_paid,
                date_of_paid_sem_fee: date_of_paid_sem_fee,
                submission_period_in_adminuni: submission_period_in_adminuni,
                school_year: school_year,
                contract_issue_date: contract_issue_date,
                sem_Fee: sem_Fee,
                discount: discount,
                reason_for_discount: reason_for_discount,
                email_sent_with_faculty_number: email_sent_with_faculty_number,
                university_email: university_email,
                moodle_profile_created: moodle_profile_created,
                email_sent_to_access_moodle: email_sent_to_access_moodle,
                entered_in_admin: entered_in_admin,
                entered_into_cohort: entered_into_cohort,

                lastEditEmail: user.email,
                lastEditDate: formattedDate,
                email_of_creation: user.email,
                dateOfCreation: formattedDate,
            })
            .then((res) => {

                console.log("Post created:", res.data);
                setErrorAdd(null);              // reset error state on success
                Router.push("/bachelors")
            })
            .catch((err) => {

                alert("Error durging writing");
                console.error("Error durging writing");
                setErrorAdd(err);
                console.log("Error:", err);
            })
    };


    return (
        <PageConfig>

            <StudentFormWrapper>

                <div><h1>Създаване на Бакалавър</h1></div>
                <p>Тук можете да създатете нов запис в базата данни с бакалаври.</p>
                <br />

                <StudentFormCU>

                    {/* marketing information */}





                    {/* UO infromation */}

                    <InputText label="Отличителност" onChange={(e) => setdistinction(e)} /> 
                    <InputText label="Факултетен номер" onChange={(e) => setfaculty_number(e)} /> 
                    <InputText label="Статус на КСК" onChange={(e) => setstatus_of_ksk(e)} /> 
                    <InputText label="№ на заповед за записване" onChange={(e) => setn_of_enrollment_order(e)} /> 
                    <InputText label="Три имена" onChange={(e) => setnames(e)} /> 
                    <InputText label="Имена на латиница" onChange={(e) => setnames_latin(e)} /> 
                    <InputText label="Телефон" onChange={(e) => setphone_number(e)} /> 
                    <InputText label="Имейл" onChange={(e) => setemail(e)} /> 
                    <InputText label="ЕГН" onChange={(e) => setegn(e)} /> 
                    <InputText label="Лице за контакт (като коментар)" onChange={(e) => setperson_to_contact(e)} /> 
                    <InputText label="Пред. Учебно Заведение" onChange={(e) => setin_front_of_school(e)} /> 
                    <InputText label="Местонахождение на предходното училище" onChange={(e) => setlocation_of_the_transitional_educationa_institution(e)} /> 
                    <InputText label="Среден успех от дипломата за средно образование" onChange={(e) => sethigh_school_diploma_gpa(e)} /> 
                    <InputText label="Удостоверение от РУО" onChange={(e) => setcertificate_from_ruo(e)} /> 
                    <InputText label="Желана Специалност" onChange={(e) => setdesired_major(e)} /> 
                    <InputText label="Желана форма" onChange={(e) => setdesired_shape(e)} /> 
                    <InputText label="Курс" onChange={(e) => setbachelor_course(e)} /> 
                    <InputText label="Продължителност семестри" onChange={(e) => setduration_semesters(e)} /> 
                    <InputText label="Начин на обучение" onChange={(e) => setform_of_study(e)} /> 
                    <InputText label="Начин на кандидатстване" onChange={(e) => setmethod_of_application(e)} /> 
                    <InputText label="Дата на първоначален контакт" onChange={(e) => setdate_of_initial_contact(e)} /> 
                    <InputText label="Източник на контакт" onChange={(e) => setcontact_source(e)} /> 
                    <InputText label="Заплатил КСК" onChange={(e) => setpaid_ksk(e)} /> 
                    <InputText label="Дата плащане КСК" onChange={(e) => setdate_of_payment_ksk(e)} /> 
                    <InputText label="Платена сем. такса" onChange={(e) => setsem_fee_paid(e)} /> 
                    <InputText label="Дата на платена сем. такса" onChange={(e) => setdate_of_paid_sem_fee(e)} /> 
                    <InputText label="Период на подаване в АдминУни" onChange={(e) => setsubmission_period_in_adminuni(e)} /> 
                    <InputText label="Учебна година" onChange={(e) => setschool_year(e)} /> 
                    <InputText label="Дата на издаване на договор" onChange={(e) => setcontract_issue_date(e)} /> 
                    <InputText label="Сем. Такса" onChange={(e) => setsem_Fee(e)} /> 
                    <InputText label="Отстъпка" onChange={(e) => setdiscount(e)} /> 
                    <InputText label="Основание за отстъпката" onChange={(e) => setreason_for_discount(e)} /> 
                    <InputText label="Изпратен имейл с факултетен номер" onChange={(e) => setemail_sent_with_faculty_number(e)} /> 
                    <InputText label="Създаден g-mail" onChange={(e) => setuniversity_email(e)} /> 
                    <InputText label="Създаден профил в Мудъл" onChange={(e) => setmoodle_profile_created(e)} /> 
                    <InputText label="Изпратен имейл за достъп до Мудъл" onChange={(e) => setemail_sent_to_access_moodle(e)} /> 
                    <InputText label="Въведени в Админ/Регистъра" onChange={(e) => setentered_in_admin(e)} /> 
                    <InputText label="Вкаран в кохорт в Moodle" onChange={(e) => setentered_into_cohort(e)} /> 
                    <div className="Separator"></div>
                    <div className="Separator"></div>
                </StudentFormCU>


                <div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color={errorAdd ? "error" : "primary"}
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        Добави студент
                    </Button>
                </div>

            </StudentFormWrapper>

        </PageConfig >
    )
}
