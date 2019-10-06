import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Edit from '../component/edit/index';
const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route excat path="/about" component={Edit} />
                <Route excat path="/write" component={Edit} />
                <Route excat path="/" component={Home} />
                <Redirect from={"*"} to={'/'} />
            </Switch>
        </React.Fragment>
    )
}
export default Routes;