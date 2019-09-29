import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './component/home/Home';

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" component={Home} excat />
            </Switch>
        </React.Fragment>
    )
}
export default Routes;