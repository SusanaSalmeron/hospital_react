import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import NavigateButton from '../NavigateButton';

export default function LogoutButton({ setLoggedIn }) {
    const navigate = useNavigate()
    const handleLogout = async () => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        if (setLoggedIn) {
            setLoggedIn(false)
        }
        navigate('/home')
        await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logout Successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <NavigateButton
            onClick={handleLogout}
            label={"LOGOUT"}
            name="Logout"
        />

    )
}