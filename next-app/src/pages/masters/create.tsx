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


// const API_URL = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/add`;
const API_URL = '/api/students/masters/add';


export default function Createmaster() {

    const Router = useRouter();

    const { user } = useAuth();                                       // get user email
    const [errorAdd, setErrorAdd] = useState(null);                   // error on adding

    const [distinction, setDistinction] = useState("");
    const [faculty_number, setFaculty_number] = useState("");
    const [status_of_ksk, setStatus_of_ksk] = useState("");
    const [n_of_enrollment_order, setN_of_enrollment_order] = useState("");
    const [names, setNames] = useState("");
    const [egn, setEgn] = useState("");
    const [names_latin, setNames_latin] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [email, setEmail] = useState("");
    const [in_front_of_school, setIn_front_of_school] = useState("");
    const [location_of_the_transitional_educationa_institution, setLocation_of_the_transitional_educationa_institution] = useState("");
    const [professional_qualification, setProfessional_qualification] = useState("");
    const [confirmation_by_nacid, setConfirmation_by_nacid] = useState("");
    const [desired_major, setDesired_major] = useState("");
    const [desired_shape, setDesired_shape] = useState("");
    const [length_of_study, setLength_of_study] = useState("");
    const [cohort_in_moodle, setCohort_in_moodle] = useState("");
    const [method_of_application, setMethod_of_application] = useState("");
    const [date_of_initial_contact, setDate_of_initial_contact] = useState("");
    const [month_of_inquiry, setMonth_of_inquiry] = useState("");
    const [contact_source, setContact_source] = useState("");
    const [paid_ksk, setPaid_ksk] = useState("");
    const [date_of_payment_ksk, setDate_of_payment_ksk] = useState("");
    const [comment_ksk, setComment_ksk] = useState("");
    const [sem_fee_paid, setSem_fee_paid] = useState("");
    const [date_of_sem_fee_paid, setDate_of_sem_fee_paid] = useState("");
    const [submission_period_in_adminuni, setSubmission_period_in_adminuni] = useState("");
    const [school_year, setSchool_year] = useState("");
    const [contract_issue_date, setContract_issue_date] = useState("");
    const [sem_Fee, setSem_Fee] = useState("");
    const [discount, setDiscount] = useState("");
    const [comment, setComment] = useState("");
    const [sent_faculty_number, setSent_faculty_number] = useState("");
    const [university_email, setUniversity_email] = useState("");
    const [moodle_profile_created, setMoodle_profile_created] = useState("");
    const [email_sent_to_access_moodle, setEmail_sent_to_access_moodle] = useState("");
    const [entered_into_cohort, setEntered_into_cohort] = useState("");
    const [entered_in_admin, setEntered_in_admin] = useState("");

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
                faculty_number: faculty_number,
                names: names,
                email: email,
                distinction: distinction,
                status_of_ksk: status_of_ksk,
                n_of_enrollment_order: n_of_enrollment_order,
                egn: egn,
                names_latin: names_latin,
                phone_number: phone_number,
                in_front_of_school: in_front_of_school,
                location_of_the_transitional_educationa_institution: location_of_the_transitional_educationa_institution,
                professional_qualification: professional_qualification,
                confirmation_by_nacid: confirmation_by_nacid,
                desired_major: desired_major,
                desired_shape: desired_shape,
                length_of_study: length_of_study,
                cohort_in_moodle: cohort_in_moodle,
                method_of_application: method_of_application,
                date_of_initial_contact: date_of_initial_contact,
                month_of_inquiry: month_of_inquiry,
                contact_source: contact_source,
                paid_ksk: paid_ksk,
                date_of_payment_ksk: date_of_payment_ksk,
                comment_ksk: comment_ksk,
                sem_Fee: sem_Fee,
                sem_fee_paid: sem_fee_paid,
                date_of_sem_fee_paid: date_of_sem_fee_paid,
                submission_period_in_adminuni: submission_period_in_adminuni,
                school_year: school_year,
                contract_issue_date: contract_issue_date,
                discount: discount,
                comment: comment,
                sent_faculty_number: sent_faculty_number,
                university_email: university_email,
                moodle_profile_created: moodle_profile_created,
                email_sent_to_access_moodle: email_sent_to_access_moodle,
                entered_into_cohort: entered_into_cohort,
                entered_in_admin: entered_in_admin,


                lastEditEmail: user.email,
                lastEditDate: formattedDate,
                email_of_creation: user.email,
                dateOfCreation: formattedDate,
            })
            .then((res) => {

                console.log("Post created:", res.data);
                setErrorAdd(null);              // reset error state on success
                Router.push("/masters")
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

                <div><h1>Създаване на Магистър</h1></div>
                <p>Тук можете да създатете нов запис в базата данни с магистри.</p>
                <br />

                <StudentFormCU>

                    {/* marketing information */}
                    <InputDropdown label="Период на подаване в АдминУни(семестър)" options={optionsSubmission_period_in_adminuni} onChange={(e) => setSubmission_period_in_adminuni(e)} />
                    <InputText label="Учебна година" onChange={(e) => setSchool_year(e)} />
                    <InputText label='Три имена' onChange={(e) => setNames(e)} />
                    <InputText label='Телефон' onChange={(e) => setPhone_number(e)} />
                    <InputText label='Имейл' onChange={(e) => setEmail(e)} />
                    <InputText label='Пред. Учебно Заведение' onChange={(e) => setIn_front_of_school(e)} />
                    <InputText label='Местонахождение на преходното учебно заведение' onChange={(e) => setLocation_of_the_transitional_educationa_institution(e)} />
                    <InputDropdown label="Желана Специалност" options={MajorsMasters} onChange={(e) => setDesired_major(e)} />
                    <InputDropdown label="Желана форма" options={optionsDesired_shape} onChange={(e) => setDesired_shape(e)} />
                    <InputText label="Източник на контакт" onChange={(e) => setContact_source(e)} />
                    <InputDropdown label="Статус на КСК" options={optionsStatus_of_ksk} onChange={(e) => setStatus_of_ksk(e)} />
                    <InputText label="todo: дата на обработка" onChange={(e) => setSchool_year(e)} /> {/* todo */}
                    <InputText label="todo: онлайн форма" onChange={(e) => setSchool_year(e)} /> {/* todo */}
                    <InputDropdown label="Заплатил КСК" options={optionsPaid_ksk} onChange={(e) => setPaid_ksk(e)} />
                    <InputText label="Дата плащане КСК" onChange={(e) => setDate_of_payment_ksk(e)} />
                    <InputText label="Платена сем. такса" onChange={(e) => setSem_fee_paid(e)} />
                    <InputText label="Дата на платена сем. такса" onChange={(e) => setDate_of_sem_fee_paid(e)} />
                    <InputText label="Сем. Такса" onChange={(e) => setSem_Fee(e)} />


                    <div className="Separator"></div>
                    <div className="Separator"></div>


                    {/* UO infromation */}
                    <InputText label='Отличителност' onChange={(e) => setDistinction(e)} />
                    <InputText label='Факултент номер' onChange={(e) => setFaculty_number(e)} />
                    <InputText label='№ на заповед за записване' onChange={(e) => setN_of_enrollment_order(e)} />
                    <InputText label='Имена на латиница' onChange={(e) => setNames_latin(e)} />
                    <InputText label='ЕГН' onChange={(e) => setEgn(e)} />
                    <InputDropdown label="Професионално направление/ квалификация" options={optionsProfessional_qualification} onChange={(e) => setProfessional_qualification(e)} />
                    <InputDropdown label="Потвърждение от Нацид" options={optionsConfirmation_by_nacid} onChange={(e) => setConfirmation_by_nacid(e)} />
                    <InputDropdown label="Продължителност на обучение и дали съкращава" options={optionsLength_of_study} onChange={(e) => setLength_of_study(e)} />
                    <InputDropdown label="КОХОРТ В МООДЛЕ" options={optionsCohort_in_moodle} onChange={(e) => setCohort_in_moodle(e)} />
                    <InputDropdown label="Начин на кандидатстване" options={optionsMethod_of_application} onChange={(e) => setMethod_of_application(e)} />
                    <InputText label='Дата на първоначален контакт' onChange={(e) => setDate_of_initial_contact(e)} />
                    <InputText label="Коментар - документи за КСК" onChange={(e) => setComment_ksk(e)} />
                    <InputText label="Дата на издаване на договор" onChange={(e) => setContract_issue_date(e)} />
                    <InputText label="Отстъпка" onChange={(e) => setDiscount(e)} />
                    <InputText label="Коментар" onChange={(e) => setComment(e)} />
                    <InputDropdown label="Изпратен фак. номер" options={optionsSent_faculty_number} onChange={(e) => setSent_faculty_number(e)} />
                    <InputText label="Университетски e-mail" onChange={(e) => setUniversity_email(e)} />
                    <InputDropdown label="Създаден профил в Мудъл" options={optionsMoodle_profile_created} onChange={(e) => setMoodle_profile_created(e)} />
                    <InputDropdown label="Изпратен имейл за достъп до Мудъл" options={optionsEmail_sent_to_access_moodle} onChange={(e) => setEmail_sent_to_access_moodle(e)} />
                    <InputDropdown label="Вкаран в Кохорт" options={optionsEntered_into_cohort} onChange={(e) => setEntered_into_cohort(e)} />
                    <InputDropdown label="Въведен в Админ" options={optionsEntered_in_admin} onChange={(e) => setEntered_in_admin(e)} />
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
