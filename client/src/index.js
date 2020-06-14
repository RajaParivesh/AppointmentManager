import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Availability from "./components/Availability/Availability";
import BookOthersTime from "./components/BookOthersTime/BookOthersTime";
import MyBookedSlot from "./components/MyBookedSlot/MyBookedSlot";
import Navigation from "./routers/Navigation";

ReactDOM.render(
  <React.StrictMode>
    <Navigation/>
    {/*<Home/>*/}
    {/*<Login/>*/}
    {/*<Register/>*/}
    {/*<Availability/>*/}
    {/*<BookOthersTime/>*/}
    {/*<MyBookedSlot/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);
