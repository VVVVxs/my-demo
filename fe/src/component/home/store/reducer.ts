import axios from 'axios';
export default function reducer(state: any, action: { type: string, payload: any }) {
    switch (action.type) {
        case 'GET_INIT_ARTICLE':
            axios.get('/api/66', {
                headers: {
                    'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log('success', res)
            }).catch((res) => {
                console.log('error', res);
            })
            return {
                count: action.payload
            }
    }
}