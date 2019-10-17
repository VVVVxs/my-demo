import axios, { AxiosResponse } from 'axios'
export const addAticle = (title: string, content: string, description: string) => {
    axios.post('/api/new-article', { title, content, description }).then((res: AxiosResponse) => {
        return res.data;
    }).catch((err) => {
        console.log('888', err);
    })
}