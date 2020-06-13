import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Availability from "./components/Availability/Availability";
import BookOthersTime from "./components/BookOthersTime/BookOthersTime";
import MyBookedSlot from "./components/MyBookedSlot/MyBookedSlot";

ReactDOM.render(
  <React.StrictMode>
    <Home/>
    <Login/>
    <SignUp/>
    <Availability/>
    <BookOthersTime/>
    <MyBookedSlot/>
  </React.StrictMode>,
  document.getElementById('root')
);
