import * as React from 'react';
import { Banner, Tips, AvatarCar, ArticleBox } from './componets/index';
import { Provider } from './store/Provider';
import initState from './store/store';
import reducer from './store/reducer';
import '../../style/index.less';
import '../../style/Home/index.less';
const Home = () => {
    return (
        <div>
            <Provider reducer={reducer} initValue={initState()}>
                <div className='mainLeft'>
                    <Banner />
                    <ArticleBox />
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