// next
import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';

// axios
import axios from 'axios';

// interface
import { IStudentGetData } from '@/interfaces/IStudent';

// styles
import { StudentFormUpdateStudent, StudentFormWrapper } from '@/styles/FormElements';
import { PageConfig } from '@/styles/PagesConfigElements';

// components
import TextField from '@mui/material/TextField';
import InputDropdown from '@/components/inputs/InputDropdown';

// majors. options
import { optionsStatus_of_ksk } from '@/components/inputs/selectorsForDropdown';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


const API_URL_GET_ONE = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/get_one?id=`;
const API_URL_PATCH = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/update`;


export default function Updatemaster({ id, studentData }: IStudentGetData) {


    const [studentFetchedData, setStudentFetchedData] = useState(studentData.student);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setStudentFetchedData({
            ...studentFetchedData,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectChange = (e: SelectChangeEvent) => {
        const { name, value } = e.target;

        setStudentFetchedData({
            ...studentFetchedData,
            [name as string]: value
        });
    };

    console.log(studentFetchedData)


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

                    <TextField id="outlined-basic" variant="outlined"
                        label="Име Презиме Фамилия"
                        name="names"
                        value={studentFetchedData.names || ''}
                        onChange={handleChange}
                    />

                    <FormControl variant="standard">
                        <InputLabel id="demo-simple-select-label">Статус на КСК</InputLabel>
                        <Select
                            value={studentFetchedData.status_of_ksk || ''}
                            onChange={handleSelectChange}
                            name="status_of_ksk"
                        >
                            <MenuItem value=" "> <br /> </MenuItem>
                            <MenuItem value="В процес">В процес</MenuItem>
                            <MenuItem value="Приет">Приет</MenuItem>
                            <MenuItem value="Отписан">Отписан</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField id="outlined-basic" variant="outlined"
                        label="ЕГН"
                        name="egn"
                        value={studentFetchedData.egn || ''}
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

                    <TextField id="outlined-basic" variant="outlined"
                        label="Професионално направление / квалификация"
                        name="professional_qualification"
                        value={studentFetchedData.professional_qualification || ''}
                        onChange={handleChange}
                    />

                </StudentFormUpdateStudent>

            </StudentFormWrapper>

        </PageConfig>
    )
}


export const getServerSideProps: GetServerSideProps<any> = async (context) => {
    // Fetch the data to be edited from the API
    const { id } = context.query;

    // Make sure id is defined
    if (!id) {
        return {
            notFound: true,
        };
    }

    // Fetch student data from the API
    const res = await axios.get<IStudentGetData>(`${API_URL_GET_ONE}${id}`);
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
}
