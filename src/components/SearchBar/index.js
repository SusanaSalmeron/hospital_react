import React, { useContext, useState } from 'react';
import style from './searchBar.module.css';
import KeywordContext from '../../context/KeywordContext'




export default function SearchBar() {
    const [search, setSearch] = useState('');
    const { setKeyword } = useContext(KeywordContext)



    const handleSearch = (e) => {
        e.preventDefault()
        setKeyword(search.trim().toLowerCase())
    }
    const handleKeyword = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className={style.search}>
            <div>
                <input type="text" value={search} onChange={handleKeyword} placeholder="Realiza una búsqueda" />
                <button onClick={handleSearch}>Buscar</button>
            </div>
        </div >

    )
}