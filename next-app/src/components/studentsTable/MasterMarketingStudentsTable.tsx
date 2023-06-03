// next
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

// styles
import { StudentsTablePageNumbers, StudentsTableStyles } from "@/styles/TableElements";
import EditIcon from "public/edit_icon.svg"
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

// interfaces
import { IStudent } from "@/interfaces/IStudent";
interface IStudentsTableProps {
    studentsGetData: IStudent[];
}


export default function MasterMarketingStudentsTable({ studentsGetData }: IStudentsTableProps) {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(50);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const getPageNumbers = (totalItems: number, itemsPerPage: number) => {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    };


    const router = useRouter();

    const [isSelected, setIsSelected] = useState<string | null>(null);


    return (
        <>
            <p>Общият брой на всички записи в таблицата е: <strong>{studentsGetData && studentsGetData.length == 0 ? <>Няма намерени записи</> : <>{studentsGetData.length}</>}</strong></p>

            <StudentsTableStyles>
                <thead>
                    <tr>
                        <th>Прием</th>
                        <th>Академична Година</th>
                        <th>Три Имена</th>
                        <th>Телефон</th>
                        <th>Имейл</th>
                        <th>Пред. Учебно Заведение</th>
                        <th>Местонахождение на предходното училище</th>
                        <th>Желана Специалност</th>
                        <th>Желана форма</th>
                        <th>От къде идва контакт</th>

                        <th>В процес - Учебен Отдел</th>
                        <th>Дата на обработка от Учебен Отдел</th>
                        <th>Попълнена онлайн форма</th>
                        <th>Заплатено КСК</th>
                        <th>Заплатил сем такса</th>

                        <th>Дата на създаване</th>
                        <th>Имейл на последна редакция</th>
                        <th>Дата на последна редакция</th>
                        <th>Идентификатор (_id)</th>
                    </tr>
                </thead>

                <tbody>
                    {studentsGetData
                        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                        .map((student) => (
                            <tr
                                key={student._id}
                                onClick={() => setIsSelected(student._id)}
                                style={{
                                    backgroundColor: isSelected === student._id ? 'lightblue' : '',
                                }}
                            >
                                <td>to do: семестър</td>
                                <td>{student.school_year}</td>
                                <td>{student.names}</td>
                                <td>{student.phone_number}</td>
                                <td>{student.email}</td>
                                <td>{student.in_front_of_school}</td>
                                <td>{student.location_of_the_transitional_educationa_institution}</td>
                                <td>{student.desired_major}</td>
                                <td>{student.desired_shape}</td>
                                <td>{student.contact_source}</td>

                                <td>{student.status_of_ksk}</td>
                                <td>todo: дата на обработка</td>
                                <td>todo: онлайн форма</td>
                                <td>{student.paid_ksk}</td>
                                <td>{student.sem_fee_paid}</td>

                                <td>{student.dateOfCreation}</td>
                                <td>{student.lastEditEmail}</td>
                                <td>{student.lastEditDate}</td>
                                <td>{student._id}</td>
                            </tr>
                        ))}
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
