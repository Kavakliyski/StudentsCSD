// styles
import { StatisticTableContainer } from "@/styles/StatisticTableElements";


export default function StatisticTable(Statistic: any) {

    // console.log('statistictable.tsx');
    console.log(Statistic && Statistic.StudyYear.majors)

    return (
        <StatisticTableContainer>
            <h2>{Statistic.StudyYear.schoolYear}</h2>
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
                    {
                        Statistic.StudyYear.majors.map((major: any, index: number) => (
                            <tr key={index}>
                                <td>{major.major}</td>
                                <td>{major.count}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </StatisticTableContainer>
    )
}
