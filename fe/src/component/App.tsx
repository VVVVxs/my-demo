import 'antd/dist/antd.css';
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './router';
import Login from './login/index';

const App: React.FC = () => {
    const currentPath = window.location.pathname;

    console.log('window', currentPath.indexOf('/login'));
    return (
        <BrowserRouter>
            {currentPath.indexOf('/login') === 0 ?
                (
                    <Route excat path="/login" component={Login} />
                ) : (
                    <Routes />
                )
            }
        </BrowserRouter>
    )
}

export default App;