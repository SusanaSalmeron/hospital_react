import React from 'react';
import style from './doctorPicture.module.css'
import img1 from '../Home/img1.jpg'



export default function DoctorPicture({ data }) {
    return (
        <>
            <div className={style.doctor}>
                <img className={style.img} src={img1} alt="hospital img" />
                <h3 className={style.name}>{data.name}  <span className={style.speciality}>{data.speciality}</span></h3>
            </div>
        </>
    )
}