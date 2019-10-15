import * as React from 'react';
import E from 'wangeditor';
import { Input, Row, Col, Spin } from 'antd';
import '../../style/edit/index.less';
import { IEdit, reducer, initState } from './reducer';
import { addAticle } from './request';
const { useEffect, useRef, useReducer } = React;
const Edit: React.FC = () => {
    const [state, dispatch]: [IEdit, any] = useReducer(reducer, initState);
    const editTool = useRef(null);

    useEffect(() => {
        dispatch({ type: 'CHANGE_SPINING', payload: true })
        const editor = new E(editTool.current)
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = (html: any) => {
            dispatch({ type: 'SAVE_CONTENT', payload: html })
        }
        editor.customConfig.uploadImgShowBase64 = true // 使用 base64 保存图片
        editor.create()
        dispatch({ type: 'CHANGE_SPINING', payload: false })

    }, [])
    const hanldClick = () => {
        console.log('555', state);
        if (state.content && state.title) {
            addAticle(state.title, state.content)
        }
    }
    const changTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'CHANGE_TITLE', payload: event.target.value })
    }
    return (
        <Spin spinning={state.spinning}>
            <div className='editor'>
                <Row gutter={32} style={{ marginBottom: '20px' }}>
                    <Col span={2}><label className='label'>标题：</label></Col>
                    <Col span={18}><Input onChange={changTitle} value={state.title} /></Col>
                </Row>
                <div ref={editTool} style={{ textAlign: 'left' }}>
                </div>
                <button onClick={hanldClick}>点击试试</button>
            </div>
        </Spin>
    )

}

export default Edit;