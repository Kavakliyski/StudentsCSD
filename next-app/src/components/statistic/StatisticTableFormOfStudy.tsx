import { StatisticTableContainer } from "@/styles/StatisticTableElements";

interface IStatisticTableFromOfStudy {
    schoolYear?: string;
    majors?: {
        desiredMajor: string;
        desiredShape: string;
        count: number;
    }[];
    StudyYear: any;
}

interface IStatFormMajor {
    desiredMajor: string;
    desiredShape: string;
    count: number;
}

export default function StatisticTableFromOfStudy(
    Statistic: IStatisticTableFromOfStudy
) {
    const combinedData: any = [];
    Statistic.StudyYear.majors.forEach((item: IStatFormMajor) => {
        const existingItem = combinedData.find(
            (combinedItem: any) =>
                combinedItem.desiredMajor === item.desiredMajor
        );
        if (existingItem) {
            if (item.desiredShape === "Дистанционно") {
                existingItem.distancionnoCount = item.count;
            } else if (item.desiredShape === "Задочно") {
                existingItem.zadocnoCount = item.count;
            } else if (item.desiredShape === "Редовно") {
                existingItem.redovnoCount = item.count;
            }
            existingItem.totalCount += item.count;
        } else {
            const newItem = {
                desiredMajor: item.desiredMajor,
                distancionnoCount:
                    item.desiredShape === "Дистанционно" ? item.count : "",
                zadocnoCount: item.desiredShape === "Задочно" ? item.count : "",
                redovnoCount: item.desiredShape === "Редовно" ? item.count : "",
                totalCount: item.count,
            };
            combinedData.push(newItem);
        }
    });

    // Calculate the totals
    const distanceTotal = combinedData.reduce(
        (total: number, item: { distancionnoCount: any }): number =>
            total + parseInt(item.distancionnoCount || 0),
        0
    );
    const partTimeTotal = combinedData.reduce(
        (total: number, item: { zadocnoCount: any }): number =>
            total + parseInt(item.zadocnoCount || 0),
        0
    );
    const regularTotal = combinedData.reduce(
        (total: number, item: { redovnoCount: any }): number =>
            total + parseInt(item.redovnoCount || 0),
        0
    );
    const grandTotal = combinedData.reduce(
        (total: number, item: { totalCount: string }) =>
            total + parseInt(item.totalCount),
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
                        <th>Дистанционно</th>
                        <th>Задочно</th>
                        <th>Редовно</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {combinedData.map((item: any, index: any) => (
                        <tr key={index}>
                            <td>{item.desiredMajor}</td>
                            <td>{item.distancionnoCount}</td>
                            <td>{item.zadocnoCount}</td>
                            <td>{item.redovnoCount}</td>
                            <td>{item.totalCount}</td>
                        </tr>
                    ))}
                    <tr className="GrandTotal">
                        <td>Grand Total</td>
                        <td>{distanceTotal}</td>
                        <td>{partTimeTotal}</td>
                        <td>{regularTotal}</td>
                        <td>{grandTotal}</td>
                    </tr>
                </tbody>
            </table>
        </StatisticTableContainer>
    );
}
