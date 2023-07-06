// styles
import { StatisticTableContainer } from "@/styles/StatisticTableElements";

interface IStatisticData {
    StudyYear: {
        majors: {
            major: string;
            askCount: string;
            paidCount: string;
            acceptedCount: string;
        }[];
        schoolYear: string;
    };
}

export default function StatisticTable(Statistic: IStatisticData) {
    const majors = Statistic.StudyYear.majors;
    const totalAskCount = majors.reduce(
        (sum, majorData) => sum + parseInt(majorData.askCount),
        0
    );
    const totalPaidCount = majors.reduce(
        (sum, majorData) => sum + parseInt(majorData.paidCount),
        0
    );
    const totalAcceptedCount = majors.reduce(
        (sum, majorData) => sum + parseInt(majorData.acceptedCount),
        0
    );

    return (
        <StatisticTableContainer>
            <h2>
                {Statistic.StudyYear.schoolYear
                    ? Statistic.StudyYear.schoolYear === ""
                        ? "Не е въведена учебна година"
                        : Statistic.StudyYear.schoolYear
                    : "Не е въведена учебна година"}
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>Желана специалност</th>
                        <th>Запитвания</th>
                        <th>Подали</th>
                        <th>Записани</th>
                    </tr>
                </thead>
                <tbody>
                    {Statistic.StudyYear.majors.map(
                        (
                            majorData: {
                                major: string;
                                askCount: string;
                                paidCount: string;
                                acceptedCount: string;
                            },
                            index: number
                        ) => (
                            <tr key={index}>
                                <td>{majorData.major}</td>
                                <td>{majorData.askCount}</td>
                                <td>{majorData.paidCount}</td>
                                <td>{majorData.acceptedCount}</td>
                            </tr>
                        )
                    )}
                    <tr className="GrandTotal">
                        <td>GrandTotal</td>
                        <td>{totalAskCount}</td>
                        <td>{totalPaidCount}</td>
                        <td>{totalAcceptedCount}</td>
                    </tr>
                </tbody>
            </table>
        </StatisticTableContainer>
    );
}
