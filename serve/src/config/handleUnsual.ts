export const hanldError = (msg?: string, data?: any, code?: number) => {
    const result = {
        code: code || -1,
        data: data || null,
        msg: msg || '请求异常'
    }
    return result;
}

export const hanldSuccess = (data?: any, msg?: string, code?: number) => {
    const result = {
        code: code || 0,
        data: data || null,
        msg: msg || '成功'
    }
    return result;
}