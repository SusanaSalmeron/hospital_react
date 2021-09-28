import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './home.module.css';



export default function Home() {
    const history = useHistory()
    const handleLogin = () => {
        history.push('/login')
    }


    return (
        <>
            <div className={style.container}>
                <button onClick={handleLogin}>LOGIN</button>
                <h1 className={style.title}>Hospital Buena Esperanza</h1>
                {/* {!checkValidToken() ? <Login /> : history.push('/search')} */}
                <h2 className={style.subtitle}>BIENVENIDOS</h2>
            </div>
        </>
    )
}