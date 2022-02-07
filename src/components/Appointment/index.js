import React from 'react';
import { useParams } from 'react-router-dom';
import style from './appointment.module.css';
import { deleteAppointment } from '../../services/appointmentService';
import Swal from 'sweetalert2'

export default function Appointment({ data, notifyCallback }) {
    const { id } = useParams();

    const cancelAppointment = async () => {
        await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Cancelled!',
                    'Your appointment has been cancelled.',
                    'success'
                )
                deleteAppointment(id, data.id)
                notifyCallback()
            }
        })
    }

    return (
        <div className={style.showAppoint}>
            <p>Date: <span>{data.pickedDate}</span>  Doctor: <span >{data.doctor}</span></p>
            <button id={data.id} className={style.cancel} onClick={cancelAppointment} >Cancel</button>
        </div>

    )
};
