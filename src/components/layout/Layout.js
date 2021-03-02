import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css'
import Toolbar from '../../UI/Navigation/Toolbar/Toolbar'
import Sidedrawer from "../Sidedrawer/Sidedrawer"

class Layout extends Component{
    state = {
        displaySidedrawer:true
    }
    closeHandler = () => {
        this.setState({displaySidedrawer:false})
    }
    drawerToggle = () => {
        this.setState({displaySidedrawer:true})
    }
    render (){
        return (
          <Aux>
            <Sidedrawer open={this.state.displaySidedrawer} clicked={this.closeHandler}/>
            <Toolbar clicked={this.drawerToggle}/>
            <main className={classes.Content}>{this.props.children}</main>
          </Aux>
        );
    }
}

export default Layout;