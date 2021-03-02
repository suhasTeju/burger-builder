import React from "react";
import Aux from "../../../hoc/Aux"
import Button from "../../../UI/Button/Button"


const orderSummary = (props) => {
    let ingredient_list = Object.keys(props.ingredient).map( ele => {
        return (
          <li key={ele}>
            <p>
              <span style={{textTransform: 'capitalize'}}>{ele}</span>:{" "}
              {props.ingredient[ele]}
            </p>
          </li>
        );
    })
    return (
      <Aux>
        <p>Order Summary</p>
        <ul>{ingredient_list}</ul>
        <p><span>Total Price : {props.price.toFixed(2)}</span></p>
        <p>Do you want to continue</p>
        <Button buttonType={"Success"} clicked={props.continued}>CONTINUE</Button>
        <Button  buttonType={"Danger"} clicked={props.cancelled}>CANCEL</Button>
      </Aux>
    );

}

export default orderSummary;