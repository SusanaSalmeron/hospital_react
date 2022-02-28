import React from 'react';



export default function SubmitButton({ name, disabled, label, style, onClick, id }) {
    return (
        <button
            id={id}
            disabled={disabled}
            name={name}
            type="submit"
            className={style}
            onClick={onClick}
        >
            {label}
        </button>
    )
}