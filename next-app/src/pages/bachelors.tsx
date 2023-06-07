// next
import React, { useEffect, useState, } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// axios
import axios from "axios";

// components
import BachelorStudentsTable from "@/components/studentsTable/BachelorStudentsTable";

// styles
import { PageConfig } from "@/styles/PagesConfigElements";
import { StudentsTableAddStyles } from "@/styles/TableElements";

// interface
import { IStudentBachelor } from "@/interfaces/IStudent";

// Material UI Spinner
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';


const API_URL = '/api/students/bachelor/get_all';


export default function Bachelors() {

    const router = useRouter();

    useEffect(() => {
        axios
            .get<IStudentBachelor[]>(API_URL)
            .then((res) => setStudentsGetData(res.data))
            .catch((err) => console.log("Error fetching students:", err))
        setIsLoading(false);
    }, [])

    const [isLoading, setIsLoading] = useState(true);                   // wait for fetch request
    const [studentsGetData, setStudentsGetData] = useState<IStudentBachelor[]>([]);

    return (
        <>
            <Head>
                <title>VUZF Students • Bachelors</title>
            </Head>
            <PageConfig>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <StudentsTableAddStyles>
                        <button onClick={() => router.push('/bachelors/create')}>
                            Добави Студент
                        </button>
                    </StudentsTableAddStyles>
                    <h1>Кандидат студентски документи - Бакалаври</h1>
                </div>

                {
                    isLoading ? (
                        <>
                            <Box sx={{ width: '99%' }}>
                                <LinearProgress />
                            </Box>
                        </>

                    ) : (
                        <BachelorStudentsTable studentsGetData={studentsGetData} />
                    )
                }
            </PageConfig>
        </>
    )
}
