import React from "react";
import {Redirect, Route, Switch} from "react-router";
import {useStoreState} from "easy-peasy";

import HomeContainer from "@modules/home/HomeContainer";
import StoresContainer from "@modules/stores/StoresContainer";

const AppRouter = () => {

    const token = useStoreState(state => state.loginModel.token);

    const isAuthenticated = () => token !== '';

    const PrivateRoute = ({component: Component, ...rest}) => (
        <Route
            {...rest}
            render={props => (
                isAuthenticated()
                    ? (<Component {...props} />)
                    : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
            )}
        />
    );

    return (
        <Switch>
            <PrivateRoute path={'/'} exact={true} component={HomeContainer} />
            <PrivateRoute path={'/store'} component={StoresContainer} />
        </Switch>
    );
};

export default AppRouter;
