import styled from 'styled-components';


export const StudentsTableStyles = styled.table`
  
  font-family: 'lato', sans-serif;
  box-shadow: 0px -3px 8px 1px black;

  border-collapse: collapse;
  width: 100%;

  th, td {
    text-align: left;
    padding: 8px;
  }

  th {
    color: white;
    font-weight: bold;
    background-color: #1c53e9;
  }

  tr:nth-child(even) {
    background-color: #F2F3F5;
  }

  tr {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
    padding: 25px;
    border-bottom: 1px solid black;
  }

  tr:hover {
    background-color: #ddd;
  }

  thead {
    text-transform: uppercase;
    letter-spacing: 0.003em;
    padding: 10px;
    position: sticky;
    top: 0;
    z-index: 100;
  }
`

export const StudentsTableAddStyles = styled.div`

  padding: 40px 0px 40px 0px;
    
  button {
    background-color: #cf245f;
    background-image: linear-gradient(to bottom right, #1c53a4, #114899, #0D3A83);
    border: 0;
    border-radius: .25rem;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1.125rem; /* 18px */
    font-weight: 600;
    line-height: 1.75rem; /* 28px */
    padding: 1rem 1.25rem;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    box-shadow: 1px 1px 10px 1px #1c53a4;

  }

  @media (min-width: 1024px) {
    button {
      font-size: 1.5rem; /* 24px */
      padding: 1rem 1.5rem;
      line-height: 2rem; /* 32px */
    }
  }
    
`

export const StudentsTablePageNumbers = styled.div`
  display: flex;

  box-shadow: 1px 1px 8px 1px black;

  width: fit-content;
  margin-bottom: 30px;
  border-radius: 0px 0px 6px 6px;


  button {
    cursor: pointer;
    text-align: center;
    font-size: large;
    font-weight: 700;

    width: 110px;
    height: 60px;

    border: 2px solid #1976d2;
    border-radius: 6px;
  }

`