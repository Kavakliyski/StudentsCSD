// styles
import { StatisticTableContainer } from "@/styles/StatisticTableElements";


export default function StatisticTable(Statistic: any, majors: any) {

    console.log(Statistic && Statistic)

    return (
        <StatisticTableContainer>
            <h2>{Statistic.StudyYear}</h2>
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
                    {/* {
                       majors && majors.map((majorData: any, index: any) => (
                            <tr key={index}>
                                <td>{majorData.major}</td>
                                <td>{majorData.count}</td>
                            </tr>
                        ))
                    } */}
                </tbody>
            </table>
        </StatisticTableContainer>
    )
}
