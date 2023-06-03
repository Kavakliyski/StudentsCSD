import styled from "styled-components";

export const StatisticTableContainer = styled.div`
    table, tr, th, td {
        border: 1px solid black;
        padding: 10px;

        thead {
            border: 1px solid black;
        }

        .GrandTotal {
            color: white;
            background-color: #1976d2;
        }
    }

    table {
        border-radius: 10px;
    }
`