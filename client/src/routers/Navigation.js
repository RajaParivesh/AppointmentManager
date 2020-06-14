import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Availability from "../components/Availability/Availability";
import BookOthersTime from "../components/BookOthersTime/BookOthersTime";
import MyBookedSlot from "../components/MyBookedSlot/MyBookedSlot";
import Dashboard from "../components/Dashboard/Dashboard";

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Router path="/availability">
                        <Availability/>
                    </Router>
                    <Router path="/book-others-time">
                        <BookOthersTime/>
                    </Router>
                    <Router path="/my-booked-slot">
                        <MyBookedSlot/>
                    </Router>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Navigation;