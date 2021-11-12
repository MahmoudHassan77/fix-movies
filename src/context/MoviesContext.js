import React, { createContext, useState, useEffect } from "react";

export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {
    return (
        <MoviesContext.Provider>
          {props.children}
        </MoviesContext.Provider>
      );
}
export default MoviesContextProvider;