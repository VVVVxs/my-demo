export interface IInitState {
    count: number;
}
export default function initState(): IInitState {
    return {
        count: 1
    }
}