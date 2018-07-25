import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
//import Login from 'bundle-loader?lazy!./components/pages/Login';
import App from './App';
import Bundle from "./components/widget/Bundle";

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />
            <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)
const Login=(props)=>(
    <Bundle load={() => import('./components/pages/Login')}>
        {(Component)=><Component {...props} />}
    </Bundle>
);
