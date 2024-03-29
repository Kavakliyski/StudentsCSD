// styles
import { PageConfig } from "@/styles/PagesConfigElements";

// next
import { useState } from "react";

// axios
import axios from "axios";

// interface
import { IStudent } from "@/interfaces/IStudent";

// table
import MasterStudentsTable from "@/components/studentsTable/MasterStudentsTable";

// Material UI
import { Box, Button, TextField } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

// ExcelJS
import ExportXLSXButtonMasters from "@/components/ExportToXLSX/ExportXLSXButtonMasters";

// const ENTRIES_API_URL = `${process.env.NEXT_PUBLIC_MONGODB_URL}/api/students/masters/get_entries`;
const ENTRIES_API_URL = "/api/students/masters/get_entries";

export default function Query() {
    const [studentsGetEntryData, setStudentsGetEntryData] = useState<
        IStudent[]
    >([]);
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // wait for fetch request

    const [params, setParams] = useState<any>({});

    const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        setSubmitted(true);

        setIsLoading(true);

        axios
            .get<IStudent[]>(ENTRIES_API_URL, { params })
            .then((res) => {
                setStudentsGetEntryData(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("Error fetching students:", err);
                setIsLoading(false);
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (value.trim() === "") {
            // Exclude empty query parameters
            const updatedParams = { ...params };
            delete updatedParams[name];
            setParams(updatedParams);
        } else {
            setParams({
                ...params,
                [name]: value,
            });
        }
    };

    return (
        <PageConfig>
            <h1>Търсене / Query, Магистри</h1>

            <ExportXLSXButtonMasters data={studentsGetEntryData} />

            <div>
                <h2>Търспи по:</h2>

                <Box
                    onSubmit={handleSubmit}
                    component="form"
                    sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        label="Отличителност"
                        name="distinction"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Факултетен номер"
                        name="faculty_number"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Статус на кск"
                        name="status_of_ksk"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="№ на заповед за записване"
                        name="n_of_enrollment_order"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Име Презиме Фамилия"
                        name="names"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="ЕГН"
                        name="egn"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Телефон"
                        name="phone_number"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Имейл"
                        name="email"
                        variant="standard"
                        onChange={handleChange}
                    />

                    <TextField
                        label="Професионално направление / квалификация"
                        name="professional_qualification"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Потвърждение от Нацид"
                        name="confirmation_by_nacid"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Желана Специалност"
                        name="desired_major"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Желана форма"
                        name="desired_shape"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Продължителност на обучение"
                        name="length_of_study"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="КОХОРТ В МООДЛЕ "
                        name="cohort_in_moodle"
                        variant="standard"
                        onChange={handleChange}
                    />

                    <TextField
                        label="Студентски имейл"
                        name="university_email"
                        variant="standard"
                        onChange={handleChange}
                    />
                    <TextField
                        label="_ID"
                        name="_id"
                        variant="standard"
                        onChange={handleChange}
                    />

                    <br />
                    <Button variant="contained" type="submit">
                        Търси
                    </Button>
                </Box>
            </div>

            {/* Render the search results */}
            {submitted && isLoading ? (
                <>
                    <Box sx={{ width: "99%" }}>
                        <LinearProgress />
                    </Box>
                </>
            ) : (
                <MasterStudentsTable studentsGetData={studentsGetEntryData} />
            )}
        </PageConfig>
    );
}
