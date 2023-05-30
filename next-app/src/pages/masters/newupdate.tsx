// next
import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// axios
import axios from 'axios';

// interface
import { IStudentGetData } from '@/interfaces/IStudent';

// styles
import { PageConfig } from '@/styles/PagesConfigElements';

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


const API_URL_GET_ONE = '/api/students/masters/get_one?id=';



export default function newupdate({ id }: any) {

    const [studentFetchedData, setStudentFetchedData] = useState<IStudentGetData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/students/masters/get_one?id=${id}`);
                setStudentFetchedData(response.data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchData();
    }, [id]);

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

    return (
        <PageConfig>
            <div>newupdate {id}</div>
            {/* <pre>{JSON.stringify(studentFetchedData, null, 2)}</pre> */}
            <TextField id="outlined-basic" variant="outlined"
                        label="Отличителност"
                        name="distinction"
                        value={studentFetchedData.studentData.student.distinction || ''}
                        onChange={handleChange}
                    />
        </PageConfig>
    )
}

export async function getServerSideProps(context: any) {
    const { query } = context;
    const { id } = query;

    return {
        props: {
            id
        }
    };
}