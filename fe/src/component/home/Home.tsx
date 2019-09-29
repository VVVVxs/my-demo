import * as React from 'react';
import { Layout } from 'antd';
import NavList from './componets/NavList';
import '../../style/Home/index.less';
import '../../style/index.less';
const { Header } = Layout;
const Home: React.FC = () => {
    return (
        <div>
            <Layout className='myBlog'>
                <div className="main">
                    <Header className='blogHeader'>
                        <NavList />
                    </Header>
                </div>
            </Layout>
        </div>
    )
}

export default Home;