import React, { useState } from 'react';
import { Form, Input, Button, Tabs, Icon } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

import logImg from '@images/logo.png';
import './index.less';
const Login = ({ form }: { form: WrappedFormUtils }) => {
    const FormItem = Form.Item;
    const { getFieldDecorator } = form;
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    }
    const [tab, setTab] = useState('login');
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
                                {getFieldDecorator('username')(
                                    <Input placeholder="请输入用户名" />
                                )}
                            </FormItem>
                            <FormItem label="密码" {...formItemLayout}>
                                {getFieldDecorator('password')(
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
                                {getFieldDecorator('registerUsername')(
                                    <Input placeholder="请输入用户名" />
                                )}
                            </FormItem>
                            <FormItem label="密码" {...formItemLayout}>
                                {getFieldDecorator('registerPassword')(
                                    <Input placeholder="密码" type="password" />
                                )}
                            </FormItem>
                        </Tabs.TabPane>
                    </Tabs>

                    <FormItem>
                        <Button style={{ width: '100%', height: '38px', borderRadius: '20px' }} type="primary">
                            {tab==='login'?'登录':'注册'}
                        </Button>
                    </FormItem>
                </Form>
            </div>
        </div>
    )
}

export default Form.create()(Login);
