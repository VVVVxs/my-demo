import * as React from 'react';
import { Link } from 'react-router-dom'

const NavList: React.FC = () => {
    return (
        <ul className='menu'>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/list">近期博客</Link></li>
            <li><Link to="/write">写博客</Link></li>
            {/* <li><a>近期博客</a></li>
            <li><a>写博客</a></li> */}
        </ul>
    )
}

export default NavList;