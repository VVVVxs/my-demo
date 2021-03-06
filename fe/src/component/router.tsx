import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { AppService } from '../service';
import { useRequest } from '@umijs/hooks';
import { NavList } from './home/componets/index';
import config from '../config/routerConfig';
import NotFound from './NotFound';
const Routes = () => {
    const { Header, Content } = Layout;
    const userInfo = useRequest(AppService.getUserInfo)
    console.log('userinfo', userInfo);
    return (
        <React.Fragment>
            <Layout className='myBlog'>
                <Header className='blogHeader' >
                    <NavList />
                </Header>
                <Content className="main">
                    <Switch>
                        {config.map((val) => {
                            return (
                                <Route key={val.path} exact path={val.path} component={val.component} />
                            )
                        })}
                    </Switch>
                </Content>
            </Layout>
            {/* <Route component={NotFound} /> */}
        </React.Fragment>
    )
}


export default Routes;