import React from 'react';
import ReactDOM from 'react-dom';
import MoviesContextProvider from './context/MoviesContext';
import './index.css';
import App from './pages/App/App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <MoviesContextProvider>
      <App />
  </MoviesContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
