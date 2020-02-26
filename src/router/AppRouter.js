import React from "react";
import {Route, Switch} from "react-router";
import {routes} from "./Routes";


const AppRouter = () => {

    return (
        <Switch>
            {routes.map((route, index) => (
                <Route key={index} {...route} >
                    {route.component}
                </Route>
            ))}
        </Switch>
    );
};

export default AppRouter;
