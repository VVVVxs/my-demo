import * as React from 'react';
import E from 'wangeditor';
import { Input, Row, Col } from 'antd';
import '../../style/edit/index.less';
const { useEffect, useRef, useState } = React;
const Edit: React.FC = () => {
    const [editorContent, setEditorContent] = useState('')
    const editTool = useRef(null);

    useEffect(() => {
        const editor = new E(editTool.current)
        console.log('editor', editor);
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = (html: any) => {
            setEditorContent(html)
        }
        editor.customConfig.uploadImgShowBase64 = true // 使用 base64 保存图片
        editor.create()
    }, [])
    const hanldClick = () => {
         
    }
    return (
        <div className='editor'>
            <Row gutter={32} style={{marginBottom:'20px'}}>
                <Col span={2}><label className='label'>标题：</label></Col>
                <Col span={18}><Input /></Col>
            </Row>
            <div ref={editTool} style={{ textAlign: 'left' }}>
            </div>
            <button onClick={hanldClick}>点击试试</button>
        </div>
    )

}

export default Edit;