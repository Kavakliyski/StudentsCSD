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
                    {/* {majors.map((majorData, index) => (
                        <tr key={index}>
                            <td>{majorData.major}</td>
                            <td>{majorData.count}</td>
                        </tr>
                    ))} */}
                    {
                        Statistic.StudyYear.majors.map((majorData: {major: string, count: string}, index: string) => (
                            <tr key={index}>
                                <td>{majorData.major}</td>
                                <td>{majorData.count}</td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </StatisticTableContainer>
    )
}
