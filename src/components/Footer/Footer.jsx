import React from 'react'
import style from './Footer.module.scss'
export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div>  Made with love 💖 <span className={style.fSpan}>Fix</span> Movies &copy; 2021</div>
        </footer>
    )
}
