import React from 'react';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients"
import classes from "./Burger.module.css"


const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredient)
      .map((ikey) => {
        return [...Array(props.ingredient[ikey])].map((_, i) => {
          return <BurgerIngredient key={ikey + i} type={ikey} />;
        });
      })
      .reduce((arr, ele) => {
        return arr.concat(ele);
      }, []);
      
      if (transformedIngredient.length === 0 ){
        transformedIngredient = <p>Please Start adding Ingredient</p>;
      }

    return <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredient}
        
        <BurgerIngredient type="bread-bottom" />
    </div>;
}
export default burger;