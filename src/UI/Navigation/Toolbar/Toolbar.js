import React from 'react';
import classes from './Toolbar.module.css'
import Logo  from '../../../components/Logo/Logo'
import NavigationItems from "../../../components/NavigaationItems/NavigationItems"
import DrawerToggle from "../../../components/Sidedrawer/DrawerToggle/DrawerToggle"
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.clicked}/>
        <div className={classes.Logo}>
        <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar