import React from 'react';
import style from './doctorPicture.module.css'




export default function DoctorPicture({ data }) {
    return (
        <>
            <div className={style.doctor}>
                <img className={style.img} src={data.photo} alt="photo_doctor" />
                <h3 className={style.name}>{data.name}  <span className={style.speciality}>{data.speciality}</span></h3>
            </div>
        </>
    )
}