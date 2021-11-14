import React, { useContext, useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { MoviesContext } from '../../context/MoviesContext'
import style from "./Card.module.scss"
export const Card = ({movie}) => {
    const {addToFavourite} = useContext(MoviesContext)
const [isFav, setIsFav] = useState(movie.isFavourite)
useEffect(()=>{
    movie.isFavourite? setIsFav(true): setIsFav(false);
},[movie.isFavourite])

const setInFavourite=()=>{
    movie.isFavourite=!movie.isFavourite;
    addToFavourite(movie);
}
    return (
        <div className={style.card}>
            {movie.adult && <div className={style.plus}>+18</div>}
            <img className={style.image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="CardImage" />
            <div className={style.cardHeader}>
                <h3>{movie.title}</h3>
            </div>
            <div className={style.cardBody}>
                <p><FormattedMessage id="card.date" defaultMessage="Date"/>: {movie.release_date}</p>
                <p><FormattedMessage id="card.rated" defaultMessage="Rated"/> : {movie.vote_average}</p>
                 <button type="submit" value="search" className={style.heartBtn} onClick={setInFavourite}>
                    <img src={`media/imgs/${isFav?"heart.png":"heart1.png"}`} alt="heart icon" />
              </button>
                
            </div>
        </div>
    )
}
