import appCss from './App.css'
import Layout from './components/layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import React,{Component} from 'react'


class App extends Component {
  render(){
    return (<div className={appCss}>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>);
  }
}

export default App;
