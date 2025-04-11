import React from 'react';

interface PropsType{
label: string;
type:React.HTMLInputTypeAttribute | undefined
}
export default function Input({label,type}: PropsType) {
    return (
        <label className="label">
            <span>{label}</span>
            <input className="input" type={type} defaultValue={0} />
        </label>
    );
}