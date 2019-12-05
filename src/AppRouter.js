import React from "react";
import {Route, Switch} from "react-router-dom";

import StoreContainer from "./components/modules/store/StoreContainer";

const AppRouter = () => {

    return (
        <Switch>
            <Route path="/" component={StoreContainer} />
            <Route path="/store/" component={StoreContainer} />
        </Switch>
    )
};

export default React.memo(AppRouter);
