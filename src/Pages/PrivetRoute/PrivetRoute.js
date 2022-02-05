import React from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import UseAuth from '../Hook/UseAuth';


const PrivetRoute = ({ children, ...rest }) => {
    const { user } = UseAuth();

    // console.log("from privet route", user);
    return (

        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect to={{ pathname: "/login", state: { from: location } }}></Redirect>}>
        </Route>

    );
};

export default PrivetRoute;