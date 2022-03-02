import React from 'react';
import classes from './input.module.css';

const Input = (props) => {
    const { value, label, name, placeholder, type, onChange } = props;
    return (
        <div className={classes.container}>
            <label htmlFor={name}>{label}</label>
            <input className={`${classes.input} `}
                style={{ width: `${props.width}`, padding: `${props.size}` }}
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                {...props}

            />
        </div>
    )
}


export default Input;