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

// majors
import { MajorsMasters } from "@/majors/MajorsMasters";


const API_URL = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/add`;


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

        console.log(distinction)

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


    const optionsStatus_of_ksk = [
        { label: "", value: "" },
        { label: "В процес", value: "В процес" },
        { label: "Приет", value: "Приет" },
        { label: "Отписан", value: "Отписан" },
    ];

    const optionsProfessional_qualification = [
        { label: "", value: "" },
        { label: "Професионален бакалавър", value: "Професионален бакалавър" },
        { label: "Професионален бакалавър - неикономист", value: "Професионален бакалавър - неикономист" },
        { label: "Икономист", value: "Икономист" },
        { label: "Неикономист", value: "Неикономист" },
    ];

    const optionsConfirmation_by_nacid = [
        { label: "", value: "" },
        { label: "Да, има", value: "Да, има" },
        { label: "Не, няма", value: "Не, няма" },
        { label: "Не е необходимо", value: "Не е необходимо" },
    ];

    const optionsDesired_shape = [
        { label: "", value: "" },
        { label: "Редовно", value: "Редовно" },
        { label: "Задочно", value: "Задочно" },
        { label: "Дистанционно", value: "Дистанционно" },
    ];

    const optionsLength_of_study = [
        { label: "", value: "" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3/ съкращава", value: "3/ съкращава" },
        { label: "3/ не съкращава", value: "3/ не съкращава" },
        { label: "4/ съкращава", value: "4/ съкращава" },
        { label: "4/ не съкращава", value: "4/ не съкращава" },
    ];

    const optionsCohort_in_moodle = [
        { label: "", value: "" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "1+3", value: "1+3" },
        { label: "1+4", value: "1+4" },
        { label: "Индивидуален учебен план", value: "Индивидуален учебен план" },
    ];

    const optionsMethod_of_application = [
        { label: "", value: "" },
        { label: "По документи", value: "По документи" },
        { label: "Академична справка", value: "Академична справка" },
        { label: "Уверение", value: "Уверение" },
    ];

    const optionsPaid_ksk = [
        { label: "", value: "" },
        { label: "Не е необходимо", value: "Не е необходимо" },
        { label: "Да", value: "Да" },
        { label: "Не", value: "Не" },
    ];

    const optionsSubmission_period_in_adminuni = [
        { label: "", value: "" },
        { label: "Зимен", value: "Зимен" },
        { label: "Летен", value: "Летен" },
    ];

    return (
        <PageConfig>

            <StudentFormWrapper>

                <div><h1>Създаване на Магистър</h1></div>
                <p>Тук можете да създатете нов запис в базата данни с магистри.</p>
                <br />

                <StudentFormCU>

                    <InputText label='Отличителност' onChange={(e) => setDistinction(e)} />
                    <InputText label='Факултент номер' onChange={(e) => setFaculty_number(e)} />
                    <InputDropdown label="Статус на КСК" options={optionsStatus_of_ksk} onChange={(e) => setStatus_of_ksk(e)} />
                    <InputText label='№ на заповед за записване' onChange={(e) => setN_of_enrollment_order(e)} />
                    <InputText label='Три имена' onChange={(e) => setNames(e)} />
                    <InputText label='Имена на латиница' onChange={(e) => setNames_latin(e)} />
                    <InputText label='Телефон' onChange={(e) => setPhone_number(e)} />
                    <InputText label='Имейл' onChange={(e) => setEmail(e)} />
                    <InputText label='ЕГН' onChange={(e) => setEgn(e)} />
                    <InputText label='Пред. Учебно Заведение' onChange={(e) => setIn_front_of_school(e)} />
                    <InputText label='Местонахождение на преходното учебно заведение' onChange={(e) => setLocation_of_the_transitional_educationa_institution(e)} />
                    <InputDropdown label="Професионално направление/ квалификация" options={optionsProfessional_qualification} onChange={(e) => setProfessional_qualification(e)} />
                    <InputDropdown label="Потвърждение от Нацид" options={optionsConfirmation_by_nacid} onChange={(e) => setConfirmation_by_nacid(e)} />
                    <InputDropdown label="Желана Специалност" options={MajorsMasters} onChange={(e) => setDesired_major(e)} />
                    <InputDropdown label="Желана форма" options={optionsDesired_shape} onChange={(e) => setDesired_shape(e)} />
                    <InputDropdown label="Продължителност на обучение и дали съкращава" options={optionsLength_of_study} onChange={(e) => setLength_of_study(e)} />
                    <InputDropdown label="КОХОРТ В МООДЛЕ" options={optionsCohort_in_moodle} onChange={(e) => setCohort_in_moodle(e)} />
                    <InputDropdown label="Начин на кандидатстване" options={optionsMethod_of_application} onChange={(e) => setMethod_of_application(e)} />
                    <InputText label='Дата на първоначален контакт' onChange={(e) => setDate_of_initial_contact(e)} />
                    <InputText label="Източник на контакт" onChange={(e) => setContact_source(e)} />
                    <InputDropdown label="Заплатил КСК" options={optionsPaid_ksk} onChange={(e) => setPaid_ksk(e)} />
                    <InputText label="Дата плащане КСК" onChange={(e) => setDate_of_payment_ksk(e)} />
                    <InputText label="Коментар - документи за КСК" onChange={(e) => setComment_ksk(e)} />
                    <InputText label="Платена сем. такса" onChange={(e) => setSem_fee_paid(e)} />
                    <InputText label="Дата на платена сем. такса" onChange={(e) => setDate_of_sem_fee_paid(e)} />
                    <InputDropdown label="Период на подаване в АдминУни" options={optionsSubmission_period_in_adminuni} onChange={(e) => setSubmission_period_in_adminuni(e)} />

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
