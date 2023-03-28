import { useState } from 'react';
import styled from 'styled-components';


const SelectContainer = styled.div`

    height: 80px;
    position: relative;
    width: 100%;

    .input {
        background-color: white;
        border-radius: 12px;
        border: 1px solid #1976d2;
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
        top: -10px;
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
        font-size: 18px;
        font-weight: bold;
        transform: translateY(-30px) translateX(10px) scale(0.75);
    }



`;

interface Option {
    label: string;
    value: string;
}

interface InputDropdownProps {
    label: string;
    onChange: (value: string) => void;
    options: Option[];
}


export default function InputDropdown(props: InputDropdownProps) {

    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
        props.onChange(event.target.value);
    };


    return (
        <SelectContainer>
            <div className="cut"></div>
            <select className="input" onChange={handleChange} value={value}>
                {props.options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label className="placeholder">{props.label}</label>
        </SelectContainer>
    )
}
