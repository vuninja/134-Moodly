import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { GlobalStyle } from "./styles";
import Home from "./pages/Home"
import SignUp from "./pages/SignUp";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                    <GlobalStyle/>
                </Route>
                <Route exact path="/sign-up">
                    <SignUp/>
                    <GlobalStyle/>
                </Route>
                <Route exact path="/home">
                    {/*<About/>*/}
                </Route>
            </Switch>
        </Router>
    );
}
