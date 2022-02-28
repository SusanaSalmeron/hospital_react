import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './navigateButton.module.css'



export default function NavigateButton({ name, label, route, onClick, id }) {
    const navigate = useNavigate()
    const navigateHandle = () => {
        navigate(route)
    }

    return (
        <button
            id={id}
            className={style.button}
            onClick={onClick ? onClick : navigateHandle}
            name={name}
            type="Button"
        >
            {label}
        </button>
    )
}