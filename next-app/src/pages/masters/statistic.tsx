// styles
import StatisticTable from "@/components/statistic/StatisticTable";
import { PageConfig } from "@/styles/PagesConfigElements";

// next
import { useEffect, useState } from "react";

// axios
import axios from "axios";

// interfaces
import { IStatisticData } from "@/interfaces/IStatistics";

// Material UI Spinner
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

// const API_STATISTIC_URL = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/get_statistic`;
const API_STATISTIC_URL = "/api/students/masters/get_statistic";

export default function Statistic() {
    const [stats, setStats] = useState<IStatisticData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        axios
            .get(API_STATISTIC_URL)
            .then((res) => setStats(res.data))
            .catch((err) => console.log("Error fetching students:", err));
        setIsLoading(false);
    }, []);

    
    return (
        <PageConfig>
            <h1>Справка от кандидатстудентска кампания - Магистри</h1>
            {isLoading ? (
                <>
                    <Box sx={{ width: "99%" }}>
                        <LinearProgress />
                    </Box>
                </>
            ) : (
                stats
                    .slice()
                    .reverse()
                    .map((stat, index) => (
                        <StatisticTable key={index} StudyYear={stat} />
                    ))
            )}
        </PageConfig>
    );
}
