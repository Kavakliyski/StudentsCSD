// React
import { useState } from 'react';

// ExcelJS
import ExcelJS from 'exceljs';

// MaterialUI
import { Button } from '@mui/material';

// Interfaces
import { IStudent } from '@/interfaces/IStudent';


const ExportXLSXButton = ({ data }: any) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleExport = () => {
        setIsLoading(true);

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Students');

        // Add headers to the worksheet
        worksheet.addRow([
            'Отличителност',
            'Факултетен номер',
            'Статус на КСК',
            '№ на заповед за записване',
            'Име Презиме Фамилия',
            'Имена на латиница',
            'Телефон',
            'Имейл',
            'ЕГН',
            'Лице за контакт(като коментар)',
            'Пред.Учебно Заведение',
            'Местонахождение на предходното училище',
            'Среден успех от дипломата за средно образование',
            'Удостоверение от РУО',
            'Желана Специалност',
            'Желана форма',
            'Курс',
            'Продължителност семестри',
            'Начин на обучение',
            'Начин на кандидатстване',
            'Дата на първоначален контакт',
            'Източник на контакт',
            'Заплатил КСК',
            'Дата плащане КСК',
            'Платена сем.такса',
            'Дата на платена сем.такса',
            'Период на подаване в АдминУни',
            'Учебна година',
            'Дата на издаване на договор',
            'Сем.Такса',
            'Отстъпка',
            'Основание за отстъпката',
            'Изпратен имейл с факултетен номер',
            'Създаден g - mail',
            'Създаден профил в Мудъл',
            'Изпратен имейл за достъп до Мудъл',
            'Въведени в Админ / Регистъра',
            'Вкаран в кохорт в Moodle',
            'ИМЕЙЛ НА ПОСЛЕДНА РЕДАКЦИЯ',
            'ДАТА НА ПОСЛЕДНА РЕДАКЦИЯ',
            'ИМЕЙЛ НА СЪЗДАВАНЕ',
            'ДАТА НА СЪЗДАВАНЕ',
            'ИДЕНТИФИКАТОР (_ID)',
        ]);

        // Add data rows to the worksheet
        data.forEach((student: IStudent) => {
            worksheet.addRow([
                student.distinction,
                student.faculty_number,
                student.status_of_ksk,
                student.n_of_enrollment_order,
                student.names,
                student.names_latin,
                student.egn,
                student.phone_number,
                student.email,
                student.in_front_of_school,
                student.location_of_the_transitional_educationa_institution,
                student.professional_qualification,
                student.confirmation_by_nacid,
                student.desired_major,
                student.desired_shape,
                student.length_of_study,
                student.cohort_in_moodle,
                student.method_of_application,
                student.date_of_initial_contact,
                student.month_of_inquiry,
                student.contact_source,
                student.paid_ksk,
                student.date_of_payment_ksk,
                student.comment_ksk,
                student.sem_fee_paid,
                student.date_of_sem_fee_paid,
                student.submission_period_in_adminuni,
                student.school_year,
                student.contract_issue_date,
                student.sem_Fee,
                student.discount,
                student.comment,
                student.sent_faculty_number,
                student.university_email,
                student.moodle_profile_created,
                student.email_sent_to_access_moodle,
                student.entered_into_cohort,
                student.entered_in_admin,
                student.lastEditEmail,
                student.lastEditDate,
                student.email_of_creation,
                student.dateOfCreation,
                student._id,
            ]);
        });

        // Generate a buffer from the workbook
        workbook.xlsx.writeBuffer().then((buffer) => {
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);

            // Create a temporary link and simulate a click to trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.download = 'MasterVuzfStudentsQuery.xlsx';
            link.click();

            // Clean up the URL object
            window.URL.revokeObjectURL(url);
            setIsLoading(false);
        }).catch((error) => {
            console.error('Error exporting to XLSX:', error);
            setIsLoading(false);
        });
    };

    return (
        <Button variant="contained" disabled={isLoading} onClick={handleExport} color="success">
            {isLoading ? 'Exporting...' : 'Export to XLSX'}
        </Button>
    );
};


export default ExportXLSXButton;