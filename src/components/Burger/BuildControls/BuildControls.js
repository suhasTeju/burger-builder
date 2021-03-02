import React from "react";
import BuildControl from "./BuildControl/BuildControl"
import classes from "./BuildControls.module.css"
const  controls = [{label:"Salad",type:"salad"},
{label:"Meat",type:"meat"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"}]


const buildControls = (props) => (<div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price}</strong></p>
    {controls.map( ele => {
       return <BuildControl label={ele.label} 
       key={ele.label}
        added={() => props.added(ele.type)}
        deleted={() => props.deleted(ele.type)} disabled={props.disabled[ele.type]} />
    })}
    <button className={classes.OrderButton} 
      onClick={props.ordered}
    disabled={!props.purchasable}>ORDER NOW</button>

</div>);

export default buildControls;