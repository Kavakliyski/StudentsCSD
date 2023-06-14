// React
import { useState } from 'react';

// ExcelJS
import ExcelJS from 'exceljs';

// MaterialUI
import { Button } from '@mui/material';

// Interfaces
import { IStudentBachelor } from '@/interfaces/IStudent';


export default function ExportXLSXButtonBachelors({ data }: any) {
    const [isLoading, setIsLoading] = useState(false);

    const handleExport = () => {
        setIsLoading(true);

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Students');

        // Add headers to the worksheet
        worksheet.addRow([
            'ИДЕНТИФИКАТОР (_ID)',
        ]);

        // Add data rows to the worksheet
        data.forEach((student: IStudentBachelor) => {
            worksheet.addRow([
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
            link.download = 'BachelorsVuzfStudentsQuery.xlsx';
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
            {isLoading ? 'Exporting...' : 'Експортирай в XLSX(EXCEL)'}
        </Button>
    );
}