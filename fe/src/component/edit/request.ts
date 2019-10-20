import axios, { AxiosResponse } from 'axios'
export const addAticle = (title: string, content: string, description: string, cb: () => void) => {
    axios.post('/api/new-article', { title, content, description }).then((res: AxiosResponse) => {
        if (res.data) {
            cb();
        }
    }).catch((err) => {
        console.log('888', err);
    })
}