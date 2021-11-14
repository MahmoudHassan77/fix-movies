import React, { useContext } from 'react'
import { Card } from '../../components/Card/Card';
import { Filter } from '../../components/Filter/Filter';
import { MoviesContext } from '../../context/MoviesContext';
import style from './Home.module.scss';
const Home = () => {
    const{movies} = useContext(MoviesContext);
    return (
        <div className={style.container}>
                <div className={style.filter}>
                    <Filter/>
                </div>
                <div className={style.body}>
                   {movies.map(movie => <Card key={movie.id} movie={movie}/>)}
                </div>
            </div>
    )
}
export default Home;