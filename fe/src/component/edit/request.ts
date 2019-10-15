import axios, { AxiosResponse } from 'axios'
export const addAticle = (title: string, content: string) => {
    axios.post('/api/new-article', { title, content }).then((res: AxiosResponse) => {
        return res.data;
    }).catch((err) => {
        console.log('888', err);
    })
}