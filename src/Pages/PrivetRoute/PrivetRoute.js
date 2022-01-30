import React from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import UseFirebase from '../Hook/UseFirebase';

const PrivetRoute = ({ children, ...rest }) => {
    const { user } = UseFirebase();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect to={{ pathname: "/login", state: { from: location } }}></Redirect>}>
        </Route>
    );
};

export default PrivetRoute;