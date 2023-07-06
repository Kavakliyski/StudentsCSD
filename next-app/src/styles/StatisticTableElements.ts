import styled from "styled-components";

export const StatisticTableContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    table,
    th,
    td {
        padding: 10px;
        border: 1px solid black;

        thead {
            border: 1px solid black;
        }

        .GrandTotal {
            color: white;
            background-color: green;
        }
    }

    thead {
        background-color: #1976d2;
        color: white;
    }

    table {
        width: 90%;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 1px black;
    }
`;
