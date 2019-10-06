import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router';
import 'antd/dist/antd.css';
import { NavList } from './home/componets/index';
import { Layout } from 'antd';
const { Header, Content } = Layout;

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout className='myBlog'>
                <Header className='blogHeader' >
                    <NavList />
                </Header>
                <Content className="main">
                    <Routes />

                </Content>
            </Layout>
        </BrowserRouter>
    )
}

export default App;