import * as React from 'react';
import { Banner, Tips, AvatarCar, ArticleBox } from './componets/index';
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