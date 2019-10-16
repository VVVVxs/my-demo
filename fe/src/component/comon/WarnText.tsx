import * as React from 'react';
interface IWarnText {
    text: string
}
const WarnText = (props: IWarnText) => {
    return (
        <div>
            <span style={{ color: 'red' }}>*</span><span>{props.text}</span>
        </div>
    )
}
export default WarnText