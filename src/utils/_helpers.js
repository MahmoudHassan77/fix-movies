export const setToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };
  
  export const deleteFromLocalStorage = (key) => {
    return localStorage.removeItem(key);
  };
  

  export const moviesTypes = [
    {id:1,value:"top_rated"},
    {id:2,value:"upcoming"},
    {id:3,value:"now_playing"}
  ]