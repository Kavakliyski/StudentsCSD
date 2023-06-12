// next
import React, { useEffect, useState, } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// axios
import axios from "axios";

// styles
import { PageConfig } from "@/styles/PagesConfigElements";
import { StudentsTableAddStyles } from "@/styles/TableElements";

// interface
import { IStudentBachelor } from "@/interfaces/IStudent";

// Material UI Spinner
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

// components
import BachelorMarketingStudentsTable from "@/components/studentsTable/BachelorMarketingStudentsTable";


const API_URL = '/api/students/bachelors/get_all';


export default function Funnel() {

    const router = useRouter();

    useEffect(() => {

        setIsLoading(true);

        axios
            .get<IStudentBachelor[]>(API_URL)
            .then((res) => {
                setStudentsGetData(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("Error fetching students:", err);
                setIsLoading(false);
            });
    }, []);

    const [isLoading, setIsLoading] = useState(true);                   // wait for fetch request
    const [studentsGetData, setStudentsGetData] = useState<IStudentBachelor[]>([]);


    return (
        <>
            <Head>
                <title>VUZF • Bachelors • Funnel</title>
            </Head>
            <PageConfig>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <StudentsTableAddStyles>
                        <button onClick={() => router.push('/bachelors/create')}>
                            Добави Студент
                        </button>
                    </StudentsTableAddStyles>
                    <h1>КСК Маркетинг ФУНИЯ - Бакалаври</h1>
                </div>

                {
                    isLoading ? (
                        <>
                            <Box sx={{ width: '99%' }}>
                                <LinearProgress />
                            </Box>
                        </>

                    ) : (
                        <BachelorMarketingStudentsTable studentsGetData={studentsGetData} />
                    )
                }
            </PageConfig >
        </>
    )
}
