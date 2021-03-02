import PropTypes from 'prop-types'
import React, {Component} from 'react';
import ingredientClasses from './BurgerIngredient.module.css'
class BurgerIngredient extends Component {
    render(){
        let ingredient = null;
        switch(this.props.type){
            
            // case('bread-bottom'):
            //     ingredient= <div className={ingredientClasses.BreadBottom} ></div>;
            //     break;
            case('bread-top'):
                ingredient= (<div className={ingredientClasses.BreadTop} >
                    <div className={ingredientClasses.Seeds1} ></div>
                    <div className={ingredientClasses.Seeds2} ></div>
                </div>);
                break;
            case('bread-bottom'):
                ingredient= <div className={ingredientClasses.BreadBottom} ></div>;
                break;
            case('cheese'):
                ingredient= <div className={ingredientClasses.Cheese} ></div>;
                break;    
            case('meat'):
                ingredient= <div className={ingredientClasses.Meat} ></div>;
                break;
            case('salad'):
                ingredient= <div className={ingredientClasses.Salad} ></div>;
                break;
            case('bacon'):
                ingredient= <div className={ingredientClasses.Bacon} ></div>;
                break;

            default:
                ingredient = null ;
                break;
            
        }
        return ingredient;
    }
}
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;