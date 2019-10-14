import { IArticle } from '../../../dataTypes/IArticle';
export interface IInitState {
    ininArticle: IArticle | undefined;
}
export default function initState(): IInitState {
    return {
        ininArticle: undefined
    }
}