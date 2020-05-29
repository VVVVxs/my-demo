import * as React from 'react';
import E from 'wangeditor';
import { Input, Row, Col, Spin, message } from 'antd';
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
const Edit = () => {
    const { TextArea } = Input;
    const [state, dispatch]: [IEdit, any] = useReducer(reducer, initState);
    const [Editor, setEditor] = useState(); // 
    const [titleWarn, setTitleWarn] = useState(false);
    const [descriptionWarn, setDescriptionWarn] = useState(false)
    const [contentWarn, setContentWarn] = useState(false)

    const editTool = useRef(null);

    useEffect(() => {
        dispatch({ type: 'CHANGE_SPINING', payload: true })
        const editor = new E(editTool.current)
        setEditor(editor);
        // 处理图片上传到服务器的配置
        editor.customConfig.uploadImgServer = '/api/upload-image';
        //配置文件参数名（这个参数必需配置，后台用这个值接收图片）
        editor.customConfig.uploadFileName = 'images'

        editor.customConfig.uploadImgHeaders = {
            'authorization': 'Bearer ',
            'enctype': 'multipart/form-data'
        }
        //监听函数在上传图片的不同阶段做相应处理
        editor.customConfig.uploadImgHooks = {
            success: function (xhr: any, editor: any, result: any) {
                console.log('图片上传并返回结果,图片插入成功')
            },
            fail: function (xhr: any, editor: any, result: any) {
                console.log('图片上传并返回结果，但图片插入错误')
            },
            error: function (xhr: any, editor: any) {
                console.log('图片上传出错')
            },
            timeout: function (xhr: any, editor: any) {
                console.log('图片上传超时')
            },
            customInsert: function (insertImg: any, result: any, editor: any) {
                console.log(' 图片上传并返回结果', result);
                var url = result.url
                insertImg(url)
            }
        }

        editor.customConfig.withCredentials = true

        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = (html: any) => {
            if (html !== '') {
                setContentWarn(false);
            }
            dispatch({ type: 'SAVE_CONTENT', payload: html })
        }
        editor.customConfig.uploadImgShowBase64 = true // 使用 base64 保存图片
        editor.create()
        dispatch({ type: 'CHANGE_SPINING', payload: false })

    }, [])
    const hanldClick = () => {
        // 处理错误提示
        if (state.title === '') {
            setTitleWarn(true);
        }
        if (state.description === '') {
            setDescriptionWarn(true)
        }
        if (state.content === '') {
            setContentWarn(true)
        }
        if (!!state.content && !!state.title && !!state.description) {
            dispatch({ type: 'CHANGE_SPINING', payload: true })
            addAticle(state.title, state.content, state.description, clearInput)
            dispatch({ type: 'CHANGE_SPINING', payload: false })

        }
    }
    // 清空输入状态
    const clearInput = () => {
        dispatch({ type: 'CHANGE_TITLE', payload: '' })
        dispatch({ type: 'CHANGE_DESCRIPTION', payload: '' })
        dispatch({ type: 'SAVE_CONTENT', payload: '' })
        Editor.txt.clear();
        message.success('提交成功')
    }
    const changValue = (event: React.ChangeEvent<any>, type: string) => {
        if (!!event.target.value) {
            if (type === 'CHANGE_TITLE') {
                setTitleWarn(false);
            } else {
                setDescriptionWarn(false);
            }
        }
        dispatch({ type, payload: event.target.value })
    }

    return (
        <Spin spinning={state.spinning}>
            <div className='editor'>
                <Row gutter={32} style={{ marginBottom: '20px' }}>
                    <Col span={2}><label className='label'>标题：</label></Col>
                    <Col span={18}>
                        <Input onChange={(e) => changValue(e, 'CHANGE_TITLE')} value={state.title} className={titleWarn ? 'warnBorder' : ''} />
                        {titleWarn ? <WarnText text='标题不能为空' /> : ''}
                    </Col>
                </Row>
                <Row gutter={32} style={{ marginBottom: '20px' }}>
                    <Col span={2}><label className='label'>描述：</label></Col>
                    <Col span={22}>
                        <TextArea rows={4} value={state.description} autosize={{ minRows: 2, maxRows: 6 }} onChange={(e) => changValue(e, 'CHANGE_DESCRIPTION')} className={descriptionWarn ? 'warnBorder' : ''} />
                        {descriptionWarn ? <WarnText text='描述不能为空' /> : ''}
                    </Col>
                </Row>


                <div ref={editTool} style={{ textAlign: 'left' }}>
                </div>
                {contentWarn ? <WarnText text='内容不能为空' /> : ''}

                <button onClick={hanldClick}>点击试试</button>
            </div>
        </Spin>
    )

}

export default Edit;