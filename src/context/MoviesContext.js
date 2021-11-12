import React, { createContext, useState, useEffect } from "react";
import { getFromLocalStorage, setToLocalStorage } from "../utils/_helpers";

export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
  const [theme, setTheme] = useState();
  const [language, setLanguage] = useState();
useEffect(() => {
  const initialTheme=getFromLocalStorage("theme") || "dark";
  const initialLang=getFromLocalStorage("language") || "en";
  console.log(initialTheme, initialLang);
  setTheme(initialTheme);
  setLanguage(initialLang);
},[])

  const changeTheme=()=>{
    setTheme(theme==="dark"?"light":"dark");
    setToLocalStorage("theme",theme);
  }
  const changeLanguage=()=>{
    setLanguage(language==="en"?"ar":"en");
    setToLocalStorage("language",language);
  }
    return (
        <MoviesContext.Provider
          value={{theme, changeTheme,
                  language, changeLanguage
                }}
        >
          {props.children}
        </MoviesContext.Provider>
      );
}
export default MoviesContextProvider;