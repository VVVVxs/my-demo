import * as React from 'react';
import { PersonalTotal } from './index';
import { Card, Icon, Avatar } from 'antd';
import avatorBackground from '@images/beijing.jpg';
import avator from '@images/avatar.jpg';
const AvatarCar = () => {
        const { Meta } = Card;

        return (
                <Card
                        className='avatarCar'
                        cover={
                                <img
                                        alt="example"
                                        src={avatorBackground}
                                />
                        }
                        actions={[
                                <Icon type="setting" key="setting" />,
                                <Icon type="edit" key="edit" />,
                                <Icon type="ellipsis" key="ellipsis" />,
                        ]}
                >
                        <Meta
                                avatar={<Avatar src={avator} />}
                                title="-午夜闲逛者-"
                                description="很期待成功博客建立起来"
                        />
                        <PersonalTotal />

                </Card>
        )
}
export default AvatarCar;