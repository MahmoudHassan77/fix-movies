import React,{useContext} from 'react';
import style from "./Header.module.scss";
import {Link, NavLink} from "react-router-dom";
import { MoviesContext } from '../../context/MoviesContext';
import { FormattedMessage } from 'react-intl';
import { direction } from 'react-router-dom';
export const Header = (props) => {
    const{theme, changeTheme, language, changeLanguage} = useContext(MoviesContext);
    return (
        <header className={style.headerContainer}>
            <div className={style.linksPart}>
                <Link to="./"><img className={style.logo} src="media/imgs/FixMoviesLogo.gif" alt="logo"/></Link>
                <ul className={language === "ar"? style.links:style.linksEn}>
                    <li><NavLink exact to="/" activeStyle={{ color: '#fff' }}><FormattedMessage id="header.home" defaultMessage="Home" /></NavLink></li>
                    <li> <NavLink to="/favourite" activeStyle={{ color: '#fff' }}><FormattedMessage id="header.favourite" defaultMessage="Favourite"/></NavLink></li>
                </ul>
            </div>
            <div className={style.tools}>
            <div onClick={changeLanguage}>{language === "ar"?<span className={style.lang}>EN</span>:<span className={style.lang}>AR</span>}</div>
            {/* <div onClick={changeTheme}>{theme === "dark"?<img className={style.thIcon} src="media/imgs/sun.png" alt="sun"/>:<img className={style.thIcon} src="media/imgs/moon.png" alt="moon"/>}</div> */}
            </div>
        </header>
    )
}
