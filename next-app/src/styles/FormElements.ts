import styled from 'styled-components';


export const StudentFormCU = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(22rem, 100%), 1fr));
    grid-gap: 30px;
    width: 100%;



    @media (max-width: 768px) {
        width: 100vw;
        
    }
`

export const StudentFormUpdateStudent = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(22rem, 100%), 1fr));
    grid-gap: 30px;
    width: 60%;

    @media (max-width: 768px) {
        width: 100vw;
        
    }
`


export const StudentFormWrapper = styled.div`

    box-shadow: 1px 1px 8px 2px #1976d2;
    border-radius: 15px;
    padding: 100px;
    width: 99%;
    
    .Separator{
        padding-bottom: 200px;
    }

    @media (max-width: 768px) {
        width: 140vw;
        padding: 30px;
    }
`