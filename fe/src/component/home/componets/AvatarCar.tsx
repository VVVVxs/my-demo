import React, { useState } from 'react';
import { PersonalTotal } from './index';
import { Card, Icon, Avatar, Input } from 'antd';
import avatorBackground from '@images/beijing.jpg';
import avator from '@images/default.jpg';
const AvatarCar = () => {
        const { Meta } = Card;
        const [eidt, setEdit] = useState(false);
        const [value, setValue] = useState('');
        const editInput = (des: string) =>
                <Input
                        defaultValue={des}
                        onChange={(e) => setValue(e.target.value)}
                />
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
                                <Icon type="edit" key="edit" onClick={setEdit.bind(null, true)} />,
                                <Icon type="ellipsis" key="ellipsis" />,
                        ]}
                >
                        <Meta
                                avatar={<Avatar src={avator} />}
                                title="-午夜闲逛者-"
                                description={eidt ? editInput('') : ''}
                        />
                        <PersonalTotal />

                </Card>
        )
}
export default AvatarCar;