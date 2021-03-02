import React from 'react';
import logoImg from '../../Assets/Images/burger-logo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoImg}/>
    </div>
)

export default logo;