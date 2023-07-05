// styles
import {
    StudentFormUpdateStudent,
    StudentFormWrapper,
} from "@/styles/FormElements";
import { PageConfig } from "@/styles/PagesConfigElements";

// axios
import axios from "axios";

// interface
import {
    IBachelorStudentFetchedData,
    IStudentGetDataBachelor,
} from "@/interfaces/IStudent";

// next
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// components
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

// auth
import { useUser } from "@auth0/nextjs-auth0/client";

// Material UI Spinner
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

// majors. options
import {
    optionsBachelor_course,
    optionsCertificate_from_ruo,
    optionsDesired_shape,
    optionsEmail_sent_to_access_moodle,
    optionsEntered_in_admin,
    optionsEntered_into_cohort,
    optionsForm_of_study,
    optionsMethod_of_applicationBach,
    optionsMoodle_profile_created,
    optionsPaid_ksk,
    optionsSent_faculty_number,
    optionsStatus_of_ksk,
    optionsSubmission_period_in_adminuni,
} from "@/components/inputs/selectorsForDropdown";
import { MajorsBachelors } from "@/majors/Majors";

const API_URL_PATCH = `/api/students/bachelors/update`;

export default function UpdateBachelor({
    id,
    returnUrl,
}: IStudentGetDataBachelor) {
    const router = useRouter();
    const { user } = useUser(); // get user email
    const [errorAdd, setErrorAdd] = useState<null | string>(); // error on update
    const [loading, setLoading] = useState(true);
    const [studentFetchedData, setStudentFetchedData] = useState<any>();

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(
                    `/api/students/bachelors/get_one?id=${id}`
                );
                console.log(response.data.student);
                const data: IBachelorStudentFetchedData = response.data.student;
                setStudentFetchedData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching student:", error);
                setLoading(false);
            }
        };

        fetchStudent();
    }, []);

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
            lastEditEmail: user?.email ?? "грешка в имейла",
            lastEditDate: formattedDate,
        });
    };

    const handleSelectChange = (e: SelectChangeEvent) => {
        const { name, value } = e.target;

        setStudentFetchedData({
            ...studentFetchedData,
            [name as string]: value,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        console.log("Updating data", studentFetchedData);

        axios
            .patch(API_URL_PATCH, studentFetchedData)
            .then((res) => {
                console.log("Post updated:", res.data);
                setErrorAdd(null); // reset error state on success
                router.push(`${returnUrl}`);
            })
            .catch((err) => {
                alert("Error durging writing");
                console.error("Error durging writing");
                setErrorAdd(err);
                console.log("Error:", err);
            });
    };

    if (loading)
        return (
            <Box sx={{ width: "99%" }}>
                <LinearProgress />
            </Box>
        );

    if (!studentFetchedData) return <h1>Студентът не е намерен</h1>;

    return (
        <PageConfig>
            <StudentFormWrapper>
                <h1>Редактиране на БАКАЛАВЪР с ID: {id}</h1>
                <p>
                    <strong>
                        Тук можете да редактирате записите за -{" "}
                        {studentFetchedData.names}
                    </strong>
                </p>

                <StudentFormUpdateStudent>
                    {/* Marketing */}

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Период на подаване в АдминУни(семестър)
                        </InputLabel>
                        <Select
                            value={
                                studentFetchedData.submission_period_in_adminuni ||
                                ""
                            }
                            name="submission_period_in_adminuni"
                            onChange={handleSelectChange}
                        >
                            {optionsSubmission_period_in_adminuni.map(
                                (option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            )}
                        </Select>
                    </FormControl>

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Учебна година"
                        name="school_year"
                        value={studentFetchedData.school_year || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Име Презиме Фамилия"
                        name="names"
                        value={studentFetchedData.names || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Телефон"
                        name="phone_number"
                        value={studentFetchedData.phone_number || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Имейл"
                        name="email"
                        value={studentFetchedData.email || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Пред. Учебно Заведение"
                        name="in_front_of_school"
                        value={studentFetchedData.in_front_of_school || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Местонахождение на преходното учебно заведение"
                        name="location_of_the_transitional_educationa_institution"
                        value={
                            studentFetchedData.location_of_the_transitional_educationa_institution ||
                            ""
                        }
                        onChange={handleChange}
                    />

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Желана Специалност
                        </InputLabel>
                        <Select
                            value={studentFetchedData.desired_major || ""}
                            name="desired_major"
                            onChange={handleSelectChange}
                        >
                            {MajorsBachelors.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.value ? option.label : <br />}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Желана форма
                        </InputLabel>
                        <Select
                            value={studentFetchedData.desired_shape || ""}
                            name="desired_shape"
                            onChange={handleSelectChange}
                        >
                            {optionsDesired_shape.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.value ? option.label : <br />}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Начин на кандидатстване
                        </InputLabel>
                        <Select
                            value={
                                studentFetchedData.method_of_application || ""
                            }
                            name="method_of_application"
                            onChange={handleSelectChange}
                        >
                            {optionsMethod_of_applicationBach.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.value ? option.label : <br />}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Дата на първоначален контакт"
                        name="date_of_initial_contact"
                        value={studentFetchedData.date_of_initial_contact || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Източник на контакт"
                        name="contact_source"
                        value={studentFetchedData.contact_source || ""}
                        onChange={handleChange}
                    />

                    <div>Изпратен имейл с информация</div>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Статус на КСК
                        </InputLabel>
                        <Select
                            value={studentFetchedData.status_of_ksk || ""}
                            name="status_of_ksk"
                            onChange={handleSelectChange}
                        >
                            {optionsStatus_of_ksk.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.value ? option.label : <br />}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Попълнена онлайн фрома(ЕГН)"
                        name="egn"
                        value={studentFetchedData.egn || ""}
                        onChange={handleChange}
                    />

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Заплатил КСК
                        </InputLabel>
                        <Select
                            value={studentFetchedData.paid_ksk || ""}
                            name="paid_ksk"
                            onChange={handleSelectChange}
                        >
                            {optionsPaid_ksk.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.value ? option.label : <br />}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Дата плащане КСК"
                        name="date_of_payment_ksk"
                        value={studentFetchedData.date_of_payment_ksk || ""}
                        onChange={handleChange}
                    />

                    <div className="Separator"></div>
                    <div className="Separator"></div>

                    {/* UO infromation */}

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Отличителност"
                        name="distinction"
                        value={studentFetchedData.distinction || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Факултетен номер"
                        name="faculty_number"
                        value={studentFetchedData.faculty_number || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="№ на заповед за записване"
                        name="n_of_enrollment_order"
                        value={studentFetchedData.n_of_enrollment_order || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Имена на латиница"
                        name="names_latin"
                        value={studentFetchedData.names_latin || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Лице за контакт (като коментар)"
                        name="person_to_contact"
                        value={studentFetchedData.person_to_contact || ""}
                        onChange={handleChange}
                    />

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Удостоверение от РУО
                        </InputLabel>
                        <Select
                            value={
                                studentFetchedData.certificate_from_ruo || ""
                            }
                            name="certificate_from_ruo"
                            onChange={handleSelectChange}
                        >
                            {optionsCertificate_from_ruo.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.value ? option.label : <br />}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Курс
                        </InputLabel>
                        <Select
                            value={studentFetchedData.bachelor_course || ""}
                            name="bachelor_course"
                            onChange={handleSelectChange}
                        >
                            {optionsBachelor_course.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.value ? option.label : <br />}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Продължителност семестри"
                        name="duration_semesters"
                        value={studentFetchedData.duration_semesters || ""}
                        onChange={handleChange}
                    />

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Начин на обучение
                        </InputLabel>
                        <Select
                            value={studentFetchedData.form_of_study || ""}
                            name="form_of_study"
                            onChange={handleSelectChange}
                        >
                            {optionsForm_of_study.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.value ? option.label : <br />}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Платена сем. такса"
                        name="sem_fee_paid"
                        value={studentFetchedData.sem_fee_paid || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Дата на платена сем. такса"
                        name="date_of_paid_sem_fee"
                        value={studentFetchedData.date_of_paid_sem_fee || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Дата на издаване на договор"
                        name="contract_issue_date"
                        value={studentFetchedData.contract_issue_date || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Сем. Такса"
                        name="sem_Fee"
                        value={studentFetchedData.sem_Fee || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Сем. Такса"
                        name="sem_Fee"
                        value={studentFetchedData.sem_Fee || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Отстъпка"
                        name="discount"
                        value={studentFetchedData.discount || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Основание за отстъпката"
                        name="reason_for_discount"
                        value={studentFetchedData.reason_for_discount || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Създаден g-mail"
                        name="university_email"
                        value={studentFetchedData.university_email || ""}
                        onChange={handleChange}
                    />

                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Добавен в Мейл Група"
                        name="university_mail_group"
                        value={studentFetchedData.university_mail_group || ""}
                        onChange={handleChange}
                    />

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Създаден профил в Мудъл
                        </InputLabel>
                        <Select
                            value={
                                studentFetchedData.moodle_profile_created || ""
                            }
                            name="moodle_profile_created"
                            onChange={handleSelectChange}
                        >
                            {optionsMoodle_profile_created.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.value ? option.label : <br />}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Изпратен имейл за достъп до Мудъл
                        </InputLabel>
                        <Select
                            value={
                                studentFetchedData.email_sent_to_access_moodle ||
                                ""
                            }
                            name="email_sent_to_access_moodle"
                            onChange={handleSelectChange}
                        >
                            {optionsEmail_sent_to_access_moodle.map(
                                (option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.value ? option.label : <br />}
                                    </MenuItem>
                                )
                            )}
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Въведени в Админ/Регистъра
                        </InputLabel>
                        <Select
                            value={studentFetchedData.entered_in_admin || ""}
                            name="entered_in_admin"
                            onChange={handleSelectChange}
                        >
                            {optionsEntered_into_cohort.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.value ? option.label : <br />}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">
                            Вкаран в кохорт в Moodle
                        </InputLabel>
                        <Select
                            value={studentFetchedData.entered_into_cohort || ""}
                            name="entered_into_cohort"
                            onChange={handleSelectChange}
                        >
                            {optionsEntered_in_admin.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.value ? option.label : <br />}
                                </MenuItem>
                            ))}
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
    );
}

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
    const { id } = await context.query;
    if (!id) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            id,
            returnUrl: context.query.returnUrl || "",
        },
    };
};
