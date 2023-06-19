// next
import { useState } from "react";

// styles
import { StudentsTablePageNumbers, StudentsTableStyles } from "@/styles/TableElements";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

// interfaces
import { IStudentBachelor } from "@/interfaces/IStudent";
interface IStudentsTableProps {
    studentsGetData: IStudentBachelor[];
}


export default function BachelorMarketingStudentsTable({ studentsGetData }: IStudentsTableProps) {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(50);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const getPageNumbers = (totalItems: number, itemsPerPage: number) => {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    };

    const [isSelected, setIsSelected] = useState<string | null>(null);


    return (
        <>
            <p>Общият брой на всички записи в таблицата е: <strong>{studentsGetData && studentsGetData.length == 0 ? <>Няма намерени записи</> : <>{studentsGetData.length}</>}</strong></p>

            <StudentsTableStyles>
                <thead>
                    <tr>
                        <th>Прием</th>
                        <th>Академична Година</th>
                        <th id="column-sticky">Три Имена</th>
                        <th>Телефон</th>
                        <th>Имейл</th>
                        <th>Редактиране</th>
                        <th>Пред. Учебно Заведение</th>
                        <th>Местонахождение на предходното училище</th>
                        <th>Желана Специалност</th>
                        <th>Желана форма</th>
                        <th>Начин на кандидатстване</th>
                        <th>Дата на първоначален контакт</th>
                        <th>От къде идва контакт</th>
                        <th>Изпратен имейл с информация</th>
                        <th>В процес - Учебен Отдел</th>
                        <th>Дата на обработка от Учебен Отдел</th>
                        <th>Попълнена онлайн форма</th>
                        <th>Заплатено КСК</th>
                        <th>Заплатил сем такса</th>

                        <th>Имейл на последна редакция</th>
                        <th>Дата на последна редакция</th>
                        <th>Имейл на създаване</th>
                        <th>Дата на създаване</th>
                        <th>Идентификатор (_id)</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        studentsGetData
                            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                            .map((student) => (
                                <tr
                                    key={student._id}
                                    onClick={() => setIsSelected(student._id)}
                                    style={{
                                        backgroundColor: isSelected === student._id ? 'lightblue' : '',
                                    }}
                                >
                                    <td>{student.submission_period_in_adminuni}</td>
                                    <td>{student.school_year}</td>
                                    <td className="column-sticky"
                                        style={{ backgroundColor: isSelected === student._id ? 'lightblue' : '', }}
                                    ><p>{student.names}</p></td>
                                    <td>{student.phone_number}</td>
                                    <td>{student.email}</td>
                                    <td style={{ textAlign: 'center', verticalAlign: 'middle', cursor: 'pointer' }}>
                                        <a href={`/bachelors/update?id=${student._id}`}>
                                            <ModeEditOutlineIcon sx={{ fontSize: 60 }} />
                                        </a>
                                    </td>
                                    <td>{student.in_front_of_school}</td>
                                    <td>{student.location_of_the_transitional_educationa_institution}</td>
                                    <td>{student.desired_major}</td>
                                    <td>{student.desired_shape}</td>
                                    <td>{student.method_of_application}</td>
                                    <td>{student.date_of_initial_contact}</td>
                                    <td>{student.contact_source}</td>
                                    <td>Изпратен имейл с информация</td>
                                    <td>{student.status_of_ksk}</td>
                                    <td>ДАТА НА ОБРАБОТКА ОТ УЧЕБЕН ОТДЕЛ</td>
                                    <td>Попълнена онлайн форма</td>
                                    <td>{student.paid_ksk}</td>
                                    <td>{student.sem_fee_paid}</td>


                                    <td>{student.lastEditEmail}</td>
                                    <td>{student.lastEditDate}</td>
                                    <td>{student.email_of_creation}</td>
                                    <td>{student.dateOfCreation}</td>
                                    <td>{student._id}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </StudentsTableStyles>
            <StudentsTablePageNumbers>
                {
                    getPageNumbers(studentsGetData.length, itemsPerPage).length > 1 ? (
                        getPageNumbers(studentsGetData.length, itemsPerPage).map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                style={{
                                    background: pageNumber === currentPage ? "#1976d2" : "white",
                                    boxShadow: pageNumber === currentPage ? "0px 0px 0px 3px #1976d2" : "",
                                    color: pageNumber === currentPage ? "white" : "black",
                                    zIndex: pageNumber === currentPage ? "1" : "",
                                }}
                            >
                                {pageNumber}
                            </button>
                        ))
                    ) : null
                }
            </StudentsTablePageNumbers>
        </>
    )
}
