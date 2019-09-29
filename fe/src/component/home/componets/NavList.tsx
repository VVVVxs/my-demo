import * as React from 'react';

const NavList: React.FC = () => {
    return (
        <div>
            <ul className='menu'>
                <li><a>首页</a></li>
                <li><a>近期博客</a></li>
            </ul>
        </div>
    )
}

export default NavList;