import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home';
import Edit from './edit';
import ArticleList from './articleList';

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route excat path="/list" component={ArticleList} />
                <Route excat path="/write" component={Edit} />
                <Route excat path="/" component={Home} />
                <Redirect from={"*"} to={'/'} />
            </Switch>
        </React.Fragment>
    )
}


export default Routes;