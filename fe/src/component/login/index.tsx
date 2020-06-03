import React, { useState } from 'react';
import { Form, Input, Button, Tabs, Icon } from 'antd';
import { useRequest } from '@umijs/hooks';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import LoginService from '../../service/loginService';
import logImg from '@images/logo.png';
import './index.less';

const Login = ({ form }: { form: WrappedFormUtils }) => {
    const FormItem = Form.Item;
    const { getFieldDecorator } = form;
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
    }
    const [tab, setTab] = useState('login');
    const register = useRequest(LoginService.register, { manual: true });
    const login = useRequest(LoginService.login, { manual: true });

    const onSubmit = () => {
        form.validateFields(tab === 'login' ? ['username', 'password'] : ['registerUsername', 'registerPassword'], (err, value) => {
            if (!err) {
                const parmas= { username: '', password: '' };
                if (tab === 'login') {
                    parmas.username = value.username;
                    parmas.password = value.password;
                    login.run(parmas);
                } else {
                    parmas.username = value.registerUsername;
                    parmas.password = value.registerPassword;
                    register.run(parmas)
                }
            }
        })
    }
    return (
        <div className="login">
            <div className="logoImage">
                <img src={logImg} alt="" />
            </div>
            <div className="main">
                <Form>
                    <Tabs activeKey={tab} onChange={activeKey => setTab(activeKey)} size="large">
                        <Tabs.TabPane
                            tab={(
                                <span style={{ fontWeight: 'bold' }}>
                                    <Icon type="user" />登录
                                </span>
                            )}
                            key="login">
                            <FormItem label="用户名" {...formItemLayout}>
                                {getFieldDecorator('username', {
                                    rules: [{
                                        required: true,
                                        message: '请输入用户名',
                                    }]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )}
                            </FormItem>
                            <FormItem label="密码" {...formItemLayout}>
                                {getFieldDecorator('password', {
                                    rules: [{
                                        required: true,
                                        message: '请输入密码',
                                    }]
                                })(
                                    <Input placeholder="密码" type="password" />
                                )}
                            </FormItem>
                        </Tabs.TabPane>
                        <Tabs.TabPane
                            tab={(
                                <span style={{ fontWeight: 'bold' }}>
                                    <Icon type="user-add" />注册
                                </span>
                            )}
                            key="register">
                            <FormItem label="用户名" {...formItemLayout}>
                                {getFieldDecorator('registerUsername', {
                                    rules: [{
                                        required: true,
                                        message: '请输入用户名',
                                    }]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )}
                            </FormItem>
                            <FormItem label="密码" {...formItemLayout}>
                                {getFieldDecorator('registerPassword', {
                                    rules: [{
                                        required: true,
                                        message: '请输入密码',
                                    }]
                                })(
                                    <Input placeholder="密码" type="password" />
                                )}
                            </FormItem>
                        </Tabs.TabPane>
                    </Tabs>

                    <FormItem>
                        <Button style={{ width: '100%', height: '38px', borderRadius: '20px' }} type="primary" onClick={onSubmit}>
                            {tab === 'login' ? '登录' : '注册'}
                        </Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    )
}

export default Form.create()(Login);
