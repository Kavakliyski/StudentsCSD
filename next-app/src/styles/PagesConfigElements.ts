import styled from "styled-components";

export const PageConfig = styled.div`
    padding-left: 70px;

    margin: 0 auto;
    width: 95%;
    .tabs-container {
        section {
            background-color: #ecf3f9;
            box-shadow: 0px 0px 10px 1px black;
            border-radius: 15px 15px 15px 15px;
        }

        .tabs-title {
            ul {
                padding: 0px;
                margin: 0px;
                display: flex;
                align-items: center;
                justify-content: center;
                list-style: none;

                li {
                    background-color: #ecf3f9;
                    width: 20%;
                    height: 150px;
                    box-shadow: 0px -2px 5px 0px black;
                    border-radius: 15px 15px 0px 0px;
                    padding: 50px;
                    font-size: 20px;

                    a {
                        color: #1976d2;
                        text-decoration: none;
                    }
                }
            }
        }
    }
`;
