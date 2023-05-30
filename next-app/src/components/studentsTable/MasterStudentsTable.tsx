// next
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

// styles
import { StudentsTablePageNumbers, StudentsTableStyles } from "@/styles/TableElements";
import EditIcon from "public/edit_icon.svg"

// interfaces
import { IStudent } from "@/interfaces/IStudent";
interface IStudentsTableProps {
    studentsGetData: IStudent[];
}


export default function MasterStudentsTable({ studentsGetData }: IStudentsTableProps) {

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
                        <th>Отличителност</th>
                        <th>Факултетен номер</th>
                        <th>Статус на КСК</th>
                        <th>№ на заповед за записване</th>
                        <th>Име Презиме Фамилия</th>
                        <th>ЕГН</th>
                        <th>редактиране</th>
                        <th>Имена на латиница</th>
                        <th>Телефон</th>
                        <th>Имейл</th>
                        <th>Пред. Учебно Заведение</th>
                        <th>Местонахождение на преходното учебно заведение</th>
                        <th>Професионално направление/ квалификация</th>
                        <th>Потвърждение от Нацид</th>
                        <th>Желана Специалност</th>
                        <th>Желана форма</th>
                        <th>Продължителност на обучение и дали съкращава</th>
                        <th>КОХОРТ В МООДЛЕ</th>
                        <th>Начин на кандидатстване</th>
                        <th>Дата на първоначален контакт</th>
                        <th>Източник на контакт</th>
                        <th>Заплатил КСК</th>
                        <th>Дата плащане КСК</th>
                        <th>Коментар - документи за КСК</th>
                        <th>Платена сем. такса</th>
                        <th>Дата на платена сем. такса</th>
                        <th>Период на подаване в АдминУни</th>
                        <th>Учебна година</th>
                        <th>Дата на издаване на договор</th>
                        <th>Сем. Такса</th>
                        <th>Отстъпка</th>
                        <th>Коментар</th>
                        <th>Изпратен фак. номер</th>
                        <th>G-mail</th>
                        <th>Създаден профил в Мудъл</th>
                        <th>Изпратен имейл за достъп до Мудъл</th>
                        <th>Вкаран в Кохорт</th>
                        <th>Въведени в Админ</th>
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
                                <td>{student.distinction}</td>
                                <td>{student.faculty_number}</td>
                                <td>{student.status_of_ksk}</td>
                                <td>{student.n_of_enrollment_order}</td>
                                <td>{student.names}</td>
                                <td>{student.egn}</td>
                                <td style={{ textAlign: 'center', verticalAlign: 'middle', cursor: 'pointer' }}>
                                    <a href={`/masters/update?id=${student._id}`}>
                                        <Image src={EditIcon} alt="РЕДАКТИРАЙ" width="40" />
                                    </a>
                                </td>
                                <td>{student.names_latin}</td>
                                <td>{student.phone_number}</td>
                                <td>{student.email}</td>
                                <td>{student.in_front_of_school}</td>
                                <td>{student.location_of_the_transitional_educationa_institution}</td>
                                <td>{student.professional_qualification}</td>
                                <td>{student.confirmation_by_nacid}</td>
                                <td>{student.desired_major}</td>
                                <td>{student.desired_shape}</td>
                                <td>{student.length_of_study}</td>
                                <td>{student.cohort_in_moodle}</td>
                                <td>{student.method_of_application}</td>
                                <td>{student.date_of_initial_contact}</td>
                                <td>{student.contact_source}</td>
                                <td>{student.paid_ksk}</td>
                                <td>{student.date_of_payment_ksk}</td>
                                <td>{student.comment_ksk}</td>
                                <td>{student.sem_fee_paid}</td>
                                <td>{student.date_of_sem_fee_paid}</td>
                                <td>{student.submission_period_in_adminuni}</td>
                                <td>{student.school_year}</td>
                                <td>{student.contract_issue_date}</td>
                                <td>{student.sem_Fee}</td>
                                <td>{student.discount}</td>
                                <td>{student.comment}</td>
                                <td>{student.sent_faculty_number}</td>
                                <td>{student.university_email}</td>
                                <td>{student.moodle_profile_created}</td>
                                <td>{student.email_sent_to_access_moodle}</td>
                                <td>{student.entered_into_cohort}</td>
                                <td>{student.entered_in_admin}</td>
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
