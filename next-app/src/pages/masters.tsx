// next
import React, { useEffect, useState, } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// axios
import axios from "axios";

// components
import MasterStudentsTable from "@/components/studentsTable/MasterStudentsTable";

// styles
import { PageConfig } from "@/styles/PagesConfigElements";
import { StudentsTableAddStyles } from "@/styles/TableElements";

// interface
import { IStudent } from "@/interfaces/IStudent";


// const API_URL = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/get_all`;
const API_URL = '/api/students/masters/get_all';


export default function Masters() {

    const router = useRouter();

    useEffect(() => {
        axios
            .get<IStudent[]>(API_URL)
            .then((res) => setStudentsGetData(res.data))
            .catch((err) => console.log("Error fetching students:", err))
        setIsLoading(false);
    }, [])

    const [isLoading, setIsLoading] = useState(true);                   // wait for fetch request
    const [studentsGetData, setStudentsGetData] = useState<IStudent[]>([]);



    return (
        <>
            <Head>
                <title>VUZF Students • Masters</title>
            </Head>
            <PageConfig>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <StudentsTableAddStyles>
                        <button onClick={() => router.push('/masters/create')}>
                            Добави Студент
                        </button>
                    </StudentsTableAddStyles>
                    <h1>Кандидат студентски документи - Магистри</h1>
                </div>

                {
                    isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <MasterStudentsTable studentsGetData={studentsGetData} />
                    )
                }

            </PageConfig>
        </>
    )
}
