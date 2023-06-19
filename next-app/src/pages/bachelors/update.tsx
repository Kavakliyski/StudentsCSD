// styles
import { StudentFormUpdateStudent, StudentFormWrapper } from '@/styles/FormElements';
import { PageConfig } from '@/styles/PagesConfigElements';

// axios
import axios from 'axios';

// interface
import { IStudentGetDataBachelor } from '@/interfaces/IStudent';

// next
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';

// components
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

// auth
import { useAuth } from "@/context/AuthContext";

// majors. options
import { optionsCohort_in_moodle, optionsConfirmation_by_nacid, optionsDesired_shape, optionsEmail_sent_to_access_moodle, optionsEntered_in_admin, optionsEntered_into_cohort, optionsLength_of_study, optionsMethod_of_application, optionsMoodle_profile_created, optionsPaid_ksk, optionsProfessional_qualification, optionsSent_faculty_number, optionsStatus_of_ksk, optionsSubmission_period_in_adminuni } from '@/components/inputs/selectorsForDropdown';
import { MajorsMasters } from '@/majors/MajorsMasters';


const API_URL_PATCH = `/api/students/bachelors/update`;


export default function UpdateBachelor({ id, studentData }: IStudentGetDataBachelor) {

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
                router.push("/bachelors")
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
                <h1>Редактиране на БАКАЛАВЪР с ID: {id}</h1>
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
};


export const getServerSideProps: GetServerSideProps<any> = async (context) => {

    const { id } = await context.query;

    if (!id) {
        return {
            notFound: true,
        };
    }

    // Fetch student data from the API
    const res = await axios.get<IStudentGetDataBachelor>(`${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/bachelors/get_one?id=${id}`);
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

