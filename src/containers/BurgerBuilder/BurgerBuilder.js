import React, { Component} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../UI/Modal/Modal"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

const INGREDIENT_PRICE = {
    salad : 4,
    meat: 6,
    bacon:10,
    cheese : 5
}
class BurgerBuilder extends Component {
  state = {
    ingredient: { salad: 0, cheese: 0, bacon: 0, meat: 0 },
    total_price: 4,
    purchasable: false,
    purchasing: false
  };
  purchasableHandler(ingredient) {
    let sum = Object.keys(ingredient)
      .map((ele) => {
        return ingredient[ele];
      })
      .reduce((sum, ele) => {
        return sum + ele;
      }, 0);
    this.setState({ purchasable : sum > 0 });

  }
  addIngredientHandler = (type) => {
    let updated_state = { ...this.state.ingredient };
    let current_ingredient_count = updated_state[type];
    let updated_count = current_ingredient_count + 1;
    updated_state[type] = updated_count;
    let new_price = this.state.total_price + INGREDIENT_PRICE[type];
    this.setState({ ingredient: updated_state, total_price: new_price });
    this.purchasableHandler(updated_state);
  };
  deleteHandler = (type) => {
    let updated_state = { ...this.state.ingredient };
    let current_ingredient_count = updated_state[type];
    if (current_ingredient_count === 0) {
      return;
    } else {
      let updated_count = current_ingredient_count - 1;
      updated_state[type] = updated_count;
      let new_price = this.state.total_price - INGREDIENT_PRICE[type];
      this.setState({ ingredient: updated_state, total_price: new_price });
    }
    this.purchasableHandler(updated_state);
  };
  purchasingHandler  = () => {
      console.log("inside")
      this.setState({purchasing:true})
  }
  cancelPurchaseHandler  = () => {
    this.setState({purchasing:false})
}
continueHandler = () => {
    alert("Thanks for your order")
}

  render() {
    let disabled_ingredients = { ...this.state.ingredient };
    for (let key in disabled_ingredients) {
      disabled_ingredients[key] = disabled_ingredients[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredient={this.state.ingredient} />
        <Modal show={this.state.purchasing} clicked={this.cancelPurchaseHandler}>
            <OrderSummary ingredient={this.state.ingredient} 
               cancelled= {this.cancelPurchaseHandler} 
               price={this.state.total_price}
               continued= {this.continueHandler}
        
        /></Modal>
        <BuildControls  
          added={this.addIngredientHandler}
          deleted={this.deleteHandler}
          disabled={disabled_ingredients}
          price={this.state.total_price}
          purchasable={this.state.purchasable}
          ordered = {this.purchasingHandler}
        />
      </Aux>
    );
  }
};

export default BurgerBuilder;