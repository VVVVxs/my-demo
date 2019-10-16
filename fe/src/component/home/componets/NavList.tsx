import * as React from 'react';
import { Link } from 'react-router-dom'
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
    const [active, setActive] = useState(router[0].route);
    const changeRoute = (route: string) => {
        setActive(route)
    }

    return (
        <ul className='menu'>
            {router.map((val: IRouter, index: number) => {
                return (
                    <li className={active === val.route ? 'active' : ''} key={index}>
                        <Link to={val.route} onClick={changeRoute.bind(null, val.route)}>{val.name}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavList;