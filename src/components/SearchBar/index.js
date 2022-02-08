import React, { useContext, useState } from 'react';
import KeywordContext from '../../context/KeywordContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import style from './searchBar.module.css';



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
        <div className={style.container}>
            <form onClick={handleSearch} className={style.search}>
                <input type="text" className={style.input} value={search} onChange={handleKeyword} placeholder="Search" />
                <button type="text">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div >

    )
}