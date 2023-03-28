// next
import React, { useEffect, useState, } from "react";

// axios
import axios from "axios";

// components
import MasterStudentsTable from "@/components/studentsTable/MasterStudentsTable";

// styles
import { PageConfig } from "@/styles/PagesConfigElements";

// interface
import { IStudent } from "@/interfaces/IStudent";



const API_URL = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/get_all`;
const updateMasterUrl = '/updatemaster?id=';
const createMasterUrl = '/createmaster';


export default function Masters() {

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
        <PageConfig>
            <h1>Кандидат студентски документи - Магистри</h1>

            {
                isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <MasterStudentsTable
                        studentsGetData={studentsGetData}
                        updateMasterUrl={updateMasterUrl}
                        createMasterUrl={createMasterUrl}
                    />
                )}

        </PageConfig>
    )
}
