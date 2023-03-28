// styles
import { PageConfig } from "@/styles/PagesConfigElements";

// next
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// axios
import axios from "axios";

// interface
import { IStudent } from "@/interfaces/IStudent";


const ENTRIES_API_URL = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/get_entries`;


export default function query() {

    const [isLoading, setIsLoading] = useState(true);
    const [studentsGetEntryData, setStudentsGetEntryData] = useState<IStudent[]>([]);

    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/api/get_entries?query=${encodeURIComponent(query)}`);
    };

    useEffect(() => {
        axios
            .get<IStudent[]>(ENTRIES_API_URL)
            .then((res) => setStudentsGetEntryData(res.data))
            .catch((err) => console.log("Error fetching students:", err))
        setIsLoading(false)
    }, [])


    return (
        <PageConfig>

            <form onSubmit={handleSubmit}>
                <label>
                    Query:
                    <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>

            {
                isLoading ?
                    <div>заредих</div>
                    :
                    <div>Зареждам</div>
            }

        </PageConfig>
    )
}
