export const getCookie = (name: any) => {
    const cookie = document.cookie;
    if (cookie) {
        const cookieArr = cookie.split(';')
        const list = cookieArr.map((val) => {
            return {
                key: val.split('=')[0],
                value: val.split('=')[1],
            }
        })
        console.log('list',list);

        const result = list.find((val) => val.key.trim() === name);
        if (result) {
            return result.value;
        }
        return null;
    }
    return null;
}