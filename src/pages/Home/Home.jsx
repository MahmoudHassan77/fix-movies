import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl';
import { Card } from '../../components/Card/Card';
import { Filter } from '../../components/Filter/Filter';
import { MoviesContext } from '../../context/MoviesContext';
import style from './Home.module.scss';
const Home = () => {
    const{movies, language, increasePage,loader, searchFlag} = useContext(MoviesContext);
    return (
        <div className={style.container}>
                <div className={style.filter}>
                    <Filter/>
                </div>
                {!loader?
                <div className={style.body}>
                   {movies.map(movie => <Card key={movie.id} movie={movie}/>)}
                   <div className={style.loadMoreDiv}>
                   {!searchFlag && <button onClick={increasePage} className={`${style.loadMore} ${language === "ar"&& style.loadMoreAr}`}><FormattedMessage id="home.loadMore" defaultMessage="Load More" /></button>}
                   </div>
                </div>
                :<div className={style.loader}>
                    <img className={style.loaderIcon} alt="loader" src="media/imgs/loader.gif" />
                </div>}
            </div>
    )
}
export default Home;