// styles
import { PageConfig } from "@/styles/PagesConfigElements";

// next
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// axios
import axios from "axios";

// interface
import { IStudent } from "@/interfaces/IStudent";

// table
import MasterStudentsTable from "@/components/studentsTable/MasterStudentsTable";


const ENTRIES_API_URL = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/get_entries`;


export default function query() {
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

    console.log(studentsGetEntryData);

    return (
        <PageConfig>
            <div style={{
                display: 'inline block'
            }}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="names"
                        placeholder="Търси по име"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="status_of_ksk"
                        placeholder="Търси по статус"
                        onChange={handleChange}
                    />
                    {/* Add more fields as needed */}
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Render the search results */}
            {
                submitted &&
                <MasterStudentsTable
                    studentsGetData={studentsGetEntryData}
                    updateMasterUrl={''}
                />
            }
        </PageConfig>
    );
}