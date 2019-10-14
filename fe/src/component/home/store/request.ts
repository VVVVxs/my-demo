import { Service } from '../../../util/axios';
export const getInitArticle = async () => {
    const a = await Service({
        url: '/api/get-article',
        method: 'POST'
    })
    console.log('bbb', a);
    return a;
}