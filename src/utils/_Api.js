import axios from "axios";
let config = "";

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