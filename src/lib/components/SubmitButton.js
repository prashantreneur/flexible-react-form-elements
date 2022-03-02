import React from 'react';
import './button.css'
const SubmitButton = (props) => {
    const { colorCode, textColor, variant, size, disabled, onSubmit } = props;
    return (
        <div className={props.placement} >
            <button
                style={{
                    backgroundColor: `${colorCode}`,
                    color: `${textColor}`,
                }}
                className={`btn_var ${variant} ${size}`}
                type='submit'
                disabled={disabled}
                onSubmit={onSubmit}>
                {props.children}
            </button>
        </div>
    )
}
export default SubmitButton;

