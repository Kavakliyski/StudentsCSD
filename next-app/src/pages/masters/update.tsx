// next
import { GetServerSideProps } from 'next';

// axios
import axios from 'axios';

// interface
import { IStudentGetData } from '@/interfaces/IStudent';

// styles
import { StudentFormWrapper } from '@/styles/FormElements';
import { PageConfig } from '@/styles/PagesConfigElements';


const API_URL_GET_ONE = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/get_one?id=`;
const API_URL_PATCH = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/update`;


export default function updatemaster({ id, studentData }: IStudentGetData) {


    const { distinction, faculty_number, status_of_ksk, n_of_enrollment_order, names, egn, names_latin, phone_number, email, in_front_of_school } = studentData.student;

    return (
        <PageConfig>

            <StudentFormWrapper>

                <h1>Редактиране на МАГИСТЪР с ID: {id}</h1>
                <p><strong>Тук можете да редактирате записите за - {names}</strong></p>

                <div>
                    <p>Distinction: {distinction}</p>
                    <p>Faculty Number: {faculty_number}</p>
                    <p>Status of KSK: {status_of_ksk}</p>
                    <p>N of Enrollment Order: {n_of_enrollment_order}</p>
                    <p>Names: {names}</p>
                    <p>EGN: {egn}</p>
                    <p>Names Latin: {names_latin}</p>
                    <p>Phone Number: {phone_number}</p>
                    <p>Email: {email}</p>
                    <p>In front of school: {in_front_of_school}</p>
                </div>

            </StudentFormWrapper>

        </PageConfig>
    )
}


export const getServerSideProps: GetServerSideProps<any> = async (context) => {
    // Fetch the data to be edited from the API
    const { id } = context.query;

    // Make sure id is defined
    if (!id) {
        return {
            notFound: true,
        };
    }

    // Fetch student data from the API
    const res = await axios.get<IStudentGetData>(`${API_URL_GET_ONE}${id}`);
    const studentData = res.data;

    // Return not found if there's no student data
    if (!studentData) {
        return {
            notFound: true,
        };
    }


    return {
        props: {
            id,
            studentData
        },
    };
}
