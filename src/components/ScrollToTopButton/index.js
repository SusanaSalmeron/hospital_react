import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import style from './scrollToTopButton.module.css'

const scrollToTop = () => {
    scroll.scrollToTop()
}


export default function ScrollToTopButton() {
    return (
        <div className={style.top}>
            <button
                onClick={scrollToTop}>
                Go to top
            </button>
        </div>
    )
}