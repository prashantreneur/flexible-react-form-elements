import React from 'react';
import classes from './checkbox.module.css';

const Checkbox = (props) => {

    const { name, label, onChange, checked } = props;
    return (
        <div className={classes.container}>
            <input type="checkbox" name={name} id={label} checked={checked} onChange={onChange} {...props} />
            <label htmlFor={label}>{label}</label>

        </div>
    )
}

export default Checkbox;