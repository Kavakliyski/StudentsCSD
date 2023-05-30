// styles
import { PageConfig } from "@/styles/PagesConfigElements";

// next
import { useState } from 'react';

// axios
import axios from "axios";

// interface
import { IStudent } from "@/interfaces/IStudent";

// table
import MasterStudentsTable from "@/components/studentsTable/MasterStudentsTable";

// Material UI
import { Box, Button, TextField } from "@mui/material";


// const ENTRIES_API_URL = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/get_entries`;
const ENTRIES_API_URL = '/api/students/masters/get_entries';


export default function Query() {
    const [studentsGetEntryData, setStudentsGetEntryData] = useState<IStudent[]>([]);
    const [submitted, setSubmitted] = useState(false);

    const [params, setParams] = useState<any>({});

    const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        setSubmitted(true);

        axios
            .get<IStudent[]>(ENTRIES_API_URL, { params })
            .then((res) => setStudentsGetEntryData(res.data))
            .catch((err) => console.log("Error fetching students:", err))
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParams({
            ...params,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <PageConfig>

            <h1>Търсене / Query, Магистри</h1>

            <div>

                <h2>Търспи по:</h2>

                <Box
                    onSubmit={handleSubmit}
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Отличителност" name="distinction" variant="standard" onChange={handleChange} />
                    <TextField label="Факултетен номер" name="faculty_number" variant="standard" onChange={handleChange} />
                    <TextField label="Статус на кск" name="status_of_ksk" variant="standard" onChange={handleChange} />
                    <TextField label="№ на заповед за записване" name="n_of_enrollment_order" variant="standard" onChange={handleChange} />
                    <TextField label="Име" name="names" variant="standard" onChange={handleChange} />
                    <TextField label="ЕГН" name="egn" variant="standard" onChange={handleChange} />
                    <TextField label="Имена на латиница" name="names_latin" variant="standard" onChange={handleChange} />
                    <TextField label="Телефон" name="phone_number" variant="standard" onChange={handleChange} />
                    <TextField label="Имейл" name="email" variant="standard" onChange={handleChange} />
                    <TextField label="Пред. Учебно Заведение" name="in_front_of_school" variant="standard" onChange={handleChange} />

                    {/* <TextField label="Местонахождение на преходното учебно заведение" name="location_of_the_transitional_educationa_institution" variant="standard" onChange={handleChange} /> */}
                    <TextField label="Професионално направление / квалификация" name="professional_qualification" variant="standard" onChange={handleChange} />
                    <TextField label="Потвърждение от Нацид" name="confirmation_by_nacid" variant="standard" onChange={handleChange} />
                    <TextField label="Желана Специалност" name="desired_major" variant="standard" onChange={handleChange} />
                    {/* <TextField label="Желана форма" name="desired_shape" variant="standard" onChange={handleChange} /> */}
                    <TextField label="Продължителност на обучение" name="length_of_study" variant="standard" onChange={handleChange} />
                    <TextField label="КОХОРТ В МООДЛЕ " name="cohort_in_moodle" variant="standard" onChange={handleChange} />
                    {/* <TextField label="Начин на кандидатстване" name="method_of_application" variant="standard" onChange={handleChange} /> */}

                    <TextField label="Дата на първоначален контакт" name="date_of_initial_contact" variant="standard" onChange={handleChange} />
                    <TextField label="G-MAIL" name="university_email" variant="standard" onChange={handleChange} />
                    <TextField label="_ID" name="_id" variant="standard" onChange={handleChange} />


                    <br />
                    <Button variant="contained" type="submit">Търси</Button>
                </Box>
            </div>

            {/* Render the search results */}
            {
                submitted &&
                <MasterStudentsTable studentsGetData={studentsGetEntryData} />
            }
        </PageConfig>
    );
}