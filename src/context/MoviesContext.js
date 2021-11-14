import React, { createContext, useState, useEffect } from "react";
import { getAllMovies, searchAboutMovie } from "../utils/_Api";
import { getFromLocalStorage, setToLocalStorage } from "../utils/_helpers";

export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
  const [theme, setTheme] = useState();
  const [language, setLanguage] = useState();
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);
  const [radioVal, setradioVal] = useState("1");
useEffect(() => {
  const initialTheme=getFromLocalStorage("theme") || "dark";
  const initialLang=getFromLocalStorage("language") || "en";
  const initialFavourite=getFromLocalStorage("favourite") || [];
  setTheme(initialTheme);
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
useEffect(()=>{
  setToLocalStorage("theme",theme);
},[theme])

  const changeTheme=()=>{
    setTheme(theme==="dark"?"light":"dark");
   
  }
  const changeLanguage=()=>{
    setLanguage(language==="en"?"ar":"en");
  }

  const changeRadioVal=(val)=>{
    setradioVal(val);
    switch(val){
      case "1":
        getMovies("top_rated");
      break;
      case "2":
        getMovies("upcoming");
      break;
      case "3":
        getMovies("now_playing");
      break;
      default:
        break;
    }
  }

  const getMovies=(type)=>{
    getAllMovies(2,type).then((res)=>{
      let movies=res.data.results.map((m)=>{
        return {...m,isFavourite:false}
      });
      setMovies(movies);
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
          value={{theme, changeTheme,
                  language, changeLanguage,
                  radioVal, changeRadioVal,
                  movies,searchMovies,
                  addToFavourite, favMovies
                }}
        >
          {props.children}
        </MoviesContext.Provider>
      );
}
export default MoviesContextProvider;