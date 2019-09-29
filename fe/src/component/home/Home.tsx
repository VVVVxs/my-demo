import * as React from 'react';
import { Layout } from 'antd';
import { NavList, Banner } from './componets/index';
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
                        <Banner />
                    </Header>
                </div>
            </Layout>
        </div>
    )
}

export default Home;