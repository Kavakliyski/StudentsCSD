import styled from 'styled-components';


export const StudentsTableStyles = styled.table`
  
  font-family: 'lato', sans-serif;
  box-shadow: 10px 10px 8px 10px black;

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
  }

  tr:hover {
    background-color: #ddd;
  }

  thead{
    text-transform: uppercase;
    letter-spacing: 0.03em;
    padding: 10px;
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

    transition: 100ms;
  }

  button:hover {
    box-shadow: 2px 2px 11px 3px #1c53a4;
  }

  @media (min-width: 1024px) {
    button {
      font-size: 1.5rem; /* 24px */
      padding: 1rem 1.5rem;
      line-height: 2rem; /* 32px */
    }
  }
    
`