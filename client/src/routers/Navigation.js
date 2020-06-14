import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Availability from "../components/Availability/Availability";
import BookOthersTime from "../components/BookOthersTime/BookOthersTime";
import MyBookedSlot from "../components/MyBookedSlot/MyBookedSlot";
import Dashboard from "../components/Dashboard/Dashboard";
// import App from "../App";

class Navigation extends Component{
    render() {
        return (
            <Router>
                {/*<ul>*/}
                {/*    <li>*/}
                {/*        <Link to="/home">Home </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/">Home</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/gallery"> Gallery</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to="/contact"> Contact Us </Link>*/}
                {/*    </li>*/}
                {/*    /!*<li>*!/*/}
                {/*    /!*    <Link to="/topics"> Topics </Link>*!/*/}
                {/*    /!*</li>*!/*/}
                {/*    <li>*/}
                {/*        <Link to="/useParam">Test Route useParam with id</Link>*/}
                {/*    </li>*/}

                {/*</ul>*/}
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
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
                    {/*<Route path="/:id" children={<Child/>} />*/}
                    {/*<Router path="/topics">*/}
                    {/*    <Topics/>*/}
                    {/*</Router>*/}
                </Switch>
            </Router>
        )
    }
}

function Child() {
    let { id } = useParams();
    return(
        <div>
            <h3>ID: {id}</h3>
        </div>
    )
}
export default Navigation;