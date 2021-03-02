import React from "react"
import Logo from "../Logo/Logo"
import NavigationItems from "../NavigaationItems/NavigationItems"
import classes from "./Sidedrawer.module.css"
import Aux from "../../hoc/Aux"
import Backdrop from "../../UI/Backdrop/Backdrop"

const sidedrawer = (props) => {
    let attachedClasses = [classes.Sidedrawer,classes.Close]
    if (props.open){
        attachedClasses = [classes.Sidedrawer,classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.clicked}/>
            <div className={attachedClasses.join(' ')}> 
            <div className={classes.Logo}>
            <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    )

}

export default sidedrawer;