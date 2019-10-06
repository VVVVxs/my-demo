import * as React from 'react';
import { Banner, Tips, AvatarCar } from './componets/index';
import '../../style/Home/index.less';
import '../../style/index.less';
const Home: React.FC = () => {
    return (
        <div>
            <Banner />
            <Tips />
            <AvatarCar />
        </div>
    )
}

export default Home;