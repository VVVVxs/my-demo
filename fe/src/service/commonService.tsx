import { message } from "antd";

export default class CommonService {
    static handleErro(err: any) {
        message.warn(err.msg || '请求异常')
    }
}