import * as React from 'react';
import { Form, Button, Input, Icon, Checkbox } from 'antd';
const Login = () => {

    const { useEffect, useRef } = React;
    const FormItem = useRef(null)
    const handleSubmit = () => {
        console.log('heihei');
    }

    useEffect(() => {
        console.log(FormItem);
    })

    return (
        <div>
            <h1>登陆</h1>
            <Form onSubmit={handleSubmit} className="login-form" ref={FormItem}>
                <Form.Item>
                    {/* {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )} */}
                </Form.Item>
                <Form.Item>
                    {/* {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )} */}
                </Form.Item>
                <Form.Item>
                    {/* {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)} */}
                    <a className="login-form-forgot" href="">
                        Forgot password
          </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
          </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Form.create({})(Login);