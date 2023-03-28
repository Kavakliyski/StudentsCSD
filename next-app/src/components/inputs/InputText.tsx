import { useState } from 'react';
import styled from 'styled-components';


const InputContainer = styled.div`

    height: 80px;
    position: relative;
    width: 100%;

    .input {
        background-color: white;
        border-radius: 12px;
        border: 1px solid #08b6ce;
        box-sizing: border-box;
        font-size: 18px;
        height: 100%;
        outline: 0;
        padding: 4px 20px 0;
        width: 100%;
        max-width: 450px;
    }

    .cut {
        background-color: white;
        border-radius: 10px;
        height: 20px;
        left: 20px;
        position: absolute;
        top: -20px;
        transform: translateY(0);
        transition: transform 200ms;
        width: 80%;
    }

    .placeholder {
        color: #65657b;
        font-family: sans-serif;
        left: 20px;
        line-height: 14px;
        pointer-events: none;
        position: absolute;
        transform-origin: 0 50%;
        transition: transform 200ms, color 200ms;
        top: 20px;
        font-size: 20px;
        font-weight: bold;
        width: 550px;

    }

    .input:focus ~ .cut,
    .input:not(:placeholder-shown) ~ .cut {
      transform: translateY(8px);
    }

    .input:focus ~ .placeholder,
    .input:not(:placeholder-shown) ~ .placeholder {
      transform: translateY(-30px) translateX(10px) scale(0.75);
    }

    .input:not(:placeholder-shown) ~ .placeholder {
      color: #808097;
    }

`;

interface InputTextProps {
    label: string;
    onChange: (value: string) => void;
}

export default function InputText(props: InputTextProps) {

    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        props.onChange(event.target.value);
    };


    return (
        <InputContainer>
            <input className="input" type="text" placeholder=" " onChange={handleChange}/>
            <div className="cut"></div>
            <label className="placeholder">{props.label}</label>
        </InputContainer>
    )
}
