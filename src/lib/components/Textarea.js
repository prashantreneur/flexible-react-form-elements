import React from 'react';
import classes from './textarea.module.css'

const Textarea = (props) => {

    const { label, placeholder, value, onChange, name } = props;

    const handleKeyDown = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${Math.min(e.target.scrollHeight, 100)}px`;
    }

    return (
        <div className={classes.container}>
            <label htmlFor=''>{label}</label>
            <textarea
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />

        </div>
    )
}

export default Textarea;