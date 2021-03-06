import React from "react";
import buildControls from "../BuildControls";
import classes from "./BuildControl.module.css"

const buildControl = (props) => (
  <div className={classes.BuildControl}>
      <p>{props.price}</p>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} onClick={props.deleted} disabled={props.disabled}>Less</button>
    <button className={classes.More} onClick={props.added}>More</button>
  </div>
);
 
export default buildControl;