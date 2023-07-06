import styled from "styled-components";

export const PageConfig = styled.div`
    padding-left: 70px;

    margin: 0 auto;
    width: 95%;
    .tabs-container {
        section {
            box-shadow: 0px 0px 10px 1px black;
            border-radius: 15px;
        }

        .tabs-title {
            ul {
                padding: 0px;
                margin: -0.2px;
                display: flex;
                align-items: center;
                list-style: none;

                li {
                    width: 100%;
                    height: 50px;
                    box-shadow: 0px -2px 5px 0px black;
                    border-radius: 15px;
                    padding: 100px;
                    font-size: 30px;

                    a {
                        color: #1976d2;
                        text-decoration: none;
                    }
                }
            }
        }
    }
`;
