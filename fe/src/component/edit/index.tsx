import * as React from 'react';
import E from 'wangeditor';
import { Input, Row, Col, Spin } from 'antd';
import '../../style/edit/index.less';
import { IEdit, reducer, initState } from './reducer';
import { addAticle } from './request';
import { WarnText } from '../comon';
interface IWarn {
    titleWarn: boolean;
    descriptionWarn: boolean;
    contentWarn: boolean;
}
const { useEffect, useRef, useReducer, useState } = React;
const Edit: React.FC = () => {
    const { TextArea } = Input;
    const [state, dispatch]: [IEdit, any] = useReducer(reducer, initState);
    const [warn, setWarn]: [IWarn, any] = useState({ titleWarn: false, descriptionWarn: false, contentWarn: false })
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
        const warnObj: IWarn = {
            titleWarn: false,
            descriptionWarn: false,
            contentWarn: false
        }
        if (state.title === '') {
            warnObj.titleWarn = true;
        }
        if (state.description === '') {
            warnObj.descriptionWarn = true;
        }
        if (state.content === '') {
            warnObj.contentWarn = true;
        }
        setWarn((warn: IWarn) => warnObj)
        if (state.content && state.title) {
            addAticle(state.title, state.content)
        }
    }
    const changValue = (event: React.ChangeEvent<any>, type: string) => {
        dispatch({ type, payload: event.target.value })
    }

    return (
        <Spin spinning={state.spinning}>
            <div className='editor'>
                <Row gutter={32} style={{ marginBottom: '20px' }}>
                    <Col span={2}><label className='label'>标题：</label></Col>
                    <Col span={18}><Input onChange={(e) => { changValue(e, 'CHANGE_TiTLE') }} value={state.title} /></Col>
                    {warn.titleWarn ? <WarnText text='标题不能为空' /> : ''}
                </Row>
                <Row gutter={32} style={{ marginBottom: '20px' }}>
                    <Col span={2}><label className='label'>描述：</label></Col>
                    <Col span={22}><TextArea rows={4} autosize={{ minRows: 2, maxRows: 6 }} onChange={(e) => { changValue(e, 'CHANGE_DESCRIPTIOn') }} /></Col>
                    {warn.titleWarn ? <WarnText text='描述不能为空' /> : ''}

                </Row>

                <div ref={editTool} style={{ textAlign: 'left' }}>
                </div>
                {warn.titleWarn ? <WarnText text='内容不能为空' /> : ''}

                <button onClick={hanldClick}>点击试试</button>
            </div>
        </Spin>
    )

}

export default Edit;