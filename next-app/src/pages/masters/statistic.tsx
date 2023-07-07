// styles
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

// components
import StatisticTable from "@/components/statistic/StatisticTable";
import StatisticTableFormOfStudy from "@/components/statistic/StatisticTableFormOfStudy";

// const API_STATISTIC_URL = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/get_statistic`;
const API_STATISTIC_URL = "/api/students/masters/get_statistic";
const API_STATISTIC_URL_FORM_OF_STUDY =
    "/api/students/masters/get_statistic_form";

export default function Statistic() {
    const [stats, setStats] = useState<IStatisticData[]>([]);
    const [statsForm, setStatsForm] = useState<IStatisticData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        axios
            .get(API_STATISTIC_URL)
            .then((res) => setStats(res.data))
            .catch((err) => console.log("Error fetching students:", err));

        axios
            .get(API_STATISTIC_URL_FORM_OF_STUDY)
            .then((res) => setStatsForm(res.data))
            .catch((err) => console.log("Error fetching students:", err));

        setIsLoading(false);
    }, []);

    const handleTabSelect = (index: number) => {
        setActiveTab(index);
    };

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
                <div className="tabs-container">
                    <nav className="tabs-title" role="tablist">
                        <ul>
                            <li
                                style={{
                                    cursor: "pointer",
                                    boxShadow:
                                        activeTab === 0
                                            ? "inset 0 0 10px #1976d2"
                                            : "",
                                }}
                                onClick={() => handleTabSelect(0)}
                            >
                                <a
                                    id="tab-1"
                                    href="#stat1"
                                    role="tab"
                                    aria-selected={activeTab === 0}
                                >
                                    Всички запитвания, подали и записани
                                </a>
                            </li>
                            <li
                                style={{
                                    cursor: "pointer",
                                    boxShadow:
                                        activeTab === 1
                                            ? "inset 0 0 10px #1976d2"
                                            : "",
                                }}
                                onClick={() => handleTabSelect(1)}
                            >
                                <a
                                    id="tab-2"
                                    href="#stat2"
                                    role="tab"
                                    aria-selected={activeTab === 1}
                                >
                                    Всички Записани - прием по години
                                </a>
                            </li>
                            <li
                                style={{
                                    cursor: "pointer",
                                    boxShadow:
                                        activeTab === 2
                                            ? "inset 0 0 10px #1976d2"
                                            : "",
                                }}
                                onClick={() => handleTabSelect(2)}
                            >
                                <a
                                    id="tab-3"
                                    href="#stat3"
                                    role="tab"
                                    aria-selected={activeTab === 2}
                                >
                                    Още една
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <>
                        <section
                            // id="stat1"
                            role="tabpanel"
                            aria-labelledby="tab-1"
                            hidden={activeTab !== 0}
                        >
                            {stats
                                .slice()
                                .reverse()
                                .map((stat, index) => (
                                    <StatisticTable
                                        key={index}
                                        StudyYear={stat}
                                    />
                                ))}
                        </section>

                        <section
                            // id="stat2"
                            role="tabpanel"
                            aria-labelledby="tab-2"
                            hidden={activeTab !== 1}
                        >
                            {statsForm.map((stat) => (
                                <div key={stat.schoolYear}>
                                    <StatisticTableFormOfStudy
                                        StudyYear={stat}
                                    />
                                </div>
                            ))}
                        </section>

                        <section
                            // id="stat2"
                            role="tabpanel"
                            aria-labelledby="tab-2"
                            hidden={activeTab !== 2}
                        >
                            Още една
                        </section>
                    </>
                </div>
            )}
        </PageConfig>
    );
}
