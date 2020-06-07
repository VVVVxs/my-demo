import { useEffect } from "react"
import { AxiosResponse } from 'axios'
import { Service as axios } from '../util/axios';

export const useDataApi = (url: string, method: 'post' | 'get', dispatch: any, type: string, data?: any) => {
    let isDidGetData = false
    useEffect(() => {
        const request = async () => {
            if (method === 'post') {
                await axios.post(`/api/${url}`, data).then((res: AxiosResponse) => {
                    if (!isDidGetData) {
                        if (res.data) {
                            dispatch({ type, payload: res.data })
                        }
                    }
                }).catch((err) => {
                    console.log('err', err)
                })
            } else {
                await axios.get(`/api/${url}`).then((res: AxiosResponse) => {

                    if (!isDidGetData) {
                        if (res.data) {
                            dispatch({ type, payload: res.data })
                        }
                    }
                }).catch((err) => {
                    console.log('err', err)
                })
            }

        }
        request();
        return () => {
            isDidGetData = true
        }
    }, []);

}
