// next
import { GetServerSideProps } from 'next';
import { useState, } from 'react';
import { useRouter } from 'next/router';

// axios
import axios from 'axios';

// interface
import { IStudentGetData } from '@/interfaces/IStudent';

// styles
import { StudentFormUpdateStudent, StudentFormWrapper } from '@/styles/FormElements';
import { PageConfig } from '@/styles/PagesConfigElements';

// auth
import { useAuth } from "@/context/AuthContext";

// components
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

// majors. options
import { optionsCohort_in_moodle, optionsConfirmation_by_nacid, optionsDesired_shape, optionsEmail_sent_to_access_moodle, optionsEntered_in_admin, optionsEntered_into_cohort, optionsLength_of_study, optionsMethod_of_application, optionsMoodle_profile_created, optionsPaid_ksk, optionsProfessional_qualification, optionsSent_faculty_number, optionsStatus_of_ksk, optionsSubmission_period_in_adminuni } from '@/components/inputs/selectorsForDropdown';
import { MajorsMasters } from '@/majors/MajorsMasters';


const API_URL_PATCH = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/update`;


export default function Update({ id, studentData }: IStudentGetData) {

    const router = useRouter();
    const { user } = useAuth();                                       // get user email

    const [studentFetchedData, setStudentFetchedData] = useState(studentData.student);
    const [errorAdd, setErrorAdd] = useState(null);                   // error on update

    // format the date - dd.mm.year clock
    const formattedDate = new Date().toLocaleString("bg-BG", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setStudentFetchedData({
            ...studentFetchedData,
            [e.target.name]: e.target.value,
            lastEditEmail: user.email,
            lastEditDate: formattedDate
        });
    };

    const handleSelectChange = (e: SelectChangeEvent) => {
        const { name, value } = e.target;

        setStudentFetchedData({
            ...studentFetchedData,
            [name as string]: value
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        console.log("Updating data", studentFetchedData)

        axios
            .patch(API_URL_PATCH,
                studentFetchedData
            )
            .then((res) => {

                console.log("Post updated:", res.data);
                setErrorAdd(null);              // reset error state on success
                router.push("/masters")
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

                <h1>Редактиране на МАГИСТЪР с ID: {id}</h1>
                <p><strong>Тук можете да редактирате записите за - {studentFetchedData.names}</strong></p>

                <StudentFormUpdateStudent>

                    <TextField id="outlined-basic" variant="outlined"
                        label="Отличителност"
                        name="distinction"
                        value={studentFetchedData.distinction || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Факултетен номер"
                        name="faculty_number"
                        value={studentFetchedData.faculty_number || ''}
                        onChange={handleChange}
                    />

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Статус на КСК</InputLabel>
                        <Select value={studentFetchedData.status_of_ksk || ''} name="status_of_ksk" onChange={handleSelectChange}>
                            {
                                optionsStatus_of_ksk.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <TextField id="outlined-basic" variant="outlined"
                        label="№ на заповед за записване"
                        name="n_of_enrollment_order"
                        value={studentFetchedData.n_of_enrollment_order || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Име Презиме Фамилия"
                        name="names"
                        value={studentFetchedData.names || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Имена на латиница"
                        name="names_latin"
                        value={studentFetchedData.names_latin || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Телефон"
                        name="phone_number"
                        value={studentFetchedData.phone_number || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Имейл"
                        name="email"
                        value={studentFetchedData.email || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="ЕГН"
                        name="egn"
                        value={studentFetchedData.egn || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Пред. Учебно Заведение"
                        name="in_front_of_school"
                        value={studentFetchedData.in_front_of_school || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Местонахождение на преходното учебно заведение"
                        name="location_of_the_transitional_educationa_institution"
                        value={studentFetchedData.location_of_the_transitional_educationa_institution || ''}
                        onChange={handleChange}
                    />

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Професионално направление / квалификация</InputLabel>
                        <Select value={studentFetchedData.professional_qualification || ''} name="professional_qualification" onChange={handleSelectChange}>
                            {
                                optionsProfessional_qualification.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Потвърждение от Нацид</InputLabel>
                        <Select value={studentFetchedData.confirmation_by_nacid || ''} name="confirmation_by_nacid" onChange={handleSelectChange}>
                            {
                                optionsConfirmation_by_nacid.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Желана Специалност</InputLabel>
                        <Select value={studentFetchedData.desired_major || ''} name="desired_major" onChange={handleSelectChange}>
                            {
                                MajorsMasters.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Желана форма</InputLabel>
                        <Select value={studentFetchedData.desired_shape || ''} name="desired_shape" onChange={handleSelectChange}>
                            {
                                optionsDesired_shape.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>


                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Продължителност на обучение и дали съкращава</InputLabel>
                        <Select value={studentFetchedData.length_of_study || ''} name="length_of_study" onChange={handleSelectChange}>
                            {
                                optionsLength_of_study.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">КОХОРТ В МООДЛЕ</InputLabel>
                        <Select value={studentFetchedData.cohort_in_moodle || ''} name="cohort_in_moodle" onChange={handleSelectChange}>
                            {
                                optionsCohort_in_moodle.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Начин на кандидатстване</InputLabel>
                        <Select value={studentFetchedData.method_of_application || ''} name="method_of_application" onChange={handleSelectChange}>
                            {
                                optionsMethod_of_application.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <TextField id="outlined-basic" variant="outlined"
                        label="Дата на първоначален контакт"
                        name="date_of_initial_contact"
                        value={studentFetchedData.date_of_initial_contact || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Месец на запитване"
                        name="month_of_inquiry"
                        value={studentFetchedData.month_of_inquiry || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Източник на контакт"
                        name="contact_source"
                        value={studentFetchedData.contact_source || ''}
                        onChange={handleChange}
                    />

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Заплатил КСК</InputLabel>
                        <Select value={studentFetchedData.paid_ksk || ''} name="paid_ksk" onChange={handleSelectChange}>
                            {
                                optionsPaid_ksk.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <TextField id="outlined-basic" variant="outlined"
                        label="Дата плащане КСК"
                        name="date_of_payment_ksk"
                        value={studentFetchedData.date_of_payment_ksk || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Коментар - документи за КСК"
                        name="comment_ksk"
                        value={studentFetchedData.comment_ksk || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Платена сем. такса"
                        name="sem_fee_paid"
                        value={studentFetchedData.sem_fee_paid || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Дата на платена сем. такса"
                        name="date_of_sem_fee_paid"
                        value={studentFetchedData.date_of_sem_fee_paid || ''}
                        onChange={handleChange}
                    />

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Период на подаване в АдминУни</InputLabel>
                        <Select value={studentFetchedData.submission_period_in_adminuni || ''} name="submission_period_in_adminuni" onChange={handleSelectChange}>
                            {
                                optionsSubmission_period_in_adminuni.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <TextField id="outlined-basic" variant="outlined"
                        label="Учебна година"
                        name="school_year"
                        value={studentFetchedData.school_year || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Дата на издаване на договор"
                        name="contract_issue_date"
                        value={studentFetchedData.contract_issue_date || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Сем. Такса"
                        name="sem_Fee"
                        value={studentFetchedData.sem_Fee || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Отстъпка"
                        name="discount"
                        value={studentFetchedData.discount || ''}
                        onChange={handleChange}
                    />

                    <TextField id="outlined-basic" variant="outlined"
                        label="Коментар"
                        name="comment"
                        value={studentFetchedData.comment || ''}
                        onChange={handleChange}
                    />

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Изпратен фак. номер</InputLabel>
                        <Select value={studentFetchedData.sent_faculty_number || ''} name="sent_faculty_number" onChange={handleSelectChange}>
                            {
                                optionsSent_faculty_number.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <TextField id="outlined-basic" variant="outlined"
                        label="Университетски e-mail"
                        name="university_email"
                        value={studentFetchedData.university_email || ''}
                        onChange={handleChange}
                    />

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Създаден профил в Мудъл</InputLabel>
                        <Select value={studentFetchedData.moodle_profile_created || ''} name="moodle_profile_created" onChange={handleSelectChange}>
                            {
                                optionsMoodle_profile_created.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Изпратен имейл за достъп до Мудъл</InputLabel>
                        <Select value={studentFetchedData.email_sent_to_access_moodle || ''} name="email_sent_to_access_moodle" onChange={handleSelectChange}>
                            {
                                optionsEmail_sent_to_access_moodle.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Вкаран в Кохорт</InputLabel>
                        <Select value={studentFetchedData.entered_into_cohort || ''} name="entered_into_cohort" onChange={handleSelectChange}>
                            {
                                optionsEntered_into_cohort.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Въведени в Админ</InputLabel>
                        <Select value={studentFetchedData.entered_in_admin || ''} name="entered_in_admin" onChange={handleSelectChange}>
                            {
                                optionsEntered_in_admin.map((option) =>
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                </StudentFormUpdateStudent>

                <div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color={errorAdd ? "error" : "primary"}
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        актуализирай студент / отрази промените
                    </Button>
                </div>

            </StudentFormWrapper>

        </PageConfig>
    )
}


export const getServerSideProps: GetServerSideProps<any> = async (context) => {

    const { id } = await context.query;

    if (!id) {
        return {
            notFound: true,
        };
    }

    // Fetch student data from the API
    const res = await axios.get<IStudentGetData>(`${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/get_one?id=${id}`);
    const studentData = res.data;

    // Return not found if there's no student data
    if (!studentData) {
        return {
            notFound: true,
        };
    }


    return {
        props: {
            id,
            studentData
        },
    };
};
