import React from 'react';
import classes from './selectmenu.module.css';

const Selectmenu = (props) => {
    const { label, options, onChange, name } = props;
    const optionsList = options.map(list => <option key={list.value} value={list.value}>{list.displayName}</option>)
    return (
        <div className={classes.container}>
            <select name={name} onChange={onChange}>
                <option value="">{label}</option>
                {optionsList}
            </select>
        </div>
    )
}

export default Selectmenu;