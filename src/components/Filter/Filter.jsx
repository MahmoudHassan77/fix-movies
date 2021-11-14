import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { MoviesContext } from '../../context/MoviesContext';
import style from "./Filter.module.scss"
export const Filter = () => {
    const{ language,radioVal, changeRadioVal, searchMovies} = useContext(MoviesContext);
    
    const onRadioValuechanged =(e)=>{
        changeRadioVal(e.target.value);
    }

    const search=(e)=>{
        e.preventDefault();
        let val =e.target[0].value;
        if(val !== ""){
            searchMovies(val);
        }
        e.target[0].value="";
    }
    return (
        <div className={style.filterContainer}>
            <form className={style.searchForm} onSubmit={search}>
              <input type="search" placeholder={language==="ar"?"بحث...":"Search..."} className={language==="ar"?style.searchAr:style.search} />
              <button type="submit" value="search" className={language==="ar"?style.btnSearchAr:style.btnSearch}>
              {language ==="ar"?<img src="media/imgs/searchAr.png" alt="search icon" />
              :<img src="media/imgs/search.png" alt="search icon" />}
              </button>
            </form>
            <details className={language==="ar"?style.collapseAr:style.collapse}>
                <summary className={style.title}><FormattedMessage id="filter.types" defaultMessage="Movies Type" /></summary>
                <hr className={style.divider}/>
                <div className={style.description}>
               
                <div className={style.InputGroup} onChange={onRadioValuechanged}> 
 
                  <input type="radio" name="type" id="type_1" value="1" defaultChecked={radioVal==="1"} />
                  <label className={style.label} htmlFor="type_1"><FormattedMessage id="filter.top" defaultMessage="Top Movies" /></label>
                  
                  <input type="radio" name="type" id="type_2" value="2" defaultChecked={radioVal==="2"}  />
                  <label className={style.label} htmlFor="type_2"><FormattedMessage id="filter.upcoming" defaultMessage="Upcoming Movies" /></label>
                  
                  <input type="radio" name="type" id="type_3" value="3" defaultChecked={radioVal==="3"} />
                  <label className={style.label} htmlFor="type_3"><FormattedMessage id="filter.mow" defaultMessage="Now Playing Movies" /></label>
                  
                </div>
                </div>
            </details>
        </div>
    )
}
