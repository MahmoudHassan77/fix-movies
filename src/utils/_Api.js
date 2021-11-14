import axios from "axios";
let config = "";
let url = "https://api.themoviedb.org/3/movie/";
let token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2YzMjkwYWUyMDBiOTk3ZDM0YTM4MWJmYjc3ZDU1OSIsInN1YiI6IjYxOTAwMjZkN2FjODI5MDAyY2EwYzYxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ILeQXFsJdqwqG3I8NN7pHbqFZ9eYlAOXTH8iF7lpgQM"
let apiKey = "bcf3290ae200b997d34a381bfb77d559";



export const _getFileFromPublicFolder = (path) => {
    return new Promise((res, rej) => {
      var xhttp = new XMLHttpRequest();
      var data = {};
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          data = JSON.parse(xhttp.responseText);
          config = data;
          axios.defaults.baseURL = config.serviceUrl;
          res(data);
        }
      };
      xhttp.open("GET", `${process.env.PUBLIC_URL}${path}`, true);
      xhttp.send();
    });
  };


  
export const getAllMovies = (page,type) => {
    const headers = {
      "Content-Type": "application/json",
    };
    headers.Authorization = `Bearer ${token}`;

    return new Promise((res, rej) => {
      axios({
        method: "get",
        url: `${url}${type}?api_key=${apiKey}&language=en-US&page=${page}`,
        headers,
      })
        .then((response) => {
          res(response);
        })
        .catch((err) => rej(err));
    });
  };