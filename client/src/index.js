import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import Navigation from "./routers/Navigation";

ReactDOM.render(
  <React.StrictMode>
    <Navigation/>
  </React.StrictMode>,
  document.getElementById('root')
);
