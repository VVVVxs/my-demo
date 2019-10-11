
export default function reducer(state: any, action: { type: string, payload: any }) {
    switch (action.type) {
        case 'GET_INIT_ARTICLE':
            return {
                count: action.payload
            }
    }
}