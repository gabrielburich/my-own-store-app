import React from "react";
import {useStoreActions} from "easy-peasy";
import {withRouter} from "react-router";

const LoginContainer = ({history}) => {

    const {doLogin} = useStoreActions(state => state.loginModel);

    const handleLogin = () => {
        doLogin({email: '', password: ''})
            .then(() => history.push('/'))
            .catch(error => console.error(error));
    };

    return (
        <>
            <input />
            <input />
            <button onClick={handleLogin}>Login</button>
        </>
    )

};

export default withRouter(LoginContainer);