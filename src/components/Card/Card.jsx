import React from 'react'
import { FormattedMessage } from 'react-intl'
import style from "./Card.module.scss"
export const Card = ({movie}) => {
    return (
        <div className={style.card}>
            {movie.adult && <div className={style.plus}>+18</div>}
            <img className={style.image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="CardImage" />
            <div className={style.cardHeader}>
                <h2>{movie.title}</h2>
            </div>
            <div className={style.cardBody}>
                <p><FormattedMessage id="card.date" defaultMessage="Date"/>: {movie.release_date}</p>
                <p><FormattedMessage id="card.rated" defaultMessage="Rated"/> : {movie.vote_average}</p>
                
            </div>
        </div>
    )
}
