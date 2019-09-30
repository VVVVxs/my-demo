import * as React from 'react';
import { Layout } from 'antd';
import { NavList, Banner } from './componets/index';
import '../../style/Home/index.less';
import '../../style/index.less';
const { Header, Content } = Layout;
const Home: React.FC = () => {
    return (
        <div>
            <Layout className='myBlog'>

                <Header className='blogHeader' >
                    <NavList />
                </Header>
                <Content className="main">
                    <Banner />
                </Content>
            </Layout>
        </div>
    )
}

export default Home;