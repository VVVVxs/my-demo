import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router';
import App from './component/App';
import 'antd/dist/antd.css';

const root = document.getElementById('root');
ReactDOM.render(<BrowserRouter>
    <Routes />
</BrowserRouter>, root);