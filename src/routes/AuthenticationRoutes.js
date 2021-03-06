import React, { lazy } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import Loadable from '../ui-component/Loadable';

// project imports
import MinimalLayout from './../layout/MinimalLayout';

// login option 3 routing
// import NotFound from '../views/pages/404Page/NotFound';
import ForgotPassword from '../views/pages/authentication/authentication3/ForgotPassword';
import SetPassword from '../views/pages/authentication/authentication3/SetPassword';
import Login from '../views/pages/authentication/authentication3/Login3';
// const Login = Loadable(lazy(() => import('../views/pages/authentication/authentication3/Login3')));

const AuthRegister3 = Loadable(lazy(() => import('../views/pages/authentication/authentication3/Register3')));

//-----------------------|| AUTHENTICATION ROUTING ||-----------------------//

const AuthenticationRoutes = () => {
    const location = useLocation();
    console.log('i am from login', location.pathname);

    return (
        <Route path={['/', '/forgot-password', '/reset-password']}>
            <Switch location={location} key={location.pathname}>
                <MinimalLayout>
                    <Route path="/forgot-password" component={ForgotPassword} exact />
                    <Route path="/reset-password" component={SetPassword} exact />
                    <Route path="/" component={Login} exact />
                </MinimalLayout>
                {/* <Route path="/notfound" component={NotFound} /> */}
                {/* <Redirect to="*" component={NotFound} /> */}
            </Switch>
        </Route>
    );
};

export default AuthenticationRoutes;
