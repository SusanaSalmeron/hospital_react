import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../Login'


export default function Home() {
    const history = useHistory()
    let token = localStorage.getItem("token")


    return (

        <>
            {!token ? <Login /> : history.push('/search')}

        </>
    )
}