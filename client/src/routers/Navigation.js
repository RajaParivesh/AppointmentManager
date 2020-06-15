import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "../components/Home/Home";
import {Login} from "../components/Login";
import {Register} from "../components/Register";
import {Availability} from "../components/Availability";
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
                    <Router path="/book">
                        <BookOthersTime/>
                    </Router>
                    <Router path="/appointments">
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
