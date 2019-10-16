import * as React from 'react';
interface IWarnText {
    text: string
}
const WarnText = (props: IWarnText) => {
    return (
        <React.Fragment>
            <span style={{ color: 'red' }}>*</span><span>{props.text}</span>
        </React.Fragment>
    )
}
export default WarnText