import React from "react";
import {Route, Switch} from "react-router-dom";

import StoreContainer from "./components/modules/store/StoreContainer";

const AppRouter = () => {

    return (
        <Switch>
            <Route path={'/'} exact={true} render={(props) => (<StoreContainer {...props} container={'LIST'}/>)} />
            <Route path={'/add'} exact={true} render={(props) => (<StoreContainer {...props} container={'FORM'}/>)} />
        </Switch>
    )
};

export default React.memo(AppRouter);
