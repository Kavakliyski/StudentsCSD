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
import { IStudent } from "@/interfaces/IStudent";

// Material UI Spinner
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import MasterMarketingStudentsTable from "@/components/studentsTable/MasterMarketingStudentsTable";

const API_URL = '/api/students/masters/get_all';


export default function Funnel() {

    const router = useRouter();

    useEffect(() => {

        setIsLoading(true);

        axios
            .get<IStudent[]>(API_URL)
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
    const [studentsGetData, setStudentsGetData] = useState<IStudent[]>([]);


    return (
        <>
            <Head>
                <title>VUZF • Masters • Funnel</title>
            </Head>
            <PageConfig>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <StudentsTableAddStyles>
                        <button onClick={() => router.push('/masters/create')}>
                            Добави Студент
                        </button>
                    </StudentsTableAddStyles>
                    <h1>КСК Маркетинг ФУНИЯ - Магистри</h1>
                </div>

                {
                    isLoading ? (
                        <>
                            <Box sx={{ width: '95%' }}>
                                <LinearProgress />
                            </Box>
                        </>

                    ) : (
                        <MasterMarketingStudentsTable studentsGetData={studentsGetData}/>
                        )
                }
            </PageConfig >
        </>
    )
}
