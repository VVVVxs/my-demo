export interface IEdit {
    title: string;
    content: string;
    spinning: boolean;
}
export const initState: IEdit = {
    title: '',
    content: '',
    spinning: false
}

export const reducer = (state: any, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'SAVE_CONTENT':

            return {
                ...state,
                content: action.payload
            };
        case 'CHANGE_SPINING':
            return {
                ...state,
                spinning: action.payload
            };
        case 'CHANGE_TITLE':
            return {
                ...state,
                title: action.payload
            };
    }
}

