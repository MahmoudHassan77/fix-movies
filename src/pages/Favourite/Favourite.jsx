import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl';
import { Card } from '../../components/Card/Card';
import { MoviesContext } from '../../context/MoviesContext';
import style from "./Favourite.module.scss";
const Favourite = () => {
    const{ favMovies, language} = useContext(MoviesContext);
    return (
        <div className={style.favContainer}>
            {Object.keys(favMovies).length>0 ?favMovies.map(movie => <Card key={movie.id} movie={movie}/>):
            <h1 className={`${style.txt} ${language === "ar"&&style.ar}`}><FormattedMessage id="fav.empty" defaultMessage="Favourite movies list is empty"/></h1>}
        </div>
    )
}

export default Favourite;
