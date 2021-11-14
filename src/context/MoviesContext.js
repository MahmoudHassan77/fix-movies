import React, { createContext, useState, useEffect } from "react";
import { getAllMovies, searchAboutMovie } from "../utils/_Api";
import { getFromLocalStorage, moviesTypes, setToLocalStorage } from "../utils/_helpers";

export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
  const [language, setLanguage] = useState();
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);
  const [radioVal, setradioVal] = useState("1");
  const [page, setPage] = useState(1);


useEffect(() => {
  const initialLang=getFromLocalStorage("language") || "en";
  const initialFavourite=getFromLocalStorage("favourite") || [];
  setLanguage(initialLang);
  setFavMovies(initialFavourite);
  getAllMovies(1,"top_rated").then((res)=>{
    let movies=res.data.results.map((m)=>{
      if(initialFavourite.some((v) => v.id === m.id)){
        return {...m,isFavourite:true}
      }
      else{
        return {...m,isFavourite:false}
      }
    });
    setMovies(movies);
  });
},[])

useEffect(()=>{
  setToLocalStorage("language",language);
},[language])



  const changeLanguage=()=>{
    setLanguage(language==="en"?"ar":"en");
  }

  const changeRadioVal=(val)=>{
    setPage(1);
    let type = moviesTypes.find(t=>t.id === +val);
    setradioVal(val);
    setMovies([]);
    getMovies(type.value);
  }

  const getMovies=(type)=>{
    getAllMovies(page,type).then((res)=>{
      let movies=res.data.results.map((m)=>{
        if(favMovies.some((v) => v.id === m.id)){
          return {...m,isFavourite:true}
        }
        else{
          return {...m,isFavourite:false}
        }
      });
      setMovies(movies);
    })
  }

  const loadMorePages=()=>{
    let type = moviesTypes.find(t=>t.id === +radioVal);
    getAllMovies(page,type.value).then((res)=>{
      let newMovies=res.data.results.map((m)=>{
        if(favMovies.some((v) => v.id === m.id)){
          return {...m,isFavourite:true}
        }
        else{
          return {...m,isFavourite:false}
        }
      });
      setMovies([...movies, ...newMovies]);
    })
  }


const searchMovies=(text)=>{
  searchAboutMovie(text).then((res)=>{
    let movies=res.data.results.map((m)=>{
      if(favMovies.some((v) => v.id === m.id)){
        return {...m,isFavourite:true}
      }
      else{
        return {...m,isFavourite:false}
      }
    });
    setMovies(movies);
  })
}

const increasePage=()=>{
  setPage(page+1);
}

useEffect(() => {
  if(page <1000)
     loadMorePages(page);
}, [page]);

const addToFavourite=(movie)=>{
  let favMovies = getFromLocalStorage("favourite") || [];
  let isExist = favMovies.some((m) => m.id === movie.id);
  if(!isExist){
    setFavMovies([...favMovies,movie]);
  }
  else{
    setFavMovies(favMovies.filter((m)=>m.id!==movie.id));
    
  }
}
useEffect(()=>{
  setToLocalStorage("favourite",favMovies);
  let newMovies=movies.map((m)=>{
    if(favMovies.some((v) => v.id === m.id)){
      return {...m,isFavourite:true}
    }
    else{
      return {...m,isFavourite:false}
    }
  });
  setMovies(newMovies);
},[favMovies]);

    return (
        <MoviesContext.Provider
          value={{
                  language, changeLanguage,
                  radioVal, changeRadioVal,
                  movies,searchMovies,
                  addToFavourite, favMovies,
                  increasePage
                }}
        >
          {props.children}
        </MoviesContext.Provider>
      );
}
export default MoviesContextProvider;