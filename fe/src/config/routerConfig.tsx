
import Home from '../component/home';
import Edit from '../component/edit';
import ArticleDetail from '../component/articleDetail';
import ArticleList from '../component/articleList';
interface IConfig {
    path: string,
    component: () => JSX.Element,
}
const config: IConfig[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/write',
        component: Edit,
    }, {
        path: '/list',
        component: ArticleList,
    }, {
        path: '/detail/:id',
        component: ArticleDetail,
    },
]

export default config;
