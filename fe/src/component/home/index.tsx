import * as React from 'react';
import { Banner, Tips, AvatarCar } from './componets/index';
import { Article } from '../comon';
import '../../style/Home/index.less';
import '../../style/index.less';
import { Provider } from './store/Provider';
import initState from './store/store';
import reducer from './store/reducer';
const Home: React.FC = () => {
    return (
        <div>
            <Provider reducer={reducer} initValue={initState()}>
                <div className='mainLeft'>
                    <Banner />
                    <Article />
                </div>
                <div className='mainRight'>
                    <Tips />
                    <AvatarCar />
                </div>
            </Provider>

        </div>
    )
}

export default Home;