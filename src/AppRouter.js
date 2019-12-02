import React from "react";
import {Route, Switch} from "react-router-dom";

import HomeContainer from "./components/modules/home/HomeContainer";
import StoreContainer from "./components/modules/store/StoreContainer";

const AppRouter = () => {

    return (
        <Switch>
            <Route path="/" exact={true} component={HomeContainer} />
            <Route path="/store/" component={StoreContainer} />
        </Switch>
    )
};

export default React.memo(AppRouter);
