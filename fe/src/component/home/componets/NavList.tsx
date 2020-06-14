import * as React from 'react';
import { Avatar, Dropdown, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import { useRequest } from '@umijs/hooks';
import { LoginService } from '../../../service';
import avator from '@images/default.jpg';

interface IRouter {
    route: string,
    name: string
}
const NavList: React.FC = () => {
    const router: IRouter[] = [
        { route: '/', name: '首页' },
        { route: '/list', name: '近期博客' },
        { route: '/write', name: '写博客' },
    ]
    const { useState } = React;
    const [active, setActive] = useState(window.location.pathname);
    const logout = useRequest(LoginService.logout, { manual: true })
    const changeRoute = (route: string) => {
        setActive(route)
    }
    const menu = () => {
        return (
            <Menu>
                <Menu.Item>
                    <a onClick={logout.run}>
                        <Icon type="logout" style={{ paddingRight: 10 }} />退出登陆
                    </a>
                </Menu.Item>
            </Menu>
        )
    }
    return (
        <div className='menu'>
            <ul>
                {router.map((val: IRouter, index: number) => {
                    return (
                        <li className={active === val.route ? 'active' : ''} key={index}>
                            <Link to={val.route} onClick={changeRoute.bind(null, val.route)}>{val.name}</Link>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Dropdown overlay={menu} placement="bottomCenter">
                    <Avatar
                        size={48}
                        src={avator}
                        style={{ cursor: "pointer" }}
                    />
                </Dropdown>
            </div>
        </div>
    )
}

export default NavList;