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



export default function BachelorStudentsTable({ studentsGetData }: IStudentsTableProps) {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(50);

    const [isSelected, setIsSelected] = useState<string | null>(null);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const getPageNumbers = (totalItems: number, itemsPerPage: number) => {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    };


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
                        <th id="column-sticky">Име Презиме Фамилия</th>
                        <th>Имена на латиница</th>
                        <th>Телефон</th>
                        <th>Личен Имейл</th>
                        <th>ЕГН</th>

                        <th>редактиране</th>

                        <th>Лице за контакт (като коментар)</th>
                        <th>Пред. Учебно Заведение</th>
                        <th>Местонахождение на предходното училище</th>
                        <th>Среден успех от дипломата за средно образование</th>
                        <th>Удостоверение от РУО</th>
                        <th>Желана Специалност</th>
                        <th>Желана форма</th>
                        <th>Курс</th>
                        <th>Продължителност семестри</th>
                        <th>Начин на обучение</th>
                        <th>Начин на кандидатстване</th>
                        <th>Дата на първоначален контакт</th>
                        <th>Източник на контакт</th>
                        <th>Заплатил КСК</th>
                        <th>Дата плащане КСК</th>
                        <th>Платена сем. такса</th>
                        <th>Дата на платена сем. такса</th>
                        <th>Период на подаване в АдминУни</th>
                        <th>Учебна година</th>
                        <th>Дата на издаване на договор</th>
                        <th>Сем. Такса</th>
                        <th>Отстъпка</th>
                        <th>Основание за отстъпката</th>
                        <th>Изпратен имейл с факултетен номер</th>
                        <th>Студентски имейл</th>
                        <th>Създаден профил в Мудъл</th>
                        <th>Изпратен имейл за достъп до Мудъл</th>
                        <th>Въведени в Админ/Регистъра</th>
                        <th>Вкаран в кохорт в Moodle</th>

                        <th>Имейл на последна редакция</th>
                        <th>Дата на последна редакция</th>
                        <th>Имейл на създаване</th>
                        <th>Дата на създаване</th>
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

                                <td style={{
                                    backgroundColor:
                                        student.status_of_ksk === 'Приет' ? 'green' :
                                            student.status_of_ksk === 'Отписан' ? 'red' :
                                                student.status_of_ksk === 'В процес' ? 'orange' : 'transparent'
                                }}>{student.status_of_ksk}</td>

                                <td>{student.n_of_enrollment_order}</td>

                                <td className="column-sticky"

                                    style={{ backgroundColor: isSelected === student._id ? 'lightblue' : '', }}
                                ><p>{student.names}</p></td>

                                <td>{student.names_latin}</td>
                                <td>{student.phone_number}</td>
                                <td>{student.email}</td>
                                <td>{student.egn}</td>

                                <td style={{ textAlign: 'center', verticalAlign: 'middle', cursor: 'pointer' }}>
                                    <a href={`/bachelors/update?id=${student._id}&returnUrl=${encodeURIComponent(window.location.pathname)}`}>
                                        <ModeEditOutlineIcon sx={{ fontSize: 60 }} />
                                    </a>
                                </td>

                                <td>{student.person_to_contact}</td>
                                <td>{student.in_front_of_school}</td>
                                <td>{student.location_of_the_transitional_educationa_institution}</td>
                                <td>{student.high_school_diploma_gpa}</td>
                                <td>{student.certificate_from_ruo}</td>
                                <td>{student.desired_major}</td>
                                <td>{student.desired_shape}</td>
                                <td>{student.bachelor_course}</td>
                                <td>{student.duration_semesters}</td>
                                <td>{student.form_of_study}</td>
                                <td>{student.method_of_application}</td>
                                <td>{student.date_of_initial_contact}</td>
                                <td>{student.contact_source}</td>
                                <td>{student.paid_ksk}</td>
                                <td>{student.date_of_payment_ksk}</td>
                                <td>{student.sem_fee_paid}</td>
                                <td>{student.date_of_paid_sem_fee}</td>
                                <td>{student.submission_period_in_adminuni}</td>
                                <td>{student.school_year}</td>
                                <td>{student.contract_issue_date}</td>
                                <td>{student.sem_Fee}</td>
                                <td>{student.discount}</td>
                                <td>{student.reason_for_discount}</td>
                                <td>{student.email_sent_with_faculty_number}</td>
                                <td>{student.university_email}</td>
                                <td>{student.moodle_profile_created}</td>
                                <td>{student.email_sent_to_access_moodle}</td>
                                <td>{student.entered_in_admin}</td>
                                <td>{student.entered_into_cohort}</td>

                                <td>{student.lastEditEmail}</td>
                                <td>{student.lastEditDate}</td>
                                <td>{student.email_of_creation}</td>
                                <td>{student.dateOfCreation}</td>
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
