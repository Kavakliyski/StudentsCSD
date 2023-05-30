// styles
import StatisticTable from "@/components/statistic/StatisticTable";
import { PageConfig } from "@/styles/PagesConfigElements";

// majors
import { MajorsMasters } from "@/majors/MajorsMasters";

// next
import { useEffect, useState } from "react";

// axios
import axios from "axios";

// interfaces
import { IStats } from "@/interfaces/IStatistics";


// const API_STATISTIC_URL = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/get_statistic`;
const API_STATISTIC_URL = '/api/students/masters/get_statistic';


export default function Statistic() {


    useEffect(() => {
        axios
            .get(API_STATISTIC_URL)
            .then((res) => setStats(res.data))
            .catch((err) => console.log("Error fetching students:", err))
        setIsLoading(false);
    }, [])

    const [stats, setStats] = useState<IStats[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    console.log(stats && stats)

    if (isLoading) return <h1>Зареждам...</h1>

    return (
        <PageConfig>

            <h1>Справка от кандидатстудентска кампания</h1>
            {
                stats && stats
                    .slice()
                    .reverse()
                    .map((stat, index) => (
                        <StatisticTable key={index} StudyYear={stat} />
                    ))
            }
        </PageConfig>
    )
}
