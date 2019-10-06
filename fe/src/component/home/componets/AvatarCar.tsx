import * as React from 'react';
import { PersonalTotal } from './index';
import { Card, Icon, Avatar } from 'antd';
const AvatarCar = () => {
        const { Meta } = Card;

        return (
                <Card
                        className='avatarCar'
                        cover={
                                <img
                                        alt="example"
                                        src="../../../../static/images/beijing.jpg"
                                />
                        }
                        actions={[
                                <Icon type="setting" key="setting" />,
                                <Icon type="edit" key="edit" />,
                                <Icon type="ellipsis" key="ellipsis" />,
                        ]}
                >
                        <Meta
                                avatar={<Avatar src="../../../../static/images/avatar.jpg" />}
                                title="-午夜闲逛者-"
                                description="很期待成功博客建立起来"
                        />
                        <PersonalTotal />

                </Card>
        )
}
export default AvatarCar;