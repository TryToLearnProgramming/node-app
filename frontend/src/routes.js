import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./user/signin";
import Signup from "./user/signup";
import Home from "./core/home";

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path={'/signin'} exact component={Signin} />
                    <Route path={'/signup'} exact component={Signup} />
                    <Route path={'/'} exact component={Home} />
                </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Routes;